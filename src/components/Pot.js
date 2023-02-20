import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

const Pot = ({products, onQuantityChange, onProductRemove}) => {
  return (
    <>
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
    </>
  )
}

export default Pot