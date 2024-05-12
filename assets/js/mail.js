'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // Contact form variables
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // Function to handle form input event
  const handleFormInput = function () {
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  };

  // Add event listener to all form input fields
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", handleFormInput);
  }

  // Function to handle form submission
  const handleFormSubmit = function (event) {
    event.preventDefault(); // Prevent default form submission
    // You can add your code here to handle form submission, such as sending data via AJAX or other methods
    console.log("Form submitted!");
    form.reset(); // Reset the form after submission
    formBtn.setAttribute("disabled", ""); // Disable submit button after form submission
  };

  // Add event listener to form submit button
  form.addEventListener("submit", handleFormSubmit);
});
