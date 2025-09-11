var fullscreenElement = null;


function preventDefault(e) {
    e.preventDefault();
}


function stopPropagation(e) {
    e.stopPropagation();
}


function initWindow() {
    fullscreenElement = document.createElement('div');
    fullscreenElement.id = 'fullscreen';
    fullscreenElement.innerHTML = `
        <div id="window">
            <div id="close" onclick="closeWindow()">✕</div>
            <div id="content"></div>
        </div>
    `;
    document.body.appendChild(fullscreenElement);
    fullscreenElement.addEventListener('wheel', preventDefault);
    fullscreenElement.addEventListener('touchmove', preventDefault);
}


function openWindow(content) {
    let contentElement = fullscreenElement.querySelector('#content');
    contentElement.innerHTML = content;
    fullscreenElement.style.display = 'flex';
    setTimeout(() => {
        fullscreenElement.style.opacity = 1;
    }, 100);
    
    // if copntent height is greater than window height, enable scroll
    let contentHeight = contentElement.clientHeight;
    let innerHeight = contentElement.children[0].clientHeight;
    if (innerHeight > contentHeight) {
        contentElement.addEventListener('wheel', stopPropagation);
        contentElement.addEventListener('touchmove', stopPropagation);
    }
    else {
        contentElement.removeEventListener('wheel', stopPropagation);
        contentElement.removeEventListener('touchmove', stopPropagation);
    }
}


function closeWindow() {
    window_state = {};
    fullscreenElement.style.opacity = 0;
    setTimeout(() => {
        fullscreenElement.style.display = 'none';
    }, 250);
}


var window_state = {};

function showTexture() {
    let appearanceButton = document.getElementById('appearance-button');
    let geometryButton = document.getElementById('geometry-button');
    appearanceButton.classList.add('checked');
    geometryButton.classList.remove('checked');
    let modelViewer = document.getElementById('modelviewer');
    if (modelViewer.model.materials[0].pbrMetallicRoughness.baseColorTexture.texture !== null) return;
    modelViewer.environmentImage = 'assets/env_maps/white.jpg';
    for (let i = 0; i < modelViewer.model.materials.length; i++) {
        modelViewer.model.materials[i].pbrMetallicRoughness.baseColorTexture.setTexture(window_state.textures[i]);
    }
    modelViewer.exposure = window_state.exposure;
}


function hideAnnotations() {
    let showButton = document.getElementById('show-annotations-button');
    let hideButton = document.getElementById('hide-annotations-button');
    showButton.classList.remove('checked');
    hideButton.classList.add('checked');
    let modelViewer = document.getElementById('modelviewer');
    let annotations = modelViewer.querySelectorAll('button');
    for (let i = 0; i < annotations.length; i++) {
        annotations[i].style.opacity = 0;
    }
    setTimeout(() => {
        for (let i = 0; i < annotations.length; i++) {
            annotations[i].style.display = 'none';
        }
    }, 200);
}


function lookAtAsset(index) {
    let modelViewer = document.getElementById('modelviewer');
    let viewAssetButton = document.getElementById('view-asset-button');
    let assetList = document.getElementById('asset-list');
    let hasChecked = assetList.children[index].classList.contains('checked');
    if (hasChecked) {
        for (let i = 0; i < window_state.assets.length; i++) {
            assetList.children[i].classList.remove('checked');
        }
        modelViewer.cameraTarget = 'none';
        viewAssetButton.classList.remove('enabled');
        viewAssetButton.classList.add('disabled');
        viewAssetButton.onclick = null;
    }
    else {
        for (let i = 0; i < window_state.assets.length; i++) {
            if (i === index) {
                assetList.children[i].classList.add('checked');
            }
            else {
                assetList.children[i].classList.remove('checked');
            }
        }
        modelViewer.cameraTarget = window_state.assets[index].position.map(p => p + 'm').join(' ');
        viewAssetButton.classList.remove('disabled');
        viewAssetButton.classList.add('enabled');
        viewAssetButton.onclick = () => viewAsset(index);
    }
}


function viewAsset(index) {
    hideAnnotations();
    showTexture();

    let modelViewer = document.getElementById('modelviewer');
    let viewAssetButton = document.getElementById('view-asset-button');
    let assetList = document.getElementById('asset-list');

    document.getElementById('scene-mode-desc').style.display = 'none';
    document.getElementById('asset-mode-desc').style.display = 'block';
    document.getElementById('prompt-group').style.display = 'block';
    document.querySelector('.modelviewer-panel-prompt').innerHTML = window_state.prompt_template(window_state.assets[index]);
    document.getElementById('annotations-group').style.display = 'none';

    if (!window_state.scene_src) {
        window_state.scene_src = modelViewer.src;
    }
    modelViewer.cameraTarget = 'none';
    modelViewer.src = window_state.assets[index].model;

    for (let i = 0; i < window_state.assets.length; i++) {
        if (i === index) {
            assetList.children[i].classList.add('checked');
        }
        else {
            assetList.children[i].classList.remove('checked');
        }
        assetList.children[i].onclick = () => viewAsset(i);
    }

    viewAssetButton.innerHTML = 'Back to Scene';
    viewAssetButton.onclick = backToScene;
}


function backToScene() {
    showTexture();

    let modelViewer = document.getElementById('modelviewer');
    let viewAssetButton = document.getElementById('view-asset-button');
    let assetList = document.getElementById('asset-list');

    document.getElementById('scene-mode-desc').style.display = 'block';
    document.getElementById('asset-mode-desc').style.display = 'none';
    document.getElementById('prompt-group').style.display = 'none';
    document.getElementById('annotations-group').style.display = 'block';

    modelViewer.cameraTarget = 'none';
    modelViewer.src = window_state.scene_src;
    window_state.scene_src = null;

    for (let i = 0; i < window_state.assets.length; i++) {
        assetList.children[i].classList.remove('checked');
        assetList.children[i].onclick = () => lookAtAsset(i);
    }

    viewAssetButton.innerHTML = 'View Asset';
    viewAssetButton.classList.remove('enabled');
    viewAssetButton.classList.add('disabled');
    viewAssetButton.onclick = null;
}


function downloadGLB() {
    let modelViewer = document.getElementById('modelviewer');
    window.open(modelViewer.src);
}


// Visualize 3D model (GarmageSet)
function asset_panel_template_garmageset(item) {
    return `
        <div class="x-section-title small"><div class="x-gradient-font">Garmage</div></div>
        <!--  Garmage 3D 2D  -->
        <div class="modelviewer-panel-garmage" style="height: 300px">
            <div class="x-image-prompt" style="border: 0px; flex: 1">
                <img src="assets/garmageset/garmage1/${item.render_image}" alt="${item.alt}">    <!-- 3D PC&BBOX -->
            </div>
            <div class="x-image-prompt" style="border: 0px; flex: 1">
                <img src="assets/garmageset/garmage2/${item.render_image}" alt="${item.alt}">    <!-- 2D Garmages -->
            </div>
        </div>
        <!-- Pointcloud + Sketches -->
        <div class="modelviewer-panel-display-mode-wrapper"> 
            <!-- Pointcloud -->
            <div class="modelviewer-panel-display-mode-block" style="width: 40%">
                <div class="x-section-title small"><div class="x-gradient-font">Pointcloud</div></div>
                <div class="modelviewer-panel-garmage">
                    <div class="x-image-prompt" style="border: 0px; height: calc(100%);">
                        <img src="assets/garmageset/pointcloud/${item.render_image}" alt="${item.alt}">   <!-- PC -->
                    </div>
                </div>
            </div>
            <!-- Sketches -->
            <div class="modelviewer-panel-display-mode-block" style="width: 60%">
                <div class="x-section-title small"><div class="x-gradient-font">Sketches</div></div>
                <div class="modelviewer-panel-garmage", style="border: 0px; background-color: white" >
                    <div class="x-image-prompt2" style="border: 0px; background-color: white;" >
                        <img src="assets/garmageset/sketches/${item.render_image}" alt="${item.alt}", style="height: auto; width: auto; object-fit: contain;">    <!-- Sketch -->
                    </div>
                </div>
            </div>
        </div>
        <div class="x-flex-spacer"></div>
    `;
}


// Visualize 3D model (Generated)
function asset_panel_template_mmgen(item, data_root) {
    return `
        <div class="x-section-title small"><div class="x-gradient-font">Garmage</div></div>
        <!--  Garmage 3D 2D  -->
        <div class="modelviewer-panel-garmagerow" style="height: 565px">
            <div class="x-image-prompt-garmagerow" style="border: 0px; flex: 1">
                <img src="${data_root}/garmage1/${item.render_image}" alt="${item.alt}">    <!-- 3D PC&BBOX -->
            </div>
            <div class="x-image-prompt-garmagerow" style="border: 0px; flex: 1">
                <img src="${data_root}/garmage2/${item.render_image}" alt="${item.alt}">    <!-- 2D Garmages -->
            </div>
        </div>
    `;
}


function modelviewer_window_template_garmageset(item, panel, config) {
    let viewer_size = config && config.viewer_size || 500;
    let viewer_size_h = config && config.viewer_size_h || viewer_size;
    let panel_size = config && config.panel_size || 300;
    let show_annotations = config && config.show_annotations || false;
    html = `<div class="x-row" style="align-items: stretch; flex-wrap: wrap; width: ${viewer_size + panel_size + 32}px; max-width: calc(100vw - 32px);">
                <div class="modelviewer-container" style="width: ${viewer_size}px; height: ${viewer_size_h}px">
                    <model-viewer
                        id="modelviewer"
                        src="${item.model}"
                        camera-controls
                        tone-mapping="natural"
                        shadow-intensity="1"
                        shadow-softness="1"
                        exposure="0.5"
                        >`
    if (show_annotations) {
        window_state.assets = item.assets;
        window_state.prompt_template = item.prompt_template;
        for (let i = 0; i < item.assets.length; i++) {
            html += `<button slot="hotspot-${i}" data-position="${item.assets[i].position.join(' ')}">${item.assets[i].name}</button>`;
        }
    }
    html += `        </model-viewer>
                </div>
                <div class="modelviewer-panel" style="flex: 1 1 ${panel_size}px;">
                    ${panel}
                </div>
                
                <div class="x-row">
                    <div id="download-button" class="modelviewer-panel-button enabled" onclick="downloadGLB()">Download GLB</div>
                </div>
            </div>`;
    return html;
}


function modelviewer_window_template_mmgen(item, panel, config) {
    let viewer_size = config && config.viewer_size || 500;
    let viewer_size_h = config && config.viewer_size_h || viewer_size;
    let panel_size = config && config.panel_size || 300;
    let show_annotations = config && config.show_annotations || false;
    html = `<div class="x-row" style="align-items: stretch; flex-wrap: wrap; width: ${viewer_size + panel_size + 32}px; max-width: calc(100vw - 32px);">
                <div class="modelviewer-container" style="width: ${viewer_size}px; height: ${viewer_size_h}px">
                    <model-viewer
                        id="modelviewer"
                        src="${item.model}"
                        camera-controls
                        tone-mapping="natural"
                        shadow-intensity="1"
                        shadow-softness="1"
                        exposure="0.5"
                        >`
    if (show_annotations) {
        window_state.assets = item.assets;
        window_state.prompt_template = item.prompt_template;
        for (let i = 0; i < item.assets.length; i++) {
            html += `<button slot="hotspot-${i}" data-position="${item.assets[i].position.join(' ')}">${item.assets[i].name}</button>`;
        }
    }
    html += `        </model-viewer>
                </div>
                
                <div class="modelviewer-panel" style="height: 600px">
                    ${panel}
                </div>
                
                <div class="x-row">
                    <div id="download-button" class="modelviewer-panel-button enabled" onclick="downloadGLB()">Download GLB</div>
                </div>
            </div>`;
    return html;
}
