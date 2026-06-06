import { useNavigate } from "react-router-dom";
function Products({ addToCart }) {
  const navigate = useNavigate();
  const products = [
    {
      name: "Men T-Shirt",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
    },
    {
      name: "Women Top",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300",
    },
    {
      name: "Jeans",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300",
    },
    {
      name: "Casual Shoes",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
    },
  ];

  return (
    <div className="featured">
      <h2>Our Products</h2>

      <div className="products">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>
            <button onClick={() => navigate("/buy")}>
               Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;