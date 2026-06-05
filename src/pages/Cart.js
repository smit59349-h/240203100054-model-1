function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="featured">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          <div className="products">
            {cart.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <button
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "30px" }}>
            Total: ₹{total}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;