import { useState, useEffect } from "react";
import StatusBadge from "../components/ui/StatusBadge";
import { productsData } from "../data/products";
import { showToast } from "../utils/toast";

export default function Products() {

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : productsData;
  });

  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "Smart Glasses",
    stock: "",
    rating: 5,
    description: "",
    status: "Active"
  });

  const [search, setSearch] = useState("");
  const [view, setView] = useState("cards");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  let filtered = [...products].filter(p =>
    p.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  if (sort === "stock") filtered.sort((a, b) => a.stock - b.stock);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  const renderStars = (rating = 0) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  
  const submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price) {
      showToast("Fill required fields ⚠️", "warning");
      return;
    }

    const clean = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock || 0),
      rating: Number(form.rating || 0)
    };

    if (editId) {
      setProducts(products.map(p =>
        p.id === editId ? { ...p, ...clean } : p
      ));
      showToast("Product updated ✏️", "info");
    } else {
      setProducts([...products, { id: Date.now(), ...clean }]);
      showToast("Product added ✅", "success");
    }

    closeModal();
  };

  
  const del = (id) => {
    if (window.confirm("Delete product?")) {
      setProducts(products.filter(p => p.id !== id));
      showToast("Deleted 🗑️", "error");
    }
  };

  const closeModal = () => {
    setShow(false);
    setEditId(null);
    setForm({
      name: "",
      price: "",
      image: "",
      category: "Smart Glasses",
      stock: "",
      rating: 5,
      description: "",
      status: "Active"
    });
  };

  return (
    <div>

      {}
      <div className="d-flex justify-content-between mb-3 flex-wrap gap-2">
        <h2>👓 Smart Glasses</h2>

        <div>
          <button className="btn btn-primary me-2" onClick={() => setShow(true)}>
            + Add Product
          </button>

          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              localStorage.removeItem("products");
              window.location.reload();
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {}
      <div className="d-flex flex-wrap gap-2 mb-3">

        <input
          className="form-control"
          style={{ maxWidth: 200 }}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-control"
          style={{ maxWidth: 150 }}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort</option>
          <option value="price">By Price</option>
          <option value="stock">By Stock</option>
          <option value="rating">By Rating</option>
        </select>

        <button className="btn btn-outline-dark" onClick={() => setView("table")}>
          Table
        </button>

        <button className="btn btn-outline-dark" onClick={() => setView("cards")}>
          Cards
        </button>
      </div>

      {}
      {filtered.length === 0 && (
        <div className="text-center text-muted mt-5">
          <h5>No products found</h5>
          <p>Add your first smart glasses 👓</p>
        </div>
      )}

      {}
      {view === "cards" && (
        <div className="row">
          {filtered.map(p => (
            <div className="col-lg-4 col-md-6 mb-3" key={p.id}>
              <div className="card h-100 shadow-sm border-0">

                <img
                  src={p.image || "https://via.placeholder.com/300"}
                  onError={(e) => e.target.src = "https://via.placeholder.com/300"}
                  className="card-img-top"
                  style={{ height: 200, objectFit: "cover" }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">{p.name}</h5>

                  <p className="text-muted small">
                    {p.description || "No description"}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">${p.price}</span>
                    <span style={{ color: "#f59e0b" }}>
                      {renderStars(p.rating)}
                    </span>
                  </div>

                  {}
                  <div className="mt-2">
                    <small className={p.stock <= 3 ? "text-danger fw-bold" : ""}>
                      Stock: {p.stock}
                    </small>
                  </div>

                  <StatusBadge status={p.status} />

                  <div className="mt-3 d-flex justify-content-between">
                    <button
                      className="btn btn-outline-warning btn-sm"
                      onClick={() => {
                        setForm(p);
                        setEditId(p.id);
                        setShow(true);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => del(p.id)}
                    >
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {}
      {view === "table" && filtered.length > 0 && (
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Rating</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>${p.price}</td>

                <td className={p.stock <= 3 ? "text-danger fw-bold" : ""}>
                  {p.stock}
                </td>

                <td style={{ color: "#f59e0b" }}>
                  {renderStars(p.rating)}
                </td>

                <td><StatusBadge status={p.status} /></td>

                <td>
                  <button className="btn btn-sm btn-warning me-2"
                    onClick={() => {
                      setForm(p);
                      setEditId(p.id);
                      setShow(true);
                    }}
                  >
                    Edit
                  </button>

                  <button className="btn btn-sm btn-danger"
                    onClick={() => del(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {}
      {show && (
        <div className="modal d-block">
          <div className="modal-dialog modal-lg">
            <div className="modal-content p-4">

              <h5 className="mb-3">
                {editId ? "Edit Product" : "Add Smart Glass"}
              </h5>

              <form onSubmit={submit}>

                <input className="form-control mb-2"
                  placeholder="Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />

                <textarea className="form-control mb-2"
                  placeholder="Description"
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                />

                <input className="form-control mb-2" type="number"
                  placeholder="Price"
                  value={form.price}
                  onChange={e => setForm({ ...form, price: e.target.value })}
                />

                <input className="form-control mb-2"
                  placeholder="Image URL"
                  value={form.image}
                  onChange={e => setForm({ ...form, image: e.target.value })}
                />

                <input className="form-control mb-2" type="number"
                  placeholder="Stock"
                  value={form.stock}
                  onChange={e => setForm({ ...form, stock: e.target.value })}
                />

                <input className="form-control mb-3" type="number"
                  min="1" max="5"
                  placeholder="Rating (1-5)"
                  value={form.rating}
                  onChange={e => setForm({ ...form, rating: e.target.value })}
                />

                <button className="btn btn-primary w-100">
                  Save Product
                </button>

              </form>

              <button className="btn btn-light mt-2" onClick={closeModal}>
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}