// Toggle Dark Mode
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});

// Hamburger navbar
function toggleMenu() {
  const navList = document.querySelector('.navbar ul');
  navList.classList.toggle('active');
}


// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// Form Validation
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Semua kolom wajib diisi.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Email tidak valid.");
    return;
  }

  alert("Pesan Anda berhasil dikirim! (Simulasi)");
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Smooth scroll (untuk browser lama)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
