import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <span>
                {item.name} - ${item.price} x {item.qty}
              </span>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <br />
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
