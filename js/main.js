window.onload = function() {
    initWindow();

    make_carousel('results-garmageset', garmageset_carousel_item_template, garmageset_items, 1, 3);   // GarmageSets

    make_carousel('results-txt2', txt_carousel_item_template, txt2_items, 1, 3);   // Caption Condition Generation
    make_carousel('results-sketch', sketch_carousel_item_template, sketch_items, 1, 3);   // Sketch & Image Condition Generation

    make_carousel('results-autoGM', autoGM_carousel_item_template, autoGM_items, 1, 3);   // Auto Garment Modeling Results
    make_carousel('results-SPrecovery', SPrecovery_carousel_item_template, SPrecovery_items, 1, 3);   // Point Condition Generation
};
