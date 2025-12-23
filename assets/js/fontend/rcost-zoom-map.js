



function createSvgZoom({
  svg,
  stage,
  minScale = 1,
  maxScale = 30,
}) {
  let transform = { x: 0, y: 0, scale: 1 };
  let isPanning = false;
  let isDragging = false;


  let sx = 0, sy = 0, tx = 0, ty = 0;
  let touchId = null;

  /* ---------------- HELPERS ---------------- */

  function applyTransform() {
    stage.setAttribute(
      'transform',
      `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`
    );
  }

  function clampScale(s) {
    return Math.max(minScale, Math.min(maxScale, s));
  }

  function getPanSpeed(scale) {
    if (scale <= 1) return 1;
    if (scale <= 3) return 1.22;
    if (scale <= 6) return 3;
    if (scale <= 10) return 6;
    if (scale <= 20) return 8;
    return Math.min(30, scale * 1.2);
  }

  /* ---------------- ZOOM ---------------- */

  function zoomAt(factor, cx, cy) {
    const old = transform.scale;
    const next = clampScale(old * factor);

    transform.x = cx - (cx - transform.x) * (next / old);
    transform.y = cy - (cy - transform.y) * (next / old);
    transform.scale = next;

    applyTransform();
  }

  svg.addEventListener('wheel', e => {
    e.preventDefault();
    const r = svg.getBoundingClientRect();
    zoomAt(
      e.deltaY < 0 ? 1.2 : 0.85,
      e.clientX - r.left,
      e.clientY - r.top
    );
  }, { passive: false });

  /* ---------------- PAN (DESKTOP) ---------------- */

  svg.addEventListener('mousedown', e => {
    isPanning = true;
    isDragging = false;

    sx = e.clientX;
    sy = e.clientY;
    tx = transform.x;
    ty = transform.y;
  });

  svg.addEventListener('mousemove', e => {
    if (!isPanning) return;

    const dx = e.clientX - sx;
    const dy = e.clientY - sy;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) isDragging = true;

    const speed = getPanSpeed(transform.scale);
    transform.x = tx + dx * speed / transform.scale;
    transform.y = ty + dy * speed / transform.scale;

    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    isPanning = false;
    setTimeout(() => isDragging = false, 150);
  });

  /* ---------------- PAN (MOBILE) ---------------- */

  svg.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    const t = e.touches[0];

    touchId = t.identifier;
    isDragging = false;

    sx = t.clientX;
    sy = t.clientY;
    tx = transform.x;
    ty = transform.y;
  }, { passive: true });

  svg.addEventListener('touchmove', e => {
    const t = [...e.touches].find(tt => tt.identifier === touchId);
    if (!t) return;
isDragging = true;
console.log(isDragging)
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) isDragging = true;

    const speed = getPanSpeed(transform.scale) * 1.6;
    transform.x = tx + dx * speed / transform.scale;
    transform.y = ty + dy * speed / transform.scale;

    applyTransform();
    e.preventDefault();
  }, { passive: false });

  svg.addEventListener('touchend', () => {
    setTimeout(() => isDragging = false, 150);
  });

  /* ---------------- FLY TO ---------------- */

  function flyToElement(el) {
    if (!el) return;

    const bb = el.getBBox();
    const vb = svg.viewBox.baseVal;

    const scale = clampScale(
      Math.min(vb.width / bb.width, vb.height / bb.height) * 0.85
    );

    const cx = bb.x + bb.width / 2;
    const cy = bb.y + bb.height / 2;

    smoothAnimate({
      x: vb.width / 2 - scale * cx,
      y: vb.height / 2 - scale * cy,
      scale
    });
  }

  function smoothAnimate(target) {
    const start = { ...transform };
    const duration = 500;
    const t0 = performance.now();

    function frame(now) {
      const p = Math.min((now - t0) / duration, 1);
      const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

      transform.x = start.x + (target.x - start.x) * ease;
      transform.y = start.y + (target.y - start.y) * ease;
      transform.scale = start.scale + (target.scale - start.scale) * ease;

      applyTransform();
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // add the fullscreen logic 
  /* ---------------- FULLSCREEN ---------------- */

  function getFullscreenElement() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  function requestFullscreen(el) {
    if (el.requestFullscreen) return el.requestFullscreen();
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
    if (el.mozRequestFullScreen) return el.mozRequestFullScreen();
    if (el.msRequestFullscreen) return el.msRequestFullscreen();
  }

  function exitFullscreen() {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  }

  function toggleFullscreen() {
    const container = svg.parentElement || svg;

    if (!getFullscreenElement()) {

      requestFullscreen(container);

    } else {

      exitFullscreen();

    }
  }



  applyTransform();

  /* ---------------- PUBLIC API ---------------- */

  return {
    zoomIn: () => zoomAt(1.25, 500, 300),
    zoomOut: () => zoomAt(0.8, 500, 300),
    reset: () => smoothAnimate({ x: 0, y: 0, scale: 1 }),
    flyToId: id => flyToElement(document.getElementById(id)),
    isDragging: () => isDragging,
    toggleFullscreen,

  };
}


