// Image
let image = document.getElementById("image");

// Buttons
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

const question1_Answers = ['Monkey', 'Giraffe', "Seal", "Owl"];
const question2_Answers = ['Eiffel Tower', 'Shanghai Tower', "Blackpool Tower", "Tokyo Tower"];
const question3_Answers = ['Emerald', 'Ruby', "Sapphire", "Quartz"];
const question4_Answers = ['Persimmon', 'Durain', "Tomata", "Peach"];
const question5_Answers = ['MiG-35', 'Dassault Rafele', "F-15", "Eurofighter"];

// Question Rounds
function loadQuestion1() {
  setTimeout(function () {
    alert("Welcome! Test your general knowledge with this awesome quiz.");
  }, 1500);

  image.src = "./assets/images/seal.jpg";

  option1.innerHTML = "Monkey";
  option2.innerHTML = "Giraffe";
  option3.innerHTML = "Seal";
  option4.innerHTML = "Owl";

  // Incorrect Answer
  document.getElementById("option1").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion1();
  };

  document.getElementById("option2").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion1();
  };

  document.getElementById("option4").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion1();
  };

  // Correct Answer
  document.getElementById("option3").onclick = function () {
    option3.style.backgroundColor="green";
    setTimout(function () {
      alert("Correct!");
    }, 1000);
    question2();
    option3.style.backgroundColor="none";
  };
}

function loadQuestion2() {
  image.src = "./assets/images/tokyo_tower.jpg";

  option1.innerHTML = "Eiffel Tower";
  option2.innerHTML = "Shanghai Tower";
  option3.innerHTML = "Blackpool Tower";
  option4.innerHTML = "Tokyo Tower";

  // Incorrect Answer
  document.getElementById("option1").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion2();
  };

  document.getElementById("option2").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion2();
  };

  document.getElementById("option3").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion2();
  };

  // Correct Answer
  document.getElementById("option4").onclick = function () {
    alert("Correct!");
    loadQuestion3();
  };
}

function loadQuestion3() {
  image.src = "./assets/images/ruby.jpg";

  option1.innerHTML = "Emerald";
  option2.innerHTML = "Ruby";
  option3.innerHTML = "Sapphire";
  option4.innerHTML = "Quartz";

  // Incorrect Answer
  document.getElementById("option1").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion3();
  };

  document.getElementById("option3").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion3();
  };

  document.getElementById("option4").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion3();
  };

  // Correct Answer
  document.getElementById("option2").onclick = function () {
    alert("Correct!");
    loadQuestion4();
  };
}

function loadQuestion4() {
  image.src = "./assets/images/persimmon.jpg";

  option1.innerHTML = "Persimmon";
  option2.innerHTML = "Durian";
  option3.innerHTML = "Tomato";
  option4.innerHTML = "Peach";

  // Incorrect Answer
  document.getElementById("option2").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion4();
  };

  document.getElementById("option3").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion4();
  };

  document.getElementById("option4").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion4();
  };

  // Correct Answer
  document.getElementById("option1").onclick = function () {
    alert("Correct!");
    loadQuestion5();
  };
}

function loadQuestion5() {
  image.src = "./assets/images/eurofighter.jpg";

  option1.innerHTML = "MiG-35";
  option2.innerHTML = "Dassault Rafale";
  option3.innerHTML = "F-15";
  option4.innerHTML = "Eurofighter";

  // Incorrect Answer
  document.getElementById("option1").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion5();
  };

  document.getElementById("option2").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion5();
  };

  document.getElementById("option3").onclick = function () {
    alert("Not quite, try again!");
    loadQuestion5();
  };

  // Correct Answer
//   document.getElementById("option4").onclick = function () {
//     alert("Correct!");
//     loadQuestion6();
//   };
}