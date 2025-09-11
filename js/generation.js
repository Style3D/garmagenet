
// GarmageSet Examples
var garmageset_items = [
    {
        render_image: "00000.png",
        prompt: "sweater and cardigan (hoodie); loose H-line silhouette, regular length, casual style; hooded neckline, long sleeves with ribbed cuffs, drop shoulder construction, banded hemline, front kangaroo pocket, side seam construction, no visible darts or pleats, no closure.",
        model: "00000.glb", alt: ""
    },
    {
        render_image: "00001.png",
        prompt: "T-shirt; loose H-line silhouette, hip length, casual style; off-shoulder neckline, short sleeves with ruffled detailing, no closure, princess seams, side seam construction.",
        model: "00001.glb", alt: ""
    },
    {
        render_image: "00002.png",
        prompt: "dress; fitted X-silhouette, mid-length, formal style; short sleeves with puffed shoulders, conventional collar, side slits at hem, half-open front placket, concealed button closure, princess seams, vertical darts at bust and waist.",
        model: "00002.glb", alt: ""
    },
    {
        render_image: "00003.png",
        prompt: "dress; fitted silhouette, floor-length, formal style; sleeveless, high-low hemline, straight neckline, waist seam with belt detail, princess seams, central closure (likely hidden or minimalistic).",
        model: "00003.glb", alt: ""
    },
    {
        render_image: "00004.png",
        prompt: "jumpsuit and overall; straight silhouette, ankle-length, casual style; cross-back straps, front zipper closure, side seam pockets, sleeveless, high-waisted, no waist pleats or darts.",
        model: "00004.glb", alt: ""
    },
    {
        render_image: "00005.png",
        prompt: "vest; fitted X-silhouette, cropped length, casual style; sleeveless, round neckline, banded hemline, seamless construction, princess lines, no closure.",
        model: "00005.glb", alt: ""
    },
    {
        render_image: "00006.png",
        prompt: "pants; straight silhouette, ankle-length, casual style; multiple pockets (front and side), elastic waistband, fly-front opening, flat front design, welt seams, no visible darts or pleats.",
        model: "00006.glb", alt: ""
    },
    {
        render_image: "00007.png",
        prompt: "vest; loose H-line silhouette,regular length, casual style; V-neck, sleeveless, conventional hemline, front zip closure, patch pockets, side seam construction",
        model: "00007.glb", alt: ""
    },
    {
        render_image: "00008.png",
        prompt: "outerwear coat; straight silhouette, knee-length, workwear style; stand collar with yellow fur trim, long sleeves with ribbed cuffs, single-breasted opening with visible buttons, side seam pockets, welt seams, central closure.",
        model: "00008.glb", alt: ""
    },
];

// Caption Condition Generation Results
var txt2_items = [
    {
        render_image: "garment_0032.png",
        prompt: "hoodie; loose H-line silhouette, mid-thigh length, casual style; drop shoulder sleeve, ribbed cuffs, ribbed hem, hood with drawstrings, set-in sleeves.",
        model: "garment_0032.glb",
    },
    {
        render_image: "garment_0112.png",
        prompt: "shirt; fitted silhouette, short-sleeved, above-the-hip length, casual style; regular shoulder, standard waistline, button-down collar.",
        model: "garment_0112.glb", alt: ""
    },
    {
        render_image: "garment_0224.png",
        prompt: "Dress, X-shaped, Regular shoulders, Leg-of-mutton sleeves, No placket, Armhole princess seam, Gathered waist, Ruffle hem, Collarless, V-neckline.",
        model: "garment_0224.glb", alt: ""
    },
    {
        render_image: "garment_0608.png",
        prompt: "Women&#39;s Shirt; Loose H-line silhouette, knee-length, casual style; drop shoulder, standard waistline, button-down collar, long sleeves with barrel cuffs.",
        model: "garment_0608.glb", alt: ""
    },
    {
        render_image: "garment_0711.png",
        prompt: "Dress, H-shaped, Regular shoulders, Sleeveless, Straight princess line, Gathered waist, Hem longer on sides than center, No collar, Sweetheart neckline.",
        model: "garment_0711.glb", alt: ""
    },
    {
        render_image: "garment_0741.png",
        prompt: "Dress, A-line, Cut-out sleeve, Princess line, Ruffle hem, V-neckline.",
        model: "garment_0741.glb", alt: ""
    },
];

// Sketch & Image Condition Generation Results
var sketch_items = [
    {
        render_image: "dress_long_sleeve.png",
        model: "dress_long_sleeve.glb", alt: ""
    },
    {
        render_image: "dress_with_hat.png",
        model: "dress_with_hat.glb", alt: ""
    },
    {
        render_image: "garment_0106.png",
        model: "garment_0106.glb", alt: ""
    },
    {
        render_image: "garment_0248.png",
        model: "garment_0248.glb", alt: ""
    },
    {
        render_image: "garment_0308.png",
        model: "garment_0308.glb", alt: ""
    },
    {
        render_image: "garment_0319.png",
        model: "garment_0319.glb", alt: ""
    },
    {
        render_image: "garment_0618.png",
        model: "garment_0618.glb", alt: ""
    },
    {
        render_image: "garment_0619.png",
        model: "garment_0619.glb", alt: ""
    },
    {
        render_image: "garment_0841.png",
        model: "garment_0841.glb", alt: ""
    },
];

// Auto Garment Modeling Generation Results
var autoGM_items = [
    {
        render_image: "001.png",
        model: "001.glb",
    },
    {
        render_image: "002.png",
        model: "002.glb"
    },
    {
        render_image: "003.png",
        model: "003.glb"
    },
];

// Sewing Pattern Recovery (Pointcloud Condition Generation) Results
var SPrecovery_items = [
    // DeepFashion ===
    {
        render_image: "DF_garment_13-0_A.png",
        model: "DF_garment_13-0_A.glb"
    },
    {
        render_image: "DF_garment_113-1_A.png",
        model: "DF_garment_113-1_A.glb"
    },
    {
        render_image: "DF_garment_172-2.png",
        model: "DF_garment_172-2.glb"
    },
    {
        render_image: "DF_garment_184-1_A.png",
        model: "DF_garment_184-1_A.glb"
    },
    {
        render_image: "DF_garment_207-1_A.png",
        model: "DF_garment_207-1_A.glb"
    },
    {
        render_image: "DF_garment_527-1_A.png",
        model: "DF_garment_527-1_A.glb"
    },
];


// GarmageSets
function garmageset_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(garmageset_window_template(${JSON.stringify(item)}))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <!-- 带轮廓线的渲染图 -->
                <div style="width: 100%; aspect-ratio: 1">
                    <img src="assets/garmageset/images/${item.render_image}" alt="${item.alt}">
                </div>
                <!-- sewing pattern -->
                <div class="caption" style="height: 160px; margin-top: -120px; margin-left: -100px; margin-bottom: -30px">
                    <div class="x-image-prompt" style="border: 0" >
                        <img src="assets/garmageset/sewing_pattern/${item.render_image}" alt="${item.alt}">
                    </div>
                </div>
                <!-- caption -->
                <div class="caption" style="height: 100%; ">
                    <div class="x-handwriting" style="width: 100%" >
                        ${item.prompt}
                    </div>
                </div>
            </div>`;
}

// Caption Condition Generation
function txt_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(mmgen_window_template(${JSON.stringify(item)}, "assets/gen_text"))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 1;">
                    <img src="assets/gen_text/images/${item.render_image}" alt="${item.alt}">
                </div>
                <div class="caption">
                    <div class="x-handwriting">
                        ${item.prompt}
                    </div>
                </div>
            </div>`;
}

// Sketch & Image Condition Generation
function sketch_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(mmgen_window_template(${JSON.stringify(item)}, "assets/gen_sketch"))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 1">
                    <img src="assets/gen_sketch/images/${item.render_image}" alt="${item.alt}">
                </div>
                <!-- sketch -->
                <div class="caption" style="height: 160px; margin-top: -100px; margin-left: -180px; margin-bottom: -30px">
                    <div class="x-image-prompt" style="border: 0" >
                        <img style="border-radius: 16px; box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5); opacity: 0.85" src="assets/gen_sketch/sketch/${item.render_image}" alt="${item.alt}">
                    </div>
                </div>
            </div>`;
}

// Auto Garment Modeling
function autoGM_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(mmgen_window_template(${JSON.stringify(item)}, "assets/gen_autoGM"))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 1">
                    <img src="assets/gen_autoGM/images/${item.render_image}" alt="${item.alt}">
                </div>
                <!-- Pattern Given -->
                <div class="caption" style="position: absolute; height: 160px; margin-top: -132px; margin-left: -0px; margin-bottom: -30px;">
                    <div class="x-image-prompt" style="border: 0" >
                        <img style="background:rgba(255,255,255,0.6); border-radius: 16px; box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5); opacity: 0.85" src="assets/gen_autoGM/gt_pattern/${item.render_image}" alt="${item.alt}">
                    </div>
                </div>
            </div>`;
}


// Sewing Pattern Recovery (Pointcloud Condition Generation)
function SPrecovery_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(mmgen_window_template(${JSON.stringify(item)}, "assets/SPrecovery"))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 1">
                    <img src="assets/SPrecovery/images/${item.render_image}" alt="${item.alt}">
                </div>
                <!-- sewing pattern -->
                <div class="caption" style="position: absolute; height: 160px; margin-top: -120px; margin-left: 130px; margin-bottom: 0px">
                    <div class="x-image-prompt" style="border: 0" >
                        <img style="opacity: 0.85" src="assets/SPrecovery/sewing_pattern/${item.render_image}" alt="${item.alt}">
                    </div>
                </div>
                <!-- in the wild point cloud -->
                <div class="caption" style="position: absolute; height: 140px; margin-top: -122px; margin-left: -16px; margin-bottom: 0px">
                    <div class="x-image-prompt" style="border: 0" >
                        <div style="position: relative; display: inline-block; border-radius: 16px; overflow: hidden; box-shadow: 0px 0px 2px rgba(0,0,0,0.5);">
                            <!-- 半透明白色背景 -->
                            <div style="position:absolute; inset:0; background:rgba(255,255,255,0.6); z-index:0;"></div>
                        
                            <!-- 图片 -->
                            <img 
                              style="position: relative; z-index: 1; border-radius: 16px;" 
                              src="assets/SPrecovery/itw_pc/${item.render_image}" 
                              alt="${item.alt}">
                        </div>
                    </div>
                </div>
            </div>`;
}

function garmageset_window_template(item) {
    let panel = asset_panel_template_garmageset(item);
    item = JSON.parse(JSON.stringify(item));
    item.model = 'assets/garmageset/glbs/' +  item.model
    return modelviewer_window_template_garmageset(item, panel, {viewer_size: 400, viewer_size_h: 600, panel_size: 600});
}

function mmgen_window_template(item, data_root) {
    let prompt = `<div class="x-handwriting">${item.prompt}</div>`;
    let panel = asset_panel_template_mmgen(item, data_root);
    item = JSON.parse(JSON.stringify(item));
    item.model = data_root + '/glbs/' + item.model
    console.log(item.model)
    return modelviewer_window_template_mmgen(item, panel, {viewer_size: 400, viewer_size_h: 600, panel_size: 600});
}
