import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [qty, setQty] = useState("");
  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(storedProducts);
  }, [])
  const openModal = (index) => {
    setSelectedIndex(index);
    setQty("");
    setShowModal(true);
  }
  const handleBuy = () => {
    const quantity = Number(qty);

    if (!quantity || quantity <= 0) {
      alert("Please enter a valid quantity");
      return;
    }

    if (
      quantity >
      Number(products[selectedIndex].quantity)
    ) {
      alert("Insufficient stock available");
      return;
    }

    const confirmBuy = window.confirm(
      "Do you want to buy this product?"
    );

    if (!confirmBuy) return;

    const updatedProducts = [...products];

    updatedProducts[selectedIndex].quantity =
      Number(updatedProducts[selectedIndex].quantity) -
      quantity;

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    alert("Product purchased successfully");

    setShowModal(false);
    setQty("");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Do you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("user");
      navigate("/loginform");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Dashboard</h1>
      <h2>Welcome, {user?.name}</h2>
      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product Name</th>
            <th>Available Quantity</th>
            <th>Quality</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.quality}</td>

                <td>
                  <button
                    onClick={() => openModal(index)}
                    disabled={item.quantity <= 0}
                    style={{
                      cursor:
                        item.quantity <= 0
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    {item.quantity <= 0
                      ? "Out of Stock"
                      : "Buy"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                No Products Available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor:
              "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "350px",
            }}
          >
            <h2>Buy Product</h2>

            <p>
              <strong>Product Name:</strong>{" "}
              {
                products[selectedIndex]
                  ?.productName
              }
            </p>

            <p>
              <strong>Available Quantity:</strong>{" "}
              {
                products[selectedIndex]
                  ?.quantity
              }
            </p>

            <input
              type="text"
              placeholder="Enter Quantity"
              value={qty}
              onChange={(e) => {
                const value =
                  e.target.value.replace(
                    /[^0-9]/g,
                    ""
                  );
                setQty(value);
              }}
              style={{
                padding: "8px",
                width: "200px",
              }}
            />

            <br />
            <br />

            <button onClick={handleBuy}>
              Confirm Buy
            </button>

            <button
              onClick={() => {
                setShowModal(false);
                setQty("");
              }}
              style={{
                marginLeft: "10px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;