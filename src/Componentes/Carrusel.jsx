import { useEffect, useState } from 'react'
import "../Style_Components/Carrusel.css"

const images=[
    '../../public/Card/citrate-mag.png',
    '../../public/Card/facebook-logo.png',
    '../../public/Card/Heart Icon.png'
]

export const Carrusel = () => { 
   const [image, setImage]=useState(0);


 return (
    <>
      <div  class="containerImg"> 
            <img class="productImg" src={images[image]}/>
      </div>
      <div class="containerDots" >
             {images.map((_,i)=>(
                    <input onClick={()=>setImage(i)} class={i===image?"dotSelected":"dots"} />
             ))}
      </div>
    </>
  )
}
