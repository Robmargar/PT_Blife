import { useState } from "react"
import { Stars } from "./Stars"
import { Carrusel } from "./Carrusel.jsx"
import "../Style_Components/Card.css"

export const Card = ({name ,description, price,old_price,discount,likes,rating}) => {
  const [like,setLike]=useState({
    number:likes,
    isactive:false
  });
  
  const likesCount=()=>{
    const newLike={...like}
    if(like.isactive){
      newLike.number--;
      newLike.isactive=!newLike.isactive;
      setLike(newLike);
    }else{
      newLike.number++;
      newLike.isactive=!newLike.isactive;
      setLike(newLike);
    }
  };

  return (
    <div class="card">
       <section class="likes-cont">
          <div onClick={()=>likesCount()} class="like">
            {like.isactive?<img class="heart" src="../../Card/red-heart.svg" alt="" />:
            <img class="heart" src="../../Card/Heart Icon.png" alt="" />
            }
            <div>{like.number}</div>
          </div>
          <div class="prom">
            {discount}
          </div>
        </section>
      <article class="card-container">
        <section class="product-container" >
          <Carrusel/>
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
              <a href="https://www.facebook.com/blife.mx">
               <img src="../../public/Card/facebook-logo.png" alt="Facebook" />
              </a>
              <a href="https://www.tiktok.com/@blife.mx?_t=8Yt748IrV2x&_r=1">
                <img src="../../public/Card/x-logo.png" alt="X" />
              </a>
              <a href="https://www.instagram.com/blife.mx/">
                <img src="../../public/Card/insta-logo.png" alt="Instagram" />
              </a>
            </div>
          </div>
          <button class="card-button">Agregar</button>
        </section>
       
      </article>
    </div>
  )
}
