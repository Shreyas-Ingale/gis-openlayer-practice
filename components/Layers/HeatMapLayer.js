"use Client";
import { useContext, useEffect } from "react";
import {MapContext} from "@components/Map/MapContext";
import OLHeatMapLayer from 'ol/layer/Heatmap';

const HeatMapLayer = ({ source, extent, blur, gradient }) => {
	const {map} = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let heatmapLayer = new OLHeatMapLayer({
			source,
			blur,
			gradient,
		});
		extent ? heatmapLayer.setExtent(extent) : '';
		map.addLayer(heatmapLayer);

		return () => {
			if (map) {
				map.removeLayer(heatmapLayer);
			}
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map]);

	return null;
};

export default HeatMapLayer;
