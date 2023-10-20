"use client";
import ImageStatic from "ol/source/ImageStatic"

function imagestatic({ attributions, url, imageExtent }) {
    return new ImageStatic({
        attributions,
        url,
        imageExtent
    });
}

export default imagestatic;