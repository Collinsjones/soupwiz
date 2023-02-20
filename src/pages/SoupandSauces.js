import React from "react";
import Nav from "../components/Nav";
import Feed from "../components/Feed";
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import '../styles/sauces.css'


const SoupandSauces = () => {
  const {searchResult, search, setSearch, addProductToBag} = useContext(DataContext)

  return (
    <div className="sauces">
      <Nav
        search={search}
        setSearch={setSearch}/>
      <div className="products">
        {searchResult ? (
          <Feed products={searchResult}
          addProductToBag={addProductToBag}/>
        ):(
          <p style={{marginTop: "2rem"}}>
            No products to display
          </p>
        )
      }

      </div>
    </div>
  );
};

export default SoupandSauces;
