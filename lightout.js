var cnt = 0;
$(function() {
     console.log($("table"));
     $("td").click(function() {
       cnt ++;
       $('div').html(cnt)
          // 現在のセルの色が無色透明かを判別
          if($(this).css("background-color")=="rgb(238, 238, 238)") {
               // 黄色に染める
               var tdin = $(this).index();
               $(this).css("background-color", "rgb(255, 255, 105)");
               //一個前の判定
               if($(this).prev().css("background-color")=="rgb(238, 238, 238)"){
                 $(this).prev().css("background-color", "rgb(255, 255, 105)");
               }else {
                 $(this).prev().css("background-color", "rgb(238, 238, 238)");
               }
               //一個次の判定
               if($(this).next().css("background-color")=="rgb(238, 238, 238)"){
                 $(this).next().css("background-color", "rgb(255, 255, 105)");
               }else {
                 $(this).next().css("background-color", "rgb(238, 238, 238)");
               }
               //一個上の判定
               if($(this).parent("tr").next().children("td").eq(tdin).css("background-color")=="rgb(238, 238, 238)"){
                 $(this).parent("tr").next().children("td").eq(tdin).css("background-color", "rgb(255, 255, 105)");
               }else {
                 $(this).parent("tr").next().children("td").eq(tdin).css("background-color", "rgb(238, 238, 238)");
               }
               //一個下の判定
               if($(this).parent("tr").prev().children("td").eq(tdin).css("background-color")=="rgb(238, 238, 238)"){
                 $(this).parent("tr").prev().children("td").eq(tdin).css("background-color", "rgb(255, 255, 105)");
               }else {
                 $(this).parent("tr").prev().children("td").eq(tdin).css("background-color", "rgb(238, 238, 238)");
               }
               console.log(cnt);
          } else{
               // 無色透明にする
               $(this).css("background-color", "rgb(238, 238, 238)");
               var tdin = $(this).index();
               //一個前の判定
               if($(this).prev().css("background-color")=="rgb(238, 238, 238)"){
                 $(this).prev().css("background-color", "rgb(255, 255, 105)");
               }else {
                 $(this).prev().css("background-color", "rgb(238, 238, 238)");
               }
               //一個次の判定
               if($(this).next().css("background-color")=="rgb(238, 238, 238)"){
                 $(this).next().css("background-color", "rgb(255, 255, 105)");
               }else {
                 $(this).next().css("background-color", "rgb(238, 238, 238)");
               }
               //一個上の判定
               if($(this).parent("tr").next().children("td").eq(tdin).css("background-color")=="rgb(238, 238, 238)"){
                 $(this).parent("tr").next().children("td").eq(tdin).css("background-color", "rgb(255, 255, 105)");
               }else {
                 $(this).parent("tr").next().children("td").eq(tdin).css("background-color", "rgb(238, 238, 238)");
               }
               //一個下の判定
               if($(this).parent("tr").prev().children("td").eq(tdin).css("background-color")=="rgb(238, 238, 238)"){
                 $(this).parent("tr").prev().children("td").eq(tdin).css("background-color", "rgb(255, 255, 105)");
               }else {
                 $(this).parent("tr").prev().children("td").eq(tdin).css("background-color", "rgb(238, 238, 238)");
               }
          }
     });
});
