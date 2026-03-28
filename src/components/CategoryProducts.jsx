import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import "../css/CategoryProducts.css";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const navigate = useNavigate();
  const img_url = "https://karanimisheck22.alwaysdata.net/static/images/";

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://karanimisheck22.alwaysdata.net/api/get_products"
      );

      // Filter by category
      const filtered = response.data.filter(
        (item) =>
          item.product_category
            ?.toLowerCase()
            .includes(category.toLowerCase())
      );

      setProducts(filtered);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  // Handle payment
  const handlePayNow = (product) => {
    // Example: redirect to payment page with product info as query params
    navigate(`/payment?product_id=${product.id}&amount=${product.product_cost}&name=${encodeURIComponent(product.product_name)}`);
  };

  return (
    <div className="category-page">
      <h2 className="category-title">{category.toUpperCase()} PRODUCTS</h2>

      {loading && <Loader />}

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            {/* Product Image */}
            <img
            src={img_url + product.product_photo}
            alt={product.product_name}
             
              className="product-img"
            />

            {/* Product Info */}
            <h3>{product.product_name}</h3>
            <p className="description">{product.product_description}</p>
            <div className="price">Ksh {product.product_cost}</div>

            {/* Pay Now Button */}
            <button
              className="pay-now"
             onClick={() => navigate("/makepayment", { state: { product } })}
              
            >
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;