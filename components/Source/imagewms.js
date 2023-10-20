"use client";
import ImageWMS from "ol/source/ImageWMS"

function imagewms({ url, params, serverType, ratio,  }) {
    return new ImageWMS({
        url,
        params,
        serverType,
        ratio,
        // crossOrigin,
    });
}

export default imagewms;