(() => {
  let cursor = document.querySelector(".cursor");
  let pressedPointer = null;

  if (!cursor) {
    cursor = document.createElement("div");
    cursor.className = "cursor";
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);
  }

  document.addEventListener("mousemove", event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.classList.add("is-visible");
  }, { passive: true });

  document.addEventListener("pointerdown", event => {
    if (event.pointerType === "touch") return;
    pressedPointer = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY
    };
  });

  document.addEventListener("pointermove", event => {
    if (!pressedPointer || event.pointerId !== pressedPointer.id) return;
    if (Math.hypot(event.clientX - pressedPointer.x, event.clientY - pressedPointer.y) > 3) {
      document.body.classList.add("cursor-dragging");
    }
  });

  function endDrag(event) {
    if (!pressedPointer || event.pointerId !== pressedPointer.id) return;
    pressedPointer = null;
    document.body.classList.remove("cursor-dragging");
  }

  document.addEventListener("pointerup", endDrag);
  document.addEventListener("pointercancel", endDrag);
  window.addEventListener("blur", () => {
    pressedPointer = null;
    document.body.classList.remove("cursor-dragging");
  });
})();

/* GitHub Pages sometimes answers "busy" (503) when a page asks for many photos at once, and the phone then
   shows a broken-image "?" — so any picture that fails is quietly asked for again a few times. */
document.addEventListener('error', e => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement)) return;
  const orig = img.dataset.orig || img.getAttribute('src') || '';
  if (!orig || orig.startsWith('data:')) return;
  const n = +(img.dataset.retry || 0);
  if (n >= 4) return;
  img.dataset.orig = orig; img.dataset.retry = n + 1;
  setTimeout(() => { img.src = orig + (orig.includes('?') ? '&' : '?') + 'retry=' + (n + 1); }, 700 * (n + 1));
}, true);
