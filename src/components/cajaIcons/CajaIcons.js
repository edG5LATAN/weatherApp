import React from "react";
import "./CajaIcons.css"

function CajaIcons({data}) {

  return (
    <>
      <div>
        <h2>{`${data.day1.text}`}</h2>
        <div className="caja-img-port">
           <p className="temp">temp max {data.day1.temperature_max}° Celcius</p>
          <img src={`https://v5i.tutiempo.net/wi/01/70/${data.day1.icon}.png`} alt="data" className="icono_weater" />
        </div>
      </div>
      
      <div className="sun-contenedor">
        <div className="caja-mini">
          <p>Sunrise</p>
          <p className="caja-mini-p">{data.day1.sunrise} AM</p>

          <div className="cajaimg">
            <img className="sunset hoverimg" src="./img/sol/sunsite.png" alt=""/>
           </div>
        </div>

        <div className="caja-mini">
          <p>Sunset</p>
          <p className="caja-mini-p">{data.day1.sunset} PM</p>

          <div className="cajaimg">
            <img className="sunset hoverimg" src="./img/sol/sunrest.png" alt="icono amanecer"/>
          </div>
        </div>

        <div className="caja-mini">
          <p>Speed</p>
          <p className="caja-mini-p">{data.day1.wind}</p>
           
          <div className="cajaimg">
            <img className="sunset hoverimg" src="./img/sol/iconoViento.png" alt="icono viento"/>
          </div>
        </div>

        <div className="caja-mini">
          <p>Humidity</p>
          <p className="caja-mini-p">{data.day1.humidity}</p>
          <div className="cajaimg">
            <img className="sunset hoverimg" src='./img/sol/uvSolar.png' alt=""/>
          </div>
        </div>
        
        
      </div>
      <div className='agradecimiento'>
                  <p>agradecimiento a:<a href="https://www.tutiempo.net">api.clima</a> </p>

    </div>
    </>
  );
}

export default CajaIcons;
