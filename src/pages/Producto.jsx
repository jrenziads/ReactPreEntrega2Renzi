import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import listaProductos from "../data";

function Producto (){
    
    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=>producto.id == productoId)

const{thumbnailUrl,title,precio, tipo} = producto;

    return(
        <div>
            <img src={thumbnailUrl} alt=""/>
            <h3>Descripcion: {title}</h3>
            <h3>Precio: $ {precio}</h3>
            <h2>Producto = {productoId}</h2>
            <Link to="/productos">Volver</Link>
        </div>
    )
}

export default Producto;