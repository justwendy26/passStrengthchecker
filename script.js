// PASSWORD_STRENGTH_CHECKER FUNCTION I.E THE LOGIC
const passStrengthChecker = (password) => {
  let score = 0;

  //CRITERIA ONE --- AT LEAST 8 ELEMENTS
  if (password.length === 8) {
    score++;
  }
  // CRITERIA TWO --- AT LEAST 12 ELEMENTS
  if (password.length >= 12) {
    score++;
  }
  // CRITERIA THREE --- CONTAINS AT LEAST ONE NUMBER
  if (/[0-9]/.test(password)) {
    score++;
  }
  // CRITERIA FOUR ---- CONTAINS AT LEAST ONE UPPERCASE LETTER
  if (/[A-Z]/.test(password)) {
    score++;
  }
  // CRITERIA FIVE --- CONTAINS AT LEAST ONE SPECIAL CHARACTER
  if (/[!@#$%^&*]/.test(password)) {
    score++;
  }

  let strengthLevel;
  let message;

  if (score <= 1) {
    strengthLevel = `VERY WEAK!`;
    message = //type message suggestion here;
      document.getElementById("feedback").style.color = "red";
  } else if (score == 2) {
    strengthLevel = `WEAK!`;
    message = //type message suggestion here ;
      document.getElementById("feedback").style.color = "orange";
  } else if (score <= 4) {
    strengthLevel = `STRONG!`;
    message = //type message suggestion here ;
      document.getElementById("feedback").style.color = "green";
  } else {
    strengthLevel = `VERY STRONG!`;
    message = //type message suggestion here ;
      document.getElementById("feedback").style.color = "darkgreen";
  }

  //CONFIGURING THE FEEDBACK ELEMENT TO DISPLAY THE STRENGTH_LEVEL AND MESSAGE
  document.getElementById("feedback").textContent =
    `${strengthLevel}: ${message}`;
};

//MAKING THE THE PASS_STRENGTH_CHECKER DISPLAY FEEDBACK WHEN BUTTON IS CLICKED

document.getElementById("checkBtn").onclick = function () {
  //FAIL SAFE INCASE OF NO PASSWORD WAS ENTERED
  if (document.getElementById("passwordInput").value.trim() === "") {
    document.getElementById("feedback").textContent =
      `Please enter a passsword`;
    document.getElementById("feedback").style.color = "black";
    return;
  }
  //FUNCTION WORKING WHEN A PASSWORD IS ENTERED
  else {
    return passStrengthChecker(document.getElementById("passwordInput").value);
  }
};
