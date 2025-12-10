<?php

if ( ! defined( 'ABSPATH' ) ) exit;
// Define a function to handle the shortcode output
function ikrnode_map_all_nodes() {
    // Start output buffering
    ob_start();
    ?>
    <!-- Output the <div> element with the specified ID "map" -->
    <div id="ikrwmap_output" data-id="ikrwmap_output" class="svg5id">
        <?php 
        include(IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/tooltip.php');
        ?>

<svg id="ikr_svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 309.84 434.4">
    <defs>
        <style>.cls-1{fill:#fff;stroke:#fff;stroke-linejoin:round;stroke-width:.5px; fill-opacity: .1;}</style>
    </defs>
    <g id="stage">
        <image width="1291" height="1810" transform="scale(.24)" xlink:href="<?php echo esc_url(plugins_url('../assets/images/20-01.png',__FILE__)) ?>"/>
        <polygon id="node_2" class="cls-1 anim-path" points="299.51 63.93 285.65 85.92 283.91 90.6 281.79 100.66 279.32 106.23 240.06 73.37 222.88 73.21 222.86 72.84 222.26 73.21 222.88 73.21 222.88 73.22 184.9 72.79 175.96 19.38 223.34 17.47 223.62 27.67 222.44 40.58 224.03 42.26 234.1 43.24 299.51 63.93"/>
        <polygon id="node_3" class="cls-1 anim-path" points="153.8 312.44 151.06 319.28 139.78 320.32 134.45 323.1 130.48 325.01 126.72 326.97 126.11 327.29 125.41 327.8 125 328.16 124.79 328.5 124.68 328.6 124.66 328.6 124.54 329.3 124.62 329.22 124.71 329.47 122.92 329.47 119.88 330.47 116.02 332.15 115.98 332.17 112.28 333.17 113.66 329.49 115.62 324.33 115.62 315.95 112.54 307.39 113.58 304.59 107.82 291.38 103.28 280.97 103.26 280.97 102.64 279.49 101.84 277.62 98.91 269.47 95.38 261.42 95.87 260.59 97.16 258.47 97.29 258.25 132.73 200.3 140.21 222.45 142.12 228.16 145.66 238.65 147.23 243.33 147.53 244.15 148.66 247.53 148.85 248.1 148.98 248.46 150.84 253.96 150.91 254.16 151.23 255.43 151.63 256.64 152.03 257.51 138.21 270.51 143.03 283.61 143.05 283.67 144.35 287.22 144.54 287.15 144.84 288.43 145.2 290.02 145.66 293.35 146.07 295.03 145.3 299.83 145.13 302.31 145.13 303.16 145.24 303.93 145.54 304.65 145.96 305.27 146.41 305.71 145.85 307.09 144.01 312.57 143.99 312.59 143.92 312.83 140.33 313.36 139.82 313.7 139.78 313.7 138 314.35 137.11 314.86 136.34 315.99 134.73 318.11 132.71 321.4 135.11 318.33 136.64 316.31 138.3 315.2 138.36 315.18 139.97 314.61 142.16 314.67 143.63 315.14 144.94 314.82 146.3 314.76 148.4 314.55 148.83 314.52 149.21 314.38 149.91 314.21 151.29 313.59 151.57 313.48 152.08 313.23 153.8 312.44"/>
        <polygon id="node_1" class="cls-1 anim-path" points="113.58 304.59 112.54 307.39 108.99 317.03 108.97 317.03 108.57 318.09 108.52 318.2 108.55 318.33 108.4 318.67 107.08 323.06 105.51 327.24 105.57 327.44 105.55 327.48 105.64 327.8 106.93 332.13 106.51 333.89 106.21 334.99 105.21 335.61 101.71 340.92 101.67 341 100.86 342.15 100.77 342.24 98.93 345.36 92.26 351.96 90.22 353.09 88.1 353.6 85.76 355.89 78.88 362.41 75.89 362.41 75.53 362.34 74.38 362.05 70.54 359.35 66.67 356.57 66.42 356.4 66.16 356.21 66.03 356.12 65.72 355.8 60.75 350.94 54.27 351.56 54.12 351.56 53.85 351.6 53.21 351.71 52.66 351.79 52.06 351.83 51.13 352.24 49.75 352.62 44.27 355.08 41.3 358.63 40.06 362 15.41 354.25 28.22 280.87 28.24 280.85 21.46 254.94 94.89 261.74 98.37 269.68 101.84 277.62 102.64 279.49 103.26 280.97 103.28 280.97 107.82 291.38 113.58 304.59"/>
        <polygon id="node_5" class="cls-1 anim-path" points="87.74 380.12 81.96 389.89 78.92 393.32 77.09 398.2 76.07 399.91 63.45 421.24 52.92 416.61 51.46 420.84 28.89 414.86 27.43 406.55 44.43 363.49 40.59 362.29 41.75 358.97 41.76 358.94 44.62 355.55 51.37 352.74 52.61 352.38 53.15 352.34 55.97 352.16 56.74 352.18 58.44 352.52 59.9 352.88 60.05 352.96 61.26 353.65 63.63 355.11 64.3 355.58 65.65 356.64 65.69 356.59 74.08 362.54 74.13 362.58 74.14 362.58 75.23 362.87 75.7 362.98 75.81 362.99 76.4 363.06 76.73 363.02 77.43 363.02 78.22 363.1 69.38 371.73 87.74 380.12"/>
        <polygon id="node_4" class="cls-1 anim-path" points="252.43 179.49 251.22 181.64 246.97 186.52 242.05 190.18 237.99 194.55 229.79 206.97 224.08 215.61 199.15 246.06 187.03 258.36 183.67 263.35 182.1 265.96 181.55 265.49 181.29 264.07 181.66 263.2 180.83 262.61 180.7 260.42 181.29 256.64 187.92 249.67 190.55 249.12 193.48 247.81 196.22 247.45 198.11 246.17 199.26 244.09 199.51 242.2 198.2 239.31 196.03 236.47 195.05 234.13 195.08 230.78 192.23 228.48 190.47 230.42 192.08 231.97 193.19 233.66 193.95 235.96 195.08 238.04 196.99 240.44 197.94 242.92 196.39 245.47 194.91 246.02 193.4 245.3 190.81 245.96 189.26 246.43 187.56 246.17 179.13 251.56 176.58 252.63 172.27 257.83 171.17 255.07 169.85 253.99 166.22 254.05 165.35 254.71 163.16 256.6 161.7 257.06 155.37 265.96 155.01 264.94 154.88 264.62 152.54 257.64 152.54 257.62 150.23 250.78 149.85 249.59 149.76 249.38 133.05 199.94 196.73 186.46 196.77 186.46 197.2 186.37 222 181.32 219.07 182 218.79 182.21 222 181.32 230.47 179.35 235.27 178.33 239.52 178.62 239.12 181.43 239.18 181.43 239.07 181.94 242.7 182 242.94 180.75 243.43 178.88 252.43 179.49"/>
    </g>
</svg>






    </div>
    <?php
            
    // Get the buffered output and clean (flush) the buffer
    return ob_get_clean();
}

// Register the shortcode
add_shortcode('all-nodes-map', 'ikrnode_map_all_nodes');
function ikrwmap_shortcode_basement() {
    // Start output buffering
    ob_start();
    ?>
    <!-- Output the <div> element with the specified ID "map" -->
    <div id="ikrwmap_output" data-id="ikrwmap_output" class="svg4_id">
        <?php 
        include(IKRWMAP_ROBIN_DIR_PATH_WORLD . '/views/tooltip copy.php');
        ?>


<svg
   viewBox="0 0 1858.72 966"
   version="1.1"
   id="svg5"
   sodipodi:docname="e1.svg"
   inkscape:version="1.2.2 (732a01da63, 2022-12-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview940"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     showgrid="false"
     inkscape:zoom="0.47477258"
     inkscape:cx="619.24385"
     inkscape:cy="529.72731"
     inkscape:window-width="1920"
     inkscape:window-height="991"
     inkscape:window-x="-9"
     inkscape:window-y="-9"
     inkscape:window-maximized="1"
     inkscape:current-layer="text" />
  <defs
     id="defs4">
    <style
       id="style2">.ikr_cls1{letter-spacing:0em;}.ikr_cls2,.ikr_cls3{fill:#fff;}.ikr_cls4{letter-spacing:0em;}.ikr_cls5,.ikr_cls6,.ikr_cls7,.ikr_cls8,.ikr_cls9,.ikr_cls10,.ikr_cls11,.ikr_cls12{stroke:#000;}.ikr_cls5,.ikr_cls6,.ikr_cls7,.ikr_cls8,.ikr_cls9,.ikr_cls10,.ikr_cls12{fill:none;}.ikr_cls5,.ikr_cls7,.ikr_cls8,.ikr_cls11,.ikr_cls12{stroke-miterlimit:10;}.ikr_cls13{font-size:6px;}.ikr_cls13,.ikr_cls14,.ikr_cls15{font-family:Roboto-Regular, Roboto;}.ikr_cls16{letter-spacing:-.03em;}.ikr_cls3,.ikr_cls11{opacity:0;}.ikr_cls17{letter-spacing:0em;}.ikr_cls6,.ikr_cls9,.ikr_cls10{stroke-linecap:round;stroke-linejoin:round;}.ikr_cls18{letter-spacing:-.03em;}.ikr_cls7{stroke-width:3px;}.ikr_cls19{letter-spacing:-.13em;}.ikr_cls8{stroke-width:.25px;}.ikr_cls20{letter-spacing:-.02em;}.ikr_cls9{stroke-dasharray:0 0 .04 .02;}.ikr_cls10{stroke-dasharray:0 0 .02 .02;}.ikr_cls21{letter-spacing:0em;}.ikr_cls11{fill:#fff;}.ikr_cls22{letter-spacing:-.01em;}.ikr_cls14{font-size:12px;}.ikr_cls23{letter-spacing:-.01em;}.ikr_cls24{letter-spacing:-.01em;}.ikr_cls25{letter-spacing:0em;}.ikr_cls15{font-size:10px;}.ikr_cls26{font-family:Roboto-Bold, Roboto;font-size:50px;font-weight:700;}.ikr_cls12{stroke-width:.5px;}</style>
  </defs>
  <g
     id="bg"
     sodipodi:insensitive="true">
    <rect
       class="ikr_cls2"
       x="0.37"
       y="1.64"
       width="1858.36"
       height="962.84998"
       id="rect6" />
  </g>
  <g
     id="shape"
     sodipodi:insensitive="true">
    <polygon
       class="ikr_cls3"
       points="722.66,888.25 831.92,699.24 920.84,698.54 922.23,779.03 826.43,948.16 "
       id="polygon9" />
    <polygon
       class="ikr_cls3"
       points="473.55,740.12 570.49,576.69 819.75,722.1 722.66,888.25 "
       id="polygon11" />
    <polygon
       class="ikr_cls3"
       points="853.22,522.15 924.56,393.11 928.08,394.3 923.88,563.14 "
       id="polygon13" />
  </g>
  <g
     id="area"
     sodipodi:insensitive="true">
    <g
       id="LINE">
      <line
         class="ikr_cls10"
         x1="372.88"
         y1="151.42"
         x2="403.5"
         y2="98.379997"
         id="line16" />
    </g>
    <g
       id="LINE-2">
      <line
         class="ikr_cls10"
         x1="383.48999"
         y1="157.55"
         x2="414.10999"
         y2="104.51"
         id="line19" />
    </g>
    <g
       id="LINE-3">
      <line
         class="ikr_cls10"
         x1="394.09"
         y1="163.67"
         x2="424.72"
         y2="110.63"
         id="line22" />
    </g>
    <g
       id="LINE-4">
      <line
         class="ikr_cls10"
         x1="404.70001"
         y1="169.8"
         x2="435.32001"
         y2="116.76"
         id="line25" />
    </g>
    <g
       id="LINE-5">
      <line
         class="ikr_cls10"
         x1="415.31"
         y1="175.92"
         x2="445.92999"
         y2="122.88"
         id="line28" />
    </g>
    <g
       id="LINE-6">
      <line
         class="ikr_cls10"
         x1="425.92001"
         y1="182.03999"
         x2="456.54001"
         y2="129.00999"
         id="line31" />
    </g>
    <g
       id="LINE-7">
      <line
         class="ikr_cls10"
         x1="436.51999"
         y1="188.17"
         x2="467.14999"
         y2="135.13"
         id="line34" />
    </g>
    <g
       id="LINE-8">
      <line
         class="ikr_cls10"
         x1="447.13"
         y1="194.28999"
         x2="475.57999"
         y2="145.03"
         id="line37" />
    </g>
    <g
       id="LINE-9">
      <line
         class="ikr_cls10"
         x1="473.04999"
         y1="173.89999"
         x2="475.06"
         y2="170.41"
         id="line40" />
    </g>
    <g
       id="LINE-10">
      <line
         class="ikr_cls10"
         x1="458.09"
         y1="199.82001"
         x2="471.04001"
         y2="177.39"
         id="line43" />
    </g>
    <g
       id="LINE-11">
      <line
         class="ikr_cls6"
         x1="512.72998"
         y1="227.66"
         x2="539.45001"
         y2="181.38"
         id="line46" />
    </g>
    <g
       id="LINE-12">
      <line
         class="ikr_cls6"
         x1="475.06"
         y1="170.41"
         x2="486.41"
         y2="150.75"
         id="line49" />
    </g>
    <g
       id="LINE-13">
      <line
         class="ikr_cls6"
         x1="471.04001"
         y1="177.39"
         x2="473.04999"
         y2="173.89999"
         id="line52" />
    </g>
    <g
       id="LINE-14">
      <line
         class="ikr_cls6"
         x1="470.51999"
         y1="202.77"
         x2="497.01999"
         y2="156.88"
         id="line55" />
    </g>
    <g
       id="LINE-15">
      <line
         class="ikr_cls6"
         x1="480.89999"
         y1="209.28999"
         x2="507.63"
         y2="163"
         id="line58" />
    </g>
    <g
       id="LINE-16">
      <line
         class="ikr_cls6"
         x1="491.51001"
         y1="215.42"
         x2="518.23999"
         y2="169.13"
         id="line61" />
    </g>
    <g
       id="LINE-17">
      <line
         class="ikr_cls6"
         x1="502.12"
         y1="221.53999"
         x2="528.84003"
         y2="175.25"
         id="line64" />
    </g>
    <g
       id="LINE-18">
      <line
         class="ikr_cls6"
         x1="1195.9301"
         y1="315.76999"
         x2="1195.9301"
         y2="266.76999"
         id="line67" />
    </g>
    <g
       id="LINE-19">
      <line
         class="ikr_cls6"
         x1="1208.1801"
         y1="315.76999"
         x2="1208.1801"
         y2="266.76999"
         id="line70" />
    </g>
    <g
       id="LINE-20">
      <line
         class="ikr_cls6"
         x1="1220.4301"
         y1="315.76999"
         x2="1220.4301"
         y2="266.76999"
         id="line73" />
    </g>
    <g
       id="LINE-21">
      <line
         class="ikr_cls6"
         x1="1232.6801"
         y1="315.76999"
         x2="1232.6801"
         y2="266.76999"
         id="line76" />
    </g>
    <g
       id="LINE-22">
      <line
         class="ikr_cls6"
         x1="1244.92"
         y1="315.76999"
         x2="1244.92"
         y2="266.76999"
         id="line79" />
    </g>
    <g
       id="LINE-23">
      <line
         class="ikr_cls6"
         x1="1257.17"
         y1="315.76999"
         x2="1257.17"
         y2="266.76999"
         id="line82" />
    </g>
    <g
       id="LINE-24">
      <line
         class="ikr_cls6"
         x1="1269.42"
         y1="315.76999"
         x2="1269.42"
         y2="266.76999"
         id="line85" />
    </g>
    <g
       id="LINE-25">
      <line
         class="ikr_cls6"
         x1="1281.67"
         y1="315.76999"
         x2="1281.67"
         y2="266.76999"
         id="line88" />
    </g>
    <g
       id="LINE-26">
      <line
         class="ikr_cls6"
         x1="1293.92"
         y1="315.76999"
         x2="1293.92"
         y2="266.76999"
         id="line91" />
    </g>
    <g
       id="LINE-27">
      <line
         class="ikr_cls6"
         x1="1306.17"
         y1="315.76999"
         x2="1306.17"
         y2="266.76999"
         id="line94" />
    </g>
    <g
       id="LINE-28">
      <line
         class="ikr_cls6"
         x1="1318.42"
         y1="315.76999"
         x2="1318.42"
         y2="266.76999"
         id="line97" />
    </g>
    <g
       id="LINE-29">
      <line
         class="ikr_cls6"
         x1="1330.67"
         y1="315.76999"
         x2="1330.67"
         y2="266.76999"
         id="line100" />
    </g>
    <g
       id="LINE-30">
      <line
         class="ikr_cls6"
         x1="1342.91"
         y1="291.26999"
         x2="1342.91"
         y2="286.67001"
         id="line103" />
    </g>
    <g
       id="LINE-31">
      <line
         class="ikr_cls6"
         x1="1342.91"
         y1="315.76999"
         x2="1342.91"
         y2="295.29999"
         id="line106" />
    </g>
    <g
       id="LINE-32">
      <line
         class="ikr_cls6"
         x1="1403.04"
         y1="316.32001"
         x2="1403.04"
         y2="266.76999"
         id="line109" />
    </g>
    <g
       id="LINE-33">
      <line
         class="ikr_cls6"
         x1="1342.91"
         y1="286.67001"
         x2="1342.91"
         y2="266.76999"
         id="line112" />
    </g>
    <g
       id="LINE-34">
      <line
         class="ikr_cls6"
         x1="1342.91"
         y1="295.29999"
         x2="1342.91"
         y2="291.26999"
         id="line115" />
    </g>
    <g
       id="LINE-35">
      <line
         class="ikr_cls6"
         x1="1355.16"
         y1="316.32001"
         x2="1355.16"
         y2="266.76999"
         id="line118" />
    </g>
    <g
       id="LINE-36">
      <line
         class="ikr_cls6"
         x1="1367.41"
         y1="316.32001"
         x2="1367.41"
         y2="266.76999"
         id="line121" />
    </g>
    <g
       id="LINE-37">
      <line
         class="ikr_cls6"
         x1="1379.66"
         y1="316.32001"
         x2="1379.66"
         y2="266.76999"
         id="line124" />
    </g>
    <g
       id="LINE-38">
      <line
         class="ikr_cls6"
         x1="1391.91"
         y1="316.32001"
         x2="1391.91"
         y2="266.76999"
         id="line127" />
    </g>
    <g
       id="LINE-39">
      <line
         class="ikr_cls6"
         x1="826.70001"
         y1="506.76999"
         x2="806.72998"
         y2="541.35999"
         id="line130" />
    </g>
    <g
       id="LINE-40">
      <line
         class="ikr_cls6"
         x1="806.72998"
         y1="541.35999"
         x2="775.15002"
         y2="523.12"
         id="line133" />
    </g>
    <g
       id="LINE-41">
      <line
         class="ikr_cls6"
         x1="775.15002"
         y1="523.12"
         x2="795.13"
         y2="488.5"
         id="line136" />
    </g>
    <g
       id="LINE-42">
      <line
         class="ikr_cls6"
         x1="836.02002"
         y1="381.69"
         x2="869.75"
         y2="401.17001"
         id="line139" />
    </g>
    <g
       id="LINE-43">
      <line
         class="ikr_cls6"
         x1="869.75"
         y1="401.17001"
         x2="874.64001"
         y2="419.42001"
         id="line142" />
    </g>
    <g
       id="LINE-44">
      <line
         class="ikr_cls6"
         x1="874.64001"
         y1="419.42001"
         x2="826.96997"
         y2="502"
         id="line145" />
    </g>
    <g
       id="LINE-45">
      <line
         class="ikr_cls6"
         x1="814.15997"
         y1="532.69"
         x2="919.65002"
         y2="593.59003"
         id="line148" />
    </g>
    <g
       id="LINE-46">
      <line
         class="ikr_cls6"
         x1="827.92999"
         y1="508.82001"
         x2="814.15997"
         y2="532.69"
         id="line151" />
    </g>
    <g
       id="LINE-47">
      <line
         class="ikr_cls6"
         x1="849.94"
         y1="357.57999"
         x2="836.58002"
         y2="380.73001"
         id="line154" />
    </g>
    <g
       id="LINE-48">
      <line
         class="ikr_cls6"
         x1="1332.92"
         y1="269.82999"
         x2="1195.9301"
         y2="269.82999"
         id="line157" />
    </g>
    <g
       id="LINE-49">
      <line
         class="ikr_cls6"
         x1="1416.41"
         y1="269.82999"
         x2="1332.92"
         y2="269.82999"
         id="line160" />
    </g>
    <g
       id="LINE-50">
      <line
         class="ikr_cls6"
         x1="1353.5601"
         y1="314.10001"
         x2="1195.9301"
         y2="314.10001"
         id="line163" />
    </g>
    <g
       id="LINE-51">
      <line
         class="ikr_cls6"
         x1="1416.41"
         y1="314.10001"
         x2="1353.5601"
         y2="314.10001"
         id="line166" />
    </g>
    <g
       id="LINE-52">
      <line
         class="ikr_cls6"
         x1="790"
         y1="327.64001"
         x2="773.42999"
         y2="356.32001"
         id="line169" />
    </g>
    <g
       id="LINE-53">
      <line
         class="ikr_cls6"
         x1="773.42999"
         y1="356.32001"
         x2="799.46997"
         y2="371.35999"
         id="line172" />
    </g>
    <g
       id="LINE-54">
      <line
         class="ikr_cls6"
         x1="799.46997"
         y1="371.35999"
         x2="816.03003"
         y2="342.67001"
         id="line175" />
    </g>
    <g
       id="LINE-55">
      <line
         class="ikr_cls6"
         x1="816.03003"
         y1="342.67001"
         x2="799.46997"
         y2="371.35999"
         id="line178" />
    </g>
    <g
       id="LINE-56">
      <line
         class="ikr_cls6"
         x1="799.46997"
         y1="371.35999"
         x2="773.42999"
         y2="356.32001"
         id="line181" />
    </g>
    <g
       id="LINE-57">
      <line
         class="ikr_cls6"
         x1="773.42999"
         y1="356.32001"
         x2="790"
         y2="327.64001"
         id="line184" />
    </g>
    <g
       id="LINE-58">
      <line
         class="ikr_cls6"
         x1="761.56"
         y1="311.22"
         x2="745"
         y2="339.91"
         id="line187" />
    </g>
    <g
       id="LINE-59">
      <line
         class="ikr_cls6"
         x1="771.03003"
         y1="354.94"
         x2="787.59998"
         y2="326.25"
         id="line190" />
    </g>
    <g
       id="LINE-60">
      <line
         class="ikr_cls6"
         x1="787.59998"
         y1="326.25"
         x2="771.03003"
         y2="354.94"
         id="line193" />
    </g>
    <g
       id="LINE-61">
      <line
         class="ikr_cls6"
         x1="771.03003"
         y1="354.94"
         x2="745"
         y2="339.91"
         id="line196" />
    </g>
    <g
       id="LINE-62">
      <line
         class="ikr_cls6"
         x1="745"
         y1="339.91"
         x2="761.56"
         y2="311.22"
         id="line199" />
    </g>
    <g
       id="LINE-63">
      <line
         class="ikr_cls6"
         x1="742.09998"
         y1="338.23999"
         x2="758.66998"
         y2="309.54999"
         id="line202" />
    </g>
    <g
       id="LINE-64">
      <line
         class="ikr_cls6"
         x1="758.66998"
         y1="309.54999"
         x2="742.09998"
         y2="338.23999"
         id="line205" />
    </g>
    <g
       id="LINE-65">
      <line
         class="ikr_cls6"
         x1="732.51001"
         y1="294.73999"
         x2="715.94"
         y2="323.42999"
         id="line208" />
    </g>
    <g
       id="LINE-66">
      <line
         class="ikr_cls6"
         x1="742.09998"
         y1="338.23999"
         x2="716.07001"
         y2="323.20001"
         id="line211" />
    </g>
    <g
       id="LINE-67">
      <line
         class="ikr_cls6"
         x1="818.92999"
         y1="344.34"
         x2="802.35999"
         y2="373.03"
         id="line214" />
    </g>
    <g
       id="LINE-68">
      <line
         class="ikr_cls6"
         x1="802.35999"
         y1="373.03"
         x2="828.40002"
         y2="388.06"
         id="line217" />
    </g>
    <g
       id="LINE-69">
      <line
         class="ikr_cls6"
         x1="828.40002"
         y1="388.06"
         x2="844.96002"
         y2="359.37"
         id="line220" />
    </g>
    <g
       id="LINE-70">
      <line
         class="ikr_cls6"
         x1="844.96002"
         y1="359.37"
         x2="828.40002"
         y2="388.06"
         id="line223" />
    </g>
    <g
       id="LINE-71">
      <line
         class="ikr_cls6"
         x1="828.40002"
         y1="388.06"
         x2="802.35999"
         y2="373.03"
         id="line226" />
    </g>
    <g
       id="LINE-72">
      <line
         class="ikr_cls6"
         x1="802.35999"
         y1="373.03"
         x2="818.92999"
         y2="344.34"
         id="line229" />
    </g>
    <g
       id="LINE-73">
      <line
         class="ikr_cls9"
         x1="684.15002"
         y1="247.56"
         x2="710.88"
         y2="201.27"
         id="line232" />
    </g>
    <g
       id="LINE-74">
      <line
         class="ikr_cls9"
         x1="710.95001"
         y1="201.14999"
         x2="572.08002"
         y2="120.98"
         id="line235" />
    </g>
    <g
       id="LINE-75">
      <line
         class="ikr_cls9"
         x1="572.01001"
         y1="121.1"
         x2="545.28998"
         y2="167.39"
         id="line238" />
    </g>
    <g
       id="LINE-76">
      <line
         class="ikr_cls6"
         x1="723.95001"
         y1="300.26999"
         x2="839.66998"
         y2="367.07999"
         id="line241" />
    </g>
    <g
       id="LINE-77">
      <line
         class="ikr_cls6"
         x1="1195.9301"
         y1="267.59"
         x2="1195.9301"
         y2="249.77"
         id="line244" />
    </g>
    <g
       id="LINE-78">
      <polyline
         class="ikr_cls6"
         points="1423.37 262.74 1695.9 262.74 1695.9 321.33"
         id="polyline247" />
    </g>
    <g
       id="LINE-79">
      <line
         class="ikr_cls6"
         x1="1423.37"
         y1="262.87"
         x2="1423.37"
         y2="316.32001"
         id="line250" />
    </g>
    <polyline
       class="ikr_cls7"
       points="195.26 189.48 23.55 484.01 147.9 555.81 295.37 640.95 283.44 662.83 459.86 765 472.45 743.19 825.32 948.2 921.12 779.07 919.62 679.81"
       id="polyline253" />
    <polyline
       class="ikr_cls7"
       points="722.66 888.25 831.92 699.24 873.45 698.51"
       id="polyline255" />
    <line
       class="ikr_cls7"
       x1="906.94"
       y1="698.53998"
       x2="920.84003"
       y2="698.53998"
       id="line257" />
    <line
       class="ikr_cls7"
       x1="473.54999"
       y1="743.15002"
       x2="546.57001"
       y2="616.37"
       id="line259" />
    <line
       class="ikr_cls7"
       x1="540.64001"
       y1="627.34998"
       x2="400.03"
       y2="544.53998"
       id="line261" />
    <polyline
       class="ikr_cls7"
       points="296.48 640.91 364.74 523.89 364.74 523.89"
       id="polyline263" />
    <line
       class="ikr_cls7"
       x1="121.34"
       y1="319.13"
       x2="228.39"
       y2="381.70999"
       id="line265" />
    <polyline
       class="ikr_cls7"
       points="817.69 722.1 481.63 525.53 494.6 505.42 444.23 475.59"
       id="polyline267" />
    <line
       class="ikr_cls7"
       x1="404.51999"
       y1="455.12"
       x2="461.22"
       y2="355.64001"
       id="line269" />
    <polyline
       class="ikr_cls7"
       points="481.46 316.33 526.09 241.58 340.93 135.61"
       id="polyline271" />
    <polyline
       class="ikr_cls7"
       points="570.79 193.59 287.55 29.23 239.22 113.38 238.89 113.96"
       id="polyline273" />
    <line
       class="ikr_cls7"
       x1="600.89001"
       y1="207.3"
       x2="635.90997"
       y2="228.39999"
       id="line275" />
    <line
       class="ikr_cls7"
       x1="667.02002"
       y1="246.03"
       x2="862.31"
       y2="358.73999"
       id="line277" />
    <polyline
       class="ikr_cls7"
       points="897.57 378.33 926.91 394.53 981.3 394.81"
       id="polyline279" />
    <line
       class="ikr_cls7"
       x1="926.90997"
       y1="394.53"
       x2="926.03998"
       y2="484.85001"
       id="line281" />
    <line
       class="ikr_cls7"
       x1="923.88"
       y1="516.20001"
       x2="923.88"
       y2="614.08002"
       id="line283" />
    <polyline
       class="ikr_cls7"
       points="922.23 779.03 1191.49 782.59 1192.12 855.49 1835.1 857.59 1831.05 322.59 1682.82 321.33"
       id="polyline285" />
    <line
       class="ikr_cls7"
       x1="1573.1899"
       y1="323.44"
       x2="1531.63"
       y2="323.44"
       id="line287" />
    <line
       class="ikr_cls7"
       x1="1497.14"
       y1="323.56"
       x2="1478.01"
       y2="323.56"
       id="line289" />
    <polyline
       class="ikr_cls7"
       points="1444.2 322.59 1193.09 322.59 1194.28 455.12"
       id="polyline291" />
    <line
       class="ikr_cls7"
       x1="1192.3101"
       y1="497.81"
       x2="1191.49"
       y2="782.59003"
       id="line293" />
    <line
       class="ikr_cls7"
       x1="1015.26"
       y1="394.81"
       x2="1025.61"
       y2="394.81"
       id="line295" />
    <line
       class="ikr_cls7"
       x1="1091.29"
       y1="394.81"
       x2="1102.67"
       y2="394.81"
       id="line297" />
    <line
       class="ikr_cls7"
       x1="1193.74"
       y1="394.81"
       x2="1136.63"
       y2="394.81"
       id="line299" />
    <line
       class="ikr_cls7"
       x1="921.45001"
       y1="562.01001"
       x2="664.34003"
       y2="410.75"
       id="line301" />
    <line
       class="ikr_cls7"
       x1="853.21997"
       y1="522.15002"
       x2="924.56"
       y2="393.10999"
       id="line303" />
    <line
       class="ikr_cls7"
       x1="696.01001"
       y1="261.81"
       x2="620.41998"
       y2="392.5"
       id="line305" />
    <polyline
       class="ikr_cls7"
       points="677.49 293.83 714.24 315.42 732 283.54"
       id="polyline307" />
    <polyline
       class="ikr_cls7"
       points="626.61 223.59 591.61 282.85 575.62 272.62 537.47 338.73 583.21 366.63"
       id="polyline309" />
    <polyline
       class="ikr_cls7"
       points="415.21 460.29 404.41 453.29 277 381.51 261.53 405.8 255.82 402.02"
       id="polyline311" />
    <line
       class="ikr_cls7"
       x1="255.35001"
       y1="83.510002"
       x2="314.25"
       y2="119.47"
       id="line313" />
    <line
       class="ikr_cls7"
       x1="564.02002"
       y1="587.46002"
       x2="570.48999"
       y2="576.69"
       id="line315" />
    <line
       class="ikr_cls7"
       x1="355.5"
       y1="519.09003"
       x2="372.35001"
       y2="529.76001"
       id="line317" />
    <line
       class="ikr_cls7"
       x1="612.60999"
       y1="387.81"
       x2="627.59003"
       y2="397.39001"
       id="line319" />
    <polyline
       class="ikr_cls7"
       points="159.56 562.39 234.68 446.92 326.63 502.11"
       id="polyline321" />
    <line
       class="ikr_cls7"
       x1="239.22"
       y1="113.38"
       x2="238.89"
       y2="113.96"
       id="line323" />
    <line
       class="ikr_cls7"
       x1="221.67"
       y1="143.91"
       x2="213.66"
       y2="157.86"
       id="line325" />
    <polygon
       class="ikr_cls12"
       points="899.16,376.54 863.1,356.4 860.8,360.46 897.23,380.44 "
       id="polygon327" />
    <line
       class="ikr_cls8"
       x1="862.03003"
       y1="358.56"
       x2="898.91998"
       y2="378.54001"
       id="line329" />
    <polygon
       class="ikr_cls12"
       points="668.13,244.76 636.57,226.3 634.45,229.86 666.35,248.17 "
       id="polygon331" />
    <line
       class="ikr_cls8"
       x1="635.58002"
       y1="228.2"
       x2="667.87"
       y2="246.52"
       id="line333" />
  </g>
  <g
     id="window"
     sodipodi:insensitive="true">
    <polygon
       class="ikr_cls12"
       points="211.71,156.35 193.09,188.1 197.52,190.92 215.85,158.99 "
       id="polygon336" />
    <line
       class="ikr_cls8"
       x1="195.25999"
       y1="189.48"
       x2="213.66"
       y2="157.86"
       id="line338" />
    <polygon
       class="ikr_cls12"
       points="1015.26,392.1 980.76,392.39 980.95,397.72 1015.14,397.01 "
       id="polygon340" />
    <line
       class="ikr_cls8"
       x1="981.02002"
       y1="395.04001"
       x2="1014.99"
       y2="394.54001"
       id="line342" />
    <polygon
       class="ikr_cls12"
       points="1136.84,392 1102.35,392.29 1102.53,397.62 1136.72,396.91 "
       id="polygon344" />
    <line
       class="ikr_cls8"
       x1="1102.6"
       y1="394.94"
       x2="1136.5699"
       y2="394.44"
       id="line346" />
    <polygon
       class="ikr_cls12"
       points="1531.63,320.75 1497.14,321.04 1497.14,326.28 1531.63,325.88 "
       id="polygon348" />
    <line
       class="ikr_cls8"
       x1="1497.39"
       y1="323.69"
       x2="1531.36"
       y2="323.19"
       id="line350" />
    <polygon
       class="ikr_cls12"
       points="237.01,112.57 219.28,142.9 223.71,145.72 241.15,115.21 "
       id="polygon352" />
    <line
       class="ikr_cls8"
       x1="221.02"
       y1="144.96001"
       x2="239.41"
       y2="113.33"
       id="line354" />
  </g>
  <g
     id="door"
     sodipodi:insensitive="true">
    <path
       class="ikr_cls5"
       d="m 806.73,540.59 -8.63,14.78 v 0 c -8.22,-4.8 -10.99,-15.35 -6.19,-23.57"
       id="path357" />
    <path
       class="ikr_cls5"
       d="m 775.73,522.49 -8.63,14.78 v 0 c 8.9,5.2 20.01,2.75 24.81,-5.47"
       id="path359" />
    <path
       class="ikr_cls5"
       d="m 922.56,612.72 31.96,-0.18 v 0 c 0.1,18.95 -15.17,34.4 -34.12,34.5"
       id="path361" />
    <path
       class="ikr_cls5"
       d="m 920.81,681.36 34.09,-0.19 v 0 c -0.1,-18.95 -15.55,-34.23 -34.5,-34.12"
       id="path363" />
    <path
       class="ikr_cls5"
       d="m 1092.84,394.07 0.18,32.73 v 0 c -18.95,0.1 -34.4,-15.17 -34.5,-34.12"
       id="path365" />
    <path
       class="ikr_cls5"
       d="m 1024.48,394.27 -0.1,32.91 v 0 c 18.95,-0.1 34.23,-15.55 34.12,-34.5"
       id="path367" />
    <path
       class="ikr_cls5"
       d="m 257.15,402.9 20.49,-33 v 0 c -17.21,-9.29 -41.11,-4.43 -50.4,12.78"
       id="path369" />
    <path
       class="ikr_cls5"
       d="m 460.04,355.23 37.4,19.71 v 0 c 11.31,-21.46 4.05,-48.02 -17.41,-59.33"
       id="path371" />
    <path
       class="ikr_cls5"
       d="m 313.25,118.22 -16.69,29.56 v 0 c 16.43,9.28 37.28,3.48 46.55,-12.96"
       id="path373" />
    <path
       class="ikr_cls5"
       d="m 569.59,192.62 17.15,-29.29 v 0 c 16.29,9.53 22.16,29.75 12.63,46.04"
       id="path375" />
    <path
       class="ikr_cls5"
       d="m 626.16,396.48 22.58,-37.6 v 0 c 18.96,11.1 26.17,33.96 15.07,52.93"
       id="path377" />
    <path
       class="ikr_cls5"
       d="m 923.72,483.31 35.48,0.57 v 0 c -0.31,19.09 -16.54,34.31 -36.27,33.99"
       id="path379" />
    <path
       class="ikr_cls5"
       d="m 562.89,586.27 30.88,20.65 v 0 c -10.82,15.73 -32.78,19.6 -48.52,8.79"
       id="path381" />
    <path
       class="ikr_cls5"
       d="m 371.37,528.01 -15.87,30.45 v 0 c 16.93,8.82 37.81,3 46.63,-13.93"
       id="path383" />
    <path
       class="ikr_cls5"
       d="m 261.78,408.27 -34.95,-22.45 -0.67,1.07 c -13.12,21.07 -6.1,49.6 14.97,62.72"
       id="path385" />
    <path
       class="ikr_cls5"
       d="m 357.34,519.09 -18.05,28.65 v 0 c -16.76,-10.56 -24.51,-29.65 -13.95,-46.41"
       id="path387" />
    <path
       class="ikr_cls5"
       d="m 414.13,458.96 -17.61,30.97 v 0 c 17.22,9.79 39.11,3.76 48.9,-13.45"
       id="path389" />
    <path
       class="ikr_cls5"
       d="m 1193.74,497.5 -41.79,-0.67 v 0 c 0.39,-24.29 19.04,-43.66 43.33,-43.27"
       id="path391" />
    <path
       class="ikr_cls5"
       d="m 1479.15,324.03 0.39,-38.7 v 0 c -20.36,0.33 -37.33,17.87 -37,38.23"
       id="path393" />
    <path
       class="ikr_cls5"
       d="m 908.49,698.22 -1.96,36.3 v 0 c -20.18,-1.09 -35.71,-17.18 -34.62,-37.35"
       id="path395" />
    <path
       class="ikr_cls5"
       d="m 716.96,323.39 -12.85,22.1 v 0 c 13.27,7.9 30.08,4.13 37.56,-8.43"
       id="path397" />
    <path
       class="ikr_cls5"
       d="m 746.05,339.82 -13.44,22.58 v 0 c 13.42,7.99 30.35,4.28 37.82,-8.27"
       id="path399" />
    <path
       class="ikr_cls5"
       d="m 827.42,387.86 -12.93,22.88 v 0 c -13.45,-7.6 -18.53,-24.07 -11.34,-36.79"
       id="path401" />
    <path
       class="ikr_cls5"
       d="m 798.38,371.47 -13.01,22.83 v 0 c -13.45,-7.66 -18.49,-24.17 -11.26,-36.86"
       id="path403" />
    <path
       class="ikr_cls5"
       d="m 613.92,388.65 22.03,-36.71 v 0 c -18.84,-11.31 -42.2,-2.98 -53.51,15.86"
       id="path405" />
  </g>
  <g
     id="Layer_7"
     sodipodi:insensitive="true">
    <g
       id="ARC">
      <path
         class="ikr_cls9"
         d="m 585.49,310.98 c 2.92,-5.06 1.19,-11.53 -3.87,-14.45 -5.06,-2.92 -11.53,-1.19 -14.45,3.87"
         id="path408" />
    </g>
    <g
       id="ARC-2">
      <path
         class="ikr_cls9"
         d="m 567.17,300.4 c -2.92,5.06 -1.19,11.53 3.87,14.45 5.06,2.92 11.53,1.19 14.45,-3.87"
         id="path411" />
    </g>
    <g
       id="ARC-3">
      <path
         class="ikr_cls9"
         d="m 575.45,297.65 c -1.58,1.36 -2.93,2.96 -4.01,4.74"
         id="path414" />
    </g>
    <g
       id="ARC-4">
      <path
         class="ikr_cls9"
         d="m 574.18,304.93 c 0.2,0.12 0.46,0.05 0.57,-0.15 0.11,-0.2 0.05,-0.46 -0.15,-0.57"
         id="path417" />
    </g>
    <g
       id="LINE-80">
      <line
         class="ikr_cls9"
         x1="570.39001"
         y1="301.78"
         x2="574.59998"
         y2="304.20999"
         id="line420" />
    </g>
    <g
       id="LINE-81">
      <line
         class="ikr_cls9"
         x1="569.96997"
         y1="302.5"
         x2="574.17999"
         y2="304.92999"
         id="line423" />
    </g>
    <g
       id="ARC-5">
      <path
         class="ikr_cls9"
         d="m 571.03,303.11 c -1,1.82 -1.71,3.79 -2.1,5.84"
         id="path426" />
    </g>
    <g
       id="ARC-6">
      <path
         class="ikr_cls9"
         d="m 578.66,297.17 c -1.09,-0.24 -2.23,-0.07 -3.2,0.48"
         id="path429" />
    </g>
    <g
       id="ARC-7">
      <path
         class="ikr_cls9"
         d="m 568.93,308.95 c 0.02,1.12 0.44,2.19 1.19,3.01"
         id="path432" />
    </g>
    <g
       id="ARC-8">
      <path
         class="ikr_cls9"
         d="m 570.12,311.97 c 3.47,3.43 9.06,3.4 12.49,-0.07 3.43,-3.47 3.4,-9.06 -0.07,-12.49 -1.08,-1.07 -2.41,-1.84 -3.88,-2.24"
         id="path435" />
    </g>
    <g
       id="ARC-9">
      <path
         class="ikr_cls9"
         d="m 568.79,304.55 c 0.27,0.15 0.61,0.06 0.76,-0.2 0.15,-0.26 0.06,-0.61 -0.2,-0.76"
         id="path438" />
    </g>
    <g
       id="ARC-10">
      <path
         class="ikr_cls9"
         d="m 569.34,303.59 c -0.27,-0.15 -0.61,-0.06 -0.76,0.2 -0.15,0.26 -0.06,0.61 0.2,0.76"
         id="path441" />
    </g>
    <g
       id="ARC-11">
      <path
         class="ikr_cls9"
         d="m 570.39,301.78 c -0.2,-0.12 -0.46,-0.05 -0.57,0.15 -0.11,0.2 -0.05,0.46 0.15,0.57"
         id="path444" />
    </g>
    <g
       id="ARC-12">
      <path
         class="ikr_cls9"
         d="m 571.01,300.69 c 0.27,0.15 0.61,0.06 0.76,-0.2 0.15,-0.26 0.06,-0.61 -0.2,-0.76"
         id="path447" />
    </g>
    <g
       id="ARC-13">
      <path
         class="ikr_cls9"
         d="m 571.57,299.73 c -0.27,-0.15 -0.61,-0.06 -0.76,0.2 -0.15,0.26 -0.06,0.61 0.2,0.76"
         id="path450" />
    </g>
    <g
       id="ARC-14">
      <path
         class="ikr_cls9"
         d="m 575.87,306.47 c 0.43,0.25 0.99,0.1 1.24,-0.33 0.25,-0.43 0.1,-0.99 -0.33,-1.24"
         id="path453" />
    </g>
    <g
       id="ARC-15">
      <path
         class="ikr_cls9"
         d="m 576.78,304.91 c -0.43,-0.25 -0.99,-0.1 -1.24,0.33 -0.25,0.43 -0.1,0.99 0.33,1.24"
         id="path456" />
    </g>
    <g
       id="LINE-82">
      <line
         class="ikr_cls9"
         x1="871.34998"
         y1="476.34"
         x2="888.04999"
         y2="447.41"
         id="line459" />
    </g>
    <g
       id="LINE-83">
      <line
         class="ikr_cls9"
         x1="888.04999"
         y1="447.41"
         x2="867.79999"
         y2="435.72"
         id="line462" />
    </g>
    <g
       id="LINE-84">
      <line
         class="ikr_cls9"
         x1="867.79999"
         y1="435.72"
         x2="851.09998"
         y2="464.64999"
         id="line465" />
    </g>
    <g
       id="LINE-85">
      <line
         class="ikr_cls9"
         x1="851.09998"
         y1="464.64999"
         x2="871.34998"
         y2="476.34"
         id="line468" />
    </g>
    <g
       id="ARC-16">
      <path
         class="ikr_cls9"
         d="m 875.86,463.52 c -0.53,-0.31 -1.21,-0.13 -1.52,0.41 -0.31,0.53 -0.13,1.21 0.41,1.52"
         id="path471" />
    </g>
    <g
       id="ARC-17">
      <path
         class="ikr_cls9"
         d="m 874.75,465.45 c 0.53,0.31 1.21,0.13 1.52,-0.41 0.31,-0.53 0.13,-1.21 -0.41,-1.52"
         id="path474" />
    </g>
    <g
       id="ARC-18">
      <path
         class="ikr_cls9"
         d="m 880.31,455.8 c -0.53,-0.31 -1.21,-0.13 -1.52,0.41 -0.31,0.53 -0.13,1.21 0.41,1.52"
         id="path477" />
    </g>
    <g
       id="ARC-19">
      <path
         class="ikr_cls9"
         d="m 879.2,457.73 c 0.53,0.31 1.21,0.13 1.52,-0.41 0.31,-0.53 0.13,-1.21 -0.41,-1.52"
         id="path480" />
    </g>
    <g
       id="LINE-86">
      <line
         class="ikr_cls9"
         x1="875.64001"
         y1="458.89001"
         x2="881.76001"
         y2="448.28"
         id="line483" />
    </g>
    <g
       id="ARC-20">
      <path
         class="ikr_cls9"
         d="m 871.78,456.66 c -0.27,-0.15 -0.61,-0.06 -0.76,0.2 -0.15,0.26 -0.06,0.61 0.2,0.76"
         id="path486" />
    </g>
    <g
       id="LINE-87">
      <line
         class="ikr_cls9"
         x1="877.25"
         y1="461.10999"
         x2="871.22998"
         y2="457.63"
         id="line489" />
    </g>
    <g
       id="LINE-88">
      <line
         class="ikr_cls9"
         x1="877.81"
         y1="460.14001"
         x2="871.78003"
         y2="456.66"
         id="line492" />
    </g>
    <g
       id="ARC-21">
      <path
         class="ikr_cls9"
         d="m 877.25,461.11 c 0.27,0.15 0.61,0.06 0.76,-0.2 0.15,-0.26 0.06,-0.61 -0.2,-0.76"
         id="path495" />
    </g>
    <g
       id="ARC-22">
      <path
         class="ikr_cls9"
         d="m 881.76,448.28 c 0.61,-1.07 0.25,-2.43 -0.82,-3.04"
         id="path498" />
    </g>
    <g
       id="ARC-23">
      <path
         class="ikr_cls9"
         d="m 870.34,439.12 c -1.07,-0.61 -2.43,-0.25 -3.04,0.82"
         id="path501" />
    </g>
    <g
       id="ARC-24">
      <path
         class="ikr_cls9"
         d="m 854.49,462.11 c -0.61,1.07 -0.25,2.43 0.82,3.04"
         id="path504" />
    </g>
    <g
       id="ARC-25">
      <path
         class="ikr_cls9"
         d="m 865.92,471.28 c 1.07,0.61 2.43,0.25 3.04,-0.82"
         id="path507" />
    </g>
    <g
       id="LINE-89">
      <line
         class="ikr_cls9"
         x1="868.96002"
         y1="470.45999"
         x2="875.08002"
         y2="459.85001"
         id="line510" />
    </g>
    <g
       id="LINE-90">
      <line
         class="ikr_cls9"
         x1="855.31"
         y1="465.14999"
         x2="865.91998"
         y2="471.28"
         id="line513" />
    </g>
    <g
       id="LINE-91">
      <line
         class="ikr_cls9"
         x1="867.29999"
         y1="439.92999"
         x2="854.48999"
         y2="462.10999"
         id="line516" />
    </g>
    <g
       id="LINE-92">
      <line
         class="ikr_cls9"
         x1="880.95001"
         y1="445.23999"
         x2="870.34003"
         y2="439.12"
         id="line519" />
    </g>
    <g
       id="ARC-26">
      <path
         class="ikr_cls9"
         d="m 870.04,455.02 c -0.53,-0.31 -1.21,-0.13 -1.52,0.41 -0.31,0.53 -0.13,1.21 0.41,1.52"
         id="path522" />
    </g>
    <g
       id="ARC-27">
      <path
         class="ikr_cls9"
         d="m 868.93,456.94 c 0.53,0.31 1.21,0.13 1.52,-0.41 0.31,-0.53 0.13,-1.21 -0.41,-1.52"
         id="path525" />
    </g>
    <g
       id="LINE-93">
      <line
         class="ikr_cls9"
         x1="881.69"
         y1="542.51001"
         x2="864.33002"
         y2="532.48999"
         id="line528" />
    </g>
    <g
       id="LINE-94">
      <line
         class="ikr_cls9"
         x1="864.33002"
         y1="532.48999"
         x2="854.31"
         y2="549.84003"
         id="line531" />
    </g>
    <g
       id="LINE-95">
      <line
         class="ikr_cls9"
         x1="854.31"
         y1="549.84003"
         x2="871.65997"
         y2="559.87"
         id="line534" />
    </g>
    <g
       id="LINE-96">
      <line
         class="ikr_cls9"
         x1="871.65997"
         y1="559.87"
         x2="881.69"
         y2="542.51001"
         id="line537" />
    </g>
    <g
       id="ARC-28">
      <path
         class="ikr_cls9"
         d="m 865.2,538.77 c -1.07,-0.61 -2.43,-0.25 -3.04,0.82"
         id="path540" />
    </g>
    <g
       id="ARC-29">
      <path
         class="ikr_cls9"
         d="m 874.65,541.34 c -0.31,0.53 -0.13,1.21 0.41,1.52 0.53,0.31 1.21,0.13 1.52,-0.41"
         id="path543" />
    </g>
    <g
       id="ARC-30">
      <path
         class="ikr_cls9"
         d="m 876.58,542.45 c 0.31,-0.53 0.13,-1.21 -0.41,-1.52 -0.53,-0.31 -1.21,-0.13 -1.52,0.41"
         id="path546" />
    </g>
    <g
       id="ARC-31">
      <path
         class="ikr_cls9"
         d="m 866.93,536.88 c -0.31,0.53 -0.13,1.21 0.41,1.52 0.53,0.31 1.21,0.13 1.52,-0.41"
         id="path549" />
    </g>
    <g
       id="ARC-32">
      <path
         class="ikr_cls9"
         d="m 868.86,538 c 0.31,-0.53 0.13,-1.21 -0.41,-1.52 -0.54,-0.31 -1.21,-0.13 -1.52,0.41"
         id="path552" />
    </g>
    <g
       id="LINE-97">
      <line
         class="ikr_cls9"
         x1="870.02002"
         y1="541.56"
         x2="865.20001"
         y2="538.77002"
         id="line555" />
    </g>
    <g
       id="ARC-33">
      <path
         class="ikr_cls9"
         d="m 868.63,543.97 c -0.15,0.27 -0.06,0.61 0.2,0.76 0.26,0.15 0.61,0.06 0.76,-0.2"
         id="path558" />
    </g>
    <g
       id="LINE-98">
      <line
         class="ikr_cls9"
         x1="872.23999"
         y1="539.95001"
         x2="869.59003"
         y2="544.53003"
         id="line561" />
    </g>
    <g
       id="LINE-99">
      <line
         class="ikr_cls9"
         x1="871.27002"
         y1="539.39001"
         x2="868.63"
         y2="543.96997"
         id="line564" />
    </g>
    <g
       id="ARC-34">
      <path
         class="ikr_cls9"
         d="m 872.24,539.95 c 0.15,-0.27 0.06,-0.61 -0.2,-0.76 -0.26,-0.15 -0.61,-0.06 -0.76,0.2"
         id="path567" />
    </g>
    <g
       id="ARC-35">
      <path
         class="ikr_cls9"
         d="m 857.7,547.3 c -0.61,1.07 -0.25,2.43 0.82,3.04"
         id="path570" />
    </g>
    <g
       id="ARC-36">
      <path
         class="ikr_cls9"
         d="m 869.12,556.47 c 1.07,0.61 2.43,0.25 3.04,-0.82"
         id="path573" />
    </g>
    <g
       id="ARC-37">
      <path
         class="ikr_cls9"
         d="m 876.62,547.94 c 0.61,-1.07 0.25,-2.43 -0.82,-3.04"
         id="path576" />
    </g>
    <g
       id="LINE-100">
      <line
         class="ikr_cls9"
         x1="875.81"
         y1="544.90002"
         x2="870.97998"
         y2="542.12"
         id="line579" />
    </g>
    <g
       id="LINE-101">
      <line
         class="ikr_cls9"
         x1="872.16998"
         y1="555.65997"
         x2="876.62"
         y2="547.94"
         id="line582" />
    </g>
    <g
       id="LINE-102">
      <line
         class="ikr_cls9"
         x1="858.52002"
         y1="550.34998"
         x2="869.12"
         y2="556.46997"
         id="line585" />
    </g>
    <g
       id="LINE-103">
      <line
         class="ikr_cls9"
         x1="862.15997"
         y1="539.59003"
         x2="857.70001"
         y2="547.29999"
         id="line588" />
    </g>
    <g
       id="ARC-38">
      <path
         class="ikr_cls9"
         d="m 866.98,545.71 c -0.31,0.53 -0.13,1.21 0.41,1.52 0.53,0.31 1.21,0.13 1.52,-0.41"
         id="path591" />
    </g>
    <g
       id="ARC-39">
      <path
         class="ikr_cls9"
         d="m 868.91,546.82 c 0.31,-0.53 0.13,-1.21 -0.41,-1.52 -0.54,-0.31 -1.21,-0.13 -1.52,0.41"
         id="path594" />
    </g>
    <g
       id="LINE-104">
      <line
         class="ikr_cls9"
         x1="647.92999"
         y1="259.29001"
         x2="646.77002"
         y2="256.84"
         id="line597" />
    </g>
    <g
       id="LINE-105">
      <line
         class="ikr_cls9"
         x1="648.34003"
         y1="260.81"
         x2="647.92999"
         y2="259.29001"
         id="line600" />
    </g>
    <g
       id="LINE-106">
      <line
         class="ikr_cls9"
         x1="648.34003"
         y1="261.92001"
         x2="648.34003"
         y2="260.81"
         id="line603" />
    </g>
    <g
       id="LINE-107">
      <line
         class="ikr_cls9"
         x1="648.04999"
         y1="263.53"
         x2="648.34003"
         y2="261.92001"
         id="line606" />
    </g>
    <g
       id="LINE-108">
      <line
         class="ikr_cls9"
         x1="647.5"
         y1="264.48999"
         x2="648.04999"
         y2="263.53"
         id="line609" />
    </g>
    <g
       id="LINE-109">
      <line
         class="ikr_cls9"
         x1="646.25"
         y1="265.54001"
         x2="647.5"
         y2="264.48999"
         id="line612" />
    </g>
    <g
       id="LINE-110">
      <line
         class="ikr_cls9"
         x1="645.28998"
         y1="266.09"
         x2="646.25"
         y2="265.54001"
         id="line615" />
    </g>
    <g
       id="LINE-111">
      <line
         class="ikr_cls9"
         x1="643.76001"
         y1="266.5"
         x2="645.28998"
         y2="266.09"
         id="line618" />
    </g>
    <g
       id="LINE-112">
      <line
         class="ikr_cls9"
         x1="641.06"
         y1="266.72"
         x2="643.76001"
         y2="266.5"
         id="line621" />
    </g>
    <g
       id="LINE-113">
      <line
         class="ikr_cls9"
         x1="634.28003"
         y1="249.52"
         x2="633.03003"
         y2="250.57001"
         id="line624" />
    </g>
    <g
       id="LINE-114">
      <line
         class="ikr_cls9"
         x1="633.03003"
         y1="250.57001"
         x2="630.96997"
         y2="253.02"
         id="line627" />
    </g>
    <g
       id="LINE-115">
      <line
         class="ikr_cls9"
         x1="630.96997"
         y1="253.02"
         x2="629.85999"
         y2="254.95"
         id="line630" />
    </g>
    <g
       id="LINE-116">
      <line
         class="ikr_cls9"
         x1="629.85999"
         y1="254.95"
         x2="628.76001"
         y2="257.95999"
         id="line633" />
    </g>
    <g
       id="LINE-117">
      <line
         class="ikr_cls9"
         x1="628.76001"
         y1="257.95999"
         x2="628.47998"
         y2="259.57001"
         id="line636" />
    </g>
    <g
       id="LINE-118">
      <line
         class="ikr_cls9"
         x1="646.77002"
         y1="256.84"
         x2="645.35999"
         y2="254.82001"
         id="line639" />
    </g>
    <g
       id="LINE-119">
      <line
         class="ikr_cls9"
         x1="645.35999"
         y1="254.82001"
         x2="643.84003"
         y2="253.00999"
         id="line642" />
    </g>
    <g
       id="LINE-120">
      <line
         class="ikr_cls9"
         x1="643.84003"
         y1="253.00999"
         x2="642.20001"
         y2="251.37"
         id="line645" />
    </g>
    <g
       id="LINE-121">
      <line
         class="ikr_cls9"
         x1="642.20001"
         y1="251.37"
         x2="640.38"
         y2="250.09"
         id="line648" />
    </g>
    <g
       id="LINE-122">
      <line
         class="ikr_cls9"
         x1="640.38"
         y1="250.09"
         x2="639.37"
         y2="249.62"
         id="line651" />
    </g>
    <g
       id="LINE-123">
      <line
         class="ikr_cls9"
         x1="639.37"
         y1="249.62"
         x2="638.29999"
         y2="249.24001"
         id="line654" />
    </g>
    <g
       id="LINE-124">
      <line
         class="ikr_cls9"
         x1="638.29999"
         y1="249.24001"
         x2="637.19"
         y2="248.94"
         id="line657" />
    </g>
    <g
       id="LINE-125">
      <line
         class="ikr_cls9"
         x1="637.19"
         y1="248.94"
         x2="635.90997"
         y2="248.92999"
         id="line660" />
    </g>
    <g
       id="LINE-126">
      <line
         class="ikr_cls9"
         x1="635.90997"
         y1="248.92999"
         x2="634.28003"
         y2="249.52"
         id="line663" />
    </g>
    <g
       id="LINE-127">
      <line
         class="ikr_cls9"
         x1="638.62"
         y1="266.51001"
         x2="641.06"
         y2="266.72"
         id="line666" />
    </g>
    <g
       id="LINE-128">
      <line
         class="ikr_cls9"
         x1="636.28003"
         y1="266.10001"
         x2="638.62"
         y2="266.51001"
         id="line669" />
    </g>
    <g
       id="LINE-129">
      <line
         class="ikr_cls9"
         x1="634.04999"
         y1="265.5"
         x2="636.28003"
         y2="266.10001"
         id="line672" />
    </g>
    <g
       id="LINE-130">
      <line
         class="ikr_cls9"
         x1="632.03003"
         y1="264.56"
         x2="634.04999"
         y2="265.5"
         id="line675" />
    </g>
    <g
       id="LINE-131">
      <line
         class="ikr_cls9"
         x1="631.12"
         y1="263.92001"
         x2="632.03003"
         y2="264.56"
         id="line678" />
    </g>
    <g
       id="LINE-132">
      <line
         class="ikr_cls9"
         x1="630.25"
         y1="263.19"
         x2="631.12"
         y2="263.92001"
         id="line681" />
    </g>
    <g
       id="LINE-133">
      <line
         class="ikr_cls9"
         x1="629.42999"
         y1="262.38"
         x2="630.25"
         y2="263.19"
         id="line684" />
    </g>
    <g
       id="LINE-134">
      <line
         class="ikr_cls9"
         x1="628.78003"
         y1="261.26999"
         x2="629.42999"
         y2="262.38"
         id="line687" />
    </g>
    <g
       id="LINE-135">
      <line
         class="ikr_cls9"
         x1="628.47998"
         y1="259.57001"
         x2="628.78003"
         y2="261.26999"
         id="line690" />
    </g>
    <g
       id="LINE-136">
      <line
         class="ikr_cls9"
         x1="631.16998"
         y1="248.17"
         x2="634.28003"
         y2="249.52"
         id="line693" />
    </g>
    <g
       id="LINE-137">
      <line
         class="ikr_cls9"
         x1="625.76001"
         y1="257.54999"
         x2="628.47998"
         y2="259.57001"
         id="line696" />
    </g>
    <g
       id="ARC-40">
      <path
         class="ikr_cls9"
         d="m 631.95,246.83 c 1.15,-1.98 0.47,-4.52 -1.52,-5.67"
         id="path699" />
    </g>
    <g
       id="LINE-138">
      <line
         class="ikr_cls9"
         x1="622.97998"
         y1="236.86"
         x2="624.90002"
         y2="237.98"
         id="line702" />
    </g>
    <g
       id="LINE-139">
      <line
         class="ikr_cls9"
         x1="626.10999"
         y1="238.67"
         x2="630.42999"
         y2="241.16"
         id="line705" />
    </g>
    <g
       id="LINE-140">
      <line
         class="ikr_cls9"
         x1="611.87"
         y1="256.10001"
         x2="622.97998"
         y2="236.86"
         id="line708" />
    </g>
    <g
       id="LINE-141">
      <line
         class="ikr_cls9"
         x1="619.32001"
         y1="260.39999"
         x2="615"
         y2="257.91"
         id="line711" />
    </g>
    <g
       id="LINE-142">
      <line
         class="ikr_cls9"
         x1="613.79999"
         y1="257.22"
         x2="611.87"
         y2="256.10001"
         id="line714" />
    </g>
    <g
       id="ARC-41">
      <path
         class="ikr_cls9"
         d="m 619.32,260.4 c 1.98,1.15 4.52,0.47 5.67,-1.52"
         id="path717" />
    </g>
    <g
       id="LINE-143">
      <line
         class="ikr_cls9"
         x1="631.95001"
         y1="246.83"
         x2="624.98999"
         y2="258.89001"
         id="line720" />
    </g>
  </g>
  <g
     id="text">
    <text
       class="ikr_cls14"
       transform="translate(1045.19,589.67)"
       id="text732"><tspan
         class="ikr_cls16"
         x="0"
         y="0"
         id="tspan724">L</tspan><tspan
         x="6.0799999"
         y="0"
         id="tspan726">OB</tspan><tspan
         class="ikr_cls18"
         x="21.799999"
         y="0"
         id="tspan728">B</tspan><tspan
         x="28.950001"
         y="0"
         id="tspan730">Y</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(1054.84,601.07)"
       id="text736"><tspan
         x="0"
         y="0"
         id="tspan734">014</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(1054.03,611.75)"
       id="text740"><tspan
         x="0"
         y="0"
         id="tspan738">556 SF</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(1451.6,594.5)"
       id="text752"><tspan
         x="0"
         y="0"
         id="tspan742">S</tspan><tspan
         class="ikr_cls23"
         x="7.1199999"
         y="0"
         id="tspan744">T</tspan><tspan
         x="14.12"
         y="0"
         id="tspan746">OR</tspan><tspan
         class="ikr_cls17"
         x="29.75"
         y="0"
         id="tspan748">A</tspan><tspan
         x="37.52"
         y="0"
         id="tspan750">GE AREA</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(1485.85,605.9)"
       id="text756"><tspan
         x="0"
         y="0"
         id="tspan754">016</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(1483.35,616.58)"
       id="text760"><tspan
         x="0"
         y="0"
         id="tspan758">1794 SF</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(697.66,411.68)"
       id="text772"><tspan
         class="ikr_cls25"
         x="0"
         y="0"
         id="tspan762">L</tspan><tspan
         class="ikr_cls21"
         x="6.5700002"
         y="0"
         id="tspan764">A</tspan><tspan
         x="14.3"
         y="0"
         id="tspan766">UND</tspan><tspan
         class="ikr_cls20"
         x="38.5"
         y="0"
         id="tspan768">R</tspan><tspan
         x="45.610001"
         y="0"
         id="tspan770">Y ROOM</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(734.32,423.08)"
       id="text776"><tspan
         x="0"
         y="0"
         id="tspan774">013</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(733.51,433.76)"
       id="text780"><tspan
         x="0"
         y="0"
         id="tspan778">177 SF</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(638.87,502.38)"
       id="text794"><tspan
         x="0"
         y="0"
         id="tspan782">B</tspan><tspan
         class="ikr_cls22"
         x="7.4699998"
         y="0"
         id="tspan784">O</tspan><tspan
         x="15.6"
         y="0"
         id="tspan786">ARD</tspan><tspan
         x="-38.540001"
         y="14.4"
         id="tspan788">PRE-FUN</tspan><tspan
         class="ikr_cls24"
         x="9.5200005"
         y="14.4"
         id="tspan790">C</tspan><tspan
         x="17.16"
         y="14.4"
         id="tspan792">TION AREA</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(649.79,535.88)"
       id="text798"><tspan
         x="0"
         y="0"
         id="tspan796">011</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(648.98,546.56)"
       id="text802"><tspan
         x="0"
         y="0"
         id="tspan800">585 SF</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(305.11,269.52)"
       id="text810"><tspan
         x="0"
         y="0"
         id="tspan804">B</tspan><tspan
         class="ikr_cls22"
         x="7.4699998"
         y="0"
         id="tspan806">O</tspan><tspan
         x="15.6"
         y="0"
         id="tspan808">ARD ROOM</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(334.69,280.92)"
       id="text814"><tspan
         x="0"
         y="0"
         id="tspan812">012</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(333.88,291.6)"
       id="text818"><tspan
         x="0"
         y="0"
         id="tspan816">411 SF</tspan></text>
    <text
       class="ikr_cls26"
       transform="translate(792.47,123.42)"
       id="text826"><tspan
         x="0"
         y="0"
         id="tspan820">Lower L</tspan><tspan
         class="ikr_cls1"
         x="176.88"
         y="0"
         id="tspan822">ev</tspan><tspan
         x="228.53999"
         y="0"
         id="tspan824">el (Basement)</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(62.2,438.58)"
       id="text842"><tspan
         x="0"
         y="0"
         id="tspan828">B</tspan><tspan
         class="ikr_cls22"
         x="7.4699998"
         y="0"
         id="tspan830">O</tspan><tspan
         x="15.6"
         y="0"
         id="tspan832">ARD C</tspan><tspan
         class="ikr_cls4"
         x="49.459999"
         y="0"
         id="tspan834">H</tspan><tspan
         x="58.119999"
         y="0"
         id="tspan836">AIR</tspan><tspan
         class="ikr_cls4"
         x="76.610001"
         y="0"
         id="tspan838">M</tspan><tspan
         x="87.190002"
         y="0"
         id="tspan840">AN'S OFFICE</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(131.36,449.97)"
       id="text846"><tspan
         x="0"
         y="0"
         id="tspan844">021</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(130.55,460.66)"
       id="text850"><tspan
         x="0"
         y="0"
         id="tspan848">193 SF</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(199.24,557.66)"
       id="text854"><tspan
         x="0"
         y="0"
         id="tspan852">TREASURER'S OFFICE</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(249.47,569.06)"
       id="text858"><tspan
         x="0"
         y="0"
         id="tspan856">020</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(248.65,579.74)"
       id="text862"><tspan
         x="0"
         y="0"
         id="tspan860">114 SF</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(354.15,636.41)"
       id="text866"><tspan
         x="0"
         y="0"
         id="tspan864">LIFE CHOICES OFFICE</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(404.81,647.8)"
       id="text870"><tspan
         x="0"
         y="0"
         id="tspan868">019</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(404,658.49)"
       id="text874"><tspan
         x="0"
         y="0"
         id="tspan872">187 SF</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(592.22,723.48)"
       id="text878"><tspan
         x="0"
         y="0"
         id="tspan876">RECORDS OFFICE</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(631.32,734.88)"
       id="text882"><tspan
         x="0"
         y="0"
         id="tspan880">018</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(630.5,745.56)"
       id="text886"><tspan
         x="0"
         y="0"
         id="tspan884">341 SF</tspan></text>
    <text
       class="ikr_cls14"
       transform="translate(788.72,821.46)"
       id="text898"><tspan
         x="0"
         y="0"
         id="tspan888">S</tspan><tspan
         class="ikr_cls23"
         x="7.1199999"
         y="0"
         id="tspan890">T</tspan><tspan
         x="14.12"
         y="0"
         id="tspan892">ORM SHE</tspan><tspan
         class="ikr_cls19"
         x="65.699997"
         y="0"
         id="tspan894">L</tspan><tspan
         x="70.540001"
         y="0"
         id="tspan896">TER</tspan></text>
    <text
       class="ikr_cls15"
       transform="translate(826.25,832.86)"
       id="text902"><tspan
         x="0"
         y="0"
         id="tspan900">017</tspan></text>
    <text
       class="ikr_cls13"
       transform="translate(825.44,843.54)"
       id="text906"><tspan
         x="0"
         y="0"
         id="tspan904">138 SF</tspan></text>
  </g>
  <g
     id="Layer_9"
     sodipodi:insensitive="true">
    <path
       id="records_office_18"
       class="ikr_cls11"
       d="m 818.38,722.66 -50.08,86.65 -0.66,1.13 -45.14,77.72 -247.65,-147.27 24.51,-42.55 0.09,-0.16 41.17,-70.84 0.04,-0.06 6.14,-10.57 c 5.63,3.45 11.97,5.12 18.25,5.12 11.1,0 22.04,-5.19 28.72,-14.91 l -29.51,-19.74 5.87,-9.88 166.27,97.25 z" />
    <path
       id="toylet"
       class="ikr_cls11"
       d="m 695.71,262.78 -18.12,30.91 -0.08,0.15 -1.54,2.62 -0.1,0.16 -56.12,95.75 -5.83,-3.72 22.03,-36.7 c -5.85,-3.51 -12.13,-5.13 -18.35,-5.13 -13.4,0 -26.51,7.51 -34.41,19.79 v 0 c 0,0 -0.07,0.1 -0.09,0.15 l -15.3,-9.53 -30.33,-18.5 0.16,-0.28 -0.3,-0.19 38.01,-65.76 0.25,0.17 0.03,-0.05 7.36,4.71 8.47,5.34 35.29,-59.79 0.12,-0.2 8.37,5.12 10.13,6.19 22.45,12.83 c 0.04,-0.08 0.09,-0.17 0.14,-0.25 l 27.65,15.95 -0.09,0.15 z" />
    <path
       id="board_chairmain_office_21"
       class="ikr_cls11"
       d="m 263.75,402.31 -2.13,3.35 -2.65,-1.56 -0.15,-0.1 -1.67,-1.1 -0.06,0.09 -30.26,-17.16 -0.66,1.06 c -11.91,19.12 -7.23,44.4 9.49,58.7 l -0.86,1.34 -0.03,0.04 -74.81,115.8 -12.06,-6.96 -124.35,-71.8 96.4,-165.35 62.11,35.96 45.88,26.83 c 0,0 -0.05,0.06 -0.06,0.09 l 31.28,18.11 z" />
    <path
       id="laundry_room_13"
       class="ikr_cls11"
       d="m 924.34,393.51 -19.96,-11.42 -0.14,-0.08 -0.11,-0.06 -6.01,-3.31 -0.89,1.8 -36.43,-19.98 1.11,-1.95 -129.51,-74.75 -9.5,16.11 9.1,-16.33 -0.52,-0.31 -0.47,-0.27 -35.3,-20.18 -18.12,30.91 -0.08,0.15 -1.54,2.62 -0.1,0.16 -56.12,95.75 6.41,4.11 22.59,-37.6 c 11.58,6.78 17.08,20.19 17.08,33.92 0,7.59 -1.68,15.29 -4.95,22.02 l 133.31,75.31 31.76,17.94 1.82,1.02 24.96,14.1 0.56,-1 -0.07,-0.04 70.28,-127.12 z m -210.1,-78.09 -0.38,-0.22 0.18,-0.31 0.37,0.22 z m 156.21,141.12 c -0.31,0.53 -0.99,0.71 -1.52,0.4 -0.53,-0.3 -0.72,-0.98 -0.41,-1.52 0.31,-0.53 0.99,-0.71 1.52,-0.4 0.54,0.3 0.72,0.98 0.41,1.52 z m 5.82,8.5 c -0.31,0.53 -0.99,0.71 -1.52,0.41 -0.54,-0.31 -0.72,-0.99 -0.41,-1.52 0.31,-0.54 0.99,-0.72 1.52,-0.41 0.53,0.31 0.72,0.99 0.41,1.52 z m 1.74,-4.14 c -0.15,0.27 -0.49,0.36 -0.76,0.21 l -2.17,-1.26 -3.85,-2.22 c -0.27,-0.16 -0.36,-0.5 -0.21,-0.76 0.16,-0.27 0.5,-0.36 0.76,-0.21 l 3.86,2.23 2.17,1.25 c 0.27,0.16 0.36,0.5 0.2,0.76 z m 2.71,-3.58 c -0.31,0.54 -0.99,0.72 -1.52,0.41 -0.53,-0.31 -0.71,-0.99 -0.41,-1.52 0.31,-0.53 0.99,-0.71 1.52,-0.41 0.54,0.31 0.72,0.99 0.41,1.52 z" />
    <path
       id="Storage_area_16"
       class="ikr_cls11"
       d="m 1835,857.57 -642.88,-2.18 -0.07,-8.03 v -0.24 l 0.04,-64.66 0.21,-281.35 v -3.63 l -40.35,-0.65 c 0.39,-23.96 18.53,-43.14 42.32,-43.29 h 0.28 l -0.61,-58.77 -0.74,-72.18 h 249.34 c 0.22,-19.94 16.96,-36.93 37,-37.25 l -0.38,38.08 v 0.14 c 0,0 17.98,0 17.98,0 v 2.72 l 34.49,-0.4 v -2.91 l 171.42,-1.47 127.82,1.09 z" />
    <path
       id="lobby_14"
       class="ikr_cls11"
       d="m 1151.95,496.83 40.35,0.65 v 3.63 l -0.81,281.35 -269.26,-3.58 -0.02,-1.09 -1.37,-79.23 v -0.02 h -0.94 l -0.24,-16.13 35.24,-1.24 c -0.11,-18.89 -15.45,-34.13 -34.32,-34.13 18.81,-0.2 33.94,-15.51 33.94,-34.31 v -0.19 l -30.64,0.17 v -49.57 l 1.13,-45.3 c 18.78,-0.74 33.9,-15.55 34.19,-33.96 l -33.08,-0.53 0.13,-15.63 v -0.21 c 0,0 1.8,-71.88 1.8,-71.88 v -0.6 c 0,0 52.8,-0.06 52.8,-0.06 l 0.1,2.75 34.19,-0.71 0.05,-2.08 h 9.3 c 0,0 -0.1,32.25 -0.1,32.25 18.88,-0.1 34.12,-15.44 34.12,-34.3 0.22,18.79 15.52,33.92 34.31,33.92 h 0.2 l -0.17,-31.77 9.59,-0.03 0.09,2.62 34.19,-0.71 0.05,-1.99 42.93,-0.11 h 14.04 l 0.53,58.73 c -23.79,0.15 -41.93,19.33 -42.32,43.29 z" />
    <path
       id="storm_shelter_17"
       class="ikr_cls11"
       d="m 920.54,780.09 v 0 c 0,0 -47.55,83.95 -47.55,83.95 l -0.17,0.31 -47.47,83.18 h -0.01 l -102.68,-59.28 96.49,-165.13 0.6,-1.02 -0.6,-0.35 12.89,-22.2 39.82,-0.55 v 0.16 c 0,19.23 15.16,34.31 34.67,35.36 l 1.94,-35.79 10.94,-0.15 1.11,80.28 z" />
    <path
       id="life_choices_office_19"
       class="ikr_cls11"
       d="m 540.35,627.18 -6.37,11.06 -0.63,1.08 -59.8,100.8 1.13,0.67 -1.58,2.73 -12.81,22.04 -134.98,-78.4 -1.25,-0.73 -40.4,-23.58 12.46,-21.23 68.52,-116.74 6.29,3.98 -15.44,29.61 c 5.3,2.76 10.99,4.09 16.57,4.09 11.92,0 23.37,-6.05 29.55,-17.09 z" />
    <path
       id="treasurors_office_20"
       class="ikr_cls11"
       d="m 364.64,524.88 -68.52,116.74 -0.12,-0.07 0.11,-0.18 -136.15,-78.6 74.81,-115.8 90.56,54.36 c -3.31,5.25 -4.82,10.72 -4.82,16.09 0,11.79 7.27,23.07 18.77,30.32 l 17.54,-27.82 7.47,4.74 z" />
    <path
       id="hall_22"
       class="ikr_cls11"
       d="m 564.21,587.15 0.05,0.03 -1.48,2.49 -16.02,27.01 c -0.1,-0.05 -0.19,-0.11 -0.28,-0.16 l -6.1,10.6 -138.65,-81.87 c -0.03,0.07 -0.07,0.15 -0.12,0.22 -6.18,11.04 -17.63,17.09 -29.55,17.09 -5.58,0 -11.27,-1.33 -16.57,-4.09 l 15.44,-29.61 0.09,-0.17 -6.32,-3.91 -0.35,-0.22 -7.52,-4.66 v 0.02 c 0,0 -17.55,27.82 -17.55,27.82 -11.5,-7.25 -18.77,-18.53 -18.77,-30.32 0,-5.37 1.51,-10.84 4.82,-16.09 l -90.56,-54.36 0.03,-0.04 0.86,-1.34 c -16.72,-14.3 -21.4,-39.58 -9.49,-58.7 l 0.66,-1.06 30.26,17.16 v 0 c 0,0 0.34,0.2 0.34,0.2 l 1.54,0.91 2.56,1.7 0.09,-0.14 0.23,0.14 2.11,-3.37 13.07,-20.9 127.38,71.76 0.37,0.24 0.47,0.31 9.34,6.05 -18.07,30.05 c 5.3,3.01 11.15,4.42 16.99,4.42 12.55,0 25.06,-6.49 32.07,-17.47 l 48.69,28.46 -5.23,8.69 -7.18,11.13 -0.23,0.36 0.37,0.21 88.1,51.54 -6.1,9.73 z" />
    <path
       id="board_pre_function_area_11"
       class="ikr_cls11"
       d="m 954.9,681.17 c -0.11,-18.89 -15.45,-34.13 -34.32,-34.13 18.81,-0.2 33.94,-15.51 33.94,-34.31 v -0.19 l -30.64,0.17 v -49.06 l -71.33,-40.13 -24.99,-14.06 -1.82,-1.02 -31.79,-17.89 -133.41,-75.06 c 0.12,-0.22 0.23,-0.45 0.34,-0.67 3.27,-6.73 4.95,-14.43 4.95,-22.02 0,-13.73 -5.5,-27.14 -17.08,-33.92 l -22.59,37.6 -0.06,0.1 -6.41,-4.11 0.06,-0.1 -5.83,-3.72 22.03,-36.7 c -5.85,-3.51 -12.13,-5.13 -18.35,-5.13 -13.4,0 -26.51,7.51 -34.41,19.79 v 0 c 0,0 -0.07,0.1 -0.09,0.15 l -15.3,-9.53 -30.33,-18.5 0.16,-0.28 -0.3,-0.19 38.01,-65.76 0.25,0.17 0.03,-0.05 7.36,4.71 8.47,5.34 35.29,-59.79 0.12,-0.2 -26.1,-15.96 c 2.16,-4.55 3.19,-9.34 3.19,-14.07 0,-11.64 -6.25,-22.9 -17.21,-29.32 l -17.27,29.49 h -0.01 c 0,0 -10.63,-6.13 -10.63,-6.13 l -33.2,54.31 0.09,0.06 -0.13,0.23 0.5,0.29 -35.89,60.11 -8.65,14.76 c 13.71,7.93 21.19,22.29 21.19,37.24 0,7.16 -1.72,14.46 -5.29,21.25 l -36.13,-19.03 -15.87,27.39 -40.06,70.29 9.71,5.46 -0.51,0.84 -18.07,30.05 c 5.3,3.01 11.15,4.42 16.99,4.42 12.55,0 25.06,-6.49 32.07,-17.47 0.07,-0.12 0.15,-0.24 0.23,-0.37 l 48.52,28.74 0.27,0.16 -0.06,0.09 -5.5,8.53 -6.82,11.34 88.03,51.66 h 0.02 c 0,0 0.22,-0.35 0.22,-0.35 l 248.48,144.95 12.77,-22.09 0.18,-0.31 h 0.31 c 0,0 39.64,-0.7 39.64,-0.7 -0.01,0.13 -0.01,0.26 -0.01,0.39 l 12.92,-0.11 h 0.28 l 23.41,-0.18 v -0.1 h 10.94 l -0.23,-16.11 0.48,-0.02 z M 867.34,538.4 c -0.53,-0.3 -0.71,-0.98 -0.41,-1.52 0.31,-0.53 0.99,-0.71 1.52,-0.4 0.54,0.3 0.72,0.98 0.41,1.52 -0.31,0.53 -0.99,0.71 -1.52,0.4 z m 4.9,1.55 -1.26,2.17 -1.39,2.41 c -0.15,0.26 -0.49,0.35 -0.76,0.2 -0.26,-0.15 -0.36,-0.49 -0.2,-0.76 l 1.39,-2.41 1.25,-2.17 c 0.16,-0.27 0.5,-0.36 0.76,-0.2 0.27,0.15 0.36,0.49 0.21,0.76 z m 4.34,2.5 c -0.31,0.53 -0.99,0.72 -1.52,0.41 -0.54,-0.31 -0.72,-0.99 -0.41,-1.52 0.31,-0.53 0.99,-0.72 1.52,-0.41 0.53,0.31 0.71,0.99 0.41,1.52 z" />
    <path
       class="ikr_cls11"
       d="M 558.83,186.69 525.63,241 455.58,201.22 342.21,136.34 c -0.07,0.12 -0.15,0.25 -0.23,0.37 -6.48,9.94 -17.41,15.49 -28.65,15.49 -5.69,0 -11.46,-1.42 -16.77,-4.42 l 16.42,-29.08 0.09,-0.16 -42.14,-25.52 -14.69,-8.96 31.5,-54.1 z"
       id="path934" />
    <path
       id="board_room_12"
       class="ikr_cls11"
       d="m 502.74,353.69 c 0,7.16 -1.72,14.46 -5.29,21.25 l -36.13,-19.03 -0.19,-0.11 -15.68,27.5 -40.55,70.02 -127.82,-71.86 -0.05,0.07 -0.03,-0.02 -13.25,20.8 -4.59,-2.66 18.47,-29.75 c -5.77,-3.12 -12.3,-4.64 -18.77,-4.64 -12.29,0 -24.39,5.49 -30.81,16 l -45.99,-26.64 -62.11,-35.96 75.31,-129.18 2.26,1.44 18.33,-31.93 -2.08,-1.33 7.68,-13.38 2.26,1.44 17.44,-30.51 -2.07,-1.32 -0.11,-0.07 0.25,-0.44 3.61,-6.28 0.09,-0.16 13.29,-22.83 14.72,8.91 42.05,25.68 -16.42,29.08 c 5.31,3 11.08,4.42 16.77,4.42 11.24,0 22.17,-5.55 28.65,-15.49 l 113.6,64.51 69.91,40.01 0.1,0.06 -35.39,60.4 -8.65,14.76 c 13.71,7.93 21.19,22.29 21.19,37.24 z" />
  </g>
</svg>



    </div>
    <?php
     
    // Get the buffered output and clean (flush) the buffer
    return ob_get_clean();
}

// Register the shortcode
add_shortcode('floor_plan_e1', 'ikrwmap_shortcode_basement');




































