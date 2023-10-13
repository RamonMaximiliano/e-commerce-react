import "./styles.css"
import { prod } from "../../App"

export const Product = (props:prod) => {
    return (
        <div className="product">
            <p>{props.id}</p>
            <p>{props.category}</p>
            <p>{props.description}</p>
            <p>{props.image}</p>
            <p>{props.price}</p>
            <p>{props.rating?.count}</p>
            <p>{props.rating?.rate}</p>
            <p>{props.title}</p>
        </div>
    )
}

