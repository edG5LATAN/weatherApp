import React from "react";
import "./CajaIcons.css"

function CajaIcons({data}) {

  return (
    <>
      <div>
        <h2>{`${data.weather.description}`}</h2>
        <div>
           <p className="temp">{data.temp}° Celcius</p>
          <img src={`./img/icons/${data.weather.icon}.png`} alt="data" className="icono_weater" />
          {/* <img src="./img/icons/a01n.png" alt="data" /> */}
        </div>
      </div>
      <div className="sun-contenedor">
        <div className="sunsite mostrar">
          <p>{data.sunrise} AM</p>
        </div>
        <div className="sunset mostrar">
          <p>{data.sunset} PM</p>
        </div>
      </div>
    </>
  );
}

export default CajaIcons;
