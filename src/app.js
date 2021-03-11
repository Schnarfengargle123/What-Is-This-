// Image
let image1 = document.getElementById("image");

// Buttons
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

// Question Rounds
function question1() {
  setTimeout(function () {
    alert("Welcome! Test your general knowledge with this awesome quiz.");
  }, 1500);

  image1.src = "./assets/images/seal.jpg";

  option1.innerHTML = "Monkey";
  option2.innerHTML = "Giraffe";
  option3.innerHTML = "Seal";
  option4.innerHTML = "Owl";

  // Incorrect Answer
  document.getElementById("option1").onclick = function () {
    alert("Not quite, try again!");
    question1();
  };

  document.getElementById("option2").onclick = function () {
    alert("Not quite, try again!");
    question1();
  };

  document.getElementById("option4").onclick = function () {
    alert("Not quite, try again!");
    question1();
  };

  // Correct Answer
  document.getElementById("option3").onclick = function () {
    alert("Correct!");
    question2();
  };
}

function question2() {
  image1.src = "./assets/images/tokyo_tower.jpg";

  option1.innerHTML = "Eiffel Tower";
  option2.innerHTML = "Shanghai Tower";
  option3.innerHTML = "Blackpool Tower";
  option4.innerHTML = "Tokyo Tower";

  // Incorrect Answer
  document.getElementById(
    "option1",
    "option2",
    "option3"
  ).onclick = function () {
    alert("Not quite, try again!");
    question2();
  };

  // Correct Answer
  document.getElementById("option4").onclick = function () {
    alert("Correct!");
    question3();
  };
}

function question3() {
  image1.src = "./assets/images/ruby.jpg";

  option1.innerHTML = "Emerald";
  option2.innerHTML = "Ruby";
  option3.innerHTML = "Sapphire";
  option4.innerHTML = "Quartz";

  // Incorrect Answer
  document.getElementById(
    "option1",
    "option3",
    "option4"
  ).onclick = function () {
    alert("Not quite, try again!");
    question3();
  };

  // Correct Answer
  document.getElementById("option2").onclick = function () {
    alert("Correct!");
    question4();
  };
}

function question4() {
  image1.src = "./assets/images/persimmon.jpg";

  option1.innerHTML = "Persimmon";
  option2.innerHTML = "Durian";
  option3.innerHTML = "Tomato";
  option4.innerHTML = "Peach";

  // Incorrect Answer
  document.getElementById(
    "option2",
    "option3",
    "option4"
  ).onclick = function () {
    alert("Not quite, try again!");
    question4();
  };

  // Correct Answer
  document.getElementById("option1").onclick = function () {
    alert("Correct!");
    question5();
  };
}

function question5() {
  image1.src = "./assets/images/eurofighter.jpg";

  option1.innerHTML = "MiG-35";
  option2.innerHTML = "Dassault Rafale";
  option3.innerHTML = "F-15";
  option4.innerHTML = "Eurofighter";

  // Incorrect Answer
  document.getElementById(
    "option1",
    "option2",
    "option3"
  ).onclick = function () {
    alert("Not quite, try again!");
    question5();
  };

  // Correct Answer
  document.getElementById("option4").onclick = function () {
    alert("Correct!");
    question6();
  };
}

// function question6() {
//   image1.src = "./assets/images/eurofighter.jpg";

//   option1.innerHTML = "MiG-35";
//   option2.innerHTML = "Dassault Rafale";
//   option3.innerHTML = "F-15";
//   option4.innerHTML = "Eurofighter";

//   // Incorrect Answer
//   document.getElementById(
//     "option1",
//     "option2",
//     "option3"
//   ).onclick = function () {
//     alert("Not quite, try again!");
//     question5();
//   };

//   // Correct Answer
//   document.getElementById("option4").onclick = function () {
//     alert("Correct!");
//     question6();
//   };
// }

question1();
