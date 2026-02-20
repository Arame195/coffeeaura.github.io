const animatedElements = document.querySelectorAll('.scroll-anim');

window.addEventListener('scroll', checkScroll);

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

const revealGroups = document.querySelectorAll('.reveal-group');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.20;

  revealGroups.forEach(group => {
    const groupTop = group.getBoundingClientRect().top;

    if (groupTop < triggerBottom && !group.classList.contains('active')) {
      group.classList.add('active');

      const items = group.querySelectorAll('.item');
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.10}s`;
      });
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

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

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.5
  });

  videos.forEach(video => {
    video.muted = true;
    video.playsInline = true;
    observer.observe(video);
  });
});