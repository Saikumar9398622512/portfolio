import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    quality: "",
  });

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(storedProducts);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "quantity") {
      setFormData({
        ...formData,
        quantity: value.replace(/[^0-9]/g, ""),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = () => {
    if (
      !formData.productName.trim() ||
      !formData.quantity.trim() ||
      !formData.quality.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    let updatedProducts = [...products];

    if (editIndex !== null) {
      updatedProducts[editIndex] = formData;
      alert("Product updated successfully");
    } else {
      updatedProducts.push(formData);
      alert("Product added successfully");
    }

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setFormData({
      productName: "",
      quantity: "",
      quality: "",
    });

    setEditIndex(null);
    setShowModal(false);
  };

  const handleEdit = (index) => {
    const confirmEdit = window.confirm(
      "Do you want to edit this product?"
    );

    if (confirmEdit) {
      setFormData(products[index]);
      setEditIndex(index);
      setShowModal(true);
    }
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this product?"
    );

    if (confirmDelete) {
      const updatedProducts = products.filter(
        (_, i) => i !== index
      );

      setProducts(updatedProducts);

      localStorage.setItem(
        "products",
        JSON.stringify(updatedProducts)
      );

      alert("Product deleted successfully");
    }
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
      <h1>Admin Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <button
        onClick={() => {
          setShowModal(true);
          setEditIndex(null);

          setFormData({
            productName: "",
            quantity: "",
            quality: "",
          });
        }}
      >
        Add Product
      </button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "350px",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>
              {editIndex !== null
                ? "Edit Product"
                : "Add Product"}
            </h2>

            <input
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              value={formData.productName}
              onChange={handleChange}
              style={{
                width: "250px",
                padding: "8px",
              }}
            />

            <br />
            <br />

            <input
              type="text"
              name="quantity"
              placeholder="Enter Quantity"
              value={formData.quantity}
              onChange={handleChange}
              style={{
                width: "250px",
                padding: "8px",
              }}
            />

            <br />
            <br />

            <input
              type="text"
              name="quality"
              placeholder="Enter Quality"
              value={formData.quality}
              onChange={handleChange}
              style={{
                width: "250px",
                padding: "8px",
              }}
            />

            <br />
            <br />

            <button onClick={handleSubmit}>
              {editIndex !== null
                ? "Update"
                : "Submit"}
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                setShowModal(false);
                setEditIndex(null);

                setFormData({
                  productName: "",
                  quantity: "",
                  quality: "",
                });
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <br />
      <br />

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
            <th>Quantity</th>
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
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>

                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
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
      <br />

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default App;