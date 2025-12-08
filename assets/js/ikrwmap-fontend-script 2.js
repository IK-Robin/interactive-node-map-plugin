// const ikrwmap_get_url = {
//   featchdata: 'fetch_map_data', // Replace with your actual action
//   ajax_url: '/wp-admin/admin-ajax.php' // Replace with your actual AJAX URL
// };

document.addEventListener("DOMContentLoaded", (event) => {
  // Store the data globally so it can be reused
  let mapDataCache = null;

  // Select all elements with class "svg4"
  const svg4Elements = document.querySelectorAll(".svg4");

  svg4Elements.forEach((svg4, index) => {
    // Create unique tooltip and details containers for each SVG
    const tooltip = document.createElement("div");
    tooltip.className = "ikr_map_tooltip";
    tooltip.style.position = "absolute";
    tooltip.style.display = "none";

    const detailsContainer = document.createElement("div");
    detailsContainer.className = "ikrwmap_details_container";
    detailsContainer.style.position = "absolute";
    detailsContainer.style.display = "none";
    detailsContainer.innerHTML = `
      <div style="position: relative">
        <div class="ikrwmap_detail_img" style="display: none;">
          <img src="" alt="" class="ikrwmap_detail_img_inner" />
        </div>
        <div class="ikrwmap_details">
          <div class="ikrmap_detail_des"></div>
          <a class="ikrwmap_tooltip_button" target="_blank" href="" style="display: none;">Details</a>
        </div>
      </div>
    `;

    // Append tooltip and details to the SVG's parent container
    svg4.parentElement.appendChild(tooltip);
    svg4.parentElement.appendChild(detailsContainer);

    // Get references to the newly created elements using classes
    const ikr_map_tooltip = svg4.parentElement.querySelector(".ikr_map_tooltip");
    const ikrwmap_details = svg4.parentElement.querySelector(".ikrwmap_details_container");
    const ikrwmap_detail_img = svg4.parentElement.querySelector(".ikrwmap_detail_img_inner");
    const detail_img_container = svg4.parentElement.querySelector(".ikrwmap_detail_img");
    const ikrmap_detail_des = svg4.parentElement.querySelector(".ikrmap_detail_des");
    const ikrwmap_btnTxt = svg4.parentElement.querySelector(".ikrwmap_tooltip_button");
    const ikrwmap_output = svg4.parentElement.querySelector(".ikrwmap_output");
    const ikrwmap_outputs = document.querySelectorAll(`[data-id="ikrwmap_output"]`);

    let items = svg4.querySelectorAll("rect, path, circle, polygon");

    async function ikrwmap_retrieve_data_from_db() {
      try {
        const response = await world_map_fetchAjaxRequest(
          ikrwmap_get_url.featchdata,
          ikrwmap_get_url.ajax_url
        );

        if (response.length === 0) {
          console.log("No data retrieved for SVG", index);
          return;
        }

        mapDataCache = response;

        items.forEach((mapId) => {
          mapDataCache.forEach((data) => {
            if (mapId.id === data.map_id) {
              const setColor = svg4.querySelector(`#${mapId.id}`);
              setColor.style.fill = `${data.fill_color}`;
              setColor.setAttribute("data-fill", data.fill_color || "");
              setColor.setAttribute("data-hover", data.hov_color || "");
              setColor.setAttribute("data-img", data.map_img || "");
              setColor.setAttribute("data-link", data.map_link || "");
              setColor.setAttribute("data-title", data.title || "");
              setColor.setAttribute("data-desc", data.map_des || "");
            }
          });
        });
      } catch (err) {
        console.error("Error fetching data for SVG", index, err);
      }
    }

    ikrwmap_retrieve_data_from_db();

    items.forEach((svg_path) => {
      if (isMobile()) {
        svg_path.addEventListener("touchstart", (ev) => {
          ev.preventDefault();
          ikrwmap_click_map_event(ev, ikrwmap_details, ikrmap_detail_des, ikrwmap_detail_img, detail_img_container, ikrwmap_btnTxt);
        });

        svg_path.addEventListener("touchend", (ev) => {
          ev.preventDefault();
          ikrwmap_f_hideTooltip(ev, ikr_map_tooltip);
        });
      } else {
        svg_path.addEventListener("click", (ev) => {
          ikrwmap_click_map_event(ev, ikrwmap_details, ikrmap_detail_des, ikrwmap_detail_img, detail_img_container, ikrwmap_btnTxt);
        });

        svg_path.addEventListener("mousemove", (ev) => {
          if (mapDataCache) {
            const hoveredId = ev.target.id;
            const data = mapDataCache.find((d) => d.map_id === hoveredId);
            if (data) {
              ikrwmap_f_showTooltip(ev, ikr_map_tooltip);
            }
          }
        });

        svg_path.addEventListener("mouseout", (ev) => {
          ikrwmap_f_hideTooltip(ev, ikr_map_tooltip);
        });
      }
    });

    window.addEventListener('click', (ev) => {
      if (ikrwmap_details.contains(ev.target)) {
        return;
      }

      let matchFound = false;
      let i = 0;

      if (mapDataCache) {
        do {
          if (mapDataCache[i].map_id == ev.target.id) {
            matchFound = true;
            break;
          }
          i++;
        } while (i < mapDataCache.length);
      }

      if (!matchFound) {
        ikrwmap_details.style.display = 'none';
      }
    });
  });

  function ikrwmap_click_map_event(ev, details, detail_des, detail_img, img_container, btnTxt) {
    const ct = ev.target;
    const ct_dataset = ct.dataset;
    const screenWidth = window.innerWidth;

    // Position relative to the SVG
    const svgRect = ct.closest('svg').getBoundingClientRect();
    const offsetX = ev.clientX - svgRect.left;
    const offsetY = ev.clientY - svgRect.top;

    details.style.top = offsetY + "px";

    if (screenWidth < 350 && offsetX < 150) {
      details.style.left = offsetX + details.offsetWidth / 6 + "px";
    } else if (screenWidth < 350 && offsetX < 200) {
      details.style.left = offsetX - details.offsetWidth + "px";
    } else if (screenWidth < 500 && offsetX > 120) {
      details.style.left = offsetX - details.offsetWidth + "px";
    } else if (screenWidth > 500) {
      details.style.left = offsetX - details.offsetWidth + "px";
    } else {
      details.style.left = offsetX + "px";
    }

    if (
      (ct_dataset.img && ct_dataset.img.trim() !== "") ||
      (ct_dataset.link && ct_dataset.link.trim() !== "") ||
      (ct_dataset.title && ct_dataset.title.trim() !== "") ||
      (ct_dataset.desc && ct_dataset.desc.trim() !== "")
    ) {
      detail_des.innerHTML = `
        <h3 class="ikrmap_title">
          ${ct_dataset.title && ct_dataset.title !== '' ? ct_dataset.title : ct_dataset.name}
        </h3> 
        <p>${ct_dataset.desc || ""}</p>
      `;

      if (ct_dataset.img && ct_dataset.img.trim() !== "") {
        detail_img.src = ct_dataset.img;
        img_container.style.display = "block";
      } else {
        img_container.style.display = "none";
      }
      if (ct_dataset.link && ct_dataset.link.trim() !== "") {
        btnTxt.href = ct_dataset.link;
        btnTxt.style.display = "block";
      } else {
        btnTxt.style.display = "none";
      }

      details.style.display = "block";
    } else {
      details.style.display = "none";
    }

    ct.style.fill = ct_dataset.hover || "";
  }

  function ikrwmap_f_showTooltip(hover, tooltip) {
    let ct = hover.target;
    let data_name = ct.dataset;

    ct.style.stroke = "black";
    ct.style.opacity = ".5";
    ct.style.fill = data_name.hover || "";
    ct.style.cursor = "pointer";

    tooltip.style.display = "block";
    tooltip.innerHTML = ` ${data_name.title && data_name.title !== '' ? data_name.title : data_name.name}`;

    const svgRect = ct.closest('svg').getBoundingClientRect();
    const offsetX = hover.clientX - svgRect.left;
    const offsetY = hover.clientY - svgRect.top;

    tooltip.style.top = offsetY - 40 + "px";
    tooltip.style.left = offsetX + "px";
  }

  function ikrwmap_f_hideTooltip(ev, tooltip) {
    let ct = ev.target;
    let data_name = ct.dataset;

    ct.style.stroke = "none";
    ct.style.opacity = ".0";
    ct.style.fill = data_name.fill || "";

    tooltip.style.display = "none";
  }

  function world_map_fetchAjaxRequest(actions, ajaxurl) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", ajaxurl, true);
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
      );

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
              resolve(response.data);
            } else {
              reject(response.error);
            }
          } else {
            reject(xhr.statusText);
          }
        }
      };

      xhr.send(`action=${actions}`);
    });
  }

  function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
});