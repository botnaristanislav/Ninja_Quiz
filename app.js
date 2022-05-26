let correctAnswers = [];
const answers = document.querySelectorAll("#radio");
const submit = document.querySelector("#submit");
const percDiv = document.querySelector("#percDiv");
const percText = document.querySelector("#percText");


// Functions to detect correct answers and percentage.
submit.addEventListener("click", e => {
  // checking correct answers and pushing them into "correctAnswers" array
  answers.forEach(element => {
    if (element.checked){
      if (element.value === "B"){
        correctAnswers.push(element.value);
      }
    }
  });

  //Setting up the Ninja percentage!
  if (correctAnswers.length === 4){
    createDiv(100);
  } else if(correctAnswers.length === 3){
    createDiv(75);
  } else if(correctAnswers.length === 2){
    createDiv(50);
  } else if(correctAnswers.length === 1){
    createDiv(25);
  } else if(correctAnswers.length === 0){
    createDiv(0);
  }

  //Resetting the correctAnswers for next try
  correctAnswers = [];
});

// Function to create a div with percentage
function createDiv(innerText){
  scrollTo(0,0);
  percDiv.classList.remove("invisible");
// Outputting the score in crescendo fashion
  let output = 0;
  const timer = setInterval(() => {
    percText.innerText = `${output}%`;
    if(output === innerText){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
};





console.log(window);
