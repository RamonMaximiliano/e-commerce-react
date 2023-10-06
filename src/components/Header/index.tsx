import cartImg from "../../images/carrinho-de-compras.png"
import "./styles.css"

export const Header = () => {
    return (
        <div className="main-header">
            <ul className="menu-list">
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
            <div>
                <img src={cartImg} className="cartImg"/>
            </div>
        </div>
    )
}