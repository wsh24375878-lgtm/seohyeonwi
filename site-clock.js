/* Seoul time in the bottom-left corner of the category pages (HH:MM:SS, same as the main page). */
(() => {
  const clock = document.createElement('div');
  clock.className = 'corner-clock';
  clock.setAttribute('aria-label', 'Current time in Seoul');
  document.body.appendChild(clock);

  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  });
  const tick = () => { clock.textContent = `Seoul ${fmt.format(new Date())}`; };
  tick();
  setInterval(tick, 1000);
})();
