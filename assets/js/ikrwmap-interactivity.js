// const ikrgooMap = document.querySelector(".svg_img_obj");

const tooltip = document.getElementById("ikr_map_tooltip");
const detail = document.getElementById("detail");

const form_inp = document.getElementById("rdata_from");

const map_id = document.getElementById("map_id");

const ikrTitle = document.getElementById("ikrTitle");

const ikrdes = document.getElementById("ikrdes");

const map_details = document.getElementById("map_details");

const plotId = document.getElementById("plotId");
const detail_name = document.getElementById("detail_name");
const detail_des = document.getElementById("detail_des");
const closebtn = document.getElementById("close");

const hovecolor = document.getElementById("hovecolor");
const fill_color = document.getElementById("fill_color");


const fill_color_partially = document.getElementById('fill_color_partially');
const filltype_partially = document.getElementById('filltype_partially');


const typeHovcolor = document.getElementById("typeHovcolor");
const filltype = document.getElementById("filltype");

const ikrwmap_submit_form = document.getElementById("rdata_submit_form");

// select all edit form input
const ikrwmap_from_edit = document.getElementById("rdata_from_edit");

const modal_map_id = document.getElementById("modal_map_id");
const modal_ikrTitle = document.getElementById("modal_ikrTitle");

const modal_ikrdes = document.getElementById("modal_ikrdes");

const modal_typeHovcolor = document.getElementById("modal_typeHovcolor");
const modal_hovecolor = document.getElementById("modal_hovecolor");

const modal_filltype = document.getElementById("modal_filltype");
const modal_fill_color = document.getElementById("modal_fill_color");

const ikr_select_img = document.getElementById("ikr_select_img");

const modal_ikr_select_img = document.getElementById("modal_ikr_select_img");
const modal_ikr_img = document.getElementById("modal_ikr_img");

const ikr_w_img_inp = document.getElementById("ikr_w_img");

const modal_link = document.getElementById("modal_link");
const modal_link_edit = document.getElementById("modal_link_edit");
const successMessage = document.getElementById("successMessage");
const detail_img_container = document.getElementById("detail_img");
const ikrwmap_details = document.getElementById("ikrwmap_details");
const ikrmap_detail_des = document.getElementById("ikrmap_detail_des");
const ikrwmap_detail_img = document.getElementById("ikrwmap_detail_img");
// console.log(ikrwmap_details)
// select new added input fields 
const ikr_size = document.getElementById('ikr_size1');
const ikr_room_build = document.getElementById('ikr_room_build');
const room_build_sponsore = document.getElementById('room-build-sponsore');
const room_build_available = document.getElementById('room-build-available');

const room_furnished = document.getElementById('ikr_room_furnish');
const room_furnished_sponsor = document.getElementById('room-furnished-sponsore1');

const room_furnished_available = document.getElementById('room-furnished-sponsore2');




//  get data on load

let tab = [];
let style_clicked_id = null;

// console.log(closebtn)
window.addEventListener("DOMContentLoaded", (irkcontent) => {
  // get the svg
  const ikrsvg = document.getElementById('ikr_svg');


  // zoom the svg image 
  ikrZoom(ikrsvg, { maxScale: 15, forceMax: true });


  const lotDetail = [
    'node_1',
    'node_2',
    'node_3',
    'node_4',
    'node_5',

    "Node__2_F",
    "Node__2_E",
    "Node__2_D",
    "Node__2_C",
    "Node__2_40",
    "Node__2_B",
    "Node__2_A",
    "Node__2_Blank_2",
    "Node__2_Blank_1",
    "Node__2_Com",
    "Node__2_Institution",


    "Node_2_154",
    "Node_2_153",
    "Node_2_109",
    "Node_2_108",
    "Node_2_107",
    "Node_2_105",
    "Node_2_103",
    "Node_2_123",
    "Node_2_121",
    "Node_2_119",
    "Node_2_116",
    "Node_2_115",
    "Node_2_114",
    "Node_2_90",
    "Node_2_180",
    "Node_2_80",
    "Node_2_60",
    "Node_2_61",
    "Node_2_62",
    "Node_2_63",
    "Node_2_58",
    "Node_2_56",
    "Node_2_57",
    "Node_2_53",
    "Node_2_52",
    "Node_2_51",
    "Node_2_50",
    "Node_2_49",
    "Node_2_54",
    "Node_2_76",
    "Node_2_55",
    "Node_2_78",
    "Node_2_79",
    "Node_2_32",
    "Node_2_46",
    "Node_2_47",
    "Node_2_48",
    "Node_2_38",
    "Node_2_39",
    "Node_2_45",
    "Node_2_44",
    "Node_2_31",
    "Node_2_30",
    "Node_2_28",
    "Node_2_27",
    "Node_2_26",
    "Node_2_25",
    "Node_2_24",
    "Node_2_10",
    "Node_2_12",
    "Node_2_13",
    "Node_2_15380",
    "Node_2_52530",
    "Node_2_204",
    "Node_2_126",
    "Node_2_240717",
    "Node_2_227",
    "Node_2_229",
    "Node_2_151",
    "Node_2_239",
    "Node_2_68",
    "Node_2_4",
    "Node_2_5",
    "Node_2_160",
    "Node_2_16",
    "Node_2_15",
    "Node_2_195",
    "Node_2_67",
    "Node_2_189",
    "Node_2_181",
    "Node_2_190",
    "Node_2_182",
    "Node_2_125",
    "Node_2_225",
    "Node_2_137",
    "Node_2_124",
    "Node_2_122",
    "Node_2_120",
    "Node_2_119-2",
    "Node_2_117",
    "Node_2_228",
    "Node_2_186",
    "Node_2_33",
    "Node_2_34",
    "Node_2_35",
    "Node_2_98",
    "Node_2_97",
    "Node_2_96",
    "Node_2_95",
    "Node_2_92",
    "Node_2_91",
    "Node_2_100",
    "Node_2_152",
    "Node_2_156",
    "Node_2_163",
    "Node_2_183",
    "Node_2_187",
    "Node_2_59",
    "Node_2_3",
    "Node_2_8",
    "Node_2_9",
    "Node_2_110",
    "Node_2_217",
    "Node_2_255",
    "Node_2_185",
    "Node_2_184",
    "Node_2_11",
    "Node_2_1",
    "Node_2_149",
    "Node_2_112",
    "Node_2_111",
    "Node_2_113",
    "Node_2_139",
    "Node_2_148",
    "Node_2_101",
    "Node_2_104",
    "Node_2_102",
    "Node_2_106",
    "Node_2_136",
    "Node_2_138",
    "Node_2_145",
    "Node_2_133",
    "Node_2_159",
    "Node_2_162",
    "Node_2_1585_m",
    "Node_2_249",
    "Node_2_1939_m",
    "Node_2_29",
    "Node_2_188",
    "Node_2_6",
    "Node_2_7",
    "Node_2_23",
    "Node_2_22",
    "Node_2_19",
    "Node_2_17",
    "Node_2_14",
    "Node_2_81",
    "Node_2_43",
    "Node_2_42",
    "Node_2_75",
    "Node_2_74",
    "Node_2_73",
    "Node_2_72",
    "Node_2_71",
    "Node_2_70",
    "Node_2_69",
    "Node_2_77",
    "Node_2_21",
    "Node_2_20",
    "Node_2_18",
    "Node_2_64",
    "Node_2_65",
    "Node_2_66",
    "Node_2_41",
    "Node_2_40",
    "Node_2_36",
    "Node_2_37",
    "Node_2_93",
    "Node_2_94",
    "Node_2_155",
    "Node_2_150",
    "Node_2_161",
    "Node_2_158",
    "Node_2_157",
    "Node_2_150-2",
    "Node_2_147",
    "Node_2_142",
    "Node_2_143",
    "Node_2_166",
    "Node_2_236",
    "Node_2_235",
    "Node_2_234",
    "Node_2_233",
    "Node_2_232",
    "Node_2_231",
    "Node_2_246",
    "Node_2_247",
    "Node_2_248",
    "Node_2_251",
    "Node_2_205",
    "Node_2_206",
    "Node_2_207",
    "Node_2_208",
    "Node_2_209",
    "Node_2_210",
    "Node_2_211",
    "Node_2_212",
    "Node_2_213",
    "Node_2_252",
    "Node_2_253",
    "Node_2_214",
    "Node_2_215",
    "Node_2_216",
    "Node_2_218",
    "Node_2_219",
    "Node_2_220",
    "Node_2_221",
    "Node_2_222",
    "Node_2_223",
    "Node_2_224",
    "Node_2_134",
    "Node_2_135",
    "Node_2_140",
    "Node_2_141",
    "Node_2_144",
    "Node_2_146",
    "Node_2_132",
    "Node_2_131",
    "Node_2_130",
    "Node_2_129",
    "Node_2_226_M",
    "Node_2_129-2",
    "Node_2_238",
    "Node_2_243",
    "Node_2_244",
    "Node_2_245",
    "Node_2_228-2",
    "Node_2_227-2",
    "Node_2_199",
    "Node_2_200",
    "Node_2_202",
    "Node_2_198",
    "Node_2_203",
    "Node_2_201",
    "Node_2_240",
    "Node_2_241",
    "Node_2_242",
    "Node_2_164",
    "node_1_154",
  "node_1_153",
  "node_1_109",
  "node_1_108",
  "node_1_107",
  "node_1_105",
  "node_1_103",
  "node_1_123",
  "node_1_121",
  "node_1_119",
  "node_1_116",
  "node_1_115",
  "node_1_114",
  "node_1_90",
  "node_1_180",
  "node_1_80",
  "node_1_60",
  "node_1_61",
  "node_1_62",
  "node_1_63",
  "node_1_58",
  "node_1_56",
  "node_1_57",
  "node_1_53",
  "node_1_52",
  "node_1_51",
  "node_1_50",
  "node_1_49",
  "node_1_54",
  "node_1_76",
  "node_1_55",
  "node_1_78",
  "node_1_79",
  "node_1_32",
  "node_1_46",
  "node_1_47",
  "node_1_48",
  "node_1_38",
  "node_1_39",
  "node_1_45",
  "node_1_44",
  "node_1_31",
  "node_1_30",
  "node_1_28",
  "node_1_27",
  "node_1_26",
  "node_1_25",
  "node_1_24",
  "node_1_10",
  "node_1_12",
  "node_1_13",
  "node_1_15380",
  "node_1_52530",
  "node_1_204",
  "node_1_126",
  "node_1_240717",
  "node_1_227",
  "node_1_229",
  "node_1_151",
  "node_1_239",
  "node_1_68",
  "node_1_4",
  "node_1_5",
  "node_1_160",
  "node_1_16",
  "node_1_15",
  "node_1_195",
  "node_1_67",
  "node_1_189",
  "node_1_181",
  "node_1_190",
  "node_1_182",
  "node_1_125",
  "node_1_225",
  "node_1_137",
  "node_1_124",
  "node_1_122",
  "node_1_120",
  "node_1_119-2",
  "node_1_117",
  "node_1_228",
  "node_1_186",
  "node_1_33",
  "node_1_34",
  "node_1_35",
  "node_1_98",
  "node_1_97",
  "node_1_96",
  "node_1_95",
  "node_1_92",
  "node_1_91",
  "node_1_100",
  "node_1_152",
  "node_1_156",
  "node_1_163",
  "node_1_183",
  "node_1_187",
  "node_1_59",
  "node_1_3",
  "node_1_8",
  "node_1_9",
  "node_1_110",
  "node_1_217",
  "node_1_255",
  "node_1_185",
  "node_1_184",
  "node_1_11",
  "node_1_1",
  "node_1_149",
  "node_1_112",
  "node_1_111",
  "node_1_113",
  "node_1_139",
  "node_1_148",
  "node_1_101",
  "node_1_104",
  "node_1_102",
  "node_1_106",
  "node_1_136",
  "node_1_138",
  "node_1_145",
  "node_1_133",
  "node_1_159",
  "node_1_162",
  "node_1_1585_m",
  "node_1_249",
  "node_1_1939_m",
  "node_1_29",
  "node_1_188",
  "node_1_6",
  "node_1_7",
  "node_1_23",
  "node_1_22",
  "node_1_19",
  "node_1_17",
  "node_1_14",
  "node_1_81",
  "node_1_43",
  "node_1_42",
  "node_1_75",
  "node_1_74",
  "node_1_73",
  "node_1_72",
  "node_1_71",
  "node_1_70",
  "node_1_69",
  "node_1_77",
  "node_1_21",
  "node_1_20",
  "node_1_18",
  "node_1_64",
  "node_1_65",
  "node_1_66",
  "node_1_41",
  "node_1_40",
  "node_1_36",
  "node_1_37",
  "node_1_93",
  "node_1_94",
  "node_1_155",
  "node_1_150",
  "node_1_161",
  "node_1_158",
  "node_1_157",
  "node_1_150-2",
  "node_1_147",
  "node_1_142",
  "node_1_143",
  "node_1_166",
  "node_1_236",
  "node_1_235",
  "node_1_234",
  "node_1_233",
  "node_1_232",
  "node_1_231",
  "node_1_246",
  "node_1_247",
  "node_1_248",
  "node_1_251",
  "node_1_205",
  "node_1_206",
  "node_1_207",
  "node_1_208",
  "node_1_209",
  "node_1_210",
  "node_1_211",
  "node_1_212",
  "node_1_213",
  "node_1_252",
  "node_1_253",
  "node_1_214",
  "node_1_215",
  "node_1_216",
  "node_1_218",
  "node_1_219",
  "node_1_220",
  "node_1_221",
  "node_1_222",
  "node_1_223",
  "node_1_224",
  "node_1_134",
  "node_1_135",
  "node_1_140",
  "node_1_141",
  "node_1_144",
  "node_1_146",
  "node_1_132",
  "node_1_131",
  "node_1_130",
  "node_1_129",
  "node_1_226_M",
  "node_1_129-2",
  "node_1_238",
  "node_1_243",
  "node_1_244",
  "node_1_245",
  "node_1_228-2",
  "node_1_227-2",
  "node_1_199",
  "node_1_200",
  "node_1_202",
  "node_1_198",
  "node_1_203",
  "node_1_201",
  "node_1_240",
  "node_1_241",
  "node_1_242",
  "node_1_164",

    "Node_3_2240",
    "Node_3_2239",
    "Node_3_2238",
    "Node_3_2237",
    "Node_3_2257",
    "Node_3_2258",
    "Node_3_2265",
    "Node_3_2241",
    "Node_3_2242",
    "Node_3_2243",
    "Node_3_2244",
    "Node_3_2246",
    "Node_3_2245",
    "Node_3_2256",
    "Node_3_2255",
    "Node_3_2254",
    "Node_3_2253",
    "Node_3_2252",
    "Node_3_2251",
    "Node_3_2250",
    "Node_3_2249",
    "Node_3_2248",
    "Node_3_2247",
    "Node_3_2266",
    "Node_3_2260",
    "Node_3_2259",
    "Node_3_2285",
    "Node_3_2286",
    "Node_3_2287",
    "Node_3_2291",
    "Node_3_2292",
    "Node_3_2293",
    "Node_3_2294",
    "Node_3_2295",
    "Node_3_2296",
    "Node_3_2309",
    "Node_3_2310",
    "Node_3_2311",
    "Node_3_2312",
    "Node_3_2313",
    "Node_3_2314",
    "Node_3_2315",
    "Node_3_2316",
    "Node_3_2317",
    "Node_3_2318",
    "Node_3_2305",
    "Node_3_2306",
    "Node_3_2307",
    "Node_3_2308",
    "Node_3_2300",
    "Node_3_2304",
    "Node_3_2303",
    "Node_3_2302",
    "Node_3_2301",
    "Node_3_2336",
    "Node_3_2335",
    "Node_3_2334",
    "Node_3_2333",
    "Node_3_2332",
    "Node_3_2331",
    "Node_3_2330",
    "Node_3_2329",
    "Node_3_2328",
    "Node_3_2327",
    "Node_3_2326",
    "Node_3_2325",
    "Node_3_2324",
    "Node_3_2323",
    "Node_3_2322",
    "Node_3_2288",
    "Node_3_2289",
    "Node_3_2290",
    "Node_3_2299",
    "Node_3_2298",
    "Node_3_2278",
    "Node_3_2277",
    "Node_3_2283",
    "Node_3_2264",
    "Node_3_2262",
    "Node_3_2215_A",
    "Node_3_2215",
    "Node_3_2269",
    "Node_3_2267",
    "Node_3_2282",
    "Node_3_2210",
    "Node_3_Line",
    "Node_3_2236",
    "Node_3_2284",
    "Node_3_3E1",

    "Node_4__10",
    "Node_4__11",
    "Node_4__12",
    "Node_4__13",
    "Node_4__9",
    "Node_4__8",
    "Node_4__6",
    "Node_4__5",
    "Node_4__1",
    "Node_4__2",
    "Node_4__3",
    "Node_4__4",
    "Node_4__7",
    "Node_4__19",
    "Node_4__17",
    "Node_4__16",
    "Node_4__15",
    "Node_4__32",
    "Node_4__31",
    "Node_4__30",
    "Node_4__29",
    "Node_4__28",
    "Node_4__27",
    "Node_4__33",
    "Node_4__22",
    "Node_4__19-2",
    "Node_4__26",
    "Node_4__25",
    "Node_4__24",
    "Node_4__21",
    "Node_4__20",
    "Node_4__23",
    "Node_4__14",
    "Node_4_Resort_1_A",
    "Node_4_Resort_1",
    "Node_4_Resort_3_Eco",
    "Node_4_Resort_3",
    "Node_4_Education",
    "Node_4_Resort_4",

    "Node_5__F_18",
    "Node_5__F_17",
    "Node_5__F_16",
    "Node_5__58",
    "Node_5__F_00",
    "Node_5__F_12",
    "Node_5__25",
    "Node_5__24",
    "Node_5__0",
    "Node_5__22",
    "Node_5__1",
    "Node_5__2",
    "Node_5__3",
    "Node_5__4",
    "Node_5__5",
    "Node_5__117",
    "Node_5__1-2",
    "Node_5_",
    "Node_5__1-3",
    "Node_5__7756",
    "Node_5__3-2",
    "Node_5__1C",
    "Node_5__1B",
    "Node_5__1A",
    "Node_5__1-4",
    "Node_5__Z",
    "Node_5__114_Y",
    "Node_5__60",
    "Node_5__61",
    "Node_5__114_X",
    "Node_5__114_W",
    "Node_5__114_V",
    "Node_5__114_U",
    "Node_5__114_T",
    "Node_5__114_S",
    "Node_5__114_R",
    "node_5_20",
    "Node_5__21",
    "Node_5__114_Q",
    "Node_5__114_P",
    "Node_5__7",
    "Node_5__6",
    "Node_5__14",
    "Node_5__12",
    "Node_5__11",
    "Node_5__10",
    "Node_5__17",
    "Node_5__16",
    "Node_5__15",
    "Node_5__122",
    "Node_5__123",
    "Node_5__124",
    "Node_5__114_O",
    "Node_5__114_N",
    "Node_5__114_M",
    "Node_5__114_L",
    "Node_5__114_K",
    "Node_5__114_J",
    "Node_5__114_I",
    "Node_5__114_H",
    "Node_5__114_G",
    "Node_5__114_F",
    "Node_5__114_E",
    "Node_5__114_D",
    "Node_5__114_C",
    "Node_5__114_B",
    "Node_5__114_A",
    "Node_5__114",
    "Node_5__F_14",
    "Node_5__F_13",
    "Node_5__F_12-2",
    "Node_5__F_11",
    "Node_5__F_10",
    "Node_5__F_9",
    "Node_5__F_8",
    "Node_5__F_7",
    "Node_5__F_6",
    "Node_5__114-2",
    "Node_5__111",
    "Node_5__110",
    "Node_5__112",
    "Node_5__113",
    "Node_5__114-3",
    "Node_5__115",
    "Node_5__116",
    "Node_5__118",
    "Node_5__119",
    "Node_5__120",
    "Node_5__121",
    "Node_5__125",
    "Node_5__9",
    "Node_5__8",
    "Node_5__13",
    "Node_5__23",
    "Node_5__114-4",
    "Node_5__48",
    "Node_5__49",
    "Node_5__50",
    "Node_5__51",
    "Node_5__53",
    "Node_5__52",
    "Node_5__54",
    "Node_5__56",
    "Node_5__55",
    "Node_5__57",
    "Node_5__59",
    "Node_5__F_5",
    "Node_5__F_4",
    "Node_5__F_3",
    "Node_5__F_2",
    "Node_5__F_1",
    "Node_5__114-5",
    "Node_5__H_3",
    "Node_5__H_1",
    "Node_5__H_2",
    "Node_5__H_14",
    "Node_5__H_13",
    "Node_5__H_12",
    "Node_5__H_11",
    "Node_5__H_10",
    "Node_5__H9",
    "Node_5__H8",
    "Node_5__H7",
    "Node_5__H6",
    "Node_5__H5",
    "Node_5__H4"





  ];


  let items = ikrsvg.querySelectorAll("rect,path", "circle", "polygon");


  // select the svg path
  // console.log(tab)

  // map the item to  the dom and  add event listener


  lotDetail.forEach((map_item) => {
    const lot_id = ikrsvg.querySelector(`#${map_item}`);

    // ✅ Filter: Check if the element exists in the DOM
    if (!lot_id) return;

    // Attach events only if the element is found
    lot_id.addEventListener("click", (ev) => {
      map_click_func(ev);
    });

    lot_id.addEventListener("mousemove", (move_ev) => {
      showTooltip(move_ev);
    });

    lot_id.addEventListener("mouseout", (move_ev) => {
      hideTooltip(move_ev);
    });
  });


  // ====== Utilities for accurate positioning ======
  function getClientPoint(ev) {
    if (ev.touches && ev.touches[0]) {
      return { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
    }
    if (ev.changedTouches && ev.changedTouches[0]) {
      return { x: ev.changedTouches[0].clientX, y: ev.changedTouches[0].clientY };
    }
    return { x: ev.clientX, y: ev.clientY };
  }

  // Smart positioning inside tooltip's offsetParent
  function placeSmartInContainer(el, ev, pad = 8, tooltipTop, tooltipLeft) {
    el.style.position = "absolute";

    const parent = el.offsetParent || document.body;
    const rect = parent.getBoundingClientRect();

    const cs = getComputedStyle(parent);
    const padL = parseFloat(cs.paddingLeft) || 0;
    const padT = parseFloat(cs.paddingTop) || 0;
    const padR = parseFloat(cs.paddingRight) || 0;
    const padB = parseFloat(cs.paddingBottom) || 0;

    const prevDisp = el.style.display;
    const prevVis = el.style.visibility;
    el.style.visibility = "hidden";
    el.style.display = "block";

    const w = el.offsetWidth;
    const h = el.offsetHeight;

    const pt = getClientPoint(ev);
    const relX = pt.x - rect.left - padL;
    const relY = pt.y - rect.top - padT;

    const contentW = rect.width - padL - padR;
    const contentH = rect.height - padT - padB;

    let left = relX + pad;
    let top = relY + pad;

    if (left + w > contentW) left = relX - w - pad;
    left = Math.max(0, Math.min(left, contentW - w));

    if (top + h > contentH) top = relY - h - pad;
    top = Math.max(0, Math.min(top, contentH - h));

    el.style.left = (left + padL) + tooltipLeft + "px";
    el.style.top = (top + padT) + tooltipTop + "px";

    el.style.visibility = prevVis || "visible";
    el.style.display = prevDisp || "block";
  }
  const allnode_id = ['node_1', 'node_2', 'node_3', 'node_4', 'node_5'];
  function showTooltip(hover) {
    let ct = hover.target;
    let data_name = ct.dataset;
    // console.log(ct)

    // // add a stock color in map id
    if (style_clicked_id == ct.id) {
      ct.style.stroke = "red";
      ct.style.strokeWidth = ".5px";
      ct.style.fillOpacity = "1";
      ct.style.opacity = "1";
      // return;
    } else {


      const isNode = allnode_id.includes(ct.id);

      // ✔ If id is in the node list → add opacity .5  
      if (isNode) {
        ct.style.opacity = "0.5";
        ct.style.strokeWidth = "1px";
        ct.style.fillOpacity = "0.5";
      }

      // ✔ If id is NOT in list → opacity 1  
      else {
        ct.style.opacity = "1";
        ct.style.fillOpacity = "1";
        ct.style.fill = 'red';
        ct.style.strokeWidth = ".5px";
      }




      //  ct.style.stroke = "red";

      //     ct.style.fill = data_name.hover ? data_name.hover : "";
      //     ct.style.cursor = "pointer";
      //     ct.style.fillOpacity = "1";
    }




    tooltip.style.display = "block";
    tooltip.innerHTML = data_name == '' || null || 'undefined' ? ct.id : data_name.name;
    let cx = hover.clientX;
    let cy = hover.clientY;
    // tooltip.style.left = hover.offsetX + "px";
    // tooltip.style.top = hover.offsetY - tooltip.offsetHeight + "px";
    placeSmartInContainer(tooltip, hover, 12, -50, -10);
    // console.log(    hover.offsetX - tooltip.offsetWidth)
    // tooltip.style.top = hover.layerY + "px";
    // tooltip.style.left = hover.layerX + "px";
  }

function hideTooltip(ev) {
    let ct = ev.target;

    if (ct.id === "cupola_weatherane") {
        return;
    }

    /* -------------------------------------------------
       1) If this is the clicked node → KEEP its style
       ------------------------------------------------- */
    if (ct.id === style_clicked_id) {
        ct.style.opacity = "1";
        ct.style.fillOpacity = "1";
        tooltip.style.display = "none";
        return;
    }

    /* -------------------------------------------------
       2) Otherwise, apply logic for nodes / non-nodes
       ------------------------------------------------- */
    const isNode = allnode_id.includes(ct.id);

    if (isNode) {
        // If this node is the clicked node (correct check)
        if (ct.id === style_clicked_id) {
            ct.style.fillOpacity = "0.5";
            ct.style.opacity = "0.5";
        } else {
            // Dim normal nodes
            ct.style.strokeWidth = "1px";
            ct.style.fillOpacity = "0.1";
            ct.style.opacity = "0.1";
        }

    } else {
        // Non-node elements
        ct.style.stroke = "#494949";
        let data_name = ct.dataset;

        if (data_name.fill !== "") {
            ct.style.fill = data_name.fill || "";
        } 
        else if (data_name.partially_sponsored !== "") {
            ct.style.fill = data_name.partially_sponsored || "";
        }
    }

    tooltip.style.display = "none";
}

  let isFirstClick = true;



  // Helper: restore element style using its data-* attributes or remove inline styles if not available
  function restoreStyleFromDataset(el) {
    if (!el) return;

    // Choose the dataset keys you care about. I kept the behavior you indicated:
    // prefer data-fill, then data-partially_sponsored; stroke might be in data-stroke
    const ds = el.dataset || {};

    // Fill: if dataset.fill is present and not empty, apply it; otherwise remove inline fill
    if (typeof ds.fill !== "undefined" && ds.fill !== "") {
      el.style.fill = ds.fill;
    } else if (typeof ds.partially_sponsored !== "undefined" && ds.partially_sponsored !== "") {
      el.style.fill = ds.partially_sponsored;
    } else {
      // If there's no data-fill, remove inline style so CSS or SVG default takes over
      el.style.removeProperty("fill");
    }

    // Stroke: restore if data-stroke provided, otherwise remove inline stroke
    if (typeof ds.stroke !== "undefined" && ds.stroke !== "") {
      el.style.stroke = ds.stroke;
    } else {
      el.style.removeProperty("stroke");
    }

    // Fill opacity / overall opacity: restore if provided in dataset (data-fill-opacity, data-opacity)
    if (typeof ds.fillOpacity !== "undefined" && ds.fillOpacity !== "") {
      el.style.fillOpacity = ds.fillOpacity;
    } else if (typeof ds.fillOpacity !== "undefined") {
      el.style.removeProperty("fill-opacity");
    }

    if (typeof ds.opacity !== "undefined" && ds.opacity !== "") {
      el.style.opacity = ds.opacity;
    } else {

      const isNode = allnode_id.includes(el.id);

      // ✔ If id is in the node list → add opacity .5  
      if (isNode) {
        el.style.opacity = "0.1";

        el.style.fillOpacity = "0.1";
      }

      // Default: if not set in dataset, remove inline opacity to let CSS show
      el.style.removeProperty("opacity");
    }
  }

  function map_click_func(event) {
    const ct = event.target;
    //reset previously set color on click 

    // 1) Reset previously selected element (if any) — use stored ID, not current ct
    if (style_clicked_id) {
      const prev = document.getElementById(style_clicked_id);
      if (prev && prev !== ct) {
        restoreStyleFromDataset(prev);
      }
      // If prev === ct we are re-clicking the same element, we'll proceed to reapply highlight below
    }

    lotDetail.forEach(lot_id => {
      if (lot_id == ct.id) {

        const isNode = allnode_id.includes(ct.id);

        // ✔ If id is in the node list → add opacity .5  
        if (isNode) {
          ct.style.opacity = "0.5";

          ct.style.fillOpacity = "0.5";
          ct.style.fill = 'red';
        } else {
          ct.style.fill = 'red';
          ct.style.fillOpacity = '1';
          ct.style.opacity = '1';



          style_clicked_id = ct.id;
        }


      }
      else {
        return;
      }
    })
    // get dataset from the svg path



    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const data_set = ct.dataset;
    // get the id of  the clicked item
    const click_id = ct.id;

    // set the id of the click item id in input fild map_id
    map_id.value = click_id;
    if (map_id.value !== "") {
      ikrwmap_submit_form.removeAttribute("disabled", "");
    }

    if (
      ikrwmap_details.style.display === "none" ||
      !ikrwmap_details.style.display
    ) {
      ikrwmap_details.style.display = "block";
      ikrwmap_details.style.visibility = "hidden"; // Prevent flashing on screen
    }

    ikrwmap_details.style.visibility = ""; // Restore visibility

    if (isFirstClick) {
      if (event.type == "click") {
        if (screenWidth < 500 && event.pageX > 120) {
          ikrwmap_details.style.left = event.pageX - 150 + "px";
        } else if (screenWidth < 900 && event.pageX < 120) {
          ikrwmap_details.style.left = event.pageX + event.pageX + "px";
        } else if (screenWidth > 500) {
          ikrwmap_details.style.left =
            event.pageX - ikrwmap_details.offsetWidth + "px";
        }

        if (event.pageY >= 400) {
          ikrwmap_details.style.top =
            event.pageY - ikrwmap_details.offsetHeight / 2 + "px";
        } else {
          ikrwmap_details.style.top = event.pageY + "px";
        }
      } else if (event.type == "touchstart") {
        if (screenWidth < 500 && event.touches[0].pageX > 120) {
          ikrwmap_details.style.left = event.touches[0].pageX - 150 + "px";
        } else if (screenWidth > 500) {
          ikrwmap_details.style.left =
            event.touches[0].pageX - ikrwmap_details.offsetWidth + "px";
        }

        if (event.touches[0].pageY >= 400) {
          ikrwmap_details.style.top =
            event.touches[0].pageY + ikrwmap_details.offsetHeight + 30 + "px";
        } else {
          ikrwmap_details.style.top = event.touches[0].pageY + "px";
        }
        isFirstClick = false; // Reset the flag after the first click
      }
      isFirstClick = false; // Reset the flag after the first click
    } else {
      // Determine the eventent type: click or touchstart
      // tool tip show bottom
      if (event.type === "click") {
        const clickX = event.pageX;
        const clickY = event.pageY;
        const tooltipWidth = ikrwmap_details.offsetWidth;
        const tooltipHeight = ikrwmap_details.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        let tooltipX = clickX; // Default horizontal position
        let tooltipY = clickY + 20; // Default vertical position below the cursor (20px offset)

        // Horizontal position for click
        if (clickX + tooltipWidth > screenWidth) {
          tooltipX = screenWidth - tooltipWidth - 10; // Align to the right edge
        } else if (clickX < 10) {
          tooltipX = 10; // Align to the left edge
        } else {
          tooltipX = clickX - tooltipWidth / 2; // Center horizontally around the cursor
        }

        // Vertical position for click (always below the cursor)
        if (tooltipY + tooltipHeight > screenHeight) {
          // If there's not enough space below, position tooltip above the cursor
          tooltipY = clickY - tooltipHeight - 20;
        }

        // Update tooltip position
        ikrwmap_details.style.left = `${tooltipX}px`;
        ikrwmap_details.style.top = `${tooltipY}px`;

        // console.log("Tooltip Position:", { x: tooltipX, y: tooltipY });
      }

      // show the cursor bottom
      // if (event.type === "click") {
      //   const clickX = event.pageX; // Cursor's X position
      //   const clickY = event.pageY; // Cursor's Y position
      //   const tooltipWidth = ikrwmap_details.offsetWidth;
      //   const tooltipHeight = ikrwmap_details.offsetHeight;
      //   const screenWidth = window.innerWidth;
      //   const screenHeight = window.innerHeight;

      //   let tooltipX = clickX - tooltipWidth / 2; // Center the tooltip horizontally around the cursor
      //   let tooltipY = clickY - tooltipHeight - 10; // Position the tooltip above the cursor (10px offset)

      //   // Ensure the tooltip doesn't overflow horizontally
      //   if (tooltipX + tooltipWidth > screenWidth) {
      //     tooltipX = screenWidth - tooltipWidth - 10; // Align to the right edge
      //   } else if (tooltipX < 10) {
      //     tooltipX = 10; // Align to the left edge
      //   }

      //   // Ensure the tooltip doesn't overflow vertically
      //   if (tooltipY < 10) {
      //     tooltipY = clickY + 10; // If not enough space above, move it below the cursor
      //   }

      //   // Update tooltip position
      //   ikrwmap_details.style.left = `${tooltipX}px`;
      //   ikrwmap_details.style.top = `${tooltipY}px`;

      //   console.log("Tooltip Position:", { x: tooltipX, y: tooltipY });
      // }

      // show tooltip cursor top

      // else if (event.type === "touchstart") {
      //   const touchX = event.touches[0].pageX;
      //   const touchY = event.touches[0].pageY;

      //   let tooltipX = touchX; // Default horizontal position
      //   let tooltipY = touchY - tooltipHeight - 10; // Default vertical position above the touch point (10px offset)

      //   // Horizontal position for touch
      //   if (touchX + tooltipWidth > screenWidth) {
      //     tooltipX = screenWidth - tooltipWidth - 10; // Align to the right edge
      //   } else if (touchX < 10) {
      //     tooltipX = 10; // Align to the left edge
      //   } else {
      //     tooltipX = touchX - tooltipWidth / 2; // Center horizontally around the touch point
      //   }

      //   // Vertical position for touch (always above the touch point)
      //   if (tooltipY < 10) {
      //     // If there's not enough space above, adjust to fit within the screen
      //     tooltipY = 10;
      //   }

      //   // Update tooltip position
      //   ikrwmap_details.style.left = `${tooltipX}px`;
      //   ikrwmap_details.style.top = `${tooltipY}px`;

      //   console.log("Tooltip Position (Touchstart):", { x: tooltipX, y: tooltipY });
      // }

      // show tooltip cursor bottom
      else if (event.type === "touchstart") {
        const touchX = event.touches[0].pageX;
        const touchY = event.touches[0].pageY;
        const tooltipWidth = ikrwmap_details.offsetWidth;
        const tooltipHeight = ikrwmap_details.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        let tooltipX = touchX; // Default horizontal position
        let tooltipY = touchY + 20; // Default vertical position below the touch point (20px offset)

        // Horizontal position for touch
        if (touchX + tooltipWidth > screenWidth) {
          tooltipX = screenWidth - tooltipWidth - 10; // Align to the right edge
        } else if (touchX < 10) {
          tooltipX = 10; // Align to the left edge
        } else {
          tooltipX = touchX - tooltipWidth / 2; // Center horizontally around the touch point
        }

        // Vertical position for touch (always below the touch point)
        if (tooltipY + tooltipHeight > screenHeight) {
          // If there's not enough space below, adjust to fit within the screen
          tooltipY = screenHeight - tooltipHeight - 10;
        }

        // Update tooltip position
        ikrwmap_details.style.left = `${tooltipX}px`;
        ikrwmap_details.style.top = `${tooltipY}px`;

        // console.log("Tooltip Position (Touchstart):", {
        //   x: tooltipX,
        //   y: tooltipY,
        // });
      }
    }

    if (data_set.dataadded == "true") {
      // get the data from the dataset
      ikrTitle.value = data_set.title ? data_set.title : "";

      ikrdes.value = data_set.desc ? data_set.desc : "";

      hovecolor.value = data_set.hover ? data_set.hover : "";

      typeHovcolor.value = data_set.hover ? data_set.hover : "";

      fill_color.value = data_set.fill ? data_set.fill : "";
      filltype.value = data_set.fill ? data_set.fill : "";

      modal_link.value = data_set.link ? data_set.link : "";

      ikr_w_img_inp.value = data_set.img ? data_set.img : "";


      ikr_size.value = data_set.ikr_size ? data_set.ikr_size : "";
      ikr_room_build.value = data_set.room_build ? data_set.room_build : "";

      if (data_set.room_build_sponsore === 'sponsored') {
        room_build_sponsore.checked = true;
      } else {
        room_build_available.checked = true;
      }

      room_furnished.value = data_set.room_furnish ? data_set.room_furnish : "";


      if (data_set.room_furnished_sponsore === 'sponsored') {
        room_furnished_sponsor.checked = true;
      } else {
        room_furnished_available.checked = true;
      }





      // change the submit button value

      ikrwmap_submit_form.value = "Edit";
    } else {
      ikrTitle.value = "";
      ikrdes.value = "";
      modal_link.value = "";
      ikr_w_img_inp.value = "";
      ikrwmap_submit_form.value = "Submit";
    }
    // Update tooltip content if dataset has relevant information

    // console.log(data_set)
    if (
      (data_set.img && data_set.img.trim() !== "") ||
      (data_set.link && data_set.link.trim() !== "") ||
      (data_set.title && data_set.title.trim() !== "") ||
      (data_set.desc && data_set.desc.trim() !== "")
    ) {
      // Populate the tooltip content
      ikrmap_detail_des.innerHTML = `
    <h3 id="ikrmap_title" class="ikrmap_title">
      ${data_set.title && data_set.title !== '' ? data_set.title : data_set.name}
    </h3> 
    <p>${data_set.desc ? data_set.desc : ""}</p>
  `;

      // Update the image container
      if (data_set.img && data_set.img.trim() !== "") {
        ikrwmap_detail_img.src = data_set.img; // Set image source
        detail_img_container.style.display = "block"; // Show image container
      } else {
        detail_img_container.style.display = "none"; // Hide if no image
      }
      if (data_set.link && data_set.link.trim() !== "") {
        ikrwmap_btnTxt.href = data_set.link; // Set link
        ikrwmap_btnTxt.style.display = "block"; // Show image container
      } else {
        ikrwmap_btnTxt.style.display = "none"; // Hide if no image
      }

      // Show tooltip
      ikrwmap_details.style.display = "block";
    } else {
      // Hide the tooltip if no valid content
      ikrwmap_details.style.display = "none";
    }

  }

  // add form submition  eventent listener

  // work with form data and changet the color  of the item  based on the selected color input
  function updateColor() {
    var textInput = document.getElementById("hovecolor");
    var colorInput = document.getElementById("typeHovcolor");

    // Get the value from the text input
    var colorValue = textInput.value;
    colorInput.value = colorValue;
    // Check if the input value is a valid hex color code
  }
  // console.log(typeHovcolor)

  const colorTypes = (element, value) => {
    // console.log(element)
    element.addEventListener("change", (ev) => {
      value.value = ev.target.value;
    });
  };

  const checkHexCode = (element, tColor, value) => {
    var isValidHex = /^#[0-9A-F]{6}$/i.test(value);

    if (isValidHex) {
      // Prepend the "#" symbol to the input value
      value = value;
      // console.log(value);
      // Set the color input value
      tColor.value = value;
      element.style.backgroundColor = "#fff";
    } else {
      // console.log("Not a valid hex color code");

      element.style.backgroundColor = "red";
    }
  };


  // set the color on input filde if the clore is change
  colorTypes(typeHovcolor, hovecolor);
  colorTypes(filltype, fill_color);
  // set filltype_partially
  colorTypes(filltype_partially, fill_color_partially);
  // change the color modal input color
  colorTypes(modal_typeHovcolor, modal_hovecolor);
  colorTypes(modal_filltype, modal_fill_color);

  const setColorType = (element, setColorTypes) => {
    element.addEventListener("keyup", (ev) => {
      let colorValue = ev.target.value;
      checkHexCode(element, setColorTypes, colorValue);
      // Check if the input value is a valid hex color code
    });
  };

  setColorType(hovecolor, typeHovcolor);
  setColorType(fill_color, filltype);

  // change the color modal input color

  setColorType(modal_hovecolor, modal_typeHovcolor);
  setColorType(modal_fill_color, modal_filltype);

  // set filltype_partially

  setColorType(fill_color_partially, filltype_partially);
  // select media from wordpress media

  ikr_select_img.addEventListener("click", (ev) => {
    select_media_url(ev, ikr_w_img_inp);
  });
  modal_ikr_select_img.addEventListener("click", (ev) => {
    select_media_url(ev, modal_ikr_img);
  });

  function select_media_url(event, input_ele) {
    event.preventDefault();

    // Create a media frame
    const mediaFrame = wp.media({
      title: "Select Image",
      button: {
        text: "Use this image",
      },
      multiple: false, // Set to false to allow only one image to be selected
    });

    // When an image is selected, run a callback.
    mediaFrame.on("select", function () {
      const attachment = mediaFrame.state().get("selection").first().toJSON();
      input_ele.value = attachment.url; // Set image URL to input
    });

    // Open the media frame
    mediaFrame.open();
  }

  form_inp.addEventListener("submit", (subEv) => {
    subEv.preventDefault(); // Prevent default form submission

    const change_color = ikrsvg.querySelector(`#${map_id.value}`);


    if (fill_color.value !== '') {
      change_color.style.fill = fill_color.value;

    }
    else if (fill_color_partially.value !== '') {
      change_color.style.fill = fill_color_partially.value;
    }

    // check the value of the submit btn to change the edit or add mode

    if (ikrwmap_submit_form.value == "Edit") {
      // send request to edit the data
      worldmp_makeAjaxRequestGlobal(
        form_inp,
        your_ajax_object.edit_data,
        (success) => {
          if (success) {
            console.log("Data successfully sent to the server.");
            ikrwmap_success_message("success", "Data Update successfully");
            // Fetch data from the database after the data is sent successfully
            ikrwmap_retrive_data_from_db();
          } else {
            console.log("Failed to send data.");
          }
        }
      );
    } else {
      // Create a FormData object to capture the form values

      worldmp_makeAjaxRequestGlobal(
        form_inp,
        your_ajax_object.action,
        (success) => {
          if (success) {
            ikrwmap_success_message(
              "success",
              "Data successfully sent to the server."
            );
            ikrwmap_submit_form.value = "Edit"
            // Fetch data from the database after the data is sent successfully
            ikrwmap_retrive_data_from_db();
          } else {
            console.log("Failed to send data.");
          }
        }
      );
    }

    // ikrwmap_retrive_data_from_db();
  });

  //  edit data from list
  ikrwmap_from_edit.addEventListener("submit", (edtisub) => {
    edtisub.preventDefault();

    // Create a Bootstrap modal instance
    bootstrap.Modal.getInstance(
      document.getElementById("ikr_map_data_edit")
    ).hide();

    worldmp_makeAjaxRequestGlobal(
      ikrwmap_from_edit,
      your_ajax_object.edit_data,
      (success) => {
        if (success) {
          console.log("Data successfully sent to the server.");
          ikrwmap_success_message("success", "Data Update successfully");
          // Fetch data from the database after the data is sent successfully
          ikrwmap_retrive_data_from_db();
        } else {
          console.log("Failed to send data.");
          ikrwmap_success_message("error", "Failed to send data.");
        }
      }
    );
  });

  // get the data asynconalsy

  async function ikrwmap_retrive_data_from_db() {
    try {
      // Fetch data from the database
      const response = await world_map_fetchAjaxRequest(
        your_ajax_object.feacth,
        your_ajax_object.ajax_url
      );

      // Return early if response is empty
      if (!response || response.length === 0) {
        return;
      }

      // Get all valid map elements from the DOM
      const ikrsvg = document.querySelector('#ikr_svg'); // Select the SVG element
      if (!ikrsvg) {
        // console.log('SVG not found');
        return; // Exit if SVG is not found
      }



      // Create a Set of valid map IDs from the DOM
      const validMapIds = new Set(
        Array.from(ikrsvg.querySelectorAll('[id]')).map((el) => el.id)
      );

      // console.log(validMapIds)
      // Filter response to only include items with valid map IDs
      const validData = response.filter((data) => validMapIds.has(data.map_id));

      // console.log(validData)
      // Return early if no valid data matches DOM elements
      if (validData.length === 0) {
        return;
      }

      // Set attributes for matching map elements
      validData.forEach((data) => {
        // console.log(data)
        const setColor = ikrsvg.querySelector(`#${data.map_id}`);
        if (setColor) {
          setColor.setAttribute("data-fill", data.fill_color || "");
          setColor.setAttribute("data-hover", data.hov_color || "");
          setColor.setAttribute("data-partially_sponsored", data.click_color || "");

          setColor.setAttribute("data-title", data.title || "");
          setColor.setAttribute("data-desc", data.map_des || "");
          setColor.setAttribute("data-img", data.map_img || "");
          setColor.setAttribute("data-link", data.map_link || "");
          setColor.setAttribute("data-ikr_size", data.ikr_size || "");
          setColor.setAttribute("data-room_build", data.room_build || "");
          setColor.setAttribute("data-room_build_sponsore", data.room_build_sponsore || "");
          setColor.setAttribute("data-room_furnish", data.room_furnish || "");
          setColor.setAttribute("data-room_furnished_sponsore", data.room_furnished_sponsore || "");
          setColor.setAttribute("data-dataadded", "true");


          if (data.fill_color !== '') {
            setColor.style.fill = data.fill_color;
          } else if (data.click_color !== '' && data.click_color !== '#0000FF') {
            setColor.style.fill = data.click_color;
          }


          setColor.style.opacity = '.3';
        }
      });

      // Hide tooltip on click if no matching ID is found
      window.addEventListener('click', (ev) => {
        const ikrwmap_details = document.querySelector('.ikrwmap_details_container');
        if (!ikrwmap_details || ikrwmap_details.contains(ev.target)) {
          return; // Do nothing if click is inside tooltip
        }

        const matchFound = validData.some((item) => item.map_id === ev.target.id);
        if (!matchFound) {
          ikrwmap_details.style.display = 'none';
        }
      });

      // Populate table with valid data
      function populateTable(data) {
        const tableBody = document.querySelector("#mapTable tbody");
        if (!tableBody) return; // Return early if table body not found
        tableBody.innerHTML = ""; // Clear existing rows

        data.forEach((item, ind) => {
          const row = document.createElement("tr");
          row.classList.add("shadow", "my-2");

          // Limit content to the first N words
          const limitWords = (text, wordLimit) => {
            if (!text) return "";
            const words = text.split(" ");
            return words.length > wordLimit
              ? words.slice(0, wordLimit).join(" ") + "..."
              : text;
          };

          row.innerHTML = `
          <td>${ind + 1}</td>
          <td>${item.map_id}</td>
          <td>${limitWords(item.title, 5)}</td>
          <td>${limitWords(item.map_des, 4)}</td>
          <td style="background-color: ${item.hov_color || 'transparent'};">${item.hov_color || ""
            }</td>
          <td style="background-color: ${item.fill_color || 'transparent'};">${item.fill_color || ""
            }</td>
          <td>
            <button class="edit-btn btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#ikr_map_data_edit" data-id="${item.map_id
            }" data-edit="ikr_data_edit">Edit</button>
            <form class="d-inline" action="" data-id="${item.map_id
            }" data-form_id="delete_form">
              <input type="hidden" name="map_id" value="${item.map_id}">
              <input type="hidden" name="w_map_form_delete_nonce" value="${your_ajax_object.deleteNonce
            }">
              <button type="submit" class="delete-btn btn btn-sm btn-danger" data-delete="ikr_data_delete" data-id="${item.map_id
            }">Delete</button>
            </form>
          </td>
        `;

          tableBody.appendChild(row);
        });
      }

      // Populate table with valid data
      populateTable(validData);

      // Handle edit button clicks
      const editElements = document.querySelectorAll('[data-edit="ikr_data_edit"]');
      editElements.forEach((edit_ele) => {
        edit_ele.addEventListener("click", (ev) => {
          const id = ev.target.dataset.id;
          const itemData = validData.find((item) => item.map_id === id);
          if (!itemData) return;

          // Update modal inputs
          const modal = {
            map_id: document.querySelector('#modal_map_id'),
            ikrTitle: document.querySelector('#modal_ikrTitle'),
            ikrdes: document.querySelector('#modal_ikrdes'),
            typeHovcolor: document.querySelector('#modal_typeHovcolor'),
            hovecolor: document.querySelector('#modal_hovecolor'),
            fill_color: document.querySelector('#modal_fill_color'),
            filltype: document.querySelector('#modal_filltype'),
            ikr_img: document.querySelector('#modal_ikr_img'),
            link_edit: document.querySelector('#modal_link_edit'),

            ikr_size2: document.querySelector('#ikr_size2'),
            ikr_room_build_m: document.querySelector('#ikr_room_build_m'),
            room_build_sponsore_m: document.querySelector('#room-build-sponsore_m'),
            room_build_available_m: document.querySelector('#room-furniture-sponsor_am'),

            room_furnished_m: document.querySelector('#ikr_room_furnish_m'),

            room_furnished_sponsor_m: document.querySelector('#room-furnished-sponsore1_m'),
            room_furnished_available_m: document.querySelector('#room-furnished-sponsore2'),






          };

          if (modal.map_id) modal.map_id.value = itemData.map_id || "";
          if (modal.ikrTitle) modal.ikrTitle.value = itemData.title || "";
          if (modal.ikrdes) modal.ikrdes.value = itemData.map_des || "";
          if (modal.typeHovcolor) modal.typeHovcolor.value = itemData.hov_color || "";
          if (modal.hovecolor) modal.hovecolor.value = itemData.hov_color || "";
          if (modal.fill_color) modal.fill_color.value = itemData.fill_color || "";
          if (modal.filltype) modal.filltype.value = itemData.fill_color || "";
          if (modal.ikr_img) modal.ikr_img.value = itemData.map_img || "";
          if (modal.link_edit) modal.link_edit.value = itemData.map_link || "";
          if (modal.ikr_size2) modal.ikr_size2.value = itemData.ikr_size || "";
          if (modal.ikr_room_build_m) modal.ikr_room_build_m.value = itemData.ikr_size || "";
          if (modal.ikr_size2) modal.ikr_size2.value = itemData.room_build || "";
          if (modal.room_furnished_m) modal.room_furnished_m.value = itemData.room_furnish || "";

          if (itemData.room_build_sponsore === "sponsored") {
            modal.room_build_sponsore_m.checked = true;
          } else {
            modal.room_build_available_m.checked = true;
          }

          // Second set
          if (itemData.room_furnished_sponsore === "sponsored") {
            modal.room_furnished_sponsor_m.checked = true;
          } else {
            modal.room_furnished_available_m.checked = true;
          }
        });
      });

      // Handle delete button clicks
      const deleteForms = document.querySelectorAll('[data-form_id="delete_form"]');
      deleteForms.forEach((delete_ele) => {
        delete_ele.addEventListener("submit", async (ev) => {
          ev.preventDefault();
          const deleted_element = ikrsvg.querySelector(`#${delete_ele.dataset.id}`);
          if (!deleted_element) return;

          const isConfirmed = confirm("Are you sure you want to delete this item?");
          if (!isConfirmed) return;

          try {
            const success = worldmp_makeAjaxRequestGlobal(
              delete_ele,
              your_ajax_object.delete_data
            );
            window.location.reload()


            if (success) {
              ikrwmap_success_message("success", "Data deleted successfully");
              deleted_element.removeAttribute("data-fill");
              deleted_element.removeAttribute("data-hover");
              deleted_element.removeAttribute("data-title");
              deleted_element.removeAttribute("data-desc");
              deleted_element.removeAttribute("data-img");
              deleted_element.removeAttribute("data-link");
              deleted_element.removeAttribute("data-dataadded");
              deleted_element.style.fill = "";
              ikrwmap_retrive_data_from_db(); // Refresh data
            } else {
              console.log("Failed to delete data.");
            }
          } catch (err) {
            console.error("Delete error:", err);
          }
        });
      });

    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  ikrwmap_retrive_data_from_db();
});

function ikrwmap_success_message(type, messages) {
  if (type == "error") {
    // Show the success message
    successMessage.classList.remove("ikrwmap_hidden");
    successMessage.classList.add("ikrwmap_show");
    successMessage.style.backgroundColor = "red";
    successMessage.innerHTML = messages;
  }
  if (type == "success") {
    successMessage.classList.remove("ikrwmap_hidden");
    successMessage.classList.add("ikrwmap_show");
    successMessage.style.backgroundColor = "#4CAF50";
    successMessage.innerHTML = messages;
  }
  // Show the success message

  // Hide the success message after 1 second
  setTimeout(() => {
    successMessage.classList.remove("ikrwmap_show");
    setTimeout(() => {
      successMessage.classList.add("ikrwmap_hidden");
    }, 500); // Wait for the transition to finish
  }, 1000);
}
