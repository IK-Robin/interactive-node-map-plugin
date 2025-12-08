
<?php 
// tooltip page 
if ( ! defined( 'ABSPATH' ) ) exit;
?>

<div id="ikr_map_tooltip" class="ikrwmap_tooltip"></div>
<div class="ikrwmap_details_container" id="ikrwmap_details">
  <!-- <div id="closeDetail"> close</div> -->
        <div style="position: relative">
          
          



          <!-- Tooltip Cards -->
<div class="ikr_tooltip-card" data-tooltip="tooltip-1">
  <h3 class="tooltip-title" id="tooltip-title"></h3>
  <p><strong>Size:</strong> <span  id="ikr_size" class="tooltip-sqft"></span> sq. ft.</p>
  <p class="tooltip-description" id="ikr_tooltip_discription"></p>
  <hr>
  <p><strong>Room Build:</strong> $<span class="build-amount" id="room_build_price"></span></p>
  <p class="status build-status" id="build-status"></p>
  <hr>
  <p><strong>Room Furnish:</strong> $<span class="furnish-amount" id="room_furnished"></span></p>
  <p class="status furnish-status" id="furnish-status"></p>
  <hr>
  <p class="tooltip-total">Total: $<span class="tooltip-total-value" id="ikr_total_amount"></span></p>
</div>

        </div>
      </div>