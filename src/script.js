// write your JavaScript here

let step1 = document.getElementById("firstStep");
let step2 = document.getElementById("secondStep");
let step3 = document.getElementById("thirdStep");
let step4 = document.getElementById("fourthStep");
let lastStep = document.getElementById("lastStep");
let stepTracker = document.getElementById("stepTracker");
let separator = document.getElementById("separator");

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let portofolio = document.getElementById("portofolio");
let skillLevel = document.getElementById("skillLevel");
let preference = document.getElementById("preference");

let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let bullet2 = document.getElementById("bullet2");
let bullet3 = document.getElementById("bullet3");
let bullet4 = document.getElementById("bullet4");

let allInfo = {
  personalName: "",
  personalMail: "",
  personalPhone: "",
  personalLink: "",
  level: "",
  preference: [],
};

let temporaryLevel = "";

let temporaryPreference = [];

let prefs = document.getElementsByClassName("pref");

function goToSecondStep() {
  let personalName = document.getElementById("personalName").value;
  let personalMail = document.getElementById("personalMail").value;

  let personalPhone = document.getElementById("personalPhone").value;

  let personalLink = document.getElementById("personalLink").value;
  if (!personalName || !personalMail || !personalPhone || !personalLink) {
    alert(
      "You need to complete all the required information before proceeding further."
    );
  } else {
    step1.style.display = "none";
    step2.style.display = "block";
    allInfo.personalName = personalName;
    allInfo.personalMail = personalMail;
    allInfo.personalPhone = personalPhone;
    allInfo.personalLink = personalLink;

    line1.style.animationName = "changeColor";
    bullet2.style.animationName = "changeColor";
    bullet2.style.color = "white";
  }
}
function backToFirstStep() {
  step2.style.display = "none";
  step1.style.display = "block";
  line1.style.animationName = "backColor";
  bullet2.style.animationName = "backColor";
  bullet2.style.color = "black";
}

function goToThirdStep() {
  if (!temporaryLevel) {
    alert(
      "You need to complete all the required information before proceeding further."
    );
  } else {
    step2.style.display = "none";
    step3.style.display = "block";
    allInfo.level = temporaryLevel;
    line2.style.animationName = "changeColor";
    bullet3.style.animationName = "changeColor";
    bullet3.style.color = "white";
  }
}
function backToSecondStep() {
  step3.style.display = "none";
  step2.style.display = "block";
  line2.style.animationName = "backColor";
  bullet3.style.animationName = "backColor";
  bullet3.style.color = "black";
}
function backToThirdStep() {
  step4.style.display = "none";
  step3.style.display = "block";
  line3.style.animationName = "backColor";
  bullet4.style.animationName = "backColor";
  bullet4.style.color = "black";
}
function goToFourthStep() {
  for (let i of prefs) {
    if (i.checked === true && !temporaryPreference.includes(i.value)) {
      temporaryPreference.push(i.value);
    }
  }
  if (temporaryPreference.length === 0) {
    alert(
      "You need to complete all the required information before proceeding further."
    );
  } else {
    allInfo.preference = temporaryPreference;

    console.log(allInfo, "allInfo");
    fullName.innerText = allInfo.personalName;
    email.innerText = allInfo.personalMail;
    phone.innerText = allInfo.personalPhone;
    portofolio.innerHTML = allInfo.personalLink;
    skillLevel.innerHTML = allInfo.level;
    preference.innerHTML = allInfo.preference;
    line3.style.animationName = "changeColor";
    bullet4.style.animationName = "changeColor";
    bullet4.style.color = "white";
    step3.style.display = "none";
    step4.style.display = "block";
  }
}

function goToLastStep() {
  step4.style.display = "none";
  stepTracker.style.display = "none";
  separator.style.display = "none";
  lastStep.style.display = "block";
}

function sendLevel(level) {
  let skills = document.getElementsByClassName("skill");
  console.log(event.target, "eeeeeeee");
  for (let i of skills) {
    i.classList.remove("skillChosen");
  }
  event.target.classList.add("skillChosen");
  if (temporaryLevel !== level) {
    temporaryLevel = level;
  }
}
