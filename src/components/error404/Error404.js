import React from "react";
import "./Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error404">
      <div className="contenedor-error404">
        
          <div class="_404">404</div>
          <div class="_1">THE PAGE</div>
          <div class="_2">WAS NOT FOUND</div>
          <Link to='/'>
            <button class="btn">BACK TO PROYECTS</button>
          </Link>
        
      </div>
    </div>
  );
}

export default Error404;
