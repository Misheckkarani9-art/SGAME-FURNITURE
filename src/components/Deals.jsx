import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Deals.css";

const Deals = () => {
  const navigate = useNavigate();

  const deals = [
    {
      id: 1,
      name: "Birthday Gift Box",
      price: 1200,
      description: "Perfect birthday surprise",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f"
    },
    {
      id: 2,
      name: "Luxury Perfume",
      price: 3500,
      description: "Elegant fragrance gift",
      image: "https://images.unsplash.com/photo-1585386959984-a4155223168c"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 4500,
      description: "Modern tech gift",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552"
    },
    {
      id: 4,
      name: "Chocolate Hamper",
      price: 1800,
      description: "Sweet surprise package",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
    },
    {
      id: 5,
      name: "Photo Frame",
      price: 900,
      description: "Capture memories",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
    },
    {
      id: 6,
      name: "Headphones",
      price: 2800,
      description: "High-quality sound",
      image: "https://images.unsplash.com/photo-1518449037719-0c5d7c8a66e7"
    },
    {
      id: 7,
      name: "Flower Bouquet",
      price: 1500,
      description: "Fresh and beautiful",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
    },
    {
      id: 8,
      name: "Gift Basket",
      price: 2200,
      description: "Assorted goodies",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48"
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 3000,
      description: "Portable music",
      image: "https://images.unsplash.com/photo-1585386959984-a4155223168c"
    },
    {
      id: 10,
      name: "Sneakers",
      price: 4000,
      description: "Stylish footwear",
      image: "https://images.unsplash.com/photo-1528701800489-20be3c9d56b4"
    },
    {
      id: 11,
      name: "Laptop Bag",
      price: 2500,
      description: "Professional look",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
    },
    {
      id: 12,
      name: "Makeup Kit",
      price: 3200,
      description: "Beauty essentials",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    },
    {
      id: 13,
      name: "Coffee Mug Set",
      price: 800,
      description: "Perfect for mornings",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
      id: 14,
      name: "Gaming Mouse",
      price: 2000,
      description: "Smooth performance",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    },
    {
      id: 15,
      name: "Sunglasses",
      price: 1500,
      description: "Cool and trendy",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    },
    {
      id: 16,
      name: "Watch Gift Set",
      price: 5000,
      description: "Premium collection",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 17,
      name: "Backpack",
      price: 2600,
      description: "Travel ready",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      id: 18,
      name: "LED Lamp",
      price: 1200,
      description: "Modern lighting",
      image: "https://images.unsplash.com/photo-1507477338202-487281e6c27e"
    },
    {
      id: 19,
      name: "Necklace",
      price: 3500,
      description: "Elegant jewelry",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
    },
    {
      id: 20,
      name: "Tablet",
      price: 15000,
      description: "Smart device gift",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    }
  ];

  const addToOrders = (item) => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const existing = orders.find(o => o.id === item.id);

    let updatedOrders;

    if (existing) {
      updatedOrders = orders.map(o =>
        o.id === item.id ? { ...o, quantity: o.quantity + 1 } : o
      );
    } else {
      updatedOrders = [...orders, { ...item, quantity: 1 }];
    }

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    navigate("/orders");
  };

  return (
    <div className="deals-container">
      <h2>🔥 Deals</h2>

      <div className="deals-grid">
        {deals.map(item => (
          <div key={item.id} className="deal-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <h5>KSH {item.price}</h5>

            <button onClick={() => addToOrders(item)}>
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;