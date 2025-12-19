document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );
  window.location.href = `mailto:kumardeepak7276884@gmail.com?subject=${subject}&body=${body}`;
});

// Typing animation
const typingText = "Full Stack Developer | Learner | Coder";
let i = 0;
function type() {
  if (i < typingText.length) {
    document.getElementById("typing").textContent += typingText.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();
