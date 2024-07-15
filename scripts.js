document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact .contact-form form");
  contactForm.addEventListener("submit", (event) => {
    // event.preventDefault(); // Uncomment if you don't want the form to be submitted

    const nameField = contactForm.querySelector("input[name='name']");
    const emailField = contactForm.querySelector("input[name='email']");
    const messageField = contactForm.querySelector("textarea[name='message']");

    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
  });
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});



