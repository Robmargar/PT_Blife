import "../Style_Components/Nav.css"

export const Navbar = () => {
  return (
    <section>
      <div class="navbar">
        <img class="blife-logo" src="../../public/Navbar/Blife.png" alt="" />
        <div class="menu">
          <a href="">Productos</a>
          <a href="">Promociones</a>
          <a href="">Nosotros</a>
        </div>
        <div >
          <button class="nav-button" >
           <img class="nav-logo" src="../../public/Navbar/lupa.png" alt="Logo_busqueda" />
          </button >
          <button class="nav-button" >
            <img class="nav-logo" src="../../public/Navbar/user.png" alt="Logo_Inicio_Sesión" />
          </button>
          <button class="nav-button" >
            <img class="nav-logo" src="../../public/Navbar/Shop.png" alt="Logo_Mi_Tienda" />
          </button>
        </div>
      </div>
    </section>
  )
}
