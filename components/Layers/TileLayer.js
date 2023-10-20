"use Client";
import { useContext, useEffect } from "react";
import {MapContext} from "@components/Map/MapContext";
import OLTileLayer from "ol/layer/WebGLTile";

const TileLayer = ({ className = "", extent, source }) => {
	const {map} = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let tileLayer = new OLTileLayer({
			className,
			source,
		});
		extent ? tileLayer.setExtent(extent) : '';
		map.addLayer(tileLayer);

		return () => {
			if (map) {
				map.removeLayer(tileLayer);
			}
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map]);

	return null;
};

export default TileLayer;
