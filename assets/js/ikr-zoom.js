let currentScale = 1;
let panning = false;
let startX, startY, translateX = 0, translateY = 0;
let lastTap = 0; // kept for future double-tap support

function ikrZoom(ikrsvg, options = {}) {
  // options: { step, minScale, maxScale, multiplier, forceMax }
  const step = options.step ?? 1.2;
  const MIN_SCALE = options.minScale ?? 1;
  const MAX_SCALE = options.maxScale ?? 2.6; // user-specified cap
  const multiplier = options.multiplier ?? 3; // used by auto heuristic
  const forceMax = !!options.forceMax; // if true, user's maxScale is absolute

  // Ensure svg has transform-origin centered for nicer panning/zooming behavior
  ikrsvg.style.transformOrigin = '50% 50%';
  // Prevent touch scrolling while interacting
  ikrsvg.style.touchAction = ikrsvg.style.touchAction || 'none';

  // Compute an automatic maximum scale based on viewBox / content size and container size
  let computedMaxScale = MAX_SCALE;
  try {
    // Prefer viewBox if present
    let contentWidth, contentHeight;
    if (ikrsvg.viewBox && ikrsvg.viewBox.baseVal && ikrsvg.viewBox.baseVal.width) {
      contentWidth = ikrsvg.viewBox.baseVal.width;
      contentHeight = ikrsvg.viewBox.baseVal.height;
    } else {
      // getBBox might throw if element not in DOM / not rendered; wrap try/catch
      const bbox = ikrsvg.getBBox();
      contentWidth = bbox.width || ikrsvg.clientWidth;
      contentHeight = bbox.height || ikrsvg.clientHeight;
    }

    // Heuristic: how many times larger than container the content is; multiply to allow zooming further
    const autoMaxX = (contentWidth / Math.max(1, ikrsvg.clientWidth)) * multiplier;
    const autoMaxY = (contentHeight / Math.max(1, ikrsvg.clientHeight)) * multiplier;
    const autoMax = Math.max(MIN_SCALE, Math.min(autoMaxX, autoMaxY));

    // If caller forces max, use the user-supplied MAX_SCALE. Otherwise use the smaller of autoMax and MAX_SCALE
    computedMaxScale = forceMax ? Math.max(MIN_SCALE, MAX_SCALE) : Math.max(MIN_SCALE, Math.min(MAX_SCALE, autoMax));
  } catch (err) {
    // fallback to user-specified MAX_SCALE if computation fails
    computedMaxScale = Math.max(MIN_SCALE, MAX_SCALE);
  }

  // Helper: apply transform and enforce translation bounds
  function applyTransform() {
    // scaled visual size of the element (approx)
    const scaledWidth = ikrsvg.clientWidth * currentScale;
    const scaledHeight = ikrsvg.clientHeight * currentScale;

    // When scaled > container, allow translation up to half the extra size
    const maxTranslateX = Math.max(0, (scaledWidth - ikrsvg.clientWidth) / 2);
    const maxTranslateY = Math.max(0, (scaledHeight - ikrsvg.clientHeight) / 2);

    // Constrain translation to prevent excessive movement (no blank space)
    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));

    // Apply CSS transform (translate then scale)
    ikrsvg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    console.log(currentScale)
  }

  // zoom in
  const zoomInBtn = document.getElementById('zoom_in');
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      currentScale = Math.min(currentScale + step, computedMaxScale);
      applyTransform();
    });
  }

  // zoom out
  const zoomOutBtn = document.getElementById('zoom_out');
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      currentScale = Math.max(currentScale - step, MIN_SCALE);
      applyTransform();
    });
  }

  // reset
  const resetBtn = document.getElementById('reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentScale = 1;
      translateX = 0;
      translateY = 0;
      applyTransform();
    });
  }

  // Pan start
  function startPan(e) {
    panning = true;
    const event = e.touches ? e.touches[0] : e;
    // capture initial pointer relative to current translation
    startX = event.clientX - translateX;
    startY = event.clientY - translateY;
    ikrsvg.style.cursor = 'grabbing';
    // Prevent page scroll on touch devices while interacting
    if (e.touches) e.preventDefault();
  }

  // Pan move
  function movePan(e) {
    if (!panning) return;
    const event = e.touches ? e.touches[0] : e;
    translateX = event.clientX - startX;
    translateY = event.clientY - startY;
    applyTransform();
    if (e.touches) e.preventDefault();
  }

  // Pan end
  function endPan() {
    panning = false;
    ikrsvg.style.cursor = 'grab';
  }

  // Mouse events
  ikrsvg.addEventListener('mousedown', startPan);
  window.addEventListener('mousemove', movePan);
  window.addEventListener('mouseup', endPan);

  // Touch events
  ikrsvg.addEventListener('touchstart', startPan, { passive: false });
  window.addEventListener('touchmove', movePan, { passive: false });
  window.addEventListener('touchend', endPan);

  // initialize styles / cursor and apply transform once
  ikrsvg.style.cursor = 'grab';
  applyTransform();

  // Expose some controls for external code if desired
  return {
    getCurrentScale: () => currentScale,
    getComputedMaxScale: () => computedMaxScale,
    setScale: (s) => {
      currentScale = Math.max(MIN_SCALE, Math.min(computedMaxScale, s));
      applyTransform();
    }
  };
}

// Example usage:
// const svgEl = document.querySelector('#mySvg');
// ikrZoom(svgEl, { maxScale: 110, forceMax: true }); // force the large cap
