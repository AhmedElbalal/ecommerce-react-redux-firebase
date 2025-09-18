import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

function CheckoutPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    alert("Checkout successful!");
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>No items to checkout.</p>
      ) : (
        <div>
          <h2>Order Summary</h2>
          {cartItems.map((item) => (
            <p key={item.id}>
              {item.name} - ${item.price} x {item.qty}
            </p>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
