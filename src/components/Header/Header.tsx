import cartImg from "../../images/carrinho-de-compras.png"
import "./styles.css"
import { Link } from "react-router-dom"
import { Products } from "../Products/Products"


export const Header = () => {
    return (
        <div className="main-header">
            <ul className="menu-list">
                <li>Home</li>
                <li><Link to="/Products" className="LinkTag">Products</Link></li>
                <li>Contact</li>
            </ul>
            <div>
                <img src={cartImg} className="cartImg"/>
            </div>
        </div>
    )
}