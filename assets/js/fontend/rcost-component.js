
// global variable 
 let is_filter_active = false;
// check the mobile device or desktop devices 
const isMobile_devices =
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

// create hover animation function 

function hoverStrokeAnimation(ikr_svg_id) {
  const ikr_svg = document.getElementById(`${ikr_svg_id}`);
  // ==== ADD/REMOVE CLASSES ONLY – works EVERY time ====

  const selectAll_anim_paths = ikr_svg.querySelectorAll('.anim-path');

  selectAll_anim_paths.forEach(path => {
    // Compute length once
    const len = path.getTotalLength();
    path.style.setProperty('--len', len);
    path.style.strokeDasharray = len;
    // path.style.strokeDashoffset = len;    // start hidden

    path.addEventListener('mouseenter', (ev) => {
      const ct = ev.currentTarget;
      ct.style.fill = '#ffffff';
      ct.style.fillOpacity = '.3';
      // Reset any previous state
      path.classList.remove('draw', 'highlight');
      // Trigger reflow so animation restarts
      void path.offsetWidth;
      path.classList.add('highlight', 'draw');
    });

    path.addEventListener('mouseleave', (ev) => {
      // Keep the highlight visible until next hover
      // (no reverse, no class removal)
      const ct = ev.currentTarget;

      ct.style.fillOpacity = '0';
      ct.classList.remove('draw');
      ct.classList.remove('highlight');

    });
  }



  );
}


// call the hover animation function with the id of the svg 
// hoverStrokeAnimation('ikr_svg');

// stroke hover animation


function setupStrokeAnimation(svgId) {
  const ikr_svg = document.getElementById(svgId);
  if (!ikr_svg) return;

  const paths = ikr_svg.querySelectorAll(".anim-path");
  paths.forEach((path) => {
    if (typeof path.getTotalLength === "function") {
      const len = path.getTotalLength();
      path.style.setProperty("--len", len);
      path.style.strokeDasharray = len;
    }
  });
}

function applyStrokeHover(el,hover_class='highlight') {
  console.log('h')
  if (!el.classList.contains("anim-path")) return;
  if (typeof el.getTotalLength === "function") {
    const len = el.getTotalLength();
    el.style.setProperty("--len", len);
    el.style.strokeDasharray = len;
  }

  // el.style.fill = "#ffffff";
  // el.style.fillOpacity = "0.5";

  el.classList.remove("draw", hover_class);
  // restart animation
  void el.offsetWidth;
  el.classList.add(hover_class, "draw");
}

function clearStrokeHover(el,hover_class='highlight') {
  if (!el.classList.contains("anim-path")) return;

  // el.style.fillOpacity = "0";
  el.classList.remove("draw", hover_class);
  // Optionally revert fill color completely
  // el.style.removeProperty("fill");
}



// tooltip hover functions for rcost interactive map node lavel map 

function renderTooltipContentNode_lavel(mapD) {
  let statusStyle = "font-weight: bold;";
  // if (mapD.status && mapD.status.toLowerCase() === "available") {
  //     statusStyle = "color: #d3b683; font-weight: bold;";
  // } else if (mapD.status && mapD.status.toLowerCase() === "sold") {
  //     statusStyle = "color: red; font-weight: bold;";
  // }


  return `
   <div class="rcost-plot-tooltip">
    <div class="ploat-tooltip-container">
          <div class="plot-label"> ${mapD.lot}</div>
      <div class="development_type">${mapD.developmentType}</div>
      <div class="plot-size">Plot Size: ${mapD.size}</div>
    </div>
      <button class="plot-btn">CLICK TO VIEW</button>
    </div>
  `;
}



// MOBILE INTERACTIVITY FOR  the map 

function ismobile_interacitivty({
    data_proprty_to_create_button = "lot",
    animation_class = 'highlight',
    mapData,
    zoomInstance
}){

    
    // console.log(zoomInstance.flyToId)


   
let previous_selected_element = null;

    const lot_select_message = document.getElementById('lot_select_message');
lot_select_message.innerText = `CHOOSE A ${data_proprty_to_create_button.toUpperCase()}`;
    // SELECT DROPDOWN (fully synced)
    function createNodeSelect(data, containerId, selectClass = "node-select") {
      const container = document.getElementById(containerId);
      if (!container) return console.error("Container not found");

      const oldSelect = container.querySelector(`.${selectClass}`);
      if (oldSelect) oldSelect.remove();

      const select = document.createElement("select");
      select.className = selectClass;

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = `Select ${data_proprty_to_create_button}`;
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);

      data.forEach((node) => {
        const lotNumber = node[data_proprty_to_create_button];
        const option = document.createElement("option");
        option.value = node.id;
        option.textContent = lotNumber;
        select.appendChild(option);
      });

      select.addEventListener("change", (e) => {
        if (!e.target.value) return;
        const selectedNode = data.find(n => n.id === e.target.value);
        if (selectedNode) handleNodeClick(selectedNode);
      });

      container.appendChild(select);
    }

    // Main click handler
    function handleNodeClick(node) {
      const select_svg_element = document.getElementById(node.id);
      if (!select_svg_element) return;

      // Restore previous
      if (previous_selected_element && previous_selected_element.parentNode) {
        const savedNextSibling = previous_selected_element.originalNextSibling;
        if (savedNextSibling && savedNextSibling.parentNode) {
          previous_selected_element.parentNode.insertBefore(previous_selected_element, savedNextSibling);
        } else {
          previous_selected_element.parentNode.appendChild(previous_selected_element);
        }
        previous_selected_element.classList.remove("selected-node");
        clearStrokeHover(previous_selected_element, animation_class);
        previous_selected_element.removeEventListener("touchstart", redirectHandler);
      }

      // Bring new to front
      select_svg_element.originalNextSibling = select_svg_element.nextSibling;
      select_svg_element.parentNode.appendChild(select_svg_element);
      select_svg_element.classList.add("selected-node");
      select_svg_element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      applyStrokeHover(select_svg_element, animation_class);
    //   flyToShape(select_svg_element);
    console.log(select_svg_element.id)
      zoomInstance.flyToId(select_svg_element.id);
      select_svg_element.dataset.nodeLink = node.link;
      select_svg_element.addEventListener("touchstart", redirectHandler);

      // Button active state
      document.querySelectorAll(".plot-btn").forEach(btn => btn.classList.remove("active-btn"));
      const currentBtn = document.querySelector(`[data-node-id="${node.id}"]`);
      if (currentBtn) currentBtn.classList.add("active-btn");

      // ← Sync select dropdown
      const selectEl = document.querySelector(".node-select");
      if (selectEl) selectEl.value = node.id;

      previous_selected_element = select_svg_element;
    }

 // Redirect on touch
function redirectHandler(e) {
  const target_id = e.currentTarget.id;

  const item = mapData.find(i => i.id === target_id);
  if (!item?.link) return;

  // --- sanitize ID to avoid injection ---
  const unit = encodeURIComponent(item.id.trim());

  // Current path (ex: "/Coastal-interactive-map/index.html")
  const pathname = window.location.pathname || "/";

  // Remove filename at end
  const basePath = pathname.replace(/\/[^/]*$/, "/");

  let baseURL = window.location.origin;

      let finalURL = baseURL;
      
      if (basePath === "/all-nodes/"){
         finalURL = new URL(item.link, baseURL);
      } else{ 
            finalURL = new URL(item.link, baseURL + basePath);
      }
      finalURL.searchParams.set("unit", unit);
     
  
      window.location.href = finalURL.href;
}


 createNodeSelect(mapData, "buttonsContainer", "node-select");
}


function restoreBaseState(el) {
  if (!el || el.dataset._baseStored !== "1") return;

  el.style.fill = el.dataset._baseFill;
  el.style.fillOpacity = el.dataset._baseFillOpacity;
  el.style.stroke = el.dataset._baseStroke;
  el.style.strokeWidth = el.dataset._baseStrokeWidth;

  el.setAttribute("class", el.dataset._baseClass);
}
