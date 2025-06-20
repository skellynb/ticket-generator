import { form,fullName, email, gitHub, uploadError, nameError, emailError, uploadErrorText, uploadIcon, githubError, uploadAvatar, previewImg  } from "./domElements.js";

import { svgColor } from "./svgIcon.js";
import { getFileValidationStatus } from "./uploadHandler.js";


localStorage.clear();

//clears and hide all error msgs b4 new validation
function clearErrors() {
  [nameError, emailError, githubError,uploadError].forEach(error => {
    error.textContent = "";
    error.classList.add('hidden');
  });

 
}
localStorage.clear();

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors();

  let hasError = false;

  if (!getFileValidationStatus()) {
    uploadError.classList.add("text-red-500");
    uploadErrorText.textContent = "Please upload a valid JPG or PNG file under 500KB.";
    uploadIcon.innerHTML = svgColor;
    hasError = true;
  }

  if (!fullName.value.trim() || fullName.value.trim().split(" ").length < 2) {
    nameError.innerHTML = `${svgColor} Please enter your first and last name`;
    nameError.classList.remove("hidden");
    hasError = true;
  }

  if (!email.value.trim()) {
    emailError.innerHTML = `${svgColor}Please enter a valid email address.`;
    emailError.classList.remove("hidden");
    hasError = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    emailError.innerHTML = `${svgColor}Please enter a valid email address.`;
    emailError.classList.remove("hidden");
    hasError = true;
  }

  if (!gitHub.value.trim() || !/^@[\w-]{1,39}$/.test(gitHub.value.trim()) ) {
    githubError.innerHTML = `${svgColor} username must start with @.`;
    githubError.classList.remove("hidden");
    hasError = true;
  }


  if (hasError) return;

  function generateCode() {
    const randomNumber = Math.floor(10000 + Math.random()* 90000);
    return `#${randomNumber}`;
  }

  
const ticketCode = generateCode();
localStorage.setItem("ticketCode", ticketCode);

//change 1st letter to caps auto.
function toCaps(fullName) {
  return fullName
  .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const formattedName = toCaps(fullName.value.trim());
const cleanedEmail = email.value.trim();

localStorage.setItem('fullName', formattedName);






  localStorage.setItem("email", email.value.trim());
  localStorage.setItem("gitHub", gitHub.value.trim());
  localStorage.setItem("avatar", previewImg.src);


  


  // Redirect if all validation passes
  window.location.href = "./ticket.html";
});