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
