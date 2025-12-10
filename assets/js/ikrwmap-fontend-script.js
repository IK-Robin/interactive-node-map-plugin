const wm2_ikrgooMap = document.querySelector(".svg_img_obj");
const wm2_ikr_map_tooltip = document.getElementById("ikr_map_tooltip");
const wm2_ikrwmap_details = document.getElementById("ikrwmap_details");
// const wm2_ikrwmap_btnTxt = document.getElementById("ikrwmap_btnTxt");

const wm2_ikrwmap_output = document.getElementById("ikrwmap_output");
const wm2_ikrwmap_outputs = document.querySelectorAll(`[data-id="ikrwmap_output"]`);

// const wm2_ikrwmap_detail_img = document.getElementById("ikrwmap_detail_img");
// const wm2_detail_img_container = document.getElementById("detail_img");
// const wm2_ikrmap_detail_des = document.getElementById("ikrmap_detail_des");

const wm_2tooltip_title = document.getElementById('tooltip-title');
const wm_2ikr_size = document.getElementById('ikr_size');
const wm_2ikr_tooltip_discription = document.getElementById('ikr_tooltip_discription');
const wm2_room_build_price = document.getElementById('room_build_price');
const wm2_room_build_status = document.getElementById('build-status');

const wm2_room_furnished = document.getElementById('room_furnished');
const wm_ikr_furnish_status = document.getElementById('furnish-status');
const wm2_ikr_total = document.getElementById('ikr_total_amount');




document.addEventListener("DOMContentLoaded", (event) => {

  let wm2_mapDataCache = null;
  const wm2_svg4 = document.getElementById("ikr_svg");
  if (!wm2_svg4) return;
  console.log('hel')
  let wm2_items = wm2_svg4.querySelectorAll("rect, path, circle, polygon");

  async function wm2_ikrwmap_retrieve_data_from_db() {
    try {
      const response = await wm2_world_map_fetchAjaxRequest(
        ikrwmap_get_url.featchdata,
        ikrwmap_get_url.ajax_url
      );
      console.log(response)

      if (response.length === 0) {
        // console.log("No data retrieved from the database.");
        return;
      }

      wm2_mapDataCache = response;

      wm2_items.forEach((mapId) => {
        wm2_mapDataCache.forEach((data) => {
          if (mapId.id === data.map_id) {
            const setColor = wm2_svg4.querySelector(`#${mapId.id}`);
            // setColor.style.fill = `${data.fill_color}`;

            if (data.fill_color !== '') {
              setColor.style.fill = data.fill_color;
            } else if (data.click_color !== '' && data.click_color !== '#0000FF') {
              setColor.style.fill = data.click_color;
            }

            setColor.style.opacity = '.3';
            setColor.setAttribute(
              "data-fill",
              data.fill_color == null || "" ? "" : data.fill_color
            );
            setColor.setAttribute(
              "data-hover",
              data.hov_color == null || "" ? "" : data.hov_color
            );
            setColor.setAttribute(
              "data-partially_sponsored",
              data.click_color == null || "" ? "" : data.click_color
            );
            setColor.setAttribute(
              "data-img",
              data.map_img == null || "" ? "" : data.map_img
            );
            setColor.setAttribute(
              "data-link",
              data.map_link == null || "" ? "" : data.map_link
            );

            setColor.setAttribute(
              "data-size",
              data.ikr_size == null || "" ? "" : data.ikr_size
            );

            setColor.setAttribute(
              "data-title",
              data.title == null || "" ? "" : data.title
            );

            setColor.setAttribute(
              "data-room_build",
              data.title == null || "" ? "" : data.room_build
            );
            setColor.setAttribute(
              "data-room_build_sponsore",
              data.title == null || "" ? "" : data.room_build_sponsore
            );
            setColor.setAttribute(
              "data-room_furnish",
              data.title == null || "" ? "" : data.room_furnish
            );
            setColor.setAttribute(
              "data-room_furnished_sponsore",
              data.title == null || "" ? "" : data.room_furnished_sponsore
            );





            setColor.setAttribute(
              "data-desc",
              data.map_des == null || "" ? "" : data.map_des
            );
          }
        });
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  wm2_ikrwmap_retrieve_data_from_db();

  wm2_items.forEach((svg_path) => {
    if (wm2_isMobile()) {
      svg_path.addEventListener("touchstart", (ev) => {
        ev.preventDefault();
        // wm2_ikrwmap_click_map_event(ev);
        // wm2_ikrwmap_click_map_event_touch(ev);
        wm2_ikrwmap_click_map_event_touch(ev);
      });

      svg_path.addEventListener("touchend", (ev) => {
        ev.preventDefault();

        setTimeout(() => {
          wm2_ikrwmap_f_hideTooltip(ev);


        }, 500);
      });
    } else {
      svg_path.addEventListener("click", (ev) => {
        wm2_ikrwmap_click_map_event(ev);
      });

      svg_path.addEventListener("mousemove", (ev) => {
        if (wm2_mapDataCache) {
          const hoveredId = ev.target.id;
          const data = wm2_mapDataCache.find((d) => d.map_id === hoveredId);
          if (data) {
            wm2_ikrwmap_f_showTooltip(ev);
          }
        }
      });

      svg_path.addEventListener("mouseout", (ev) => {
        wm2_ikrwmap_f_hideTooltip(ev);
      });
    }
  });

  window.addEventListener("click", (ev) => {
    if (wm2_ikrwmap_details.contains(ev.target)) {
      return;
    }

    let matchFound = false;
    let i = 0;

    do {
      if (wm2_mapDataCache[i].map_id == ev.target.id) {
        matchFound = true;
        break;
      }
      i++;
    } while (i < wm2_mapDataCache.length);

    if (!matchFound) {
      wm2_ikrwmap_details.style.display = "none";
    }
  });
});


function wm2_ikrwmap_click_map_event_touch(ev) {
  ev.preventDefault();

  // Determine event target and coordinates differently for mouse and touch
  let ct = ev.target;
  let ct_dataset = ct.dataset;

  // Coordinates relative to the target element
  let offsetX, offsetY;

  if (ev.type.startsWith('touch')) {
    // For touch events, get the first touch point
    const touch = ev.touches[0] || ev.changedTouches[0];
    const rect = ct.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
  } else {
    // For mouse events, use offsetX/Y
    offsetX = ev.offsetX;
    offsetY = ev.offsetY;
  }

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const ikrwmap_details_e1 = document.getElementById('ikrwmap_details_e1');
  if (ikrwmap_details_e1) {
    ikrwmap_details_e1.style.display = "none";
  }

  wm2_ikrwmap_details.style.visibility = 'hidden';
  wm2_ikrwmap_details.style.display = 'block';

  wm2_ikrwmap_details.style.top = offsetY + "px";

  // Position logic same as before but using offsetX now calculated correctly

  if (screenWidth < 350 && offsetX < 150) {
    wm2_ikrwmap_details.style.left = offsetX + wm2_ikrwmap_details.offsetWidth / 6 + "px";
  } else if (screenWidth < 350 && offsetX < 200) {
    wm2_ikrwmap_details.style.left = offsetX - wm2_ikrwmap_details.offsetWidth + "px";
  } else if (screenWidth < 500 && offsetX > 120) {
    wm2_ikrwmap_details.style.left = offsetX - wm2_ikrwmap_details.offsetWidth + "px";
  } else if (screenWidth > 500) {
    wm2_ikrwmap_details.style.left = offsetX + wm2_ikrwmap_details.offsetWidth / 2 + "px";
    // console.log(screenHeight)
  } else {
    wm2_ikrwmap_details.style.left = offsetX + "px";
  }

  wm2_ikrwmap_details.style.visibility = 'visible';

  // Now fill the details if data attributes exist
  if (
    (ct_dataset.img && ct_dataset.img.trim() !== "") ||
    (ct_dataset.link && ct_dataset.link.trim() !== "") ||
    (ct_dataset.title && ct_dataset.title.trim() !== "") ||
    (ct_dataset.size && ct_dataset.size.trim() !== "") ||
    (ct_dataset.room_build && ct_dataset.room_build.trim() !== "") ||
    (ct_dataset.room_build_sponsore && ct_dataset.room_build_sponsore.trim() !== "") ||
    (ct_dataset.room_furnish && ct_dataset.room_furnish.trim() !== "") ||
    (ct_dataset.room_furnished_sponsore && ct_dataset.room_furnished_sponsore.trim() !== "") ||
    (ct_dataset.desc && ct_dataset.desc.trim() !== "")
  ) {

    wm_2tooltip_title.innerText = (ct_dataset.title && ct_dataset.title.trim() !== "") ? ct_dataset.title : "";

    wm_2ikr_size.innerText = (ct_dataset.size && ct_dataset.size.trim() !== "") ? ct_dataset.size : "";

    if (ct_dataset.desc && ct_dataset.desc.trim() !== "") {
      const fullText = ct_dataset.desc.trim();

      wm_2ikr_tooltip_discription.innerHTML = ""; // clear old content

      if (fullText.length > 300) {
        const limitedText = fullText.slice(0, 300) + "... ";

        // Short version
        const spanShort = document.createElement("span");
        spanShort.className = "desc-short";
        spanShort.textContent = limitedText;

        // Full version (hidden at start)
        const spanFull = document.createElement("span");
        spanFull.className = "desc-full hidden";
        spanFull.textContent = fullText;

        // Read More link
        const spanReadMore = document.createElement("span");
        spanReadMore.className = "readmore-btn";
        spanReadMore.textContent = "Read More";

        spanReadMore.addEventListener("click", function () {
          spanShort.classList.toggle("hidden");
          spanFull.classList.toggle("hidden");
          spanReadMore.textContent = spanFull.classList.contains("hidden")
            ? "Read More"
            : "Read Less";
        });

        wm_2ikr_tooltip_discription.appendChild(spanShort);
        wm_2ikr_tooltip_discription.appendChild(spanFull);
        wm_2ikr_tooltip_discription.appendChild(spanReadMore);
      } else {
        wm_2ikr_tooltip_discription.textContent = fullText;
      }
    } else {
      wm_2ikr_tooltip_discription.innerText = "";
    }

   wm2_room_build_price.innerText =
  ct_dataset.room_build && ct_dataset.room_build.trim() !== ""
    ? Number(ct_dataset.room_build).toLocaleString('en-US')
    : "";

    if (ct_dataset.room_build_sponsore && ct_dataset.room_build_sponsore.trim() !== "") {
      wm2_room_build_status.className = `status build-status ${ct_dataset.room_build_sponsore.toLowerCase()}`;
      wm2_room_build_status.innerText = ct_dataset.room_build_sponsore;
    } else {
      wm2_room_build_status.className = "";
      wm2_room_build_status.innerText = "";
    }

  wm2_room_furnished.innerText =
  ct_dataset.room_furnish && ct_dataset.room_furnish.trim() !== ""
    ? Number(ct_dataset.room_furnish).toLocaleString('en-US')
    : "";

    if (ct_dataset.room_furnished_sponsore && ct_dataset.room_furnished_sponsore.trim() !== "") {
      wm_ikr_furnish_status.className = `status build-status ${ct_dataset.room_furnished_sponsore.toLowerCase()}`;
      wm_ikr_furnish_status.innerText = ct_dataset.room_furnished_sponsore;
    } else {
      wm_ikr_furnish_status.className = "";
      wm_ikr_furnish_status.innerText = "";
    }

    // room total
     function cleanNumber(str) {
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;
}

const buildNum = cleanNumber(ct_dataset.room_build);
const furnishNum = cleanNumber(ct_dataset.room_furnish);
const total = buildNum + furnishNum;

// Format with commas if ≥ 1000
wm2_ikr_total.innerText = total.toLocaleString('en-US');

    // You commented out img and link code — leaving as-is
    /*
    if (ct_dataset.img && ct_dataset.img.trim() !== "") {
      // wm2_ikrwmap_detail_img.src = ct_dataset.img;
      // wm2_detail_img_container.style.display = "block";
    } else {
      // wm2_detail_img_container.style.display = "none";
    }

    if (ct_dataset.link && ct_dataset.link.trim() !== "") {
      // wm2_ikrwmap_btnTxt.href = ct_dataset.link;
      // wm2_ikrwmap_btnTxt.style.display = "block";
    } else {
      // wm2_ikrwmap_btnTxt.style.display = "none";
    }
    */

    wm2_ikrwmap_details.style.display = "block";
  } else {
    wm2_ikrwmap_details.style.display = "none";
  }

  ct.style.fill = ct_dataset.hover ? ct_dataset.hover : "";
}




function wm2_ikrwmap_click_map_event(ev) {
  const ct = ev.target;
  const ct_dataset = ct.dataset;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const ikrwmap_details_e1 = document.getElementById('ikrwmap_details_e1');
  if (ikrwmap_details_e1) {
    ikrwmap_details_e1.style.display = "none";
  }

  wm2_ikrwmap_details.style.visibility = 'hidden';
  wm2_ikrwmap_details.style.display = 'block';

  wm2_ikrwmap_details.style.top = ev.offsetY + "px";

  if (screenWidth < 350 && ev.offsetX < 150) {
    wm2_ikrwmap_details.style.left = ev.offsetX + wm2_ikrwmap_details.offsetWidth / 6 + "px";
  } else if (screenWidth < 350 && ev.offsetX < 200) {
    wm2_ikrwmap_details.style.left = ev.offsetX - wm2_ikrwmap_details.offsetWidth + "px";
  } else if (screenWidth < 500 && ev.offsetX > 120) {
    wm2_ikrwmap_details.style.left = ev.offsetX - wm2_ikrwmap_details.offsetWidth + "px";
  } else if (screenWidth > 500) {
    wm2_ikrwmap_details.style.left = ev.offsetX - wm2_ikrwmap_details.offsetWidth + "px";
  } else {
    wm2_ikrwmap_details.style.left = ev.offsetX + "px";
  }

  wm2_ikrwmap_details.style.visibility = 'visible';

  if (
    (ct_dataset.img && ct_dataset.img.trim() !== "") ||
    (ct_dataset.link && ct_dataset.link.trim() !== "") ||
    (ct_dataset.title && ct_dataset.title.trim() !== "") ||
    (ct_dataset.size && ct_dataset.size.trim() !== "") ||
    (ct_dataset.room_build && ct_dataset.room_build.trim() !== "") ||
    (ct_dataset.room_build_sponsore && ct_dataset.room_build_sponsore.trim() !== "") ||
    (ct_dataset.room_furnish && ct_dataset.room_furnish.trim() !== "") ||
    (ct_dataset.room_furnished_sponsore && ct_dataset.room_furnished_sponsore.trim() !== "") ||
    (ct_dataset.desc && ct_dataset.desc.trim() !== "")
  ) {

    wm_2tooltip_title.innerText = (ct_dataset.title && ct_dataset.title.trim() !== "") ? ct_dataset.title : "";

    wm_2ikr_size.innerText = (ct_dataset.size && ct_dataset.size.trim() !== "") ? ct_dataset.size : "";

    if (ct_dataset.desc && ct_dataset.desc.trim() !== "") {
      const fullText = ct_dataset.desc.trim();

      wm_2ikr_tooltip_discription.innerHTML = ""; // clear old content

      if (fullText.length > 300) {
        const limitedText = fullText.slice(0, 300) + "... ";

        // Short version
        const spanShort = document.createElement("span");
        spanShort.className = "desc-short";
        spanShort.textContent = limitedText;

        // Full version (hidden at start)
        const spanFull = document.createElement("span");
        spanFull.className = "desc-full hidden";
        spanFull.textContent = fullText;

        // Read More link
        const spanReadMore = document.createElement("span");
        spanReadMore.className = "readmore-btn";
        spanReadMore.textContent = "Read More";

        spanReadMore.addEventListener("click", function () {
          spanShort.classList.toggle("hidden");
          spanFull.classList.toggle("hidden");
          spanReadMore.textContent = spanFull.classList.contains("hidden")
            ? "Read More"
            : "Read Less";
        });

        wm_2ikr_tooltip_discription.appendChild(spanShort);
        wm_2ikr_tooltip_discription.appendChild(spanFull);
        wm_2ikr_tooltip_discription.appendChild(spanReadMore);
      } else {
        wm_2ikr_tooltip_discription.textContent = fullText;
      }
    } else {
      wm_2ikr_tooltip_discription.innerText = "";
    }
wm2_room_build_price.innerText =
  ct_dataset.room_build && ct_dataset.room_build.trim() !== ""
    ? Number(ct_dataset.room_build).toLocaleString('en-US')
    : "";

    if (ct_dataset.room_build_sponsore && ct_dataset.room_build_sponsore.trim() !== "") {
      wm2_room_build_status.className = `status build-status ${ct_dataset.room_build_sponsore.toLowerCase()}`;
      wm2_room_build_status.innerText = ct_dataset.room_build_sponsore;
    } else {
      wm2_room_build_status.className = "";
      wm2_room_build_status.innerText = "";
    }

    wm2_room_furnished.innerText =
  ct_dataset.room_furnish && ct_dataset.room_furnish.trim() !== ""
    ? Number(ct_dataset.room_furnish).toLocaleString('en-US')
    : "";

    if (ct_dataset.room_furnished_sponsore && ct_dataset.room_furnished_sponsore.trim() !== "") {
      wm_ikr_furnish_status.className = `status build-status ${ct_dataset.room_furnished_sponsore.toLowerCase()}`;
      wm_ikr_furnish_status.innerText = ct_dataset.room_furnished_sponsore;
    } else {
      wm_ikr_furnish_status.className = "";
      wm_ikr_furnish_status.innerText = "";
    }

    // room total
    // wm2_ikr_total.innerText = (parseInt(ct_dataset.room_build, 10) || 0) + (parseInt(ct_dataset.room_furnish, 10) || 0);

        // room total
     function cleanNumber(str) {
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;
}

const buildNum = cleanNumber(ct_dataset.room_build);
const furnishNum = cleanNumber(ct_dataset.room_furnish);
const total = buildNum + furnishNum;

// Format with commas if ≥ 1000
wm2_ikr_total.innerText = total.toLocaleString('en-US');

    

    // You commented out img and link code — leaving as-is
    /*
    if (ct_dataset.img && ct_dataset.img.trim() !== "") {
      // wm2_ikrwmap_detail_img.src = ct_dataset.img;
      // wm2_detail_img_container.style.display = "block";
    } else {
      // wm2_detail_img_container.style.display = "none";
    }

    if (ct_dataset.link && ct_dataset.link.trim() !== "") {
      // wm2_ikrwmap_btnTxt.href = ct_dataset.link;
      // wm2_ikrwmap_btnTxt.style.display = "block";
    } else {
      // wm2_ikrwmap_btnTxt.style.display = "none";
    }
    */

    wm2_ikrwmap_details.style.display = "block";
  } else {
    wm2_ikrwmap_details.style.display = "none";
  }

  ct.style.fill = ct_dataset.hover ? ct_dataset.hover : "";
}

function wm2_ikrwmap_f_showTooltip(hover) {
  let ct = hover.target;
  let data_name = ct.dataset;

  ct.style.stroke = "black";
  ct.style.opacity = ".5";
  ct.style.fill = data_name.hover ? data_name.hover : "";
  ct.style.cursor = "pointer";

  wm2_ikr_map_tooltip.style.display = "block";
  wm2_ikr_map_tooltip.innerHTML = ` ${data_name.title && data_name.title !== "" ? data_name.title : data_name.name
    }`;
  wm2_ikr_map_tooltip.style.top = hover.offsetY - 40 + "px";
  wm2_ikr_map_tooltip.style.left = hover.offsetX + "px";

}

function wm2_ikrwmap_f_hideTooltip(ev) {
  let ct = ev.target;

  let data_name = ct.dataset;

  ct.style.stroke = "none";
  ct.style.opacity = ".3";

  if (data_name.fill !== '') {

    ct.style.fill = data_name.fill || "";
  }
  else if (data_name.partially_sponsored !== '') {
    ct.style.fill = data_name.partially_sponsored || "";
  }
  // ct.style.fill = data_name.fill ? data_name.fill : "";

  wm2_ikr_map_tooltip.style.display = "none";
  if (ct.id == "cupola_weatherane") {
    ct.style.opacity = ".3";
    ct.style.stroke = "#000";
    ct.style.fill = data_name.fill;
    return;
  }
}

function wm2_world_map_fetchAjaxRequest(actions, ajaxurl) {
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

function wm2_isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}