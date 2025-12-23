

const svg = document.getElementById('inlineSvg');
const stage = document.getElementById('stage');
// const plotSelect = document.getElementById('plotSelect');

const zoom = createSvgZoom({
  svg,
  stage,
  minScale: 1,
  maxScale: 30
});

function storeBaseState(el) {
  if (!el || el.dataset._baseStored === "1") return;

  const cs = window.getComputedStyle(el);

  el.dataset._baseFill = cs.fill;
  el.dataset._baseFillOpacity = cs.fillOpacity;
  el.dataset._baseStroke = cs.stroke;
  el.dataset._baseStrokeWidth = cs.strokeWidth;
  el.dataset._baseClass = el.getAttribute("class") || "";

  el.dataset._baseStored = "1";
}

/* ---------- SELECT ---------- */
// plotSelect.innerHTML = '<option value="">Select Plot</option>';
node_1_data.forEach(n => {
  const ploat_name = document.getElementById(n.id);

  ploat_name.classList.add('anim-path')
  // const o = document.createElement('option');
  // o.value = n.id;
  // o.textContent = n.lot || n.id;
  // plotSelect.appendChild(o);
    const el = document.getElementById(n.id);
  if (el) storeBaseState(el);
});

// plotSelect.addEventListener('change', e => {
//   if (e.target.value) zoom.flyToId(e.target.value);
// });

/* ---------- BUTTONS ---------- */
document.getElementById('zoom_in').onclick = zoom.zoomIn;
document.getElementById('zoom_out').onclick = zoom.zoomOut;
document.getElementById('reset').onclick = zoom.reset;
document.getElementById('fullscreen_btn').onclick = zoom.toggleFullscreen;


// initMapDataFilter({
//   mapData: node_1_data,
//   zoomInstance: zoom
// });

// add the interactivity on the svg plots
if (isMobile_devices) {


  ismobile_interacitivty({
    data_proprty_to_create_button: "lot",
    animation_class: 'node_lot_highlight',
    mapData: node_1_data,
    zoomInstance: zoom
  });


} else {
  init_interactive_map({
    mapData: node_1_data, mapId: node1_id, tooltipElementId: "ikr_toltipMove", svgElementId: "ikr_svg", renderTooltipContent: renderTooltipContent_all_nodes, tooltipLeft: 20, tooltipTop: 10,
    // Hover IN: Animate stroke + change fill
    onLotHoverIn: (el) => {
  if (!el.classList.contains("anim-path")) return;

  if (typeof el.getTotalLength === "function") {
    const len = el.getTotalLength();
    el.style.setProperty("--len", len);
    el.style.strokeDasharray = len;
  }

  el.style.fill = "red";
  el.style.fillOpacity = "0.7";

  el.classList.remove("draw", "highlight");
  void el.offsetWidth;
  el.classList.add("highlight", "draw");
}
,
    // Hover OUT: Restore original fill (do NOT hide)

    onLotHoverOut: (el) => {
  if (!el.classList.contains("anim-path")) return;

  el.classList.remove("draw", "highlight");

  if (is_filter_active && el.classList.contains("filtered")) {
    // restore CURRENT filter color
    el.style.fill = "#f94144";
    el.style.fillOpacity = "1";
  } else {
    // restore BASE
    // restoreBaseState(el);
  }
}
, isDraggingFn: zoom.isDragging
  });

//   init_interactive_map({
//   mapData: node_1_data,
//   mapId: node1_id,
//   tooltipElementId: "ikr_toltipMove",
//   svgElementId: "ikr_svg",
//   renderTooltipContent: renderTooltipContentNode_lavel,
//   tooltipLeft: 20,
//   tooltipTop: 10,

//   // =============================
//   // HOVER IN
//   // =============================
//   onLotHoverIn: (el, mapD, ev) => {
//     if (!el || !el.classList.contains("anim-path")) return;

//     // Store original visual state ONCE
//     storeOriginalState(el);

//     // Stroke animation setup
//     if (typeof el.getTotalLength === "function") {
//       const len = el.getTotalLength();
//       el.style.setProperty("--len", len);
//       el.style.strokeDasharray = len;
//     }

//     // Apply hover styles
//     el.style.fill = "red";
//     el.style.fillOpacity = "0.7";

//     // Restart animation cleanly
//     el.classList.remove("draw", "highlight");
//     void el.offsetWidth; // force reflow
//     el.classList.add("highlight", "draw");
//   },

//   // =============================
//   // HOVER OUT
//   // =============================
//   onLotHoverOut: (el, mapD, ev) => {
//     if (!el || !el.classList.contains("anim-path")) return;

//     // Restore EXACT previous state
//     restoreOriginalState(el);
//   },

//   isDraggingFn: zoom.isDragging
// });





  // store the previously added fill color logic 



  function storeOriginalState(el) {
    if (!el || el.dataset._origStored === "1") return;

    const cs = window.getComputedStyle(el);

    el.dataset._origFill = cs.fill;
    el.dataset._origFillOpacity = cs.fillOpacity;
    el.dataset._origStroke = cs.stroke;
    el.dataset._origStrokeWidth = cs.strokeWidth;

    // Store class list exactly as-is
    el.dataset._origClass = el.getAttribute("class") || "";

    el.dataset._origStored = "1";
  }

  function restoreOriginalState(el) {
    if (!el || el.dataset._origStored !== "1") return;

    el.style.fill = el.dataset._origFill;
    el.style.fillOpacity = el.dataset._origFillOpacity;
    el.style.stroke = el.dataset._origStroke;
    el.style.strokeWidth = el.dataset._origStrokeWidth;

    // Restore original classes (removes hover-only classes safely)
    el.setAttribute("class", el.dataset._origClass);
  }
}



