import "../Style_Components/Nav.css"


export const Navbar = () => {
  return (
    <section>
      <div class="navbar">
        <a href="">
         <img class="blife-logo" src="../../public/Navbar/Blife.png" alt="" />
        </a>
        <div class="menu">
          <a class="a-menu" href="">Productos</a>
          <a class="a-menu" href="">Promociones</a>
          <a class="a-menu" href="">Nosotros</a>
        </div>
        <div class="menu-icons">
          <div class="container" >
            <input type="text" placeholder="Buscar" />
            <div class="btn">
              <img class="nav-logo search" src="../../public/Navbar/lupa.png" alt="Logo_busqueda" />
            </div>
          </div>
          <button class="nav-button" >
            <img class="nav-logo" src="../../public/Navbar/user.png" alt="Logo_Inicio_Sesión" />
          </button>
          <button class="nav-button" >
            <div class="shop-number">2</div>
            <img class="nav-logo" src="../../public/Navbar/Shop.png" alt="Logo_Mi_Tienda" />
          </button>
        </div>
      </div>
    </section>
  )
}
  