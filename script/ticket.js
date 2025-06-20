

const dateToday = document.getElementById("js-ticket-date");

const fullName = localStorage.getItem("fullName");
const gitHub = localStorage.getItem("gitHub");
const email = localStorage.getItem("email");
const avatar = localStorage.getItem("avatar");
const nameSpan = document.getElementById("js-color-name");
const ticketCode = localStorage.getItem("ticketCode");



  if (fullName) {
    document.getElementById("js-ticket-name").textContent = fullName;
  }

  if (nameSpan) {
    nameSpan.textContent =`${fullName}!`;
  }

  if (gitHub) {
    document.getElementById("js-ticket-git").textContent = gitHub;
  }

  if (avatar) {
    document.getElementById("js-ticket-avatar").src = avatar;
  }

  if (email) {
    document.getElementById("js-ticket-email").textContent = email;
  }

  if (dateToday) {
    const today =dayjs().format("MMMM D, YYYY");
    dateToday.textContent = `${today} / Austin, Tx`
  }


  
const code = document.getElementById("js-ticket-no");

  if (code && ticketCode) {
    const codeNo = localStorage.getItem("ticketCode");
    code.textContent = ticketCode;
  }

  // Redirect back to form if any field is missing 
if (!fullName || !email || !github || !avatar || !ticketCode) {
 
  alert("Please fill the form before accessing your ticket.");
  window.location.href = "./index.html";
}


