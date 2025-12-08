<?php
if (! defined('ABSPATH')) exit;
?>

<h1>Add to DB</h1>
<form action="" id="rdata_from" class="ikr_form_style">
    <?php wp_nonce_field('w_map_form_action', 'w_map_form_nonce'); ?>

    <div id="data-entries">
        <div class="data-entry">
            <label for="id">Map ID</label>
            <input type="text" name="id" class="scratch-data-id" id="map_id" />

            <label for="title">Title</label>
            <input type="text" name="title" placeholder="Insert your title" id="ikrTitle" />

            <label class="" for="size">Size</label>
            <input type="text" name="ikr_size" placeholder="size sq. ft" id="ikr_size1" />

            <label class="" for="room-build">Room Build</label>
            <input type="text" name="room-build" placeholder="e.g 50000" id="ikr_room_build" />

          


            <div class=" d-flex justify-content-start  align-items-baseline" style="gap: 15px;">
                
            <div class="form-check p-0 mt-1">
                <input class="" type="radio" value="sponsored" name="room-build-sponsore" id="room-build-sponsore">
                <label class="form-check-label" for="room-build-sponsore">
                    Sponsored
                </label>
            </div>
            <div class="form-check p-0 mt-1">
                <input class="" value="available" type="radio" name="room-build-sponsore" id="room-build-available" checked>
                <label class="form-check-label" for="room-furniture-sponsor">
                   Available
                </label>
            </div>
            </div>

            <label class="" for="room-furnish">Room Furnish:</label>
            <input type="text" name="room-furnish" placeholder="e.g 50000" id="ikr_room_furnish" />

          


            <div class=" d-flex justify-content-start  align-items-baseline" style="gap: 15px;">
                
            <div class="form-check p-0 mt-1">
                <input value="sponsored" class="" type="radio" name="room-furnished-sponsore" id="room-furnished-sponsore1">
                <label class="form-check-label" for="room-furnished-sponsore1">
                    Sponsored
                </label>
            </div>
            <div class="form-check p-0 mt-1">
                <input value="available" class="" type="radio" name="room-furnished-sponsore" id="room-furnished-sponsore2" checked>
                <label class="form-check-label" for="room-furnished-sponsore2">
                   Available
                </label>
            </div>
            </div>



            <label for="des">Description</label>

            <textarea name="des" id="ikrdes" placeholder="Insert your description" rows="4" cols="5"></textarea>
            <!-- <input type="text" name="des" id="ikrdes" placeholder="Insert your description" /> -->

            <label for="hovecolor">Hover Color</label>

            <div class="ikr_color_inp d-flex justify-content-center position-relative ">

                <input type="color" id="typeHovcolor" value="#0066cc" class="ikr_w_typehove shadow-none" />

                <input type="text" name="hovecolor" id="hovecolor" value="#0066cc" />

            </div>
            <label for="fill_color">Fill Color <span class="inp_short_title">(Partially sponsored leave it blank) </span></label>
            <div class="ikr_color_inp d-flex justify-content-center position-relative ">

                <input type="color" id="filltype" value="#ff9933" class="ikr_w_typehove shadow-none" />

                <input type="text" name="fillcolor" id="fill_color" value="#ff9933" class="ikr_w_hovecolor" />

            </div>

            <label for="fill_color">Partially sponsored <span class="inp_short_title">(No sponsored leave it blank) </span></label>
            <div class="ikr_color_inp d-flex justify-content-center position-relative ">

                <input type="color" id="filltype_partially" value="#0000FF" class="ikr_w_typehove shadow-none" />

                <input type="text" name="fillcolor-partially" id="fill_color_partially" value="#0000FF" class="ikr_w_hovecolor" />

            </div>



            <label class="ikr_form_label" for="modal_ikr_img" class="d-block"> image</label>

            <div class="ikr_color_inp d-flex justify-content-center position-relative ">

                <input type="text" name="modal_ikr_img" id="ikr_w_img" placeholder="" />
                <input type="button" value="Slect Image" class="ikr_select_img btn btn-primary shadow-none" id="ikr_select_img">
            </div>
            <label class="ikr_form_label" for="modal_link">Website url</label>

            <input type="text" name="modal_link" id="modal_link" placeholder="http://google.com" />



            <input disabled id="rdata_submit_form" type="submit" value="Please Select a State" class="btn btn-primary" />
        </div>
    </div>

</form>







<?php




// function scratch_save_data_add()
//     {
//         global $wpdb;

//         // Retrieve the form data
//         $id = isset($_POST['id']) ? intval($_POST['id']) : 0;
//         $title = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
//         $des = isset($_POST['des']) ? sanitize_text_field($_POST['des']) : '';
//         $hov_color = isset($_POST['hovecolor']) ? sanitize_text_field($_POST['hovecolor']) : '';

//         // Insert the data into the database
//         $table_name = $wpdb->prefix . 'data_table';
//         $wpdb->insert(
//             $table_name,
//             array(
//                 'id' => $id,
//                 // 'title' => $title,
//                 'des' => $des,
//                 'hov_color' => $hov_color
//             )
//         );

//         // Return the response
//         wp_send_json_success('Data saved successfully.');
//     }
//     add_action('wp_ajax_scratch_save_data_add', 'scratch_save_data_add');
//     add_action('wp_ajax_nopriv_scratch_save_data_add', 'scratch_save_data_add');



// Enqueue scripts





// Save data to the database

?>