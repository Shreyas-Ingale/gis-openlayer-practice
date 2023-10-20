"use client";

import { useContext, useEffect } from "react";
import { MapContext } from "./Map/MapContext";

const Range = ({ opacity, setOpacity }) => {
  const { map } = useContext(MapContext);

  const updateOpacity = (newOpacity) => {
    if (map) {
      const layers = map.getLayers().getArray();
      if (layers.length >= 2) {
        layers[1].setOpacity(newOpacity);
      }
    }
    setOpacity(newOpacity); 
  };

  return (
    <label className="flex text-base gap-1 items-center border-e-2 pe-1">
      Layer Opacity
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={opacity}
        onChange={(e) => updateOpacity(parseFloat(e.target.value))}
      />
      <span>{opacity.toFixed(2)}</span>
    </label>
  );
};

export default Range;
