import "./styles.css"
import { useContext } from "react";
import MyContext from "../context/Context";

export const Details = () => {
    const {detailID} = useContext(MyContext);

    return (
        <div className="main-details">
                Details
                <p>{detailID}</p>
        </div>
    )
}

