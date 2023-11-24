import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import listaProductos from "../data";
import './Productos.css';

function Producto (){
    
    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=>producto.id == productoId)

const{thumbnailUrl,title,precio, tipo, descripcion} = producto;

    return(
        <div>
            <img src={thumbnailUrl} alt=""/>
            <h2>Vehiculo: {title}</h2>
            <h2>Precio: $ {precio}</h2>
            <h2>Descripcion: {descripcion}</h2>
            <h3>ID = {productoId}</h3>
            <Link to="/productos">Volver</Link>
        </div>
    )
}

export default Producto;