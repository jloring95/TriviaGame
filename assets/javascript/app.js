$(document).ready(function() {

  window.onload = function() {
    $("#start1").on("click", triviaStart);
  };

  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  var converted = 0;
  var key = 0;
  var wins = 0;
  var losses = 0;

  var trivia = {
    "1. Who plays the role of Lara Croft in the 2018 American action-adventure film, \"Tomb Raider\"?" : [
      "Alicia Vikander",
      "Angelina Jolie",
      "Brie Larson",
      "Margot Robbie"
    ],
    "2. What country won the Gold medal for women's hockey at the 2018 Winter Olympics?" : [
      "Canada",
      "USA",
      "Germany",
      "Finland"
    ],
    "3. Who held Billboard's number-one song for March of 2018 with \"God's Plan\"?" : [
      "Kanye West",
      "Lil Wayne",
      "Drake",
      "Chris Brown"
    ],
    "4. What 2018 science fiction horror film is based on a novel of the same name by Jeff Vander Meer?" : [
      "Living Among Us",
      "Overlord",
      "The Cloverfield Paradox",
      "Annihilation"
    ],
    "8. Located in Seattle, what company opened the first completely cashier-less grocery store on January 22nd, 2018?" : [
      "Kmart",
      "Amazon",
      "Target",
      "Walmart"
    ]
  }
  
  var trivArray = [
    "Alicia Vikander - Emily Carey plays a 14-year old Lara in the film.",
    "USA - Canada finished with the silver medal.",
    "Drake - Released in January of 2018, God's Plan made its debut at number one onthe US Billboard Hot 100.",
    "Annihilation - Annihilation was released by Paramount Pictures in the United States in February of 2018.",
    "Amazon - The store is called Amazon Go." 
  ]

  var objLength = trivia.length;
  var objs;
  var objsAnswers;

  Object.size = function(obj) {
      var size = 0, key;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
      }
      return size;
  };

  // Get the size of an object
  var size = Object.size(trivia);

  function triviaStart(){
    
   
    stopwatch.start();

    $("#display").text("Time Remaining: 30 Seconds");

    objsAnswers = trivia[Object.keys(trivia)[key]];
    objs = Object.keys(trivia);

    var mv = $("#wrapper");
    b = $("<div>");
    var displayDiv = b;
    displayDiv.append("<p>"+ objs[key]  + "</p>");
      
    if(key != size){
      var i = 0;
      for (i = 0; i <= 3; i++) {
        // Then dynamicaly generates buttons for each answer in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adds a class of answer to our button
        a.addClass("answer");
        // Added a data-attribute
        a.attr("data-name", i);
        // Provided the initial button text
        a.text(objsAnswers[i]);
        // Added the button to the buttons-view div
        b.append(a);
        var attr = a.attributes;
      }
    } 
    mv.html(displayDiv);
  }
      

  function rightAns(){
    key++
    stopwatch.stop();
    stopwatch.reset();
    var answer = $(this).attr("data-name");
    if (key == 1){
      if (answer == 0){        
        $("#wrapper").html("You're right! "+ trivArray[answer]);
        wins++;
      }else{
        $("#wrapper").html("You lost this round! The answer was: "+ objsAnswers[0]);
        losses++
      } 
    }
    if (key == 2){
      if (answer == 1){
        $("#wrapper").html("You're right! " + trivArray[answer]);
        wins++;
      }else{
        $("#wrapper").html("You lost this round! The answer was: "+ objsAnswers[1]);
        losses++;
      } 
    }
    if (key == 3){
      if (answer == 2){
        $("#wrapper").html("You're right! " + trivArray[answer]);
        wins++;
      }else{
        $("#wrapper").html("You lost this round! The answer was: "+ objsAnswers[2]);
        losses++;
      } 
    }
    if (key == 4){
      if (answer == 3){
        $("#wrapper").html("You're right! " + trivArray[answer]);
        wins++;
      }else{
        $("#wrapper").html("You lost this round! The answer was: "+ objsAnswers[3]);
        losses++;
      } 
    }
    if (key == 5){
      if (answer == 1){
        $("#wrapper").html("You're right! " + trivArray[4]);
        wins++;
      }else{
        $("#wrapper").html("You lost this round! The answer was: "+ objsAnswers[1]);
        losses++;
      } 
    }
    
    if (key != 5){
      setTimeout(triviaStart, 5000);
    } else{
      setTimeout(playAgain, 3000);
    }
  }

  function playAgain(){
    key=0;   
    $("#wrapper").html("<div> You got " +wins+" answers correct! </div>");
    $("#wrapper").append("<div> You got " +losses+" answers wrong! </div>")
    wins=0;
    losses=0; 
    $("#wrapper").append("<button1>CLICK HERE to play again!</button1>");
    $("#wrapper").on("click", function(){
      stopwatch.reset(); 
      triviaStart();
    });
  }        

  var stopwatch = {

    time: 30,

    reset: function() {

      stopwatch.time = 30;

    },
    start: function() {

      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {

      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
    count: function() {

      if(stopwatch.time == 0){
        stopwatch.stop();
        stopwatch.reset();
        rightAns();
      }else{
        stopwatch.time--;
      }

      $("#display").text("Time Remaining: " + stopwatch.time + " Seconds");
    },

  };

  $(document).on("click", ".answer", rightAns);


  });