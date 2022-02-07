import { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import styles from '../styles/Home.module.css'
const geoUrl =
  "/departamentos-buenos_aires.topojson";



const MapChart = ({ setTooltipContent }) => {
  return (
    <div style={{minHeight:'100vh'}}>
      <ComposableMap
      className={styles.main}
      data-tip=""
      projectionConfig={{
        rotate: [60, 38, -1],
        scale: 3000
      }}>
        <ZoomableGroup>
          <Geographies style={{minHeight:'100vh'}} geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { departamento, cabecera } = geo.properties;
                    setTooltipContent(`${departamento} — ${cabecera}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  stroke="#FFFFFF"
                  strokeWidth="0.2"
                  style={{
                    default: {
                      fill: geo.properties.departamento[0] == "M"? "#ff0000" : "#D6D6DA",
                      outline: "#EAEAEC",
                    //   
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#fffff",
                      outline: "stroke"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
