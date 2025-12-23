function initMapDataFilter({ mapData, zoomInstance, finalURL, animation_class = 'highlight' }) {
    console.log('update successfull');
    let previous_selected_element = null;
    /* ================= DOM ================= */
    const blockSelect = document.getElementById('blockSelect');
    const priceSelect = document.getElementById('priceSelect');
    const statusSelect = document.getElementById('statusSelect');
    const resetBtn = document.getElementById('resetBtn');
    const resetLi = document.getElementById('resetLi');
    const selects = document.querySelectorAll('.sf-input-select');
    const mobileToggle = document.getElementById('mobileToggle');
    const searchForm = document.getElementById('searchForm');

    const NODE_SELECT_CONTAINER_ID = 'buttonsContainer';
    const IS_MOBILE_DEVICE = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const normalize = v => (v || '').trim().toLowerCase();

    /* ================= UNIQUE VALUES ================= */
    function getUniqueValues(key) {
        const set = new Set();
        mapData.forEach(l => l[key] && set.add(l[key].trim()));
        return [...set].sort();
    }

    const uniqueDevTypes = getUniqueValues('developmentType');
    const uniqueLandUses = getUniqueValues('landUse');
    const uniqueStatuses = getUniqueValues('status');

    /* ================= DROPDOWNS ================= */
    function populateDevLandDropdown() {
        blockSelect.innerHTML = '<option value="">Development Type / Land Use</option>';

        if (uniqueDevTypes.length) {
            const g = document.createElement('optgroup');
            g.label = 'Development Type';
            uniqueDevTypes.forEach(v => g.appendChild(new Option(v, 'dev::' + v)));
            blockSelect.appendChild(g);
        }

        if (uniqueLandUses.length) {
            const g = document.createElement('optgroup');
            g.label = 'Land Use';
            uniqueLandUses.forEach(v => g.appendChild(new Option(v, 'land::' + v)));
            blockSelect.appendChild(g);
        }
    }

    function populateStatusDropdown() {
        statusSelect.innerHTML = '<option value="">Status</option>';
        uniqueStatuses.forEach(s => statusSelect.appendChild(new Option(s, s)));
    }

    function populatePriceDropdown() {
        priceSelect.innerHTML = '<option value="">Price Range</option>';
        const prices = mapData.map(l => l.price).filter(p => typeof p === 'number');
        if (!prices.length) return;

        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const step = Math.round((max - min) / 5);

        let start = min;
        for (let i = 0; i < 5; i++) {
            const end = i === 4 ? max : start + step;
            priceSelect.appendChild(
                new Option(`R ${start.toLocaleString()} – R ${end.toLocaleString()}`, `${start}-${end}`)
            );
            start = end + 1;
        }
    }

    /* ================= COLORS ================= */
    const categoryColors = {
        'institution': '#e6194b',
        'medium density residential 1': '#3cb44b',
        'multi-purpose retail': '#ffe119',
        'municipal and government': '#4363d8',
        'residential only 1': '#f58231',
        'residential only 2': '#911eb4',
        'residential only 3': '#42d4f4',
        'urban agriculture 2': '#f032e6',
        'worship': '#bfef45',
        'p.o.s': '#fabed4',
        'private o.s': '#469990',
        'private conservation reserve': '#dcbeff',
        'default': '#a0a0a0'
    };

    function getColorForCategory(lot) {
        return (
            categoryColors[normalize(lot.developmentType)] ||
            categoryColors[normalize(lot.landUse)] ||
            categoryColors.default
        );
    }

    /* ================= STORE ORIGINAL SVG STATE ================= */
    mapData.forEach(lot => {
        const el = document.getElementById(lot.id);
        if (!el) return;
        el.dataset.origFill = el.style.fill || '';
        el.dataset.origStroke = el.style.stroke || '';
        el.dataset.origOpacity = el.style.opacity || '';
    });

    function restore(el) {
        el.classList.remove('highlight', 'dimmed', 'selected-node');
        el.style.fill = el.dataset.origFill;
        el.style.stroke = el.dataset.origStroke;
        el.style.opacity = el.dataset.origOpacity;
        el.style.strokeWidth = '';
    }

    /* ================= FILTER LOGIC ================= */
    function parsePrice(v) {
        if (!v) return null;
        const [min, max] = v.split('-').map(Number);
        return { min, max };
    }

    function matchesFilters(lot) {
        if (blockSelect.value) {
            const [t, v] = blockSelect.value.split('::');
            if (t === 'dev' && lot.developmentType !== v) return false;
            if (t === 'land' && lot.landUse !== v) return false;
        }
        if (statusSelect.value && lot.status !== statusSelect.value) return false;
        if (priceSelect.value) {
            const r = parsePrice(priceSelect.value);
            if (r && (lot.price < r.min || lot.price > r.max)) return false;
        }
        return true;
    }

    /* ================= MAIN CLICK HANDLER - MOVED INSIDE ================= */
    function handleNodeClick(node) {
        const select_svg_element = document.getElementById(node.id);
        if (!select_svg_element) return;

        // Restore previous
        if (previous_selected_element && previous_selected_element.parentNode) {
            const savedNextSibling = previous_selected_element.originalNextSibling;
            if (savedNextSibling && savedNextSibling.parentNode) {
                previous_selected_element.parentNode.insertBefore(previous_selected_element, savedNextSibling);
            } else {
                previous_selected_element.parentNode.appendChild(previous_selected_element);
            }
            previous_selected_element.classList.remove("selected-node");
            clearStrokeHover(previous_selected_element, animation_class);
            previous_selected_element.removeEventListener("pointerup", redirectHandler);
        }

        // Bring new to front
        select_svg_element.originalNextSibling = select_svg_element.nextSibling;
        select_svg_element.parentNode.appendChild(select_svg_element);
        select_svg_element.classList.add("selected-node");
        select_svg_element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        applyStrokeHover(select_svg_element, animation_class);
        console.log(select_svg_element.id)
        zoomInstance.flyToId(select_svg_element.id);
        select_svg_element.dataset.nodeLink = node.link;
        // ✅ SAFE redirect trigger
        select_svg_element.addEventListener("pointerup", redirectHandler);

        // Button active state
        document.querySelectorAll(".plot-btn").forEach(btn => btn.classList.remove("active-btn"));
        const currentBtn = document.querySelector(`[data-node-id="${node.id}"]`);
        if (currentBtn) currentBtn.classList.add("active-btn");

        // ← Sync select dropdown
        const selectEl = document.querySelector(".node-select");
        if (selectEl) selectEl.value = node.id;

        previous_selected_element = select_svg_element;
    }

    /* ================= REDIRECT HANDLER - MOVED INSIDE ================= */
    function redirectHandler(e) {
        if (zoomInstance.isDragging()) return;

        const target_id = e.currentTarget.id;
        const item = mapData.find(i => i.id === target_id);
        if (!item?.link) return;

        const unit = encodeURIComponent(item.id.trim());

        let final_url = finalURL;

        final_url += (finalURL.includes("?") ? "&" : "?") + "unit=" + unit;

        function navigateFromFullscreen(url) {
            if (document.fullscreenElement) {
                document.exitFullscreen().then(() => {
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            window.location.href = url;
                            console.log(url)
                        }, 300);
                    });
                });
            } else {
                window.location.href = url;

            }
        }

        navigateFromFullscreen(final_url);

        // window.location.href = url.href;
    }

    /* ================= NODE SELECT ================= */
    function createNodeSelect(filteredList) {
        const container = document.getElementById(NODE_SELECT_CONTAINER_ID);
        if (!container) return;
        container.innerHTML = '';

        const select = document.createElement('select');
        select.className = 'node-select';
        select.appendChild(new Option(filteredList.length ? 'Select Plot' : 'No matching plots', ''));

        filteredList.forEach(node => {
            const optionText = node.lot || node.id;
            select.appendChild(new Option(optionText, node.id));
        });

        select.addEventListener("change", (e) => {
            if (!e.target.value) return;

            const selectedNode = filteredList.find(n => n.id === e.target.value);

            if (selectedNode) {
                handleNodeClick(selectedNode);        // ← Now accessible!
                zoomInstance.flyToId(selectedNode.id); // ← Extra flyTo (optional)
            }
        });

        container.appendChild(select);
    }

    /* ================= APPLY FILTERS ================= */
    function applyFilters() {
        is_filter_active = Array.from(selects).some(s => s.value);

        // First: restore all nodes to original state
        mapData.forEach(node => {
            const el = document.getElementById(node.id);
            if (el) restore(el); // ← Used restore() here (matches your code)
        });

        // Then apply visual filter (blue fill for matching)
        const filteredNodes = mapData.filter(matchesFilters);

        filteredNodes.forEach(node => {
            const el = document.getElementById(node.id);
            if (!el) return;
            el.classList.add("filtered");
            el.style.fill = "#023e8a";
            el.style.fillOpacity = "1";
        });

        // Update the node dropdown with only filtered results
        createNodeSelect(filteredNodes);

        // Optional: update legend
        generateLegend();
    }

    /* ================= ACTIVE STATES ================= */
    function updateActiveStates() {
        selects.forEach(sel => {
            const li = sel.closest('li');
            li?.classList.toggle('active', sel.value !== '');
        });
        resetLi?.classList.toggle('active', [...selects].some(s => s.value !== ''));
    }

    /* ================= LEGEND ================= */
    function generateLegend() {
        const legend = document.getElementById('legendContainer');
        if (!legend) return;

        legend.innerHTML = '';
        const used = new Set();

        mapData.filter(matchesFilters).forEach(lot => {
            const color = getColorForCategory(lot);
            if (used.has(color)) return;
            used.add(color);

            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.alignItems = 'center';
            row.innerHTML = `
                <div style="width:20px;height:20px;background:${color};margin-right:8px"></div>
                <span>${lot.developmentType || lot.landUse}</span>
            `;
            legend.appendChild(row);
        });
    }

    /* ================= EVENTS ================= */
    selects.forEach(s =>
        s.addEventListener('change', () => {
            updateActiveStates();
            applyFilters();
            zoomInstance.reset();
            is_filter_active = true;
            console.log('is_filter_active', is_filter_active);
        })
    );

    resetBtn?.addEventListener('click', e => {
        e.preventDefault();
        selects.forEach(s => (s.value = ''));
        updateActiveStates();
        window.resetZoom?.();
        applyFilters(); // will recreate dropdown with all nodes
        is_filter_active = false;
        console.log('is_filter_active', is_filter_active);
    });

    mobileToggle?.addEventListener('click', () => {
        const active = searchForm.classList.toggle('active');
        mobileToggle.classList.toggle('active', active);
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.rhill-serchMenu') && searchForm.classList.contains('active')) {
            searchForm.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    document.getElementById('filterList')?.addEventListener('click', e => e.stopPropagation());

    /* ================= INIT ================= */
    populateDevLandDropdown();
    populatePriceDropdown();
    populateStatusDropdown();
    updateActiveStates();
    createNodeSelect(mapData); // initial full list
}