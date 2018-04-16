$(document).ready(function() {

    function rand(num){
          var num = Math.floor(Math.random() * 50) + 20;
          return num;
    }function rand2(num){
          var num = Math.floor(Math.random() * 7) + 1;
          return num;
    }

    var score1 = rand();

    var num1;
    var num2;
    var num3;
    var num4;

    var wins = 0;
    var losses = 0;
    var totScore = 0;



    function start(){
        score1 = rand();
        num1 = rand2();
        num2 = rand2();
        num3 = rand2();
        num4 = rand2();
        totScore = 0;
        $("#score").html(score1);
        $("#wins").html(wins);
        $("#loss").html(losses);
        $("#scoreSum").text(totScore);
    }
    start();

  
      $("#button-1").on("click", function() {
        if (Number(totScore) < Number(score1)){
          totScore += num1;
          $("#scoreSum").text(totScore);
        } else if (Number(totScore) == Number(score1)){
          wins++
          start();
        } else  if(Number(totScore) > Number(score1)){
          losses++
          start();
        }
      });
      $("#button-2").on("click", function() {
        if (Number(totScore) < Number(score1)){
          totScore += num2;
          $("#scoreSum").text(totScore);
        } else if (Number(totScore) == Number(score1)){
          wins++
          start();
        } else  if(Number(totScore) > Number(score1)){
          losses++
          start();
        }
      });
      $("#button-3").on("click", function() {
        if (Number(totScore) < Number(score1)){
          totScore += num3;
          $("#scoreSum").text(totScore);
        } else if (Number(totScore) == Number(score1)){
          wins++
          start();
        } else  if(Number(totScore) > Number(score1)){
          losses++
          start();
        }
      });
      $("#button-4").on("click", function() {
        if (Number(totScore) < Number(score1)){
          totScore += num1;
          $("#scoreSum").text(totScore);
        } else if (Number(totScore) == Number(score1)){
          wins++
          start();
        } else  if(Number(totScore) > Number(score1)){
          losses++
          start();
        }
      });

  });