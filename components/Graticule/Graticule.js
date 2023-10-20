"use Client";
import { useContext, useEffect } from "react";
import {MapContext} from "@components/Map/MapContext";
import OLGraticule from "ol/layer/Graticule";

const Graticule = ({ className = "", showLabels = true }) => {
	const {map} = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let graticule = new OLGraticule({
			className,
            showLabels,
		});
		map.addLayer(graticule);

		return () => {
			if (map) {
				map.removeLayer(graticule);
			}
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map]);

	return null;
};

export default Graticule;
