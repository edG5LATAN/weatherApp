const api='4wT44aXaXqXNZ7z'

const detalleData=(latitud,longitud)=>{
  return fetch(`https://api.tutiempo.net/json/?lan=es&apid=${api}&ll=${latitud},${longitud}`)
  .then(res=>res.json())
  .catch(error=>console.log(error))
}


export const ListaClima={ 
    detalleData,
}
