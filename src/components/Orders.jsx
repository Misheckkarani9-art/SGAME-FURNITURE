import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  const updateStorage = (updated) => {
    localStorage.setItem("orders", JSON.stringify(updated));
    setOrders(updated);
  };

  const increaseQty = (id) => {
    const updated = orders.map(o =>
      o.id === id ? { ...o, quantity: o.quantity + 1 } : o
    );
    updateStorage(updated);
  };

  const decreaseQty = (id) => {
    const updated = orders.map(o =>
      o.id === id && o.quantity > 1
        ? { ...o, quantity: o.quantity - 1 }
        : o
    );
    updateStorage(updated);
  };

  const removeItem = (id) => {
    const updated = orders.filter(o => o.id !== id);
    updateStorage(updated);
  };

  // ✅ Payment navigation (same style as your GetProduct file)
  const payNow = (order) => {
    navigate("/makepayment", { state: { product: order } });
  };

  return (
    <div className="orders-container">
      <h2>📦 My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <div className="orders-grid">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <h4>{order.name}</h4>
              <p>KSH {order.price}</p>
              <p>Qty: {order.quantity}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(order.id)}>-</button>
                <button onClick={() => increaseQty(order.id)}>+</button>
              </div>

              <div className="order-actions">
                <button onClick={() => removeItem(order.id)}>
                  Remove
                </button>

                <button onClick={() => payNow(order)}>
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;