/* Seoul time at the very start of the category row in the shared top bar. */
(() => {
  const cats = document.querySelector('.site-top .site-cats');
  if (!cats) return;

  const clock = document.createElement('span');
  clock.className = 'site-clock';
  clock.setAttribute('aria-label', 'Current time in Seoul');
  cats.prepend(clock);

  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', hour12: false,
  });
  const tick = () => { clock.textContent = `Seoul ${fmt.format(new Date())}`; };
  tick();
  setInterval(tick, 1000);
})();
