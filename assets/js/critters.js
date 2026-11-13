// Visiting pet: every so often the bichon pops up from the bottom of the green box,
// stays for a second, then goes back down.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.querySelector('[data-critter="bichon"]');
  if (!root || !('animate' in Element.prototype)) return;

  const art = root.querySelector('.critter__art');
  const down = { transform: 'translateY(105%)' };
  const up = { transform: 'translateY(0)' };
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const random = (min, max) => min + Math.random() * (max - min);

  async function visit() {
    const rise = art.animate([down, up], { duration: 800, easing: 'ease-out', fill: 'forwards' });
    root.classList.add('is-active'); // only once the rise has started from below the edge
    try {
      await rise.finished;
      await wait(1000);
      await art.animate([up, down], { duration: 700, easing: 'ease-in', fill: 'forwards' }).finished;
    } finally {
      root.classList.remove('is-active');
      art.getAnimations().forEach((animation) => animation.cancel());
    }
  }

  async function loop() {
    await wait(random(2500, 4500));
    for (;;) {
      if (!reduceMotion.matches && !document.hidden) await visit();
      await wait(random(6000, 11000));
    }
  }

  loop();
})();
