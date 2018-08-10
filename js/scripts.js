$(document).ready(function() {
  $("form#lang-select").submit(function(event) {
    event.preventDefault();
    var answer1 = $("select#question1").val();
    var answer2 = $("select#question2").val();
    var answer3 = $("select#question3").val();
    var answer4 = $("select#question4").val();
    var answer5 = $("select#question5").val();

    if (answer1 === "1" && answer2 === "2" && answer3 === "2" && answer4 === "2" && answer5 === "3") {
      $("#answer-react").fadeIn();
      $('#answer-ruby').hide();
      $('#answer-csharp').hide();
      $('#answer-oops').hide();
    } else if (answer1 === "2" && answer2 === "2" && answer3 === "2" && answer4 === "2" && answer5 === "3") {
      $("#answer-react").fadeIn();
      $('#answer-ruby').hide();
      $('#answer-csharp').hide();
      $('#answer-oops').hide();
    } else if (answer1 === "2" && answer2 === "2" && answer3 === "2" && answer4 === "2" && answer5 === "1") {
      $("#answer-react").fadeIn();
      $('#answer-ruby').hide();
      $('#answer-csharp').hide();
      $('#answer-oops').hide();
    } else if (answer1 === "2" && answer2 === "2" && answer3 === "2" && answer4 === "3" && answer5 === "2") {
      $("#answer-ruby").fadeIn();
      $('#answer-react').hide();
      $('#answer-csharp').hide();
      $('#answer-oops').hide();
    } else if (answer1 === "2" && answer2 === "2" && answer3 === "1" && answer4 === "3" && answer5 === "2") {
      $("#answer-ruby").fadeIn();
      $('#answer-react').hide();
      $('#answer-csharp').hide();
      $('#answer-oops').hide();
    } else if (answer1 === "1" && answer2 === "2" && answer3 === "1" && answer4 === "3" && answer5 === "2") {
      $("#answer-ruby").fadeIn();
      $('#answer-react').hide();
      $('#answer-csharp').hide();
      $('#answer-oops').hide();
    } else if (answer1 === "1" && answer2 === "1" && answer3 === "1" && answer4 === "1" && answer5 === "1") {
      $("#answer-csharp").fadeIn();
      $('#answer-react').hide();
      $('#answer-ruby').hide();
      $('#answer-oops').hide();
    } else if (answer1 === "1" && answer2 === "1" && answer3 === "2" && answer4 === "1" && answer5 === "1") {
      $("#answer-csharp").fadeIn();
      $('#answer-react').hide();
      $('#answer-ruby').hide();
      $('#answer-oops').hide();
    } else if (answer1 === "2" && answer2 === "1" && answer3 === "1" && answer4 === "1" && answer5 === "1") {
      $("#answer-csharp").fadeIn();
      $('#answer-react').hide();
      $('#answer-ruby').hide();
      $('#answer-oops').hide();
    } else { //In case of empty survey field
      $("#answer-oops").fadeIn();
      $('#answer-react').hide();
      $('#answer-ruby').hide();
      $('#answer-csharp').hide();
    }
  });
});
