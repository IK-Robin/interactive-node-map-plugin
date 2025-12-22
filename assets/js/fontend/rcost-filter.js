function initMapDataFilter({ mapData, zoomInstance }) {
    console.log('update successfull');

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

    /* ================= NODE SELECT ================= */
  function createNodeSelect(list) {
    const c = document.getElementById(NODE_SELECT_CONTAINER_ID);
    if (!c) return;
    c.innerHTML = '';

    const s = document.createElement('select');
    s.className = 'node-select';
    s.appendChild(new Option(list.length ? 'Select Plot' : 'No matching plots', ''));

    list.forEach(l => s.appendChild(new Option(l.lot || l.id, l.id)));

    let previously_selected_element = null;

    s.addEventListener('change', e => {
        const el = document.getElementById(e.target.value);
        if (!el) return;

        // ✅ REMOVE highlight from previous element FIRST
        if (previously_selected_element) {
            previously_selected_element.classList.remove('highlight', 'selected-node');
        }

        // ✅ ADD highlight to current element
        el.classList.add('highlight', 'selected-node');

        // ✅ UPDATE reference AFTER removal
        previously_selected_element = el;

        if (IS_MOBILE_DEVICE) {
            zoomInstance.flyToId(e.target.value);
        }
    });

    c.appendChild(s);
}


    /* ================= APPLY FILTERS ================= */
   function applyFilters() {
  is_filter_active = Array.from(selects).some(s => s.value);

  node_1_data.forEach(node => {
    const el = document.getElementById(node.id);
    if (!el) return;

    // reset to base first
    restoreBaseState(el);

    if (is_filter_active && matchesFilters(node)) {
      el.classList.add("filtered");
      el.style.fill = "#023e8a";
      el.style.fillOpacity = "1";
    }
  });
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

        mapData.forEach(lot => {
            if (!matchesFilters(lot)) return;
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
        applyFilters();
        is_filter_active = false;
        console.log('is_filter_active', is_filter_active);
        createNodeSelect(mapData);
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
    createNodeSelect(mapData);
    // applyFilters();
}

