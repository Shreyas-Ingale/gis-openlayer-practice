"use client";
import { MapProvider } from "@components/Map/MapProvider"; //map component

import Layers from "@components/Layers/Layers";
import TileLayer from "@components/Layers/TileLayer";
import ImageLayer from "@components/Layers/ImageLayer";
import VectorLayer from "@components/Layers/VectorLayer";
import HeatMapLayer from "@components/Layers/HeatMapLayer";
import Graticule from "@components/Graticule/Graticule";

import OSM from "@components/Source/osm";
import Vector from "@components/Source/vector";
import TileWMS from "@components/Source/tilewms";
import ImageWMS from "@components/Source/imagewms";
import StadiaMaps from "@components/Source/stadiamaps";
import ImageStatic from "@components/Source/imagestatic";
import FeatureStyles from "@components/Features/Styles";

import "ol/ol.css";
import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import Feature from "ol/Feature";
import { fromLonLat, get } from "ol/proj";
import { Point } from "ol/geom";
import { Style, Icon, Fill, Stroke } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import geoJsonObject from "geoJson.json";

import { useState } from "react";

const Home = () => {
  // maptilers apikey
  const key = "32hs4R7YipQFOAJOyu5D";
  // setting up EPSG:32643 projection system
  proj4.defs("EPSG:32643", "+proj=utm +zone=43 +datum=WGS84 +units=m +no_defs");
  register(proj4);

  const [zoom] = useState(10);
  const [center] = useState([73.789803, 19.997454]);
  const [projection] = useState("EPSG:3857");

  // options for StaticImage
  // const imageOptions = {
  //   attributions: "<b>Flamingo</b>",
  //   url: "/assets/images/flamingo.png",
  //   imageExtent: [
  //     8248544.51451, 2274877.516589555, 8251856.941373372, 2277249.182601516,
  //   ],
  // };

  // feature and its style for vector layer
  // let feature = new Feature({
  //   geometry: new Point(fromLonLat([74.131, 20.028])),
  // });
  // let style = new Style({
  //   image: new Icon({
  //     src: "/assets/images/flamingo.png",
  //     scale: 0.09,
  //   }),
  // });
  // feature.setStyle(style);

  // options for tilewms source
  // let tileWMSOptions = {
  //   url: "https://ahocevar.com/geoserver/wms",
  //   params: { LAYERS: "topp:states", TILED: true },
  //   serverType: "geoserver",
  //   // Countries have transparency, so do not fade tiles:
  //   transition: 0,
  // };

  // options for imagewms source
  // let imageWMSOptions = {
  //   url: "https://ahocevar.com/geoserver/wms",
  //   params: { LAYERS: "topp:states" },
  //   ratio: 1,
  //   serverType: "geoserver",
  // };

  // options for VectorLayer for geoJsonObject
  // const vectorOptions = {
  //   features: (new GeoJSON().readFeatures(geoJsonObject, {
  //     featureProjection: get("EPSG:3857"),
  //   }))
  // }

  // options and styles for VectorLayer for geoJsonObject from a url/restApi/geoserver
//   const vectorOptions = {
//     format: new GeoJSON({featureProjection: get("EPSG:3857")}),
//     url: "polygon.json",
//   };
//   const polygonsStyle = function(feature){
//     if(feature.getProperties().shape === 'rectangle'){
//         return new Style({
//                 fill : new Fill({
//                     color: 'rgba(128, 128, 128, 0.1)'
//                 }),
//                 stroke: new Stroke({
//                     color:'grey',
//                     width:2
//                 })
//             })
//     } else  if(feature.getProperties().shape === 'circle'){
//         return new Style({
//                 fill : new Fill({
//                     color: 'rgba(128, 0, 0, 0.1)'
//                 }),
//                 stroke: new Stroke({
//                     color:'maroon',
//                     width:2
//                 })
//             })
//     } else{
//         return new Style({
//             fill : new Fill({
//                 color: 'rgba(30, 144, 255, 0.1)'
//             }),
//             stroke: new Stroke({
//                 color:'dodgerblue',
//                 width:2
//             })
//         })
//     }
// }

  //options for HeatMapLayer's vector source
  // let heatMapOptions = {
  //   format: new GeoJSON({featureProjection: get("EPSG:3857")}),
  //   url: "police.geojson",
  // }

  return (
    <section className="w-full flex-center flex-col">
      {/* heading */}
      <h1 className="text-4xl text-center my-4">
        Learning GIS
        <span className="ms-1 blue_gradient text-center"> with Next.js</span>
      </h1>

      {/* Map */}
      <MapProvider
        zoom={zoom}
        center={fromLonLat(center)}
        projection={projection}
      >
        <Layers>
          <TileLayer source={OSM()} />
          {/* <Graticule showLabels={true} /> */}
          {/* <TileLayer source={StadiaMaps({ layer: 'stamen_toner' })} /> */}
          {/* <ImageLayer source={ImageStatic(imageOptions)} /> */}
          {/* <VectorLayer source={Vector({ features: [feature] })}/> */}
          {/* <TileLayer extent={[-13884991, 2870341, -7455066, 6338219]} source={TileWMS(tileWMSOptions)} /> */}
          {/* <ImageLayer extent={[-13884991, 2870341, -7455066, 6338219]} source={ImageWMS(imageWMSOptions)} /> */}
          {/* <VectorLayer source={Vector(vectorOptions)} style={FeatureStyles.Line}/> */}
          {/* <VectorLayer source={Vector(vectorOptions)} style={polygonsStyle} /> */}
          {/* <HeatMapLayer source={Vector(heatMapOptions)} blur={5} gradient={['red', 'purple', 'green', 'dodgerblue']} /> */}
        </Layers>
      </MapProvider>
    </section>
  );
};

export default Home;

{
  /* 
  import { MapProvider } from "@components/Map/MapProvider"; //map component
  import Layers from "@components/Layers/Layers";
  import TileLayer from "@components/Layers/TileLayer";
  import osm from "@components/Source/osm";
  import xyz from "@components/Source/xyz";
  import vector from "@components/Source/vector";
  import geojsonObject from "@utils/config.json";
  import Range from "@components/Range";
  import FeatureStyles from "@components/Features/Styles";
  import VectorLayer from "@components/Layers/VectorLayer";
  import CheckBox from "@components/CheckBox";

  import GeoJSON from "ol/format/GeoJSON";
  import { fromLonLat, get } from "ol/proj";
  import { useState } from "react";
  import "ol/ol.css";

  const [zoom] = useState(8);
  const [center] = useState([73.789803, 19.997454]);
  const [opacity, setOpacity] = useState(1);
  const [showLayer, setShowLayer] = useState(true);

  const xyzOptions = {
    attributions:
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ',
    url: "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=" + key,
    maxZoom: 20,
    crossOrigin: "",
  };
  const vectorOptions = {
    features: new GeoJSON().readFeatures(geojsonObject, {
      featureProjection: get("EPSG:3857"),
    }),
  }
  
  <MapProvider zoom={zoom} center={fromLonLat(center)}>
    <Layers>
      <TileLayer className="ol-layer-imagery" source={xyz(xyzOptions)} />
      <TileLayer source={osm()} />
      {showLayer && (
        <VectorLayer
          source={vector(vectorOptions)}
          style={FeatureStyles.PointPolygon  }
        />
      )}
    </Layers>
    <div className="w-full mt-3 py-2 gap-2 border-t-2 border-blue-700 flex items-center">
      <Range opacity={opacity} setOpacity={setOpacity} />
      <CheckBox showLayer={showLayer} setShowLayer={setShowLayer}/>
    </div>
  </MapProvider> 
  */
}
