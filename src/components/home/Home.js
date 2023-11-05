import React, { useEffect, useState } from "react";
import "./Home.css";
import CajaIcons from "../cajaIcons/CajaIcons";
import Pais from "../pais/Pais";
import { ListaClima } from "../../services/servicesApi";

function Home() {
  const [activo,setactivo]=useState(false)
  const [latitud, setlatitud] = useState("");
  const [longitud, setlongitud] = useState("");
//  const [data, setdata] = useState({"count":1,"data":[{"app_temp":21.8,"aqi":42,"city_name":"Tegucigalpa","clouds":97,"country_code":"HN","datetime":"2023-10-04:04","dewpt":21,"dhi":0,"dni":0,"elev_angle":-64.14,"ghi":0,"gust":null,"h_angle":-90,"lat":14.0902,"lon":-87.2153,"ob_time":"2023-10-04 04:17","pod":"n","precip":1.9199219,"pres":913.6,"rh":100,"slp":1013,"snow":0,"solar_rad":0,"sources":["MHTG","radar","satellite"],"state_code":"08","station":"MHTG","sunrise":"11:38","sunset":"23:36","temp":21,"timezone":"America/Tegucigalpa","ts":1696393072,"uv":0,"vis":16,"weather":{"description":"Lluvia ligera","code":500,"icon":"r01n"},"wind_cdir":"NE","wind_cdir_full":"Noreste","wind_dir":40,"wind_spd":1}]});
  const [data,setdata]=useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setlatitud(position.coords.latitude);
      setlongitud(position.coords.longitude);
    });
  }, []);
 

  const buscar = () => {
    if(longitud!="" && latitud !=""){
      if(data!=null || data!=""){
         mostrarApi()
      }
      return
    
    }
    return
    
  };
  const mostrarApi=()=>{
     ListaClima.detalleData(latitud,longitud)
     .then(res=>{
      setdata(res)
      setactivo(true)
     })
     .catch(error=>console.log(error))
  }
 

  return (
    <div className="home">
      <div className="contenedor1 principal">
        <h2>Knowing your city weather</h2>
        <button onClick={() => buscar()}>Search</button>
        <div className="pais">
          <label>Latitude:</label>
          <input readOnly className="sun-contenedor-p la" value={latitud} />
          <label>Longitude: </label>
          <input readOnly className="sun-contenedor-p la" value={longitud} />
        </div>

      </div>
      {
        activo===true ? <>
       
      <div className="contenedor1">
        <h2>Additional data</h2>
        <Pais data={data} />
        <CajaIcons data={data}/>
      </div>
      
      </>:<img src="./img/imagenPortada.gif" alt="wheater" className="imagen-home" />
      }
      
      
    </div>
  );
}

export default Home;
