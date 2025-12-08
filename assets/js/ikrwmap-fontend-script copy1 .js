const ikrgooMap = document.querySelector(".svg_img_obj");
// const ikr_map_tooltip = document.getElementById("ikr_map_tooltip");
// const ikrwmap_details = document.getElementById("ikrwmap_details");
const ikrwmap_btnTxt = document.getElementById('ikrwmap_btnTxt');



document.addEventListener("DOMContentLoaded", (event) => {
  // Create the SVG element and set attributes
  const ikrwmap_svg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  ikrwmap_svg.setAttribute("viewBox", "0 0 1000 640");
  ikrwmap_svg.classList.add("svg4"); // Add class instead of ID

  // Set innerHTML of the SVG to include the path
  ikrwmap_svg.innerHTML = world_map_img;

  // Store the data globally so it can be reused
  let mapDataCache = null;

  // Select all elements with class "svg4"
  const svg4Elements = document.querySelectorAll(".svg4");

  // Process each SVG element with class "svg4"
  svg4Elements.forEach((svg4) => {
    let items = svg4.querySelectorAll("rect, path, circle, polygon");
    console.log(items)
    async function ikrwmap_retrieve_data_from_db() {
      try {
        // Fetch the data from the database
        const response = await world_map_fetchAjaxRequest(
          ikrwmap_get_url.featchdata,
          ikrwmap_get_url.ajax_url
        );

        if (response.length === 0) {
          console.log("No data retrieved from the database.");
          return;
        }

        // Cache the data for later use
        mapDataCache = response;

        console.log(response);
        // Apply initial styles based on the data
        items.forEach((mapId) => {
          mapDataCache.forEach((data) => {
            if (mapId.id === data.map_id) {
              const setColor = svg4.querySelector(`#${mapId.id}`);
              setColor.style.fill = `${data.fill_color}`;
              setColor.setAttribute(
                "data-fill",
                data.fill_color == null || "" ? "" : data.fill_color
              );
              setColor.setAttribute(
                "data-hover",
                data.hov_color == null || "" ? "" : data.hov_color
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
                "data-title",
                data.title == null || "" ? "" : data.title
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
    // items.forEach((svg_path) => {
    //   if (isMobile()) {
    //     svg_path.addEventListener("touchstart", (ev) => {
    //       ev.preventDefault();
    //       ikrwmap_click_map_event(ev);
    //     });

    //     svg_path.addEventListener("touchend", (ev) => {
    //       ev.preventDefault();
    //       ikrwmap_f_hideTooltip(ev);
    //     });
    //   } else {
    //     svg_path.addEventListener("click", (ev) => {
    //       ikrwmap_click_map_event(ev);
    //     });

    //     svg_path.addEventListener("mousemove", (ev) => {
    //       if (mapDataCache) {
    //         const hoveredId = ev.target.id;
    //         const data = mapDataCache.find((d) => d.map_id === hoveredId);
    //         if (data) {
    //           ikrwmap_f_showTooltip(ev);
    //         }
    //       }
    //     });

    //     svg_path.addEventListener("mouseout", (ev) => {
    //       ikrwmap_f_hideTooltip(ev);
    //     });
    //   }
    // });


    // try to open the each tooltip using class method 


    // items.forEach((svg_path) => {
    //   if (isMobile()) {
    //     svg_path.addEventListener("touchstart", (ev) => {
    //       ev.preventDefault();
    //       ikrwmap_click_map_event(ev);
    //     });

    //     svg_path.addEventListener("touchend", (ev) => {
    //       ev.preventDefault();
    //       ikrwmap_f_hideTooltip(ev);
    //     });
    //   } else {
    //     svg_path.addEventListener("click", (ev) => {
    //       ikrwmap_click_map_event(ev);
    //     });


    //   }


    // });
    const data = [];

    class TooltipManager {

      constructor(data) {
        this.data = data;
        this.ikrwmap_details_container = document.querySelectorAll('.ikrwmap_details_container');

        // select all tooltip map 
        this.ikr_map_tooltip = document.querySelectorAll('.ikrwmap_tooltip');

        
        this.init();
      }

      init() {
        items.forEach(room => {
          room.addEventListener('click', (ev) => {

            console.log('the ')
            if (mapDataCache) {
              const hoveredId = ev.target.id;
              const data = mapDataCache.find((d) => d.map_id === hoveredId);

              if (data) {

                this.showTooltip(ev)
              }

            }

            // console.log(mapDataCache)
          });


          room.addEventListener('mousemove', (ev) => {
           this.ikrwmap_f_showTooltip(ev);
          });
          room.addEventListener('mouseout', (ev) => {
           this.ikrwmap_f_hideTooltip(ev);
          });



        });


        //      window.addEventListener('click', (ev) => {
        //   // Prevent closing if click is inside any tooltip
        //   for (const tooltip of document.querySelectorAll('.ikrwmap_details_container')) {
        //     if (tooltip.contains(ev.target)) return;
        //   }

        //   // Check if clicked ID is in mapDataCache
        //   const targetId = ev.target.id;
        //   const isMatch = mapDataCache && mapDataCache.some(item => item.map_id === targetId);

        //   if (!isMatch) {
        //     this.hideAll(); // Hide all tooltips if no match found
        //   }
        // });

        window.addEventListener('resize', () => this.hideAll());
      }


      showTooltip(ev) {
        // const id = room.dataset.roomId;
        const ct = ev.target;
        const ct_dataset = ct.dataset;

        const closestSvg = ev.target.closest('svg.svg4');

        const ikr_tooltip_card = closestSvg.parentNode.querySelector('.ikrwmap_details_container');

        // select the tooltip card elements 

        const tooltip_title = ikr_tooltip_card.querySelector('.tooltip-title');
        const tooltip_sqft = ikr_tooltip_card.querySelector('.tooltip-sqft');
        const tooltip_desc = ikr_tooltip_card.querySelector('.tooltip-description');
        const tooltip_build_amount = ikr_tooltip_card.querySelector('.build-amount');
        const tooltip_build_status = ikr_tooltip_card.querySelector('.build-status');
        const tooltip_furnish_amount = ikr_tooltip_card.querySelector('.furnish-amount');
        const tooltip_furnish_status = ikr_tooltip_card.querySelector('.furnish-status');
        const tooltip_total_value = ikr_tooltip_card.querySelector('.tooltip-total-value');









        const rect = ct.getBoundingClientRect();










        // add the moving functonality 
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        ikr_tooltip_card.style.top = ev.offsetY + "px";

        if (screenWidth < 350 && ev.offsetX < 150) {
          ikr_tooltip_card.style.left = ev.offsetX + ikr_tooltip_card.offsetWidth / 6 + "px";
        } else if (screenWidth < 350 && ev.offsetX < 200) {
          ikr_tooltip_card.style.left = ev.offsetX - ikr_tooltip_card.offsetWidth + "px";
        } else if (screenWidth < 500 && ev.offsetX > 120) {
          ikr_tooltip_card.style.left = ev.offsetX - ikr_tooltip_card.offsetWidth + "px";
        } else if (screenWidth > 500) {
          ikr_tooltip_card.style.left = ev.offsetX - ikr_tooltip_card.offsetWidth + "px";
        } else {
          ikr_tooltip_card.style.left = ev.offsetX + "px";
        }

        // add tooltip related data here 


        if (
          (ct_dataset.img && ct_dataset.img.trim() !== "") ||
          (ct_dataset.link && ct_dataset.link.trim() !== "") ||
          (ct_dataset.title && ct_dataset.title.trim() !== "") ||
          (ct_dataset.desc && ct_dataset.desc.trim() !== "")
        ) {

          console.log(tooltip_title)

          tooltip_title.innerHTML = `
        ${ct_dataset.title && ct_dataset.title !== '' ? ct_dataset.title : ct_dataset.name}
    `;
          // <p>${ct_dataset.desc ? ct_dataset.desc : ""}</p>

          // if (ct_dataset.img && ct_dataset.img.trim() !== "") {
          //   ikrwmap_detail_img.src = ct_dataset.img;
          //   detail_img_container.style.display = "block";
          // } else {
          //   detail_img_container.style.display = "none";
          // }
          // if (ct_dataset.link && ct_dataset.link.trim() !== "") {
          //   ikrwmap_btnTxt.href = ct_dataset.link;
          //   ikrwmap_btnTxt.style.display = "block";
          // } else {
          //   ikrwmap_btnTxt.style.display = "none";
          // }

          //  





        }




        else {
          ikrwmap_details.style.display = "none";
        }

        ct.style.fill = ct_dataset.hover ? ct_dataset.hover : "";






        ikr_tooltip_card.classList.add('visible');

      }




      ikrwmap_f_showTooltip(hover) {
        let ct = hover.target;
     console.log(ct.id)
     

     
        const closestSvg = hover.target.closest('svg.svg4');

        const ikr_tooltip = closestSvg.parentNode.querySelector('.ikrwmap_tooltip');

        console.log(ikr_tooltip)

        
      }

      ikrwmap_f_hideTooltip(ev) {

        let ct = ev.target;
        let data_name = ct.dataset;

        ct.style.stroke = "none";
        ct.style.opacity = ".0";
        ct.style.fill = data_name.fill ? data_name.fill : "";

this.ikr_map_tooltip.forEach(hide_tooltip =>{

  hide_tooltip.style.display = "none";
});

      }



      hideAll() {
        this.ikrwmap_details_container.forEach(t => t.classList.remove('visible'));
      }
    }
    new TooltipManager(data);

  });




  // window.addEventListener('click', (ev) => {
  //   if (ikrwmap_details.contains(ev.target)) {
  //     return;
  //   }

  //   let matchFound = false;
  //   let i = 0;

  //   do {
  //     if (mapDataCache[i].map_id == ev.target.id) {
  //       matchFound = true;
  //       break;
  //     }
  //     i++;
  //   } while (i < mapDataCache.length);

  //   if (!matchFound) {
  //     ikrwmap_details.style.display = 'none';
  //   }
  // });
});

function ikrwmap_click_map_event(ev) {



  const ct = ev.target;
  const ct_dataset = ct.dataset;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  ikrwmap_details.style.top = ev.offsetY + "px";

  if (screenWidth < 350 && ev.offsetX < 150) {
    ikrwmap_details.style.left = ev.offsetX + ikrwmap_details.offsetWidth / 6 + "px";
  } else if (screenWidth < 350 && ev.offsetX < 200) {
    ikrwmap_details.style.left = ev.offsetX - ikrwmap_details.offsetWidth + "px";
  } else if (screenWidth < 500 && ev.offsetX > 120) {
    ikrwmap_details.style.left = ev.offsetX - ikrwmap_details.offsetWidth + "px";
  } else if (screenWidth > 500) {
    ikrwmap_details.style.left = ev.offsetX - ikrwmap_details.offsetWidth + "px";
  } else {
    ikrwmap_details.style.left = ev.offsetX + "px";
  }

  if (
    (ct_dataset.img && ct_dataset.img.trim() !== "") ||
    (ct_dataset.link && ct_dataset.link.trim() !== "") ||
    (ct_dataset.title && ct_dataset.title.trim() !== "") ||
    (ct_dataset.desc && ct_dataset.desc.trim() !== "")
  ) {
    //   ikrmap_detail_des.innerHTML = `
    //     <h3 id="ikrmap_title" class="ikrmap_title">
    //       ${ct_dataset.title && ct_dataset.title !=='' ? ct_dataset.title : ct_dataset.name}
    //     </h3> 
    //     <p>${ct_dataset.desc ? ct_dataset.desc : ""}</p>
    //   `;

    //   if (ct_dataset.img && ct_dataset.img.trim() !== "") {
    //     ikrwmap_detail_img.src = ct_dataset.img;
    //     detail_img_container.style.display = "block";
    //   } else {
    //     detail_img_container.style.display = "none";
    //   }
    //   if (ct_dataset.link && ct_dataset.link.trim() !== "") {
    //     ikrwmap_btnTxt.href = ct_dataset.link;
    //     ikrwmap_btnTxt.style.display = "block";
    //   } else {
    //     ikrwmap_btnTxt.style.display = "none";
    //   }

    //   ikrwmap_details.style.display = "block";





  }




  else {
    ikrwmap_details.style.display = "none";
  }

  ct.style.fill = ct_dataset.hover ? ct_dataset.hover : "";
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