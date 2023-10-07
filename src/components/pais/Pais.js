import React from 'react'
import "./Pais.css"

function Pais({data}) {
  return (
    <div className='pais'>
       <label>Timezone:</label>
       <input className='sun-contenedor-p hora' placeholder="codigo pais" readOnly value={data.ob_time} />
        
        <label>City:</label>
        <input className='sun-contenedor-p ciudad' placeholder="fecha de pais" readOnly value={data.city_name} />
        
    </div>
  )
}

export default Pais
