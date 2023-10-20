"use client";
import StadiaMaps from "ol/source/StadiaMaps"

function stadiamaps({ layer }) {
	return new StadiaMaps({
		layer
	});
}

export default stadiamaps;