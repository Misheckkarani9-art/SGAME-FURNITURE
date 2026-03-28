import React, { useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    {
      title: "🎂 Birthday Gifts",
      items: [
        {
          name: "Birthday Gift Box",
          price: "KES 2500",
          description: "A carefully curated birthday gift box suitable for all ages.",
          img: "images/birthdaybox1.jpg"
        },
        {
          name: "Custom Mug",
          price: "KES 1200",
          description: "Personalized mug with custom text or design.",
          img: "images/custommug.jpg"
        }
      ]
    },
    {
      title: "❤️ Anniversary Gifts",
      items: [
        {
          name: "Love Frame",
          price: "KES 1800",
          description: "Romantic photo frame for couples.",
          img: "images/loveframe.jpg"
        },
        {
          name: "Couple Bracelets",
          price: "KES 2200",
          description: "Matching bracelets symbolizing love.",
          img: "images/couplebracelet.jpg"
        }
      ]
    },
    {
      title: "🎁 Personalized Gifts",
      items: [
        {
          name: "Name Necklace",
          price: "KES 3000",
          description: "Customized necklace with a name of your choice.",
          img: "images/namenecklace.jpg"
        },
        {
          name: "Custom T-Shirt",
          price: "KES 2000",
          description: "T-shirt printed with your own design.",
          img: "images/customtshirt.jpg"
        }
      ]
    },
    {
      title: "🌹 Romantic Gifts",
      items: [
        {
          name: "Rose Bouquet",
          price: "KES 1500",
          description: "Fresh roses arranged beautifully.",
          img: "images/rose.jpg"
        },
        {
          name: "Love Letter Box",
          price: "KES 2800",
          description: "A special box for romantic messages and keepsakes.",
          img: "images/lovebox.jpg"
        }
      ]
    },
    {
      title: "🎉 Special Occasions",
      items: [
        {
          name: "Luxury Hamper",
          price: "KES 5000",
          description: "Premium hamper for celebrations and milestones.",
          img: "images/humper.jpg"
        },
        {
          name: "Gift Combo Pack",
          price: "KES 3500",
          description: "Mixed gifts bundle for any occasion.",
          img: "images/giftcombo.jpg"
        }
      ]
    }
  ];

  const toggleCard = (key) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="home-container">
      <h1 className="page-title">💝 Gift Categories</h1>

      {categories.map((category, cIndex) => (
        <div key={cIndex} className="category-section">
          <h2 className="category-title">{category.title}</h2>

          <div className="cards-grid">
            {category.items.map((item, i) => {
              const key = `${cIndex}-${i}`;
              const isOpen = openIndex === key;

              return (
                <div className={`card ${isOpen ? "expanded" : ""}`} key={key}>
                  
                  {/* Image */}
                  <div className="card-image">
                    <img
                      src={item.img || "https://via.placeholder.com/300x180"}
                      alt={item.name}
                    />
                  </div>

                  {/* Basic Info */}
                  <h3>{item.name}</h3>
                  <p className="price">{item.price}</p>

                  <button
                    className="btn"
                    onClick={() => toggleCard(key)}
                  >
                    {isOpen ? "Hide Details" : "View Details"}
                  </button>

                  {/* Expanded Info */}
                  {isOpen && (
                    <div className="extra-info">
                      <p>{item.description}</p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;