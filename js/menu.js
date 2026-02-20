

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // запускаем анимацию
        obs.unobserve(entry.target); // один раз
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(fade => observer.observe(fade));
});

const cards = document.querySelectorAll('.coffee-card');

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();

    if (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      card.classList.add('touch-hover');
    } else {
      card.classList.remove('touch-hover');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    title: "Добро пожаловать в меню Aura!",
    text: "Советуем выключить VPN для корректной работы сайта ✅",
    timer: 5000,
    showConfirmButton: false,
    toast: true,
    position: 'top-end'
  });
});