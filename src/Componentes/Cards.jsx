import { Card } from "./Card"


export const Cards = () => {
  return (
    <section>
      <div>
        <img src="" alt="" />
        <h3>Nombre Producto</h3>
        <h3>precio</h3>
        <h4>info</h4>
        <h4>precio anterior</h4>
      </div>
      <div>
        <p>COMPARTE</p>
        <div>
          <img csrc="../../public/Card/facebook-logo.png" alt="Facebook" />
          <img src="../../public/Card/x-logo.png" alt="X" />
          <img src="../../public/Card/insta-logo.png" alt="Instagram" />
        </div>
        <button class="card-button">Agregar</button>
      </div>

    </section>
  )
}
