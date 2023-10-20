import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";

const style =  {
  Point: new Style({
    image: new CircleStyle({
      radius: 10,
      fill: null,
      stroke: new Stroke({
        color: "magenta",
      }),
    }),
  }),
  Line: new Style({
    stroke: new Stroke({
      color: "dodgerblue",
      lineDash: [10, 5], // 1st: length of line , 2nd length of empty space
      width: 3,
      lineCap: "butt",
      lineJoin: "round"
    }),
  }),
  Polygon: new Style({
    stroke: new Stroke({
      color: "dodgerblue",
      width: 2,
    }),
    fill: new Fill({
      color: "rgba(30, 144, 255, 0.1)",
    }),
  }),
  PointPolygon: new Style({
    stroke: new Stroke({
      color: "blue",
      width: 2,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
    image: new CircleStyle({
      radius: 3,
      fill: new Fill({
        color: "magenta",
      }),
      stroke: new Stroke({
        color: "magenta",
      }),
    })
  }),
};

export default style;