"use client";
import Map from "ol/Map.js";
import View from "ol/View.js";
import {MapContext} from "./MapContext";

const { useRef, useEffect, useState } = require("react");

export function MapProvider({ children, zoom, center, projection = "EPSG:3857" }) {
  const [map, setMap] = useState(null);
  const mapTargetElement = useRef();

  useEffect(() => {
    
    let options = {
      view: new View({
        center: center, //centre of co-ordinate system for current section of map
        zoom: zoom, //current zoom level
        projection: projection, //co-ordinate systems
      }),
      layers: [],
      // controls: [],
      // overlays: []
    };

    let mapObject = new Map(options);
    mapObject.setTarget(mapTargetElement.current);
    setMap(mapObject);
    return () => {
      mapObject.setTarget(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // // zoom change handler
  // useEffect(() => {
  // 	if (!map) return;

  // 	map.getView().setZoom(zoom);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [zoom]);

  // // center change handler
  // useEffect(() => {
  // 	if (!map) return;

  // 	map.getView().setCenter(center)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [center])
  
  return (
    <MapContext.Provider value={{ map }}>
      <section ref={mapTargetElement} className="w-full mt-4 h-[70vh] border-2 border-blue-700">
        {children}
      </section>
    </MapContext.Provider>
  );
}

