

const detalleData=(latitud,longitud)=>{
  return fetch(`https://api.tutiempo.net/json/?lan=es&apid=q5DXaz4qXXXgZr4&ll=${latitud},${longitud}`)
  .then(res=>res.json())
  .catch(error=>console.log(error))
}


export const ListaClima={ 
    detalleData,
}