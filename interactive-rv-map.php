<?php

/*
 * Plugin Name:       Interactive Node Map 
 * Plugin URI:        
 * Description:       Interactive world map plugin for WordPress. 
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:     5.2
 * Author:            IK Robin
 * Author URI:        
 * License:           GPL-2.0+ 
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       interactive-world-maps-wp
 * Domain Path:       /languages
 * License: GPLv2 or later
 */

if (! defined('ABSPATH')) exit;

if (! defined('IKRWMAP_ROBIN_DIR_PATH_WORLD')) {
   define('IKRWMAP_ROBIN_DIR_PATH_WORLD', plugin_dir_path(__FILE__));
}

include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './functions/functions.php';

function ikrwmap_add_menu_page()
{
   add_menu_page('interactive-node-map', 'Node Map', 'manage_options', 'interactive-node-map', 'ikrwmap_ikrwmap_add_admin_menu_page', 'dashicons-admin-site', 11);

   // Dashboard (top-level landing)
   add_submenu_page('interactive-node-map', 'All Nodes', 'All Nodes', 'manage_options', 'interactive-node-map', '', 'ikrwmap_ikrwmap_add_admin_menu_page');

   // Existing basement submenu
   add_submenu_page("interactive-node-map","Node 1","Node 1","manage_options","interactive-node-1","ikrwmap_node1_page",11);

   // NEW: All Nodes submenu



   add_submenu_page(
       'interactive-node-map',
       'Node 2',
       'Node 2',
       'manage_options',
       'interactive-node-2',
       'ikrwmap_node2_page'
   );
   add_submenu_page(
       'interactive-node-map',
       'Node 3',
       'Node 3',
       'manage_options',
       'interactive-node-3',
       'ikrwmap_node3_page'
   );
   add_submenu_page(
       'interactive-node-map',
       'Node 4',
       'Node 4',
       'manage_options',
       'interactive-node-4',
       'ikrwmap_node4_page'
   );
   add_submenu_page(
       'interactive-node-map',
       'Node 5',
       'Node 5',
       'manage_options',
       'interactive-node-5',
       'ikrwmap_node5_page'
   );

   // Map Shortcode (existing)
   add_submenu_page('interactive-node-map', 'Map Shortcode', 'Map Shortcode', 'manage_options', 'interactive-node-map-shortcode', 'ikrwmap_add_show_data', 11);
}

add_action('admin_menu', 'ikrwmap_add_menu_page');



function ikrwmap_add_show_data()
{
?>
   <div class="wrap">
       <h1> Map Shortcode</h1>
       <br>
       <h3>Copy the Shortcode and paste it in your page or post</h3>
       <br>
       <h1> <strong>Floor Plan E1 = </strong> [floor_plan_e1]</h1>
       <h1> <strong>Floor plan E2 = </strong> [floor_plan_e2]</h1>
   </div>
<?php
   // include_once ROBIN_DIR_PATH_WORLD. './views/show-form-data.php';
}



/* ---------- New submenu callback functions ---------- */

/**


 * Node-specific pages (1..5)
 * Each of these currently includes already-added show_data.php for consistency.
 * Replace with node-specific views or DB queries as needed.
 */










/* ---------- includes / activation ---------- */

include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . './includes/db.php';

register_activation_hook(__FILE__, 'ikrwmap_plugin_create_tables');

?>
