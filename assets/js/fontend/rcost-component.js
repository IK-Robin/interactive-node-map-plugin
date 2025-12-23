
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


function renderTooltipContent_all_nodes(mapD) {
  // mapD is expected to have:
  // mapD.nodeName, mapD.nodeSubtitle, mapD.imageUrl,
  // mapD.area, mapD.sites, mapD.desc1, mapD.desc2, mapD.desc3

  const nodeName = mapD.node;
  const nodeSubtitle = mapD.nodeSubtitle || (mapD.developmentType || "");
  const area = mapD.area || mapD.size || "";
  const sites = mapD.lotNumber || "";
  const img = mapD.imageUrl || "https://via.placeholder.com/600x300";

  return `
    <div class="rcost-plot-tooltip">
      <div class="node-tooltip">
        <div class="node-tooltip__image-wrapper">
          <img
            src="${img}"
            alt="${nodeName}"
            class="node-tooltip__image"
          />
          <div class="node-tooltip__badge">
            <div class="node-tooltip__badge-title"> ${nodeName}</div>
            <div class="node-tooltip__badge-subtitle">
              ${nodeSubtitle}
            </div>
          </div>
        </div>

        <div class="node-tooltip__body">
          <div class="node-tooltip__metrics">
            <div class="node-tooltip__metric-main">
              <span class="node-tooltip__metric-value">${area}</span>
            </div>
            ${sites
      ? `<div class="node-tooltip__metric-sub">${sites} Sites</div>`
      : ""
    }
          </div>

          <div class="node-tooltip__divider"></div>

          <div class="node-tooltip__text">
            ${mapD.description
      ? `<p>${mapD.description}</p>`
      : ""
    }
           
          </div>
        </div>
      </div>
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
        console.log(lotNumber)
        // console.log(lotNumber)
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
  const el = document.getElementById(node.id);
  if (!el) return;

  // Restore previous
  if (previous_selected_element && previous_selected_element.parentNode) {
    const savedNextSibling = previous_selected_element.originalNextSibling;

    if (savedNextSibling && savedNextSibling.parentNode) {
      previous_selected_element.parentNode.insertBefore(
        previous_selected_element,
        savedNextSibling
      );
    } else {
      previous_selected_element.parentNode.appendChild(previous_selected_element);
    }

    previous_selected_element.classList.remove("selected-node");
    clearStrokeHover(previous_selected_element, animation_class);
    previous_selected_element.removeEventListener("pointerup", redirectHandler);
  }

  // Bring current to front
  el.originalNextSibling = el.nextSibling;
  el.parentNode.appendChild(el);

  el.classList.add("selected-node");
  el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  applyStrokeHover(el, animation_class);

  zoomInstance.flyToId(el.id);

  el.dataset.nodeLink = node.link;

  // ✅ SAFE redirect trigger
  el.addEventListener("pointerup", redirectHandler);

  // Button active state
  document.querySelectorAll(".plot-btn").forEach(btn =>
    btn.classList.remove("active-btn")
  );

  const currentBtn = document.querySelector(`[data-node-id="${node.id}"]`);
  if (currentBtn) currentBtn.classList.add("active-btn");

  // Sync dropdown
  const selectEl = document.querySelector(".node-select");
  if (selectEl) selectEl.value = node.id;

  previous_selected_element = el;
}


 // Redirect on touch
function redirectHandler(e) {
  if (zoomInstance.isDragging()) return;

  const target_id = e.currentTarget.id;
  const item = mapData.find(i => i.id === target_id);
  if (!item?.link) return;

  const unit = encodeURIComponent(item.id.trim());
  const baseURL = window.location.origin;
  const url = new URL(item.link, baseURL);
  url.searchParams.set("unit", unit);

  window.location.href = url.href;
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
