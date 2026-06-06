import { useState } from "react";

function Buy() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleOrder = () => {
    alert("Order Placed Successfully!");
  };

  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <h1>Buy Product</h1>

      <input
        type="text"
        placeholder="Enter Full Name"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />

      <input
        type="text"
        placeholder="Enter Address"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />

      <input
        type="text"
        placeholder="Enter Mobile Number"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />

      <h3>Select Payment Method</h3>

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      >
        <option value="">Choose Payment Method</option>
        <option value="COD">Cash On Delivery</option>
        <option value="UPI">UPI</option>
        <option value="Card">Debit/Credit Card</option>
        <option value="NetBanking">Net Banking</option>
      </select>

      <button
        onClick={handleOrder}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          background: "orange",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Buy;