import React from "react";
import "../css/News.css";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Gift Shopping Trends 2026",
      description: "Modern consumers prefer personalized and experience-based gifts more than ever.",
      image: "https://via.placeholder.com/400",
      date: "March 2026"
    },
    {
      id: 2,
      title: "Top 5 Gift Ideas This Season",
      description: "Explore the most popular gift ideas trending across online stores worldwide.",
      image: "https://via.placeholder.com/400",
      date: "March 2026"
    },
    {
      id: 3,
      title: "E-commerce Growth in Gift Industry",
      description: "Online gift stores are experiencing rapid growth due to convenience and variety.",
      image: "https://via.placeholder.com/400",
      date: "March 2026"
    },
    {
      id: 4,
      title: "Sustainable Gift Packaging",
      description: "Eco-friendly packaging is becoming a major priority for modern businesses.",
      image: "https://via.placeholder.com/400",
      date: "March 2026"
    }
  ];

  return (
    <div className="news-container">
      <h2>📰 Latest News</h2>

      <div className="news-grid">
        {news.map(item => (
          <div key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="news-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="news-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;