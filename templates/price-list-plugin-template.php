<?php

/**
 * Plugin template file: Price List (node-details)
 * Location: templates/price-list-plugin-template.php
 *
 * This template preserves the original node-details HTML/CSS/JS styling.
 */

defined('ABSPATH') || exit;

// Compute plugin base URL (templates folder is one level under plugin root)
$plugin_dir = plugin_dir_path(__DIR__); // points to /path/to/plugin/
$plugin_url = plugin_dir_url(__DIR__);   // points to https://site/wp-content/plugins/your-plugin/

// Enqueue external fonts and Swiper + plugin CSS in the page head
// (We enqueue before get_header so wp_head prints them)
add_action('wp_enqueue_scripts', function () use ($plugin_url) {
  // Google Fonts
  wp_enqueue_style('inodemap-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&family=Cairo:wght@200..1000&display=swap', array(), null);

  // Swiper CSS (CDN)
  wp_enqueue_style('inodemap-swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '11');

  // Plugin CSS (assets/style.css inside plugin)
 
}, 1);

// Enqueue Swiper JS (CDN) in footer
add_action('wp_enqueue_scripts', function () use ($plugin_url) {
  wp_enqueue_script('inodemap-swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), '11', true);
}, 20);


add_action('wp_enqueue_scripts', 'inodmap_enqueue_template_script');

function inodmap_enqueue_template_script()
{
  // Google Fonts
  wp_enqueue_style('inodemap-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&family=Cairo:wght@200..1000&display=swap', array(), null);

  // Swiper CSS (CDN)
  wp_enqueue_style('inodemap-swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '11');
  




    wp_enqueue_style(
            'inodemap_add_the_css',
            plugin_dir_url(__FILE__) . '../assets/style/style.css',
            array(),
            '5.0.2'
        );
}
// Now output page (use theme header/footer)
get_header();
?>

<div class="container">
  <div class="wrap">
    <div class="main">
      <!-- LEFT: Thumbnails -->
      <aside class="thumbnails" aria-label="Gallery thumbnails">
        <span class="thumb-wrap"><img class="thumb active" src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/view/view-14.webp"
            data-type="image" data-src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/view/view-14.webp"
            alt="Exterior view — Unit 14" loading="lazy"></span>

        <span class="thumb-wrap"><img class="thumb" src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/render-thumb1.webp"
            data-type="slider" alt="Interior renders — gallery" loading="lazy"></span>

        <span class="thumb-wrap"><img class="thumb" src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/type-C.webp"
            data-type="image" data-src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/type-C.webp"
            alt="Unit type C" loading="lazy"></span>

        <span class="thumb-wrap"><img class="thumb" src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/BB-floor.webp"
            data-type="image" data-src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/BB-floor.webp"
            alt="Floor Plan" loading="lazy"></span>
      </aside>

      <!-- CENTER: Main visual -->
      <main class="center-image" id="centerContainer" aria-live="polite">
        <div class="center-inner">
          <!-- Single image (default) -->
          <img id="singleImage" class="single-image"
            src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/view/view-14.webp"
            alt="Unit 14 exterior view" loading="eager" />

          <!-- Swiper gallery (hidden until slider thumb clicked) -->
          <div id="swiperWrapper" class="swiper-wrap" aria-hidden="true">
            <div class="swiper" id="thumbSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/render-car1.webp" alt="Render 1" loading="lazy"></div>
                <div class="swiper-slide"><img src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/render-car6.webp" alt="Render 2" loading="lazy"></div>
                <div class="swiper-slide"><img src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/render-car5.webp" alt="Render 3" loading="lazy"></div>
                <div class="swiper-slide"><img src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/render-car4.webp" alt="Render 4" loading="lazy"></div>
                <div class="swiper-slide"><img src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/render-car3.webp" alt="Render 5" loading="lazy"></div>
                <div class="swiper-slide"><img src="https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/render-car2.webp" alt="Render 6" loading="lazy"></div>
              </div>

              <!-- controls -->
              <div class="swiper-button-next" aria-label="Next slide" role="button" tabindex="0"></div>
              <div class="swiper-button-prev" aria-label="Previous slide" role="button" tabindex="0"></div>
              <div class="swiper-pagination" aria-hidden="false"></div>
            </div>
          </div>
        </div>
      </main>

      <!-- RIGHT: Info panel -->
      <aside class="rightUnitSide" aria-labelledby="unitTitle">
        <div class="unitRow">
          <h1 id="unitTitle" class="title">Unit 14</h1>
          <h1 class="price title"> R 5 599 999</h1>
        </div>

        <div class="unitRow">
          <div class="small-meta">Floor 0</div>
          <div class="small-meta">Block B</div>
        </div>

        <div>
          <div class="unitType">Unit type C</div>
          <div class="unitType">3 Bed - 3 Bath</div>
        </div>

        <div class="ue-link-wrap" style="margin-top:12px;">
          <a class="ue-link" id="enquire_now_btn" href="#next">
            <div class="ue-link-hover-effect-text">Enquire now</div>
            <div class="ue-link-hover-effect-spacing"></div>
          </a>
        </div>

        <div id="accordion" class="unitAccordian" aria-hidden="false">
          <div class="card">
            <a class="card-link" aria-expanded="true" href="#collapseOne">Schedule of Areas</a>
            <div id="collapseOne" class="card-body show">
              <div class="unitSheduleAreInfo" role="list">
                <div role="listitem" class="list_item">
                  <div class="cardIcon cardIcon-bed">3</div>
                </div>
                <div role="listitem" class="list_item">
                  <div class="cardIcon cardIcon-bath">3</div>
                </div>
                <div role="listitem" class="list_item">
                  <div class="cardIcon cardIcon-area">193 m<sup>2</sup></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </aside>
    </div> <!-- /main -->
  </div> <!-- /wrap -->
</div>



<?php
// --- Insert original JS (kept almost identical) ---
// To avoid duplication we print the JS inline here; you can also move it into assets/js and enqueue.
?>

<script>
  /* ------------------ ORIGINAL JS (preserved) ------------------ */
  (function() {
    // DOM helpers & variables
    const thumbs = Array.from(document.querySelectorAll('.thumb'));
    const singleImage = document.getElementById('singleImage');
    const swiperWrapper = document.getElementById('swiperWrapper');
    let swiperInstance = null;
    let activeThumb = document.querySelector('.thumb.active');

    function setActiveThumb(newThumb) {
      if (!newThumb) return;
      if (activeThumb) {
        activeThumb.classList.remove('active');
        const prevWrap = activeThumb.closest('.thumb-wrap');
        if (prevWrap) prevWrap.classList.remove('active');
      }
      newThumb.classList.add('active');
      const newWrap = newThumb.closest('.thumb-wrap');
      if (newWrap) newWrap.classList.add('active');
      activeThumb = newThumb;
    }

    thumbs.forEach(t => {
      t.addEventListener('click', function() {
        setActiveThumb(t);
        const type = t.dataset.type;
        if (type === 'slider') {
          singleImage.style.display = 'none';
          swiperWrapper.style.display = 'block';
          swiperWrapper.setAttribute('aria-hidden', 'false');
          if (swiperInstance) {
            swiperInstance.update();
            setTimeout(() => {
              try {
                swiperInstance.slideToLoop(0, 200);
              } catch (e) {}
            }, 40);
          }
        } else {
          const src = t.dataset.src || t.src;
          singleImage.src = src;
          singleImage.alt = t.alt || "Unit image";
          singleImage.style.display = 'block';
          swiperWrapper.style.display = 'none';
          swiperWrapper.setAttribute('aria-hidden', 'true');
        }

        try {
          const wrap = t.closest('.thumb-wrap');
          if (wrap && wrap.scrollIntoView) {
            wrap.scrollIntoView({
              behavior: 'smooth',
              inline: 'center',
              block: 'nearest'
            });
          }
        } catch (e) {}
      });

      t.setAttribute('tabindex', '0');
      t.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          t.click();
        }
      });
    });

    // init
    document.addEventListener('DOMContentLoaded', () => {
      activeThumb = document.querySelector('.thumb.active') || thumbs[0];
      if (activeThumb) {
        const type = activeThumb.dataset.type;
        if (type === 'slider') {
          singleImage.style.display = 'none';
        } else {
          swiperWrapper.style.display = 'none';
          singleImage.style.display = 'block';
        }
        const wrap = activeThumb.closest('.thumb-wrap');
        if (wrap) wrap.classList.add('active');
      }
    });

    // accordion
    const cardLink = document.querySelector('.card-link');
    const cardBody = document.querySelector('.card-body');
    if (cardLink) {
      cardLink.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = cardLink.getAttribute('aria-expanded') === 'true';
        cardLink.setAttribute('aria-expanded', String(!expanded));
        cardBody.classList.toggle('show');
      });
    }

    if (singleImage) {
      singleImage.addEventListener('click', () => {
        const sliderThumb = thumbs.find(t => t.dataset.type === 'slider');
        if (sliderThumb) sliderThumb.click();
      });
    }

    document.addEventListener('keydown', (ev) => {
      if (!swiperInstance) return;
      if (swiperWrapper.style.display === 'block') {
        if (ev.key === 'ArrowRight') swiperInstance.slideNext();
        if (ev.key === 'ArrowLeft') swiperInstance.slidePrev();
      }
    });

    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('dragstart', e => e.preventDefault());
    });

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => {
        if (swiperInstance) swiperInstance.update();
      });
      const centerImageEl = document.querySelector('.center-image');
      if (centerImageEl) ro.observe(centerImageEl);
    } else {
      window.addEventListener('resize', () => {
        if (swiperInstance) swiperInstance.update();
      });
    }

    // SAMPLE DATA payload and rendering (keeps your original behavior)
    const LOT_DATA_SINGLE = [{
      "lot_key": "node_1_120",
      "lot": "PLOT NO. 120",
      "size": "1672m²",
      "size_value": 1672,
      "size_unit": "m²",
      "developmentType": "RESIDENTIAL ONLY 2",
      "status": "available",
      "price": 7577855544,
      "enquire_now_btn": "https://google.com",
      "floor": "Floor 4",
      "block": "Block 5F",
      "unitType": "Unit type A",
      "beds": 2,
      "baths": 3,
      "images": {
        "krpano": "https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/view/view-14.webp",
        "slider": [
          "<?php echo esc_url($plugin_url); ?>assets/images/node-tooltip-images/node-1.png",
          "<?php echo esc_url($plugin_url); ?>assets/images/node-tooltip-images/node-2.png",
          "<?php echo esc_url($plugin_url); ?>assets/images/node-tooltip-images/node-1.png",
          "<?php echo esc_url($plugin_url); ?>assets/images/node-tooltip-images/node-2.png",
          "<?php echo esc_url($plugin_url); ?>assets/images/node-tooltip-images/node-1.png",
          "<?php echo esc_url($plugin_url); ?>assets/images/node-tooltip-images/node-2.png"
        ],
        "floor_inside": "https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/unit-page/type-C.webp",
        "floor_outside": "https://oneonseaton.co.za/wp-content/themes/One_On_Seaton/assets/BB-floor.webp"
      }
    }];

    // Preload helper
    function preloadImages(urls) {
      const promises = urls.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve({
            src,
            status: 'ok'
          });
          img.onerror = () => resolve({
            src,
            status: 'err'
          });
          img.src = src;
        });
      });
      return Promise.all(promises);
    }

    // Render logic (reads ?unit= and populates page)
    document.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      const unitId = params.get("unit");

      if (!unitId) return;

      const unit = LOT_DATA_SINGLE.find(u => u.lot_key === unitId);
      if (!unit) return;

      const titleEl = document.getElementById("unitTitle");
      if (titleEl) titleEl.textContent = unit.lot;

      const priceEl = document.querySelector(".price");
      if (priceEl) priceEl.textContent = "R " + Number(unit.price).toLocaleString();

      const smallMetaEls = document.querySelectorAll(".small-meta");
      if (smallMetaEls.length >= 2) {
        smallMetaEls[0].textContent = unit.floor || "";
        smallMetaEls[1].textContent = unit.block || "";
      }

      const unitTypeEls = document.querySelectorAll(".unitType");
      if (unitTypeEls.length >= 2) {
        unitTypeEls[0].textContent = unit.unitType || "";
        unitTypeEls[1].textContent = (unit.beds ? unit.beds + " Bed - " : "") + (unit.baths ? unit.baths + " Bath" : "");
      }

      const areaIcon = document.querySelector(".cardIcon.cardIcon-area");
      if (areaIcon && unit.size) {
        areaIcon.textContent = `${unit.size}`;
      }
      const barhhIcon = document.querySelector('.cardIcon.cardIcon-bath')
      const bedIcon = document.querySelector('.cardIcon.cardIcon-bed')
      if (barhhIcon && unit.baths) {
        barhhIcon.textContent = unit.baths;
      }
      if (bedIcon && unit.beds) {
        bedIcon.textContent = unit.beds;
      }
      const enquire_now_btn = document.getElementById('enquire_now_btn');
      if (enquire_now_btn && unit.enquire_now_btn) {
        enquire_now_btn.href = unit.enquire_now_btn;
      }

      // Replace thumbs
      const thumbEls = Array.from(document.querySelectorAll(".thumb"));
      if (thumbEls[0]) {
        thumbEls[0].src = unit.images.krpano;
        thumbEls[0].dataset.src = unit.images.krpano;
        thumbEls[0].dataset.type = "image";
        thumbEls[0].alt = `${unit.lot} — preview`;
      }
      if (thumbEls[1]) {
        thumbEls[1].src = unit.images.slider[0] || unit.images.krpano;
        thumbEls[1].dataset.type = "slider";
        thumbEls[1].alt = `${unit.lot} — gallery`;
        delete thumbEls[1].dataset.src;
      }
      if (thumbEls[2]) {
        thumbEls[2].src = unit.images.floor_inside;
        thumbEls[2].dataset.src = unit.images.floor_inside;
        thumbEls[2].dataset.type = "image";
        thumbEls[2].alt = `${unit.lot} — floor inside`;
      }
      if (thumbEls[3]) {
        thumbEls[3].src = unit.images.floor_outside;
        thumbEls[3].dataset.src = unit.images.floor_outside;
        thumbEls[3].dataset.type = "image";
        thumbEls[3].alt = `${unit.lot} — floor outside`;
      }

      if (singleImage) {
        singleImage.src = unit.images.krpano;
        singleImage.alt = `${unit.lot} main image`;
      }

      const wrapper = document.querySelector("#thumbSwiper .swiper-wrapper");
      if (wrapper) {
        wrapper.innerHTML = "";

        const slideUrls = Array.isArray(unit.images.slider) ? unit.images.slider.slice() : [];

        preloadImages(slideUrls).then(() => {
          slideUrls.forEach((img, i) => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";
            slide.innerHTML = `<img src="${img}" alt="Slide ${i+1}" loading="lazy">`;
            wrapper.appendChild(slide);
          });

          if (swiperInstance) {
            try {
              swiperInstance.destroy(true, true);
            } catch (err) {
              /* ignore */ }
            swiperInstance = null;
          }

          swiperInstance = new Swiper('#thumbSwiper', {
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            grabCursor: true,
            keyboard: {
              enabled: true
            },
            speed: 550,
            slidesPerView: 1,
            preloadImages: true,
            lazy: false,
            effect: 'slide'
          });

          const activeThumbNow = document.querySelector('.thumb.active');
          if (activeThumbNow && activeThumbNow.dataset.type === 'slider') {
            singleImage.style.display = 'none';
            swiperWrapper.style.display = 'block';
            swiperWrapper.setAttribute('aria-hidden', 'false');
            setTimeout(() => {
              try {
                swiperInstance.update();
                swiperInstance.slideToLoop(0, 200);
              } catch (e) {}
            }, 40);
          } else {
            singleImage.style.display = 'block';
            swiperWrapper.style.display = 'none';
            swiperWrapper.setAttribute('aria-hidden', 'true');
          }

        }).catch((err) => {
          slideUrls.forEach((img, i) => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";
            slide.innerHTML = `<img src="${img}" alt="Slide ${i+1}" loading="lazy">`;
            wrapper.appendChild(slide);
          });

          if (swiperInstance) {
            try {
              swiperInstance.destroy(true, true);
            } catch (err) {
              /* ignore */ }
            swiperInstance = null;
          }

          swiperInstance = new Swiper('#thumbSwiper', {
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            grabCursor: true,
            keyboard: {
              enabled: true
            },
            speed: 550,
            slidesPerView: 1,
            preloadImages: true,
            lazy: false,
            effect: 'slide'
          });

          singleImage.style.display = 'block';
          swiperWrapper.style.display = 'none';
          swiperWrapper.setAttribute('aria-hidden', 'true');
        });
      }
    });
  })();
</script>

<?php
// footer (theme footer)
get_footer();
