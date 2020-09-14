'use strict';

const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'token.json';

module.exports = (robot) => {
  robot.respond(/CAL$/i, (res) => {
    // Load client secrets from a local file.
    const content = fs.readFileSync('credentials.json');
    authorize(JSON.parse(content), (auth) => {
      const calendar = google.calendar({version: 'v3', auth});
      calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 5,
        singleEvents: true,
        orderBy: 'startTime',
      }, (err, response) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = response.data.items;
        let result = "";
        events.map((event, i) => {
          const start = event.start.dateTime || event.start.date;
          result = result + `${start} - ${event.summary}\n`;
        });
        res.send(result);
      });
    });
  });
};


 function authorize(credentials, callback) {
   console.log("authorize");
   const {client_secret, client_id, redirect_uris} = credentials.installed;
   const oAuth2Client = new google.auth.OAuth2(
       client_id, client_secret, redirect_uris[0]);

   // Check if we have previously stored a token.
   fs.readFile(TOKEN_PATH, (err, token) => {
     if (err) return getAccessToken(oAuth2Client, callback);
     oAuth2Client.setCredentials(JSON.parse(token));
     callback(oAuth2Client);
   });
 }


function getAccessToken(oAuth2Client, callback) {
  console.log("getAccessToken");
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}
