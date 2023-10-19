import React from "react";
import "./CajaIcons.css"

function CajaIcons({data}) {

  return (
    <>
      <div>
        <h2>{`${data.weather.description}`}</h2>
        <div className="caja-img-port">
           <p className="temp">{data.temp}° Celcius</p>
          <img src={`./img/icons/${data.weather.icon}.png`} alt="data" className="icono_weater" />
        </div>
      </div>
      
      <div className="sun-contenedor">
        <div className="caja-mini">
          <p>Sunrise</p>
          <p className="caja-mini-p">{data.sunrise} AM</p>

          <div className="cajaimg">
            <img className="sunset hoverimg" src="./img/sol/sunsite.png" alt=""/>
           </div>
        </div>

        <div className="caja-mini">
          <p>Sunset</p>
          <p className="caja-mini-p">{data.sunset} PM</p>

          <div className="cajaimg">
            <img className="sunset hoverimg" src="./img/sol/sunrest.png" alt="icono amanecer"/>
          </div>
        </div>

        <div className="caja-mini">
          <p>Speed</p>
          <p className="caja-mini-p">{data.wind_spd}</p>
           
          <div className="cajaimg">
            <img className="sunset hoverimg" src="./img/sol/iconoViento.png" alt="icono viento"/>
          </div>
        </div>

        <div className="caja-mini">
          <p>UV</p>
          <p className="caja-mini-p">{data.uv}</p>
          <div className="cajaimg">
            <img className="sunset hoverimg" src='./img/sol/uvSolar.png' alt=""/>
          </div>
        </div>
        
        
      </div>
    </>
  );
}

export default CajaIcons;
