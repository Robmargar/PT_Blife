import { Stars } from "./Stars"
import "../Style_Components/Card.css"

export const Card = ({name ,description, price,old_price,discount,likes,rating }) => {
  return (
    <div class="card">
       <section class="likes-cont">
          <div class="like">
            <img class="heart" src="../../public/Card/Heart Icon.png" alt="" />
            <div>{likes}</div>
          </div>
          <div class="prom">
            {discount}
          </div>
        </section>
      <article class="card-container">
        <section class="product-container" >
          <img class="product-img" src="../../public/Card/citrate-mag.png" alt="" />
          <div class="product-info">
            <div class="info-1">
              <div class="T1">{name}</div>
              <div class="T3 ">{description}</div>
              <Stars/>
            </div>
            <div class="info-2">
              <div class="T1">{price}</div>
              <div class="T3 line">{old_price}</div>  
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
