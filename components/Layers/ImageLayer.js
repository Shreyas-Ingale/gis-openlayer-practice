"use Client";
import { useContext, useEffect } from "react";
import {MapContext} from "@components/Map/MapContext";
import OLImageLayer from 'ol/layer/Image';

const ImageLayer = ({ source, extent }) => {
	const {map} = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let imageLayer = new OLImageLayer({
			source,
		});
		extent ? imageLayer.setExtent(extent) : '';
		map.addLayer(imageLayer);

		return () => {
			if (map) {
				map.removeLayer(imageLayer);
			}
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map]);

	return null;
};

export default ImageLayer;
