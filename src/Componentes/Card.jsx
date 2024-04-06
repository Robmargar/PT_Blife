import { Stars } from "./Stars"
import "../Style_Components/Card.css"

export const Card = () => {
  return (
    <div class="card">
       <section class="likes-cont">
          <div class="like">
            <img class="heart" src="../../public/Card/Heart Icon.png" alt="" />
            <div>22</div>
          </div>
          <div class="prom">
            -30%
          </div>
        </section>
      <article class="card-container">
        <section class="product-container" >
          <img class="product-img" src="../../public/Card/citrate-mag.png" alt="" />
          <div class="product-info">
            <div class="info-1">
              <div class="T1">Citrate Mag</div>
              <div class="T3 ">240 Cápsulas | 800 Mg</div>
              <Stars/>
            </div>
            <div class="info-2">
              <div class="T1">$273.00</div>
              <div class="T3 line">$134.00</div>  
            </div>
          </div>
        </section>
        <section class="media-cont">
          <div class="media-info">
            <p class="T2">COMPARTE</p>
            <div class="media-icons">
              <img src="../../public/Card/facebook-logo.png" alt="Facebook" />
              <img src="../../public/Card/x-logo.png" alt="X" />
              <img src="../../public/Card/insta-logo.png" alt="Instagram" />
            </div>
          </div>
          <button class="card-button">Agregar</button>
        </section>
       
      </article>
    </div>
  )
}
