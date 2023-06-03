import Cards from "../Carts/Carts";
import data from "../../data/api.json"
import styles from "./Productos.module.css"

const Productos = () =>{

    const {libros} = data

/*     "titulo":
    "libro" : 
    "imagen": 
    "precio":
    "descripcion" */
    return(
        <div className={styles.container}>
            {
                libros.map(libro => {
                    return(
                        <Cards id={libro.libro} 
                            imagen={libro.imagen}
                            precio={libro.precio}
                            titulo={libro.titulo}
                            descripcion={libro.descripcion}
                            />
                    )
                })
            }
        </div>
    )
}

export default Productos;