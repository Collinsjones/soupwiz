import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import  "../styles/shoppingpot.css";
import { MdDeleteOutline } from "react-icons/md";



const ShoppingBag = ({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) => {
  return (
    <div
      className="modal"
      style={{
        display: visibility ? "block" : "none",
      }}
    >
      <div className="shoppingBag">
        <div className="bag-header">
          <h2>Pot</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
          <div className="bag-products">

          {products.length === 0 && (
            <span className="empty-text">Your bag is currently empty</span>
          )}
            

          {products.map((product) => (
            <div className="bag-product" key={product.id}>
              <img src={product.productImage} alt={product.productName} />
              <div className="product-info">
                <h3>{product.productName}</h3>
                <span>${product.price * product.count}</span>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(e) => {
                  onQuantityChange(product.id, e.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onProductRemove(product)}
              >
                <MdDeleteOutline size={20} />
              </button>
            </div>
          ))} 
           {products.length > 0 && (
            <button className="btn checkout-btn">Proceed to checkout</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
