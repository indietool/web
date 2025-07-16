function copyToClipboard() {
  const text = "go install github.com/indietool/cli@latest";
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(".copy-btn");
    const originalText = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle
document
  .querySelector(".mobile-menu-btn")
  .addEventListener("click", () => {
    const nav = document.querySelector(".nav-links");
    const btn = document.querySelector(".mobile-menu-btn");
    const isExpanded = nav.classList.contains("active");
    nav.classList.toggle("active");
    btn.setAttribute("aria-expanded", !isExpanded);
    btn.textContent = isExpanded ? "☰" : "✕";
  });