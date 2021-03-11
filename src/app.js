// Image
let image1 = document.getElementById("image");

// Buttons
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

// Question Rounds
function question1() {
  image1.src = "./assets/images/seal.jpg";

  option1.innerHTML = "Monkey";
  option2.innerHTML = "Giraffe";
  option3.innerHTML = "Seal";
  option4.innerHTML = "Owl";

  setTimeout(function () {
    alert("Question 1!");
  }, 1500);

  // Incorrect Answer
  document.getElementById(
    "option1",
    "option2",
    "option4"
  ).onclick = function () {
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

  setTimeout(function () {
    alert("Question 1!");
  }, 1500);

  // Incorrect Answer
  document.getElementById(
    "option1",
    "option2",
    "option3"
  ).onclick = function () {
    alert("Not quite, try again!");
    question1();
  };

  // Correct Answer
  document.getElementById("option4").onclick = function () {
    alert("Correct!");
    question3();
  };
}

question1();
