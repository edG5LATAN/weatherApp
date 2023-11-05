import React from 'react'
import "./Pais.css"

function Pais({data}) {
  return (<><div className='pais'>
       <label>Timezone:</label>
       <input className='sun-contenedor-p hora' placeholder="codigo pais" readOnly value={data.day1.date} />
        
        <label>Country:</label>
        <input className='sun-contenedor-p ciudad' placeholder="fecha de pais" readOnly value={data.locality.country} />
        
    </div>
 
  </>
    
  )
}

export default Pais
