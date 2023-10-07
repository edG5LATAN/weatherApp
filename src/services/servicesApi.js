

const detalleData=(latitud,longitud)=>{
  return fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitud}&lon=${longitud}&key=ebd8bbca5c684ae88f690fe3484dca51`)
  .then(res=>res.json())

}


export const ListaClima={ 
    detalleData,
}