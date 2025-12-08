<?php
if ( ! defined( 'ABSPATH' ) ) exit;

function ikrwmap_plugin_create_tables()
{
    global $wpdb;
    $table_name = $wpdb->prefix . 'ikr_interactive_maps';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "
        CREATE TABLE $table_name (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `map_id` varchar(150) DEFAULT NULL,
            `title` varchar(100) DEFAULT NULL,
            `ikr_size` varchar(100) DEFAULT NULL,
            `room_build` varchar(100) DEFAULT NULL,
            `room_build_sponsore` varchar(100) DEFAULT NULL,
            `room_furnish` varchar(100) DEFAULT NULL,
            `room_furnished_sponsore` varchar(100) DEFAULT NULL,
            `map_des` varchar(750) DEFAULT NULL,
            `hov_color` varchar(7) DEFAULT NULL,
            `fill_color` varchar(7) DEFAULT NULL,
            `click_color` varchar(7) DEFAULT NULL,
            `map_link` varchar(250) DEFAULT NULL,
            `map_img` varchar(250) DEFAULT NULL,
            PRIMARY KEY (`id`)
        ) $charset_collate;
    ";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
