import React from "react";

const Feed = ({ products, addProductToBag }) => {
  return (
    <>
      
      {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.productImage} alt="" />
            <div className="description">
              <p>{product.productName}</p>
              <p>${product.price}</p>
            </div>

            <div className="buttons">
              {/* <button className="btn">DETAIL</button> */}
              <button
                className="btn" onClick={() => addProductToBag(product)}
              >
                Add to pot
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Feed;
