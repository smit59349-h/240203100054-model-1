function Home() {
  return (
    <>
      <div className="hero">
        <h1>Fashion Store</h1>
        <p>Discover the latest trends in fashion.</p>
        <button>Shop Now</button>
      </div>

      <div className="features">
        <div className="feature">
          <h3>🚚 Free Shipping</h3>
          <p>On orders above ₹999</p>
        </div>

        <div className="feature">
          <h3>🔒 Secure Payment</h3>
          <p>100% Secure Payment</p>
        </div>

        <div className="feature">
          <h3>⭐ Best Quality</h3>
          <p>Premium Quality Products</p>
        </div>

        <div className="feature">
          <h3>📞 24/7 Support</h3>
          <p>Customer Support</p>
        </div>
      </div>

      <div className="featured">
        <h2>Featured Products</h2>

        <div className="products">

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300"
              alt="Tshirt"
            />
            <h3>Men T-Shirt</h3>
            <p>₹499</p>
            <button>Add To Cart</button>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300"
              alt="Top"
            />
            <h3>Women Top</h3>
            <p>₹699</p>
            <button>Add To Cart</button>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=300"
              alt="Jeans"
            />
            <h3>Jeans</h3>
            <p>₹999</p>
            <button>Add To Cart</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;