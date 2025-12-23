


const svg = document.getElementById('ikr_svg');
const stage = document.getElementById('stage');
// const plotSelect = document.getElementById('plotSelect');d
let finalURL = ikrnmap_get_frontend_variable.home_url;

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

initMapDataFilter({
  mapData: node_1_data,
  zoomInstance: zoom,
  finalURL: finalURL,
  animation_class: 'node_lot_highlight',
});

if (isMobile_devices) {


  ismobile_interacitivty({
    data_proprty_to_create_button: "lot",
    animation_class: 'node_lot_highlight',
    mapData: node_1_data,
    zoomInstance: zoom,
    finalURL: finalURL,
  });


} else {
  init_interactive_map({
    mapData: node_1_data, mapId: node1_id, tooltipElementId: "ikr_toltipMove", svgElementId: "ikr_svg", renderTooltipContent: renderTooltipContentNode_lavel, tooltipLeft: 20, tooltipTop: 10,
    // Hover IN: Animate stroke + change fill
    onLotHoverIn: (el) => {
      if (!el.classList.contains("anim-path")) return;

      if (typeof el.getTotalLength === "function") {
        const len = el.getTotalLength();
        el.style.setProperty("--len", len);
        el.style.strokeDasharray = len;
      }

      //   el.style.fill = "red";
      el.style.fillOpacity = "1";

      el.classList.remove("draw", "node_lot_highlight");
      void el.offsetWidth;
      el.classList.add("node_lot_highlight", "draw");
    }
    ,
    // Hover OUT: Restore original fill (do NOT hide)

    onLotHoverOut: (el) => {
      if (!el.classList.contains("anim-path")) return;

      el.classList.remove("draw", "node_lot_highlight");
      el.style.fill = "'";
      el.style.fillOpacity = "0";
      if (is_filter_active && el.classList.contains("filtered")) {
        // restore CURRENT filter color
        el.style.fill = "#f94144";
        el.style.fillOpacity = "1";
      } else {
        // restore BASE
        // restoreBaseState(el);
      }
    }
    , 
    isDraggingFn: zoom.isDragging,
    onClickFn: rcostClick_func
  });






}



function rcostClick_func(ev, ct, mapD) {
  // if (!mapD || !mapD.id || !mapD.link) return;
  if(zoom.isDragging()) return;

  if (!mapD || !mapD.id) return;

  

  // --- sanitize input, prevents injection ---
  const unit = encodeURIComponent(mapD.id.trim());


  
 finalURL += (finalURL.includes("?") ? "&" : "?") + "unit=" + unit;

  // window.location.href = finalURL.href;


  function navigateFromFullscreen(url) {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.location.href = url;
            console.log(url)
          }, 300);
        });
      });
    } else {
      window.location.href = url;

    }
  }

  navigateFromFullscreen(finalURL);
}