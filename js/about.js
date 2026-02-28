function initScrollText() {
  const paragraphs = document.querySelectorAll(".scroll-section p");
};

const textElements = document.querySelectorAll('.reveal-text');
const imageElement = document.querySelector('.reveal-image');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

textElements.forEach(el => observer.observe(el));
observer.observe(imageElement);

const paragraphs = document.querySelectorAll(".scroll-section p");

let words = [];

document.addEventListener("DOMContentLoaded", () => {
  initScrollText();
  const sections = document.querySelectorAll(".scroll-section");

  sections.forEach(section => {
    const paragraphs = section.querySelectorAll("p");
    const words = [];

    paragraphs.forEach(p => {
      const text = p.innerText.trim().split(" ");
      p.innerHTML = "";

      text.forEach(word => {
        const span = document.createElement("span");
        span.className = "word";
        span.textContent = word + " ";
        p.appendChild(span);
        words.push(span);
      });
    });

    function animateSection() {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      progress = Math.min(Math.max(progress, 0), 1);

      words.forEach((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;

        let value = (progress - start) / (end - start);
        value = Math.min(Math.max(value, 0), 1);

        word.style.backgroundPosition = `${100 - value * 100}% 0`;
      });

      requestAnimationFrame(animateSection);
    }

    animateSection();
  });
});