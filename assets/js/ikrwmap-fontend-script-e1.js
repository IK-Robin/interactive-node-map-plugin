const ikrgooMaps = document.querySelector(".svg_img_obj");
const ikr_map_tooltip2 = document.getElementById("ikr_map_tooltip2");
const ikrwmap_details_e1 = document.getElementById("ikrwmap_details_e1");
const ikrwmap_btnTxt_2 = document.getElementById('ikrwmap_btnTxt_2');





// all reusable functions and variables are defined in the top of the code. The main logic is in the `ikrwmap'

// select all tooltip content 

const tooltip_title = document.getElementById('tooltip-title_e1');
const ikr_size = document.getElementById('ikr_size_e1');
const ikr_tooltip_discription = document.getElementById('ikr_tooltip_discription_e1');
const room_build_price = document.getElementById('room_build_price_e1');
const room_build_status = document.getElementById('build-status_e1');

const room_furnished = document.getElementById('room_furnished_e1');
const furnish_status = document.getElementById('furnish-status_e1');
const ikr_total = document.getElementById('ikr_total_amount_e1');



document.addEventListener("DOMContentLoaded", (event) => {
  // Create the SVG element and set attributes


  // Append the SVG to the output container
  // ikrwmap_output.appendChild(ikrwmap_svg);

  // Store the data globally so it can be reused
  let mapDataCache = null;

  const svg4 = document.getElementById("svg5");
  if(!svg4) return;
  let items = svg4.querySelectorAll("rect, path, circle, polygon");

  async function ikrwmap_retrieve_data_from_db() {
    try {
      // Fetch the data from the database
      const response = await world_map_fetchAjaxRequest(
        ikrwmap_get_url_e1.featchdata,
        ikrwmap_get_url_e1.ajax_url
      );

      if (response.length === 0) {
        // console.log("No data retrieved from the database.");
        return;
      }

      // Cache the data for later use
      mapDataCache = response;

      // console.log(response)
      // Apply initial styles based on the data
      items.forEach((mapId) => {
        mapDataCache.forEach((data) => {
          if (mapId.id === data.map_id) {
            const setColor = svg4.querySelector(`#${mapId.id}`);
            // setColor.style.fill = `${data.fill_color}`;


                   if (data.fill_color !== '') {
  setColor.style.fill = data.fill_color;
} else if (data.click_color !== '' && data.click_color !== '#0000FF') {
  setColor.style.fill = data.click_color;
}


             setColor.style.opacity ='.3';
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

  // Initialize the map by retrieving data
  ikrwmap_retrieve_data_from_db();

  // Add event listeners to the SVG elements
  items.forEach((svg_path) => {
    // check the device mobile or desktop
    if (isMobile()) {
      svg_path.addEventListener("touchstart", (ev) => {
        ev.preventDefault(); // Prevent scrolling while moving
        // ikrwmap_click_map_event(ev);
        ikrwmap_click_map_event_touch(ev);
      });

      svg_path.addEventListener("touchend", (ev) => {
        // change the orginal color to hover color
        ev.preventDefault();
        setTimeout(() => {
          
          ikrwmap_f_hideTooltip(ev);
        }, 500);
      });
    } else {
      // Click event
      svg_path.addEventListener("click", (ev) => {
        ikrwmap_click_map_event(ev);
      });

      // Mousemove event
      svg_path.addEventListener("mousemove", (ev) => {
        if (mapDataCache) {
          const hoveredId = ev.target.id;
          const data = mapDataCache.find((d) => d.map_id === hoveredId);
          if (data) {
            // console.log("Hovered data:", data);
            // You can handle the mousemove logic here
            ikrwmap_f_showTooltip(ev);
          }
        }
      });

      // Mouseout event
      svg_path.addEventListener("mouseout", (ev) => {
        //  console.log(ev)
        // ikr_map_tooltip2.style.display = "none";

        ikrwmap_f_hideTooltip(ev);
      });
    }

    // svg_path.addEventListener("touchend", () => {

    //   ikrwmap_f_hideTooltip(ev);
    // });
    // svg_path.addEventListener("touchcancel", ikrwmap_f_hideTooltip);
  });

  window.addEventListener('click', (ev) => {
    // Check if the click is within ikrwmap_details_e1
    if (ikrwmap_details_e1.contains(ev.target)) {
      return; // Do nothing if the click is inside ikrwmap_details_e1
    }

    let matchFound = false;
    let i = 0;

    do {
      if (mapDataCache[i].map_id == ev.target.id) {
        matchFound = true;
        break;
      }
      i++;
    } while (i < mapDataCache.length);

    // If no match was found, hide the tooltip
    if (!matchFound) {
      ikrwmap_details_e1.style.display = 'none';
    }
  });

});



// old code to show the tooltip 

// let isFirstClick = true;

// function ikrwmap_click_map_event(ev) {
//   const ct = ev.target;
//   const ct_dataset = ct.dataset;
//   const screenWidth = window.innerWidth;
//   const screenHeight = window.innerHeight;

// //  console.log('pagex',ev.pageX )
//   // Ensure the tooltip element is visible to get its dimensions accurately
//   if (
//     ikrwmap_details_e1.style.display === "none" ||
//     !ikrwmap_details_e1.style.display
//   ) {
//     ikrwmap_details_e1.style.display = "block";
//     ikrwmap_details_e1.style.visibility = "hidden"; // Prevent flashing on screen
//   }

//   const tooltipWidth = ikrwmap_details_e1.offsetWidth;
//   const tooltipHeight = ikrwmap_details_e1.offsetHeight;

//   ikrwmap_details_e1.style.visibility = ""; // Restore visibility

//   let tooltipX = 0;
//   let tooltipY = 0;

//   // Check if it's the first click
//    if (isFirstClick) {

//     if(ev.type == 'click'){

//       if (screenWidth < 500 && ev.pageX > 120) {
//         ikrwmap_details_e1.style.left =
//           ev.pageX - 150  + "px";
//       } else if (screenWidth <900 && ev.pageX < 120){
//         ikrwmap_details_e1.style.left = ev.pageX + ev.pageX + "px";
//       } else if (screenWidth > 500) {
//         ikrwmap_details_e1.style.left =
//           ev.pageX - ikrwmap_details_e1.offsetWidth + "px";
//       } 

//       if(ev.pageY >=400)  {

//         ikrwmap_details_e1.style.top =ev.pageY - ikrwmap_details_e1.offsetHeight/2  + "px";   

//       }else{
//         ikrwmap_details_e1.style.top =ev.pageY + "px";   
//         }




//       } else if( ev.type == 'touchstart'){
//         if (screenWidth < 500 && ev.touches[0].pageX > 120) {
//           ikrwmap_details_e1.style.left =
//             ev.touches[0].pageX - 150  + "px";
//         } else if (screenWidth > 500) {
//           ikrwmap_details_e1.style.left =
//             ev.touches[0].pageX - ikrwmap_details_e1.offsetWidth + "px";
//         } 

//         if(ev.touches[0].pageY >=400)  {

//           ikrwmap_details_e1.style.top =ev.touches[0].pageY + ikrwmap_details_e1.offsetHeight +30+ "px";   

//         }else{
//           ikrwmap_details_e1.style.top =ev.touches[0].pageY + "px";   
//           }
//             isFirstClick = false; // Reset the flag after the first click
//       }
//       isFirstClick = false; // Reset the flag after the first click


// }else{


//     // show the cursor bottom 
//     if (ev.type === "click") {
//       const clickX = ev.pageX; // Cursor's X position
//       const clickY = ev.pageY; // Cursor's Y position
//       const tooltipWidth = ikrwmap_details_e1.offsetWidth;
//       const tooltipHeight = ikrwmap_details_e1.offsetHeight;
//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;

//       let tooltipX = clickX - tooltipWidth / 2; // Center the tooltip horizontally around the cursor
//       let tooltipY = clickY - tooltipHeight - 10; // Position the tooltip above the cursor (10px offset)

//       // Ensure the tooltip doesn't overflow horizontally
//       if (tooltipX + tooltipWidth > screenWidth) {
//         tooltipX = screenWidth - tooltipWidth - 10; // Align to the right edge
//       } else if (tooltipX < 10) {
//         tooltipX = 10; // Align to the left edge
//       }

//       // Ensure the tooltip doesn't overflow vertically
//       if (tooltipY < 10) {
//         tooltipY = clickY + 10; // If not enough space above, move it below the cursor
//       }

//       // Update tooltip position
//       ikrwmap_details_e1.style.left = `${tooltipX}px`;
//       ikrwmap_details_e1.style.top = `${tooltipY}px`;

//       console.log("Tooltip Position:", { x: tooltipX, y: tooltipY });
//     }


//   // show tooltip cursor bottom 
//   else if (ev.type === "touchstart") {
//     const touchX = ev.touches[0].pageX;
//     const touchY = ev.touches[0].pageY;
//     const tooltipWidth = ikrwmap_details_e1.offsetWidth;
//     const tooltipHeight = ikrwmap_details_e1.offsetHeight;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;

//     let tooltipX = touchX; // Default horizontal position
//     let tooltipY = touchY + 20; // Default vertical position below the touch point (20px offset)

//     // Horizontal position for touch
//     if (touchX + tooltipWidth > screenWidth) {
//       tooltipX = screenWidth - tooltipWidth - 10; // Align to the right edge
//     } else if (touchX < 10) {
//       tooltipX = 10; // Align to the left edge
//     } else {
//       tooltipX = touchX - tooltipWidth / 2; // Center horizontally around the touch point
//     }

//     // Vertical position for touch (always below the touch point)
//     if (tooltipY + tooltipHeight > screenHeight) {
//       // If there's not enough space below, adjust to fit within the screen
//       tooltipY = screenHeight - tooltipHeight - 10;
//     }

//     // Update tooltip position
//     ikrwmap_details_e1.style.left = `${tooltipX}px`;
//     ikrwmap_details_e1.style.top = `${tooltipY}px`;

//     console.log("Tooltip Position (Touchstart):", { x: tooltipX, y: tooltipY });
//   }


// }

//   // Update tooltip content if dataset has relevant information
//   if (
//     (ct_dataset.img && ct_dataset.img.trim() !== "") ||
//     (ct_dataset.link && ct_dataset.link.trim() !== "") ||
//     (ct_dataset.title && ct_dataset.title.trim() !== "") ||
//     (ct_dataset.desc && ct_dataset.desc.trim() !== "")
//   ) {
//     // Populate the tooltip content
//     ikrmap_detail_des_2.innerHTML = `
//       <h3 id="ikrmap_title" class="ikrmap_title">
//         ${ct_dataset.title && ct_dataset.title !=='' ? ct_dataset.title : ct_dataset.name}
//       </h3> 
//       <p>${ct_dataset.desc ? ct_dataset.desc : ""}</p>
//     `;

//     // Update the image container
//     if (ct_dataset.img && ct_dataset.img.trim() !== "") {
//       ikrwmap_detail_img_2.src = ct_dataset.img; // Set image source
//       detail_img_2.style.display = "block"; // Show image container
//     } else {
//       detail_img_2.style.display = "none"; // Hide if no image
//     }
//     if (ct_dataset.link && ct_dataset.link.trim() !== "") {
//       ikrwmap_btnTxt_2.href= ct_dataset.link; // Set link
//       ikrwmap_btnTxt_2.style.display = "block"; // Show image container
//     } else {
//       ikrwmap_btnTxt_2.style.display = "none"; // Hide if no image
//     }

//     // Show tooltip
//     ikrwmap_details_e1.style.display = "block";
//   } else {
//     // Hide the tooltip if no valid content
//     ikrwmap_details_e1.style.display = "none";
//   }

//   // Apply hover style to the target element
//   ct.style.fill = ct_dataset.hover ? ct_dataset.hover : "";
// }


// ===================================================



//for mobile screen 
function ikrwmap_click_map_event_touch(ev) {
  ev.preventDefault();

  const ct = ev.target;
  const ct_dataset = ct.dataset;
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const ikrwmap_details = document.getElementById('ikrwmap_details');
  const ikrwmap_details_e1 = document.getElementById('ikrwmap_details_e1');

  if (!ikrwmap_details_e1) return;

  if (ikrwmap_details) {
    ikrwmap_details.style.display = "none";
  }

  // Temporarily show to measure width
  ikrwmap_details_e1.style.visibility = 'hidden';
  ikrwmap_details_e1.style.display = 'block';

  // Get coordinates depending on event type
  let offsetX, offsetY;
  if (ev.type.startsWith('touch')) {
    const touch = ev.touches[0] || ev.changedTouches[0];
    const rect = ct.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
  } else {
    offsetX = ev.offsetX;
    offsetY = ev.offsetY;
  }

  const tooltipWidth = ikrwmap_details_e1.offsetWidth;

  // Position Y
  ikrwmap_details_e1.style.top = offsetY + "px";

  // Position X with fix for >500 width screens (clamping)
  if (screenWidth < 350 && offsetX < 150) {
    ikrwmap_details_e1.style.left = offsetX + tooltipWidth / 6 + "px";
  } else if (screenWidth < 350 && offsetX < 200) {
    ikrwmap_details_e1.style.left = offsetX - tooltipWidth + "px";
  } else if (screenWidth < 500 && offsetX > 120) {
    ikrwmap_details_e1.style.left = offsetX - tooltipWidth + "px";
  } else if (screenWidth > 500) {
    let leftPos = offsetX - tooltipWidth;
    leftPos = Math.max(0, Math.min(leftPos, screenWidth - tooltipWidth));
    ikrwmap_details_e1.style.left = leftPos + "px";
  } else {
    ikrwmap_details_e1.style.left = offsetX + "px";
  }

  // Show final tooltip
  ikrwmap_details_e1.style.visibility = 'visible';

  // --- CONTENT SETUP ---
  if (
    ct_dataset.img?.trim() ||
    ct_dataset.link?.trim() ||
    ct_dataset.title?.trim() ||
    ct_dataset.size?.trim() ||
    ct_dataset.room_build?.trim() ||
    ct_dataset.room_build_sponsore?.trim() ||
    ct_dataset.room_furnish?.trim() ||
    ct_dataset.room_furnished_sponsore?.trim() ||
    ct_dataset.desc?.trim()
  ) {
    // Title
tooltip_title.innerText = ct_dataset.title && ct_dataset.title.trim() !== "" ? ct_dataset.title : "";

// Size
ikr_size.innerText = ct_dataset.size && ct_dataset.size.trim() !== "" ? ct_dataset.size : "";

// Description (your existing logic stays, but add fallback for empty)
if (ct_dataset.desc && ct_dataset.desc.trim() !== "") {
  // existing description logic here (no change)
  const fullText = ct_dataset.desc.trim();
  ikr_tooltip_discription.innerHTML = ""; // clear old content
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

        ikr_tooltip_discription.appendChild(spanShort);
        ikr_tooltip_discription.appendChild(spanFull);
        ikr_tooltip_discription.appendChild(spanReadMore);
    } else {
    ikr_tooltip_discription.textContent = fullText;
  }
} else {
  // if desc empty or null, clear description
  ikr_tooltip_discription.innerText = "";
}

// room_build
room_build_price.innerText =
  ct_dataset.room_build && ct_dataset.room_build.trim() !== ""
    ? Number(ct_dataset.room_build).toLocaleString('en-US')
    : "";

// console.log(Number(ct_dataset.room_build).toLocaleString('en-US'))


// room_build_sponsore
if (ct_dataset.room_build_sponsore && ct_dataset.room_build_sponsore.trim() !== "") {
  room_build_status.className = `status build-status ${ct_dataset.room_build_sponsore.toLowerCase()}`;
  room_build_status.innerText = ct_dataset.room_build_sponsore;
} else {
  room_build_status.className = "";
  room_build_status.innerText = "";
}

// room_furnish
room_furnished.innerText =
  ct_dataset.room_furnish && ct_dataset.room_furnish.trim() !== ""
    ? Number(ct_dataset.room_furnish).toLocaleString('en-US')
    : "";
// room_furnished_sponsore
if (ct_dataset.room_furnished_sponsore && ct_dataset.room_furnished_sponsore.trim() !== "") {
  furnish_status.className = `status build-status ${ct_dataset.room_furnished_sponsore.toLowerCase()}`;
  furnish_status.innerText = ct_dataset.room_furnished_sponsore;
} else {
  furnish_status.className = "";
  furnish_status.innerText = "";
}




  function cleanNumber(str) {
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;
}

const buildNum = cleanNumber(ct_dataset.room_build);
const furnishNum = cleanNumber(ct_dataset.room_furnish);
const total = buildNum + furnishNum;

// Format with commas if ≥ 1000
ikr_total.innerText = total.toLocaleString('en-US');


    ikrwmap_details_e1.style.display = "block";
  } else {
    ikrwmap_details_e1.style.display = "none";
  }

  // Hover color
  ct.style.fill = ct_dataset.hover || "";
}

function ikrwmap_click_map_event(ev) {
  const ct = ev.target;
  const ct_dataset = ct.dataset;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const ikrwmap_details = document.getElementById('ikrwmap_details');
  const ikrwmap_details_e1 = document.getElementById('ikrwmap_details_e1');

  if (!ikrwmap_details_e1) return;

  if (ikrwmap_details) {
    ikrwmap_details.style.display = "none";
  }

  // 👇 Temporarily show to measure width
  ikrwmap_details_e1.style.visibility = 'hidden';
  ikrwmap_details_e1.style.display = 'block';

  const offsetX = ev.offsetX;
  const offsetY = ev.offsetY;
  const tooltipWidth = ikrwmap_details_e1.offsetWidth;

  // Position Y
  ikrwmap_details_e1.style.top = offsetY + "px";

  // Position X
  if (screenWidth < 350 && offsetX < 150) {
    ikrwmap_details_e1.style.left = offsetX + tooltipWidth / 6 + "px";
  } else if (screenWidth < 350 && offsetX < 200) {
    ikrwmap_details_e1.style.left = offsetX - tooltipWidth + "px";
  } else if (screenWidth < 500 && offsetX > 120) {
    ikrwmap_details_e1.style.left = offsetX - tooltipWidth + "px";
  } else if (screenWidth > 500) {
    ikrwmap_details_e1.style.left = offsetX - tooltipWidth + "px";
  } else {
    ikrwmap_details_e1.style.left = offsetX + "px";
  }

  // ✅ Show final tooltip after measuring
  ikrwmap_details_e1.style.visibility = 'visible';

  // --- CONTENT SETUP ---
  if (
    ct_dataset.img?.trim() ||
    ct_dataset.link?.trim() ||
    ct_dataset.title?.trim() ||
    ct_dataset.size?.trim() ||
    ct_dataset.room_build?.trim() ||
    ct_dataset.room_build_sponsore?.trim() ||
    ct_dataset.room_furnish?.trim() ||
    ct_dataset.room_furnished_sponsore?.trim() ||
    ct_dataset.desc?.trim()
  ) {
// Title
tooltip_title.innerText = ct_dataset.title && ct_dataset.title.trim() !== "" ? ct_dataset.title : "";

// Size
ikr_size.innerText = ct_dataset.size && ct_dataset.size.trim() !== "" ? ct_dataset.size : "";

// Description (your existing logic stays, but add fallback for empty)
if (ct_dataset.desc && ct_dataset.desc.trim() !== "") {
  // existing description logic here (no change)
  const fullText = ct_dataset.desc.trim();
  ikr_tooltip_discription.innerHTML = ""; // clear old content
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

        ikr_tooltip_discription.appendChild(spanShort);
        ikr_tooltip_discription.appendChild(spanFull);
        ikr_tooltip_discription.appendChild(spanReadMore);
    } else {
    ikr_tooltip_discription.textContent = fullText;
  }
} else {
  // if desc empty or null, clear description
  ikr_tooltip_discription.innerText = "";
}

// room_build
room_build_price.innerText =
  ct_dataset.room_build && ct_dataset.room_build.trim() !== ""
    ? Number(ct_dataset.room_build).toLocaleString('en-US')
    : "";

// console.log(Number(ct_dataset.room_build).toLocaleString('en-US'))
// room_build_sponsore
if (ct_dataset.room_build_sponsore && ct_dataset.room_build_sponsore.trim() !== "") {
  room_build_status.className = `status build-status ${ct_dataset.room_build_sponsore.toLowerCase()}`;
  room_build_status.innerText = ct_dataset.room_build_sponsore;
} else {
  room_build_status.className = "";
  room_build_status.innerText = "";
}

// room_furnish
room_furnished.innerText =
  ct_dataset.room_furnish && ct_dataset.room_furnish.trim() !== ""
    ? Number(ct_dataset.room_furnish).toLocaleString('en-US')
    : "";

// room_furnished_sponsore
if (ct_dataset.room_furnished_sponsore && ct_dataset.room_furnished_sponsore.trim() !== "") {
  furnish_status.className = `status build-status ${ct_dataset.room_furnished_sponsore.toLowerCase()}`;
  furnish_status.innerText = ct_dataset.room_furnished_sponsore;
} else {
  furnish_status.className = "";
  furnish_status.innerText = "";
}

//calculate the number here to show the amount of rooms
function cleanNumber(str) {
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;
}

const buildNum = cleanNumber(ct_dataset.room_build);
const furnishNum = cleanNumber(ct_dataset.room_furnish);
const total = buildNum + furnishNum;

// Format with commas if ≥ 1000
ikr_total.innerText = total.toLocaleString('en-US');




    ikrwmap_details_e1.style.display = "block";
  } else {
    ikrwmap_details_e1.style.display = "none";
  }

  // Hover color
  ct.style.fill = ct_dataset.hover || "";
}



// const closeDetail = document.getElementById("closeDetail");
// closeDetail.addEventListener("click", () => {
//   ikrwmap_details_e1.style.display = "none";
// });





function ikrwmap_f_showTooltip(hover) {
  let ct = hover.target;
  let data_name = ct.dataset;

  // // add a stock color in map id
  ct.style.stroke = "black";
  ct.style.opacity = ".5";


  ct.style.fill = data_name.hover ? data_name.hover : "";
  ct.style.cursor = "pointer";

  ikr_map_tooltip2.style.display = "block";
  // ikr_map_tooltip2.innerHTML = data_name.title ==''? data_name.name: data_name.title;
  ikr_map_tooltip2.innerHTML = ` ${data_name.title && data_name.title !== '' ? data_name.title : data_name.name}`
  let cx = hover.pageX;
  let cy = hover.pageY;
  // ikr_map_tooltip2.style.top = cy - 30 + "px";

  ikr_map_tooltip2.style.top = hover.offsetY - 40 + "px";
  ikr_map_tooltip2.style.left = hover.offsetX + "px";
  // ikr_map_tooltip2.style.left = cx + "px";

  // tooltip.style.top = hover.layerY + "px";
  // tooltip.style.left = hover.layerX + "px";


  let screenWidth = window.innerWidth;
  // if (screenWidth < 350 && ev.offsetX < 150) {
  //   ikr_map_tooltip2.style.left = hover.offsetX + ikr_map_tooltip2.offsetWidth / 6 + "px";
  // } else if (screenWidth < 350 && hover.offsetX < 200) {
  //   ikr_map_tooltip2.style.left = hover.offsetX - ikr_map_tooltip2.offsetWidth + "px";
  // } else if (screenWidth < 500 && hover.offsetX > 120) {
  //   ikr_map_tooltip2.style.left = hover.offsetX - ikr_map_tooltip2.offsetWidth + "px";
  // } else if (screenWidth > 500) {
  //   ikr_map_tooltip2.style.left = hover.offsetX - ikr_map_tooltip2.offsetWidth + "px";
  // } else {
  //   ikr_map_tooltip2.style.left = hover.offsetX + "px";
  // }





}

// hide the tooltip

function ikrwmap_f_hideTooltip(ev) {
  let ct = ev.target;


  let data_name = ct.dataset;

  // Reset styles
  ct.style.stroke = "none";
  ct.style.opacity = ".3";
  // ct.style.fill = data_name.fill ? data_name.fill : "";
     if(data_name.fill !== ''){

            ct.style.fill = data_name.fill || "";
          }
          else if(data_name.partially_sponsored !== ''){
            ct.style.fill = data_name.partially_sponsored || "";
          }

  // Hide the tooltip
  ikr_map_tooltip2.style.display = "none";
    if(ct.id == "cupola_weatherane"){
      ct.style.opacity = "1";
      ct.style.stroke = "#000";
      ct.style.fill ="#fff";
      return;
  }
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

// chekc it mobile or not
function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  return regex.test(navigator.userAgent);
}
