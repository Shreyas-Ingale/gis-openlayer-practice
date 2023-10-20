"use client";
import TileWMS from "ol/source/TileWMS"

function tilewms({ url, params, serverType, crossOrigin = "anonymous", transition = 0}) {
    return new TileWMS({
        url,
        params,
        serverType,
        crossOrigin,
        transition
    });
}

export default tilewms;