/* Seoul time next to "SEOHYEON WI™" in the shared top bar (same as the main page). */
(() => {
  const name = document.querySelector('.site-top .site-name');
  if (!name) return;

  // keep the name and the clock together in the left cell of the top bar
  const left = document.createElement('div');
  left.className = 'site-left';
  name.replaceWith(left);
  left.appendChild(name);

  const clock = document.createElement('span');
  clock.className = 'site-clock';
  clock.setAttribute('aria-label', 'Current time in Seoul');
  left.appendChild(clock);

  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  });
  const tick = () => { clock.textContent = `Seoul ${fmt.format(new Date())}`; };
  tick();
  setInterval(tick, 1000);
})();
