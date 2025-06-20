import { uploadAvatar,uploadError, uploadIcon, previewImg,dragText } from "./domElements.js";
import { svgColor, defaultColor } from "./svgIcon.js";

let isFileValid = false;

uploadAvatar.addEventListener('change', function () {
  const pic = this.files[0];
  uploadError.classList.remove("text-red-500");
  uploadError.textContent = "";
  uploadIcon.innerHTML = defaultColor;
  previewImg.src = "";
  isFileValid = false; // reset

  if (!pic) return;

  const acceptType = ["image/png", "image/jpeg"];
  const maxSize = 500 * 1024;

  

  // File too large
  if (pic.size > maxSize) {
    uploadError.classList.add("text-red-500");
    uploadError.textContent = "File too large. Please upload a photo under 500KB";
    uploadIcon.innerHTML = svgColor;
    return;
  }

  // File is valid
  isFileValid = true;
  uploadError.textContent = "File uploaded";
  uploadIcon.innerHTML = defaultColor;

  //removes the drag text after a pic is uploaded
  if (dragText) dragText.textContent = "";

  //uploads a preview
  const reader = new FileReader();
  reader.onload = function (e) {
    previewImg.src = e.target.result;
    previewImg.classList.add("object-cover");
    previewImg.style.width = "100px";
    previewImg.style.height = "80px";
  };
  reader.readAsDataURL(pic);
});


export function getFileValidationStatus() {
  return isFileValid;
}
