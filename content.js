(function simulateMouse() {
  let cursor = document.getElementById("fake-cursor");
  if (!cursor) {
    cursor = document.createElement("div");
    cursor.id = "fake-cursor";
    cursor.style.position = "fixed";
    cursor.style.width = "10px";
    cursor.style.height = "10px";
    cursor.style.background = "red";
    cursor.style.borderRadius = "50%";
    cursor.style.zIndex = "999999";
    cursor.style.pointerEvents = "none";
    document.body.appendChild(cursor);
  }

  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  cursor.animate(
    [{ transform: `translate(${x}px, ${y}px)` }],
    { duration: 1000, fill: "forwards" }
  );
})();