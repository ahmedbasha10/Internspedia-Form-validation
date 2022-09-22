const userID = document.getElementById("userID");
const btnSubmit = document.getElementById("submit");
const password = document.getElementById("password");
const Name = document.getElementById("name");
const selectBox = document.querySelector(".form-select");
const selectSpan = document.querySelector(".select-error");
const zibCode = document.getElementById("zibCode");
const email = document.getElementById("email");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const genderError = document.querySelector(".gender-error");
const arabicBox = document.getElementById("arabic");
const englishBox = document.getElementById("english");
const langSpan = document.querySelector(".lang-error");

const setError = (element, event, message) => {
  element.value = "";
  element.placeholder = message;
  element.classList.add("error");
  event.preventDefault();
};

const checkAlphabates = (word) => {
  return /^[A-Za-z\s]*$/.test(word);
};

const setSpan = (element, event) => {
  element.textContent = "Required";
  element.style.color = "red";
  event.preventDefault();
};

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

const validateForm = (event) => {
  if (userID.value.length < 5 || userID.value.length > 12) {
    setError(userID, event, "Required and must be of length 5 to 12.");
  }
  if (password.value.length < 7 || password.value.length > 12) {
    setError(password, event, "Required and must be of length 7 to 12.");
  }
  if (Name.value.trim().length === 0 || !checkAlphabates(Name.value)) {
    setError(Name, event, "Required and alphabates only.");
  }
  if (selectBox.value === "...") {
    setSpan(selectSpan, event);
  } else {
    selectSpan.textContent = "";
  }
  if (zibCode.value.trim().length === 0 || isNaN(zibCode.value)) {
    setError(zibCode, event, "Required and must be numeric only.");
  }
  if (email.value.trim().length === 0 || !ValidateEmail(email.value.trim())) {
    setError(email, event, "Required and valid email");
  }
  if (!maleRadio.checked && !femaleRadio.checked) {
    setSpan(genderError, event);
  } else {
    genderError.textContent = "";
  }
  if (!arabicBox.checked && !englishBox.checked) {
    setSpan(langSpan, event);
  } else {
    langSpan.textContent = "";
  }
};

btnSubmit.addEventListener("click", (event) => {
  validateForm(event);
});
