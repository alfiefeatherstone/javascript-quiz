var allQuestions = [{
  question: "break",
  options: ["a", "b", "c", "d"],
  answer: 0
}, {
  question: "down",
  options: ["as", "db", "fc", "qd"],
  answer: 0
}, {
  question: "flavour",
  options: ["ca", "vb", "hc", "di"],
  answer: 0
}, {
  question: "compounds",
  options: ["au", "bt", "ca", "dv"],
  answer: 0
}];
var score = 0;
var score2 = [];
var count = 0;
var loadBits;
var question = document.getElementById("question");
var options = document.forms['options'];
var next = document.getElementById("submit");
var back = document.getElementById("back");
var fadingElements = $(".jQueryFade")
loadBits = function() {
  var based = allQuestions[count].options;
  question.innerHTML = allQuestions[count].question;
  for (var g = 0; g < based.length; g++) {
    var peep = options[g].nextSibling;
    peep.innerHTML = based[g];
  }
};
window.onload = loadBits();
next.addEventListener("click", function() {
  for (var sd = 0; sd < options.length; sd++) {
    if (options[sd].checked) {
      score2[count] = options[sd].value;
      break;
    }
  }
  if (score2[count] != undefined) {
  if (count == allQuestions.length - 1) {
    var peachy = options.firstChild;
    while (peachy) {
      options.removeChild(peachy);
      peachy = options.firstChild;
    }
    for (var rex = 0; rex < score2.length; rex++) {
      if (score2[rex] == allQuestions[rex].answer) {
        score++;
      }
    }
    question.innerHTML = "Your score is" + "<br>" + score;
    
  }
  if (score2[count+1] == undefined) {  
    for (var re = 0; re < options.length; re++) {
      options[re].checked = false;
    }} else {
      var savedScore = score2[count+1];
      options[savedScore].checked = true;
    }
    fadingElements.every
  count++;
  loadBits(); 
  } else {
    alert("select an answer")
  }
}, false);
//$(document).ready(function(){
//$("next").click(function(){
//$(fadingElements).hide("slow", function() {
//    loadBits();
//  })
//})})
back.addEventListener("click", function() {
  count--;
  var prev = score2[count];
  loadBits();
  options[prev].checked = true;
}, false);
