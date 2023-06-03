import styles from "./NavBar.module.css"

const NavBar = () =>{
  return(
  <nav className={styles.navbar}>
    <ul>
      <a href="">Home</a>
      <a href="">Productos</a>
      <a href="">Carrito</a>
      <a href="">Contacto</a>
      <a href="">Guardar Clientes</a>
    </ul>
  </nav>
  )
}

export default NavBar;