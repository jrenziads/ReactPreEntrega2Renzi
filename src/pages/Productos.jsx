import listaProductos from "../data";
import "./Productos.css"
import { Link } from "react-router-dom";
import {bootstrap} from "bootstrap"

function Productos(){
    console.log(listaProductos);

    return (
        <div>
            <h2>Productos</h2>
            <div className="galeria">
                
                {listaProductos.map((producto)=>{
                    return (
                        <article key={producto.id}>
                            <h4>Modelo: {producto.title}</h4>
                            <h4>Tipo Vehiculo: {producto.tipo}</h4>
                            <img src={producto.thumbnailUrl} alt={producto.title}/>
                            <Link to={`/productos/${producto.id}`}>Detalle</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos;