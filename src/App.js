import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="hero">Just a Hero</div>
        <p style={{ textAlign: "left", paddingLeft: "2rem" }}>
          All Items: {products.length}
        </p>
        <p style={{ textAlign: "left", paddingLeft: "2rem" }}>
          Items in Cart: {cart.length}
        </p>
        {console.log(products)}
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              marginBottom: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setCart(cart + 1);
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                  width: 300,
                  height: 400,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div style={{ flex: 1, marginLeft: "2rem" }}>
                <h3 style={{ textAlign: "left" }}>{product.title}</h3>
                <p style={{ textAlign: "left" }}>{product.description}</p>
                <p style={{ textAlign: "left" }}>Price: {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
