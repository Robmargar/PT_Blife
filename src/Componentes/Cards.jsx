import { Card } from "./Card"
import products from "../assets/products.json"
import "../Style_Components/Cards.css"

export const Cards = () => {
  return (
    <section class="cards">
    {
      products.map((p)=>(
         <Card
            name={p.name}
            description={p.description}
            price={p.price}
            old_price= {p.old_price}
            discount= {p.discount}
            likes= {p.likes}
            rating={p.rating}
         />
        )        
      )
    }
  </section>
  )
}

