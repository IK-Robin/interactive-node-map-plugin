<?php
/**
 * Plugin template file: Single Node
 * Filename: single-node-plugin-template.php
 *
 * This template shows a unique style for a single node.
 * Example usage: /node-details?node=123
 */

defined('ABSPATH') || exit;

get_header();
?>
<div id="ikrwmap-single-node" class="ikrwmap-plugin-wrap" style="padding:24px;">
  <div class="wrap">
    <h1>Node Details</h1>
    <p>This page is intended to display a single node in a dedicated layout. The node id can be passed via query string, for example: <code>/node-details?node=123</code>.</p>

    <div id="ikrwmap-node-container" aria-live="polite">
      <div id="ikrwmap-node-loading">Loading node details…</div>
      <div id="ikrwmap-node-content" style="display:none;">
        <!-- JS will fill this area with node details fetched from REST or preloaded JSON -->
      </div>
    </div>

    <script>
    (function(){
      // Basic client-side logic to load node JSON via REST on page load
      function qs(key) {
        var params = new URLSearchParams(window.location.search);
        return params.get(key);
      }
      var nodeId = qs('node');
      var container = document.getElementById('ikrwmap-node-content');
      var loading = document.getElementById('ikrwmap-node-loading');

      if (!nodeId) {
        loading.textContent = 'No node specified. Please open this page with ?node=ID';
        return;
      }

      // fetch via WP REST API endpoint (protocol-relative)
      var restUrl = (window.location.origin || '') + '/wp-json/ikrmap/v1/node/' + encodeURIComponent(nodeId);

      fetch(restUrl, { credentials: 'same-origin' })
        .then(function(res){ if(!res.ok) throw new Error('Network'); return res.json(); })
        .then(function(data){
          loading.style.display = 'none';
          container.style.display = 'block';
          container.innerHTML = '<h2>' + (data.title || 'Untitled') + '</h2>' +
                                '<p><strong>Size:</strong> ' + (data.ikr_size || '-') + '</p>' +
                                '<p><strong>Build sponsor:</strong> ' + (data.room_build_sponsore || '-') + '</p>' +
                                '<p><strong>Description:</strong> ' + (data.map_des || '-') + '</p>';
          // Add your custom single-node styles or map visualization here
        })
        .catch(function(err){
          loading.textContent = 'Failed to load node: ' + err.message;
        });
    })();
    </script>

  </div>
</div>
<?php
get_footer();