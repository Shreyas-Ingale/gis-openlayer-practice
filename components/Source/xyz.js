"use client";
import XYZ from "ol/source/XYZ";

function xyz({ url, attributions, maxZoom, crossOrigin = "" }) {
	return new XYZ({ url, attributions, maxZoom, crossOrigin });
}

export default xyz;
