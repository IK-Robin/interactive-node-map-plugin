<?php
// Prevent direct access to this file
if (!defined('ABSPATH')) {
    exit;
}
?>

<div id="ikr_map_tooltip2" class="ikrwmap_tooltip"></div>
<div class="ikrwmap_details_container" id="ikrwmap_details_e1">
    <!-- <div id="closeDetail"> close</div> -->
    <div style="position: relative">
        <!-- Tooltip Cards -->
        <div class="ikr_tooltip-card">
            <h3 class="tooltip-title" id="tooltip-title_e1"></h3>
            <p><strong>Size:</strong> <span id="ikr_size_e1" class="tooltip-sqft"></span> sq. ft.</p>
            <p class="tooltip-description" id="ikr_tooltip_discription_e1"></p>
            <hr>
            <p><strong>Room Build:</strong> $<span class="build-amount" id="room_build_price_e1"></span></p>
            <p class="status build-status" id="build-status_e1"></p>
            <hr>
            <p><strong>Room Furnish:</strong> $<span class="build-amount" id="room_furnished_e1"></span></p>
            <p class="status furnish-status" id="furnish-status_e1"></p>
            <hr>
            <p class="tooltip-total">Total: $<span class="tooltip-total-value" id="ikr_total_amount_e1"></span></p>
        </div>
    </div>
</div>