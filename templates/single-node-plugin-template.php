<?php
/**
 * Plugin template file: Single Node
 * Filename: single-node-plugin-template.php
 *
 * This template shows a unique style for a single node.
 * Example usage: /node-details?node=123
 */

defined('ABSPATH') || exit;
// get the url query parameter 'unit'

if(isset($_GET['unit'])){

  $node_url_unit = sanitize_text_field( $_GET['unit'] );
} 



get_header();

?> 


    <div class="rhill-serchMenu">
        <div class="menuInner">
            <button class="mobileSearchNav" id="mobileToggle">Filter by:</button>

            <div class="searchandfilter" id="searchForm">
                <ul id="filterList">
                    <!-- NODE -->

                    <!-- DEVELOPMENT TYPE / LAND USE (filled by JS) -->
                    <li data-sf-field-name="_sfm_block">
                        <label>
                            <select
                                name="_sfm_block[]"
                                class="sf-input-select"
                                id="blockSelect">
                                <option value="">Development Type / Land Use</option>
                            </select>
                        </label>
                    </li>

                    <!-- PRICE RANGE (filled by JS) -->
                    <li data-sf-field-name="_sfm_price-field">
                        <label>
                            <select
                                name="_sfm_price-field[]"
                                class="sf-input-select"
                                id="priceSelect">
                                <option value="">Price Range</option>
                            </select>
                        </label>
                    </li>

                    <!-- STATUS (Sold and Available) -->
                    <li data-sf-field-name="_sfm_status">
                        <label>
                            <select
                                name="_sfm_status[]"
                                class="sf-input-select"
                                id="statusSelect">
                                <option value="">Status</option>
                                <option value="available">Available</option>
                                <option value="sold">Sold</option>
                            </select>
                        </label>
                    </li>

                    <!-- RESET -->
                    <li class="sf-field-reset" id="resetLi">
                        <a href="#" class="search-filter-reset" id="resetBtn">Reset</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

<?php



include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . 'views/fontend/node-1-map.php';
get_footer();