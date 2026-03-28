import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Sidebar = () => {
  const [index, setIndex] = useState(0);
  const [openCategories, setOpenCategories] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const slides = [
    {
      title: "Perfect Gifts 🎁",
      desc: "Find gifts for every occasion",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f"
    },
    {
      title: "Trending Gifts 🔥",
      desc: "Most loved items by customers",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a"
    },
    {
      title: "Personalized Gifts ✨",
      desc: "Make gifts unique and special",
      image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="layout">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">🎁 GiftNest</div>

        <ul className="menu">
          <li><a href="/">🏠 Home</a></li>
          <li><a href="/getproduct">🛍️ Shop</a></li>

          {/* Categories Dropdown */}
          <li onClick={() => setOpenCategories(!openCategories)}>
            📂 Categories ⮟
          </li>

          {openCategories && (
            <div className="dropdown">
              <a href="/categories/birthday">Birthday Gifts</a>
              <a href="/categories/anniversary">Anniversary Gifts</a>
              <a href="/categories/custom">Custom Gifts</a>
              <a href="/categories/corporate">Corporate Gifts</a>
            </div>
          )}

          <li><a href="/deals">🔥 Deals</a></li>
          <li><a href="/news">✨ News</a></li>
          <li><a href="/orders">📦 Orders</a></li>

          {/* Profile Dropdown */}
          <li onClick={() => setOpenProfile(!openProfile)}>
            👤 Profile ⮟
          </li>

          {openProfile && (
            <div className="dropdown">
              <a href="/signin">Sign In</a>
              <a href="/signup">Sign Up</a>
              <a href="/profile">My Profile</a>
              <a href="/settings">Settings</a>
            </div>
          )}
        </ul>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        <div className="hero-text">
          <h2>🎉 Welcome to GiftNest</h2>
          <p>Your one-stop shop for meaningful gifts</p>
        </div>

        <div className="carousel">
          <img src={slides[index].image} alt="slide" />

          <div className="overlay">
            <h1>{slides[index].title}</h1>
            <p>{slides[index].desc}</p>
          </div>

          <div className="controls">
            <button onClick={() =>
              setIndex(index === 0 ? slides.length - 1 : index - 1)
            }>◀</button>

            <button onClick={() =>
              setIndex((index + 1) % slides.length)
            }>▶</button>
          </div>

          <div className="indicators">
            {slides.map((_, i) => (
              <span
                key={i}
                className={i === index ? "dot active" : "dot"}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

      </main>

    </div>
  );
};

export default Sidebar;