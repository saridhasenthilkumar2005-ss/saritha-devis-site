document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("responseMsg").textContent = "Thanks for reaching out, " + name + "!";
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("responseMsg").textContent = "Please fill out all fields.";
  }
});
