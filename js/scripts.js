$(document).ready(function() {
  $("form#lang-select").submit(function(event) {
    event.preventDefault();
    var answer1 = $("select#question1").val();
    var answer2 = $("select#question2").val();
    var answer3 = $("select#question3").val();
    var answer4 = $("select#question4").val();
    var answer4 = $("select#question5").val();


    if (answer1 === "1") {
      $("#answer-ruby").show();
    }
  });
});
