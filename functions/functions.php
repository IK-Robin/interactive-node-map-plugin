<?php
if (! defined('ABSPATH')) exit;
// add shortcode in the plugin 

include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './includes/ikrwmap_shortcode.php';



// add scripts on map plugin
function ikrwmap_add_rdat_scripts()
{

    $ikr_world_map_current_screen = get_current_screen();




    if ($ikr_world_map_current_screen->base == "toplevel_page_interactive-node-map" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-1" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-2" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-3" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-4" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-5") {
        // add zoom js 

        wp_enqueue_script('ikrwmap_add_zoom_js', plugin_dir_url(__FILE__) . '../assets/js/ikr-zoom.js', [], '1.0.1', true);
        wp_enqueue_script('from_submit', plugin_dir_url(__FILE__) . '../assets/js/ikrwmap-interactivity.js', array(), '1.0.1', true);

        // wp_enqueue_script('featch_data_from_server',plugin_dir_url(__FILE__) . '../assets/js/your-custom.js');
        wp_enqueue_media();
        wp_enqueue_script('featch_data_from_server', plugin_dir_url(__FILE__) . '../assets/js/worldmap-global.js', [], '1.0.1', false);
        wp_enqueue_script('add_ikrwmap_image', plugin_dir_url(__FILE__) . '../assets/js/ikrwmap-images.js', [], '1.0.1', true);



        wp_enqueue_script(
            'robinbootstrapJs-main',
            plugin_dir_url(__FILE__) . '../assets/js/ikrwmap-bootstrap.js',
            array(),
            '2.9.2',
            true // Load in footer
        );



        wp_localize_script(
            'from_submit',
            'your_ajax_object',
            array(
                'ajax_url' => admin_url('admin-ajax.php'),
                'action' => 'ikrwmap_save_data_add',
                "feacth" => "ikrwmap_retrieveData_from_db",
                "edit_data" => "ikrwmap_data_edit",
                "delete_data" => "ikrwmap_world_mapDelete",
                'deleteNonce' => wp_create_nonce('ikrwmap_form_delete_action'),

            )
        );
    }
}


add_action('admin_enqueue_scripts', 'ikrwmap_add_rdat_scripts');


// add style 
function ikrwmap_add_world_map_add_style()
{



    $ikr_world_map_current_screen = get_current_screen();

    echo $ikr_world_map_current_screen->base;

    if ($ikr_world_map_current_screen->base == "toplevel_page_interactive-node-map" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-1" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-2" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-3" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-4" || $ikr_world_map_current_screen->base == "node-map_page_interactive-node-5") {
        wp_enqueue_style('robingeo_enqueue_styel', plugin_dir_url(__FILE__) . '../assets/style/style.css', array(), '1.0.1', 'all');
        wp_enqueue_style(
            'ikr_bootstrap_css',
            plugin_dir_url(__FILE__) . '../assets/style/ikrwmap-bootstrap.css',
            array(),
            '5.0.2'
        );
    }
}

add_action('admin_enqueue_scripts', 'ikrwmap_add_world_map_add_style');



// add front end script 
function ikrwmap_add_frontend_script()
{


    // Ensure we have a post object


    // FLOOR PLAN E2


    // CSS for either shortcode

    wp_enqueue_style(
        'ikrwmap_frontend_css',
        plugin_dir_url(__FILE__) . '../assets/style/ikrwmap-fontend-style.css',
        [],
        '1.0.1',
        'all'
    );


    wp_enqueue_script(
        'ikrwmap-fontend-script',
        plugin_dir_url(__FILE__) . '../assets/js/ikrwmap-fontend-script.js',
        [],
        '1.0.1',
        true
    );



    wp_localize_script('ikrwmap-fontend-script', 'ikrwmap_get_url', [
        'featchdata' => 'ikrwmap_retrieveData_from_db',
        'ajax_url'   => admin_url('admin-ajax.php'),
    ]);

    wp_enqueue_script(
        'ikrwmap-fontend-script_e1',
        plugin_dir_url(__FILE__) . '../assets/js/ikrwmap-fontend-script-e1.js',
        [],
        '1.0.1',
        true
    );



    wp_localize_script('ikrwmap-fontend-script_e1', 'ikrwmap_get_url_e1', [
        'featchdata' => 'ikrwmap_retrieveData_from_db',
        'ajax_url'   => admin_url('admin-ajax.php'),
    ]);
}
add_action('wp_enqueue_scripts', 'ikrwmap_add_frontend_script');


// add menu pages to the admin dashboard

function ikrwmap_ikrwmap_add_admin_menu_page()
{



?>
    <div class="robingeo-container">

        <div class="map_container">


            <h1>First Floor</h1>
            <div class="map-img">

                <div class="zoom_section">
                    <button id="zoom_in" class="btn btn-primary shadow-none"> + </button>
                    <button id="zoom_out" class="btn btn-primary shadow-none"> - </button>
                    <button id="reset" class="btn btn-primary shadow-none"> reset</button>
                </div>
                <?php
                include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/world-map.php';
                // 
                ?>
            </div>
            <div class="map-data-show">
                <?php
                include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/show-map-data.php';
                ?>
            </div>
            <div id="successMessage" class="hidden">Form submitted successfully!</div>

        </div>


        <div class="input-form">
            <?php

            include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/from-data.php';
            ?>

        </div>

    </div>

    <h1> show from data</h1>



    <?php include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/show_data.php' ?>


    <?php

    // include_once ROBIN_DIR_PATH_WORLD. './views/show-form-data.php';
    ?>
    <?php




}

function ikrwmap_node1_page()
{ {



    ?>
        <div class="robingeo-container">

            <div class="map_container">


                <h1> Node 1</h1>
                <div class="map-img">

                    <div class="zoom_section">
                        <button id="zoom_in" class="btn btn-primary shadow-none"> + </button>
                        <button id="zoom_out" class="btn btn-primary shadow-none"> - </button>
                        <button id="reset" class="btn btn-primary shadow-none"> reset</button>
                    </div>
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/ikr-node-map-1.php';
                    // 
                    ?>
                </div>
                <div class="map-data-show">
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/show-map-data.php';
                    ?>
                </div>
                <div id="successMessage" class="hidden">Form submitted successfully!</div>

            </div>


            <div class="input-form">
                <?php

                include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/from-data.php';
                ?>

            </div>

        </div>

        <h1> show from data</h1>



        <?php include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/show_data.php' ?>


        <?php

        // include_once ROBIN_DIR_PATH_WORLD. './views/show-form-data.php';
        ?>
    <?php




    }
}
function ikrwmap_node2_page()
{ {



    ?>
        <div class="robingeo-container">

            <div class="map_container">


                <h1> Node 2</h1>
                <div class="map-img">

                    <div class="zoom_section">
                        <button id="zoom_in" class="btn btn-primary shadow-none"> + </button>
                        <button id="zoom_out" class="btn btn-primary shadow-none"> - </button>
                        <button id="reset" class="btn btn-primary shadow-none"> reset</button>
                    </div>
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/ikr-node-map-2.php';
                    // 
                    ?>
                </div>
                <div class="map-data-show">
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/show-map-data.php';
                    ?>
                </div>
                <div id="successMessage" class="hidden">Form submitted successfully!</div>

            </div>


            <div class="input-form">
                <?php

                include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/from-data.php';
                ?>

            </div>

        </div>

        <h1> show from data</h1>



        <?php include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/show_data.php' ?>


        <?php

        // include_once ROBIN_DIR_PATH_WORLD. './views/show-form-data.php';
        ?>
    <?php




    }
}
function ikrwmap_node3_page()
{ {



    ?>
        <div class="robingeo-container">

            <div class="map_container">


                <h1> Node 3 </h1>
                <div class="map-img">

                    <div class="zoom_section">
                        <button id="zoom_in" class="btn btn-primary shadow-none"> + </button>
                        <button id="zoom_out" class="btn btn-primary shadow-none"> - </button>
                        <button id="reset" class="btn btn-primary shadow-none"> reset</button>
                    </div>
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/ikr-node-map-3.php';
                    // 
                    ?>
                </div>
                <div class="map-data-show">
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/show-map-data.php';
                    ?>
                </div>
                <div id="successMessage" class="hidden">Form submitted successfully!</div>

            </div>


            <div class="input-form">
                <?php

                include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/from-data.php';
                ?>

            </div>

        </div>

        <h1> show from data</h1>



        <?php include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/show_data.php' ?>


        <?php

        // include_once ROBIN_DIR_PATH_WORLD. './views/show-form-data.php';
        ?>
    <?php




    }
}
function ikrwmap_node4_page()
{ {



    ?>
        <div class="robingeo-container">

            <div class="map_container">


                <h1> Node 4 </h1>
                <div class="map-img">

                    <div class="zoom_section">
                        <button id="zoom_in" class="btn btn-primary shadow-none"> + </button>
                        <button id="zoom_out" class="btn btn-primary shadow-none"> - </button>
                        <button id="reset" class="btn btn-primary shadow-none"> reset</button>
                    </div>
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/ikr-node-map-4.php';
                    // 
                    ?>
                </div>
                <div class="map-data-show">
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/show-map-data.php';
                    ?>
                </div>
                <div id="successMessage" class="hidden">Form submitted successfully!</div>

            </div>


            <div class="input-form">
                <?php

                include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/from-data.php';
                ?>

            </div>

        </div>

        <h1> show from data</h1>



        <?php include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/show_data.php' ?>


        <?php

        // include_once ROBIN_DIR_PATH_WORLD. './views/show-form-data.php';
        ?>
    <?php




    }
}
function ikrwmap_node5_page()
{ {



    ?>
        <div class="robingeo-container">

            <div class="map_container">


                <h1> Node 5 </h1>
                <div class="map-img">

                    <div class="zoom_section">
                        <button id="zoom_in" class="btn btn-primary shadow-none"> + </button>
                        <button id="zoom_out" class="btn btn-primary shadow-none"> - </button>
                        <button id="reset" class="btn btn-primary shadow-none"> reset</button>
                    </div>
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/ikr-node-map5.php';
                    // 
                    ?>
                </div>
                <div class="map-data-show">
                    <?php
                    include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/show-map-data.php';
                    ?>
                </div>
                <div id="successMessage" class="hidden">Form submitted successfully!</div>

            </div>


            <div class="input-form">
                <?php

                include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './views/from-data.php';
                ?>

            </div>

        </div>

        <h1> show from data</h1>



        <?php include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/show_data.php' ?>


        <?php

        // include_once ROBIN_DIR_PATH_WORLD. './views/show-form-data.php';
        ?>
<?php




    }
}


function ikrwmap_save_data_add()
{
    if (isset($_POST)) {

        if (!isset($_POST['w_map_form_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['w_map_form_nonce'])), 'w_map_form_action')) {
            wp_die('Security check failed.');
        }
    }

    global $wpdb;




    // Retrieve the form data
    $id = isset($_POST['id']) ? sanitize_text_field(wp_unslash($_POST['id'])) : '';


    $title = isset($_POST['title']) ? sanitize_text_field(wp_unslash($_POST['title'])) : '';
    // add some extra data for sponser floorplan
    $ikr_size = isset($_POST['ikr_size']) ? sanitize_text_field(wp_unslash($_POST['ikr_size'])) : '';
    $room_build = isset($_POST['room-build']) ? sanitize_text_field(wp_unslash($_POST['room-build'])) : '';
    $room_build_sponsore = isset($_POST['room-build-sponsore']) ? sanitize_text_field(wp_unslash($_POST['room-build-sponsore'])) : '';
    $room_furnish = isset($_POST['room-furnish']) ? sanitize_text_field(wp_unslash($_POST['room-furnish'])) : '';
    $room_furnished_sponsore = isset($_POST['room-furnished-sponsore']) ? sanitize_text_field(wp_unslash($_POST['room-furnished-sponsore'])) : '';

    // add some extra data for sponser floorplan








    $des = isset($_POST['des']) ? sanitize_text_field(wp_unslash($_POST['des'])) : '';
    $des = mb_substr($des, 0, 750);

    $hov_color = isset($_POST['hovecolor']) ? sanitize_text_field(wp_unslash($_POST['hovecolor'])) : '';
    $fill_colors = isset($_POST['fillcolor']) ? sanitize_text_field(wp_unslash($_POST['fillcolor'])) : '';

    $fillcolor_partially = isset($_POST['fillcolor-partially']) ? sanitize_text_field(wp_unslash($_POST['fillcolor-partially'])) : '';
    $click_color = isset($_POST['clickcolor']) ? sanitize_text_field(wp_unslash($_POST['clickcolor'])) : '';
    $modal_ikr_img = isset($_POST['modal_ikr_img']) ? sanitize_url(wp_unslash(($_POST['modal_ikr_img']))) : '';
    $map_link = isset($_POST['modal_link']) ? sanitize_url(wp_unslash($_POST['modal_link'])) : '';




    // Insert the data into the database
    $table_name = $wpdb->prefix . 'ikr_interactive_maps';
    //  add data from data base 
    // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
    $wpdb->insert(
        $table_name,
        array(
            'map_id' => $id,
            'title' => $title,
            'ikr_size' => $ikr_size,
            'room_build' => $room_build,
            'room_build_sponsore' => $room_build_sponsore,
            'room_furnish' => $room_furnish,
            'room_furnished_sponsore' => $room_furnished_sponsore,
            'map_des' => $des,
            'hov_color' => $hov_color,
            'fill_color' => $fill_colors,

            'click_color' => $fillcolor_partially,
            'map_img' => $modal_ikr_img,
            'map_link' => $map_link,
        )
    );

    // Return the response
    if ($wpdb->insert_id) {
        wp_send_json_success('Data saved successfully.');
    } else {
        wp_send_json_error('Failed to save form data.');

        //show the error log 

    }


    // Check if the number of rows is less than 7
    // $num_rows = $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
    //  if ($num_rows < 9) {

    // } else {
    //     wp_send_json_error('All fields are full. Cannot add more data. To Add More data go to Prow');
    // }

    // Return the response
    //  wp_send_json_success('Data saved successfully.');
}
add_action('wp_ajax_ikrwmap_save_data_add', 'ikrwmap_save_data_add');
add_action('wp_ajax_nopriv_ikrwmap_save_data_add', 'ikrwmap_save_data_add');


// create a function to edit the data from db 


function ikrwmap_data_edit()
{

    if (isset($_POST)) {
        // veryfy nonce 

        if (isset($_POST['w_map_form_nonce']) && wp_verify_nonce(sanitize_key($_POST['w_map_form_nonce']), esc_html('w_map_form_action'))) {

            global $wpdb;

            //    get all input and sanitizw it 

            /// Retrieve and clean form data with wp_unslash and sanitize_text_field
            $id = isset($_POST['id']) ? sanitize_text_field(wp_unslash($_POST['id'])) : '';
            $title = isset($_POST['title']) ? sanitize_text_field(wp_unslash($_POST['title'])) : '';


            // add some extra data for sponser floorplan
            $ikr_size = isset($_POST['ikr_size']) ? sanitize_text_field(wp_unslash($_POST['ikr_size'])) : '';
            $room_build = isset($_POST['room-build']) ? sanitize_text_field(wp_unslash($_POST['room-build'])) : '';
            $room_build_sponsore = isset($_POST['room-build-sponsore']) ? sanitize_text_field(wp_unslash($_POST['room-build-sponsore'])) : '';
            $room_furnish = isset($_POST['room-furnish']) ? sanitize_text_field(wp_unslash($_POST['room-furnish'])) : '';
            $room_furnished_sponsore = isset($_POST['room-furnished-sponsore']) ? sanitize_text_field(wp_unslash($_POST['room-furnished-sponsore'])) : '';

            // add some extra data for sponser floorplan

            $des = isset($_POST['des']) ? sanitize_text_field(wp_unslash($_POST['des'])) : '';
            $des = mb_substr($des, 0, 750);

            $hov_color = isset($_POST['hovecolor']) ? sanitize_text_field(wp_unslash($_POST['hovecolor'])) : '';
            $fill_colors = isset($_POST['fillcolor']) ? sanitize_text_field(wp_unslash($_POST['fillcolor'])) : '';

            $fillcolor_partially = isset($_POST['fillcolor-partially']) ? sanitize_text_field(wp_unslash($_POST['fillcolor-partially'])) : '';


            $modal_ikr_img = isset($_POST['modal_ikr_img']) ? sanitize_url(wp_unslash($_POST['modal_ikr_img'])) : '';
            $map_link = isset($_POST['modal_link']) ? sanitize_url(wp_unslash($_POST['modal_link'])) : '';



            // Specify the table name with WordPress prefix
            $table_name = $wpdb->prefix . 'ikr_interactive_maps';


            $cache_key = 'state_' . $id;
            // Clear the cache before the update to avoid stale data
            wp_cache_delete($cache_key);


            // Perform the database update
            // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery


            // Update the table with the new data
            // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $updated = $wpdb->update(
                $table_name,
                [
                    'title' => $title,

                    'ikr_size' => $ikr_size,
                    'room_build' => $room_build,
                    'room_build_sponsore' => $room_build_sponsore,
                    'room_furnish' => $room_furnish,
                    'room_furnished_sponsore' => $room_furnished_sponsore,

                    'map_des' => $des,
                    'hov_color' => $hov_color,
                    'fill_color' => $fill_colors,
                    'click_color' => $fillcolor_partially,
                    'map_img' => $modal_ikr_img,
                    'map_link' => $map_link
                ],
                [
                    'map_id' => $id,
                ],
                [
                    '%s', // data type for 'title'
                    '%s', // data type for 'map_des'
                    '%s', // data type for 'hov_color'
                    '%s', // data type for 'fill_color'
                    '%s',  // data type for 'fill_color'
                    '%s', // data type for 'fill_color'
                    '%s', // data type for 'fill_color'
                    '%s', // data type for 'fill_color'
                    '%s', // data type for 'fill_color'
                    '%s', // data type for 'fill_color'
                    '%s', // data type for 'fill_color'
                    '%s', // data type for 'fill_color'
                ],
                [
                    '%s' // data type for 'map_id'
                ]
            );


            // Define cache key for the data

            $result = wp_cache_get($cache_key);

            if ($result === false) {
                // If the result is not cached, perform the database query
                // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
                $result = $wpdb->get_row($wpdb->prepare("SELECT * FROM  $table_name WHERE map_id = %s",  $id));

                if ($result) {
                    // Cache the updated marker data
                    wp_cache_set($cache_key, $result);
                }
            }

            // Return the response
            if ($updated !== false) { // Check if the update was successful
                wp_send_json_success('Data updated successfully.');
            } else {
                wp_send_json_error('Failed to update form data.');
            }
        }
    }
}

add_action('wp_ajax_ikrwmap_data_edit', 'ikrwmap_data_edit');
add_action('wp_ajax_noprive_ikrwmap_data_edit', 'ikrwmap_data_edit');

// add delete functionality 

function ikrwmap_world_mapDelete()
{
    global $wpdb;

    if (isset($_POST['w_map_form_delete_nonce']) && wp_verify_nonce(sanitize_key($_POST['w_map_form_delete_nonce']), 'ikrwmap_form_delete_action')) {
        // Sanitize and retrieve map_id from the POST request
        $map_id = isset($_POST['map_id']) ? sanitize_text_field(wp_unslash($_POST['map_id'])) : '';

        // Define table name and cache key
        $table_name = $wpdb->prefix . 'ikr_interactive_maps';
        $cache_key = 'map_data_' . $map_id;

        // Attempt to retrieve cached data
        $result = wp_cache_get($cache_key);

        if ($result === false) {
            // If no cached result, query the database
            // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $result = $wpdb->get_row($wpdb->prepare("SELECT * FROM  $table_name WHERE map_id = %s", $map_id));

            if ($result) {
                // Cache the result
                wp_cache_set($cache_key, $result);
            }
        }

        // Proceed with deletion if data exists
        if ($result) {
            // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $deleted = $wpdb->delete($table_name, ['map_id' => $map_id], ['%s']);

            if ($deleted) {
                // Clear the cache after deletion
                wp_cache_delete($cache_key);

                // Send success response
                wp_send_json_success('Map data deleted successfully.');
            } else {
                wp_send_json_error('Failed to delete map data.');
            }
        } else {
            wp_send_json_error('Map data not found.');
        }
    } else {
        wp_send_json_error('Invalid nonce.');
    }
}


add_action('wp_ajax_ikrwmap_world_mapDelete', 'ikrwmap_world_mapDelete');
add_action('wp_ajax_noprive_ikrwmap_world_mapDelete', 'ikrwmap_world_mapDelete');



//  get data from data base 
// AJAX callback to fetch data from the database

// AJAX callback to fetch ordered data from the database
function ikrwmap_retrieveData_from_db_from_database()
{
    global $wpdb;
    $table_name = $wpdb->prefix . 'ikr_interactive_maps';

    // Cache key for this query
    $cache_key = 'ikrwmap_ikr_interactive_maps_data';

    // Try to fetch cached data
    $data = wp_cache_get($cache_key, 'ikrwmap');

    // If no cached data exists, fetch fresh data and cache it
    if (false === $data) {
        // Fetch data from the database and order by map_id in ascending order
        $query = "SELECT * FROM `$table_name` ORDER BY CAST(map_id AS UNSIGNED) ASC";
        // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
        $data = $wpdb->get_results($query, ARRAY_A);

        // Store the result in the cache
        wp_cache_set($cache_key, $data, 'ikrwmap', 3600); // Cache for 1 hour
    }

    // Return the response
    wp_send_json_success($data);
}
add_action('wp_ajax_ikrwmap_retrieveData_from_db', 'ikrwmap_retrieveData_from_db_from_database');
add_action('wp_ajax_nopriv_ikrwmap_retrieveData_from_db', 'ikrwmap_retrieveData_from_db_from_database');



/* ---------------------------
 
 --------------------------- */
// ---------- Constants ----------
if (! defined('IWM_PLUGIN_TEMPLATE_KEY')) {
    define('IWM_PLUGIN_TEMPLATE_KEY', 'price-list-plugin-template.php'); // the key stored in _wp_page_template
}
if (! defined('IWM_PLUGIN_TEMPLATE_NAME')) {
    define('IWM_PLUGIN_TEMPLATE_NAME', 'Price List (Plugin Template)'); // shown in editor
}

/**
 * Add our plugin template to the theme template list shown in the editor
 */
add_filter('theme_page_templates', 'iwm_add_plugin_page_template', 10, 4);
function iwm_add_plugin_page_template($post_templates, $theme = null, $post = null, $post_type = null)
{
    $post_templates[IWM_PLUGIN_TEMPLATE_KEY] = IWM_PLUGIN_TEMPLATE_NAME;
    return $post_templates;
}

/**
 * Return our plugin template file when a page uses our registered template key.
 */
add_filter('page_template', 'iwm_load_plugin_page_template');
function iwm_load_plugin_page_template($page_template)
{
    if (is_admin()) {
        return $page_template;
    }

    global $post;
    if (! $post) {
        return $page_template;
    }

    $selected = get_post_meta($post->ID, '_wp_page_template', true);
    if ($selected === IWM_PLUGIN_TEMPLATE_KEY) {
        $plugin_template = plugin_dir_path(__FILE__) . 'templates/price-list.php';
        if (file_exists($plugin_template)) {
            return $plugin_template;
        } else {
            error_log("IWM plugin template not found: $plugin_template");
        }
    }

    return $page_template;
}

/**
 * Clear template transient cache so WP picks up our injected template immediately.
 */
function iwm_clear_page_templates_cache()
{
    $theme_root = get_theme_root();
    $stylesheet = get_stylesheet();
    $cache_key   = 'page_templates-' . md5($theme_root . '/' . $stylesheet);
    delete_transient($cache_key);
}
add_action('admin_init', 'iwm_clear_page_templates_cache');

/**
 * Create the page on plugin activation and assign our template to it.
 * Use register_activation_hook in the plugin main file.
 */
function iwm_create_price_list_page_on_activation()
{
    // clear cache first
    iwm_clear_page_templates_cache();

    $slug  = 'price-list';
    // if page exists, set template if not already set
    $page = get_page_by_path($slug);
    if ($page) {
        // ensure template meta is set
        update_post_meta($page->ID, '_wp_page_template', IWM_PLUGIN_TEMPLATE_KEY);
        return;
    }

    // create new page
    $page_data = array(
        'post_title'   => 'price List',
        'post_name'    => $slug,
        'post_content' => 'This page is created by the plugin and uses the plugin template.',
        'post_status'  => 'publish',
        'post_type'    => 'page',
        'post_author'  => 1,
    );

    $page_id = wp_insert_post($page_data);

    if (! is_wp_error($page_id) && $page_id) {
        update_post_meta($page_id, '_wp_page_template', IWM_PLUGIN_TEMPLATE_KEY);
    }
}

// only register activation hook if this file is the plugin main file
if (function_exists('register_activation_hook')) {
    register_activation_hook(__FILE__, 'iwm_create_price_list_page_on_activation');
}
