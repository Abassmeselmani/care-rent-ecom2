import React, { useContext } from "react";
import image1 from "../images/image13.png";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import './cart.css';

function Cart() {
    const { storeData, removeFromCart } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="cart">
            <img className="faq_img1" src={image1} alt="Cart Header" />
            <h1 className="faq_title">Cart</h1>

            {storeData.length > 0 ? (
                <>
                    <table className="cart_table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {storeData.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.imageURL} alt={item.name} className="cart_item-image" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td onClick={() => removeFromCart(item.id)}>❌</td>
                                </tr>
                            ))}
                            <tr>
                                <td>
                                    <button onClick={() => navigate("/rent")} className="Cart_btn">
                                        Continue Shopping...
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="total">
    <h1 className="total_title">Car Totals</h1>
    <table className="total_table">
        <tbody>
            <tr>
                <td>Total Items:</td>
                <td>{storeData.length}</td>
            </tr>
            <tr>
                <td>Total Price:</td>
                <td>${storeData.reduce((total, item) => total + item.price, 0)}</td>

            </tr>
            <button onClick={() => navigate("/checkout")} className="total_btn">Proceed to checkout</button>
        </tbody>
    </table>
</div>
                </>
            ) : (
                <p className="cart_empty">Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;
