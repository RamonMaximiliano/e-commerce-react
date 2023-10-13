import "./styles.css"
import { prod } from "../../App"

export const Product = (props:prod) => {
    return (
        <div className="product" id={props.id.toString()}>
            <p>{props.id}</p>
            <p>{props.title}</p>
        </div>
    )
}









/* 


<Product id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} key={item.id}/> 


*/