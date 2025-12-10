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

/* ---------- Original plugin constant ---------- */
if (! defined('IKRWMAP_ROBIN_DIR_PATH_WORLD')) {
   define('IKRWMAP_ROBIN_DIR_PATH_WORLD', plugin_dir_path(__FILE__));
}

/* ---------- Load original functions file (admin pages, enqueues, ajax handlers etc.) ---------- */
include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . 'functions/functions.php'; // note: removed extraneous "./"

///////////////////////////////////////////////////////////////////////////////
// Original admin menu registrations (kept intact)
///////////////////////////////////////////////////////////////////////////////

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
}

///////////////////////////////////////////////////////////////////////////////
// Includes / DB activation (kept from original)
///////////////////////////////////////////////////////////////////////////////

include_once IKRWMAP_ROBIN_DIR_PATH_WORLD . 'includes/db.php';

// Original activation hook for DB creation (kept)
if ( function_exists( 'register_activation_hook' ) ) {
    register_activation_hook(__FILE__, 'ikrwmap_plugin_create_tables');
}

///////////////////////////////////////////////////////////////////////////////
// New: Plugin-based page template & price-list auto-creation (integrated)
// All new functions are prefixed with ikrwmap_ to avoid collisions.
///////////////////////////////////////////////////////////////////////////////

/**
 * Template key & name stored in _wp_page_template meta.
 * Use a simple filename-like key (not a path).
 */
if ( ! defined( 'IKRWMAP_TEMPLATE_KEY' ) ) {
    define( 'IKRWMAP_TEMPLATE_KEY', 'price-list-plugin-template.php' );
}
if ( ! defined( 'IKRWMAP_TEMPLATE_NAME' ) ) {
    define( 'IKRWMAP_TEMPLATE_NAME', 'Price List (Interactive Node Map)' );
}

/**
 * Clear the WP page-template transient so WP picks up new templates.
 */
function ikrwmap_clear_page_templates_cache() {
    $theme_root = get_theme_root();
    $stylesheet = get_stylesheet();
    $cache_key = 'page_templates-' . md5( $theme_root . '/' . $stylesheet );
    delete_transient( $cache_key );
}

/**
 * Create templates/ directory and write minimal template file if missing.
 * Returns the template path on success or false on failure.
 */
function ikrwmap_create_template_file_if_missing() {
    $templates_dir = IKRWMAP_ROBIN_DIR_PATH_WORLD . 'templates/';
    if ( ! file_exists( $templates_dir ) ) {
        @mkdir( $templates_dir, 0755, true );
    }

    $template_path = $templates_dir . IKRWMAP_TEMPLATE_KEY;

    if ( file_exists( $template_path ) ) {
        return $template_path;
    }

    // safe HEREDOC using nowdoc to avoid interpolation issues
    $content = <<<'PHP'
<?php
/**
 * Plugin template file: Price List
 * Generated by Interactive Node Map plugin.
 * Filename: price-list-plugin-template.php
 */

defined('ABSPATH') || exit;

// Use theme header/footer if you want the theme chrome.
get_header();
?>

<div id="ikrwmap-price-list" class="ikrwmap-plugin-wrap" style="padding:24px;">
  <div class="wrap">
    <h1>Price List (plugin template)</h1>
    <p>This template is loaded from the plugin. Replace this file at <code>templates/price-list-plugin-template.php</code> with your full node-details markup (HTML/CSS/JS).</p>

    <div id="ikrwmap-content">
      <p>Replace this with your node-details HTML/CSS/JS markup or include your node-details template here.</p>
    </div>
  </div>
</div>

<?php
get_footer();
PHP;

    $written = @file_put_contents( $template_path, $content );
    if ( $written === false ) {
        error_log( 'Interactive Node Map: Failed to write template file at ' . $template_path );
        return false;
    }

    if ( file_exists( $template_path ) ) {
        return $template_path;
    }

    error_log( 'Interactive Node Map: Template file not found after write: ' . $template_path );
    return false;
}

/**
 * Create (or ensure) the 'price-list' page exists and assign our plugin template
 */
function ikrwmap_create_price_list_page() {
    ikrwmap_clear_page_templates_cache();

    $slug = 'price-list';
    $existing = get_page_by_path( $slug );
    if ( $existing ) {
        update_post_meta( $existing->ID, '_wp_page_template', IKRWMAP_TEMPLATE_KEY );
        return $existing->ID;
    }

    $page_data = array(
        'post_title'   => 'price List',
        'post_name'    => $slug,
        'post_content' => 'This page is created by the Interactive Node Map plugin and uses the plugin template.',
        'post_status'  => 'publish',
        'post_type'    => 'page',
        'post_author'  => 1,
    );

    $page_id = wp_insert_post( $page_data );
    if ( ! is_wp_error( $page_id ) && $page_id ) {
        update_post_meta( $page_id, '_wp_page_template', IKRWMAP_TEMPLATE_KEY );
        return $page_id;
    }

    return false;
}

/**
 * Activation callback that will run on plugin activation.
 * We register this in addition to the original DB creation activation hook.
 */
function ikrwmap_on_plugin_activation() {
    // create template file (if possible)
    ikrwmap_create_template_file_if_missing();

    // clear the templates cache
    ikrwmap_clear_page_templates_cache();

    // create the price-list page and assign template
    ikrwmap_create_price_list_page();

    // also attempt to call the original DB create function if present
    if ( function_exists( 'ikrwmap_plugin_create_tables' ) ) {
        // call but do not duplicate (original register_activation_hook already calls it)
        ikrwmap_plugin_create_tables();
    }
}

// Register activation hook for this plugin (creates page & template)
// Note: user already had register_activation_hook for DB; registering another is fine.
if ( function_exists( 'register_activation_hook' ) ) {
    register_activation_hook( __FILE__, 'ikrwmap_on_plugin_activation' );
}

/**
 * Admin-init fallback: if plugin was added after activation or activation didn't run,
 * ensure template file and page exist for admins.
 */
add_action( 'admin_init', function() {
    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }

    ikrwmap_create_template_file_if_missing();
    ikrwmap_clear_page_templates_cache();

    if ( ! get_page_by_path( 'price-list' ) ) {
        ikrwmap_create_price_list_page();
    }
} );

/**
 * Register our plugin template in the theme template list (editor dropdown).
 */
add_filter( 'theme_page_templates', function( $post_templates ) {
    $post_templates[ IKRWMAP_TEMPLATE_KEY ] = IKRWMAP_TEMPLATE_NAME;
    return $post_templates;
} );

/**
 * When WordPress resolves the template for a page, return plugin template file if selected.
 */
add_filter( 'page_template', function( $page_template ) {
    if ( is_admin() ) {
        return $page_template;
    }

    global $post;
    if ( ! $post ) {
        return $page_template;
    }

    $selected = get_post_meta( $post->ID, '_wp_page_template', true );
    if ( $selected === IKRWMAP_TEMPLATE_KEY ) {
        $plugin_template = IKRWMAP_ROBIN_DIR_PATH_WORLD . 'templates/' . IKRWMAP_TEMPLATE_KEY;
        if ( file_exists( $plugin_template ) ) {
            return $plugin_template;
        } else {
            error_log( 'Interactive Node Map: plugin template not found at ' . $plugin_template );
        }
    }

    return $page_template;
} );

/**
 * Fallback for block themes: force-include plugin template when visiting /price-list
 * This ensures the page will show plugin template even when the block editor doesn't surface classic templates.
 */
add_action( 'template_redirect', function() {
    if ( is_admin() ) {
        return;
    }

    if ( function_exists( 'is_page' ) && is_page( 'price-list' ) ) {
        $plugin_template = IKRWMAP_ROBIN_DIR_PATH_WORLD . 'templates/' . IKRWMAP_TEMPLATE_KEY;
        if ( file_exists( $plugin_template ) ) {
            include $plugin_template;
            exit;
        } else {
            error_log( 'Interactive Node Map: fallback template missing: ' . $plugin_template );
        }
    }
}, 1 );

/**
 * One-time admin notice to inform admin that the template/page was created (or attempted).
 */
add_action( 'admin_notices', function() {
    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }

    $shown = get_option( 'ikrwmap_activation_notice_shown', false );
    if ( ! $shown ) {
        $template_path = IKRWMAP_ROBIN_DIR_PATH_WORLD . 'templates/' . IKRWMAP_TEMPLATE_KEY;
        $page = get_page_by_path( 'price-list' );
        $page_link = $page ? get_edit_post_link( $page->ID ) : false;
        echo '<div class="notice notice-success is-dismissible"><p>';
        echo '<strong>Interactive Node Map:</strong> Plugin template created at <code>' . esc_html( $template_path ) . '</code>.';
        if ( $page_link ) {
            echo ' The <a href="' . esc_url( $page_link ) . '">price-list</a> page was created and assigned the plugin template.';
        } else {
            echo ' The <code>price-list</code> page will be created automatically on activation or when an admin visits this page.';
        }
        echo '</p></div>';
        update_option( 'ikrwmap_activation_notice_shown', true );
    }
} );

///////////////////////////////////////////////////////////////////////////////
// End of merged main plugin file
///////////////////////////////////////////////////////////////////////////////
