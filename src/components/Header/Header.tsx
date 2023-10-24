import cartImg from "../../images/carrinho-de-compras.png"
import "./styles.css"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="main-header">
            <ul className="menu-list">
                <li><Link to="/" className="LinkTag">Home</Link></li>
                <li><Link to="/Products" className="LinkTag">Products</Link></li>
                <li><Link to="/Contact" className="LinkTag">Contact</Link></li>
                <li><Link to="/Details" className="LinkTag">Details</Link></li>
            </ul>
            <div>
                <img src={cartImg} className="cartImg"/>
            </div>
        </div>
    )
}