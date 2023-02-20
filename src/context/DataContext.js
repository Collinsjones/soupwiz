import { createContext, useState, useEffect } from "react";
import product1 from "../assets/Afang-Soup.jpg";
import product2 from "../assets/Banga-Soup.jpg";
import product3 from "../assets/Bitter-leaf-soup-33.jpg";
import product4 from "../assets/EdikaIkong-Soup.jpg";
import product5 from "../assets/Egusi-Soup.jpg";
import product6 from "../assets/Gbegiri-Soup.jpg";
import product7 from "../assets/Ogbono.png";
import product8 from "../assets/Oha-Soup.jpg";
import product9 from "../assets/Okra-soup.jpg";

const DataContext =  createContext({});

export const DataProvider = ({ children }) => { 
    const [products] = useState([
        {
          id: 1,
          productName: "AFANG SOUP",
          price: 4990,
          productImage: product1,
        },
        {
          id: 2,
          productName: "BANGA SOUP",
          price: 1799,
          productImage: product2,
        },
        {
          id: 3,
          productName: "BITTER LEAF SOUP",
          price: 4990,
          productImage: product3,
        },
        {
          id: 4,
          productName: "EDIKAIKONG SOUP",
          price: 5990,
          productImage: product4,
        },
        {
          id: 5,
          productName: "EGUSI SOUP",
          price: 4990,
          productImage: product5,
        },
        {
          id: 6,
          productName: "GBEGIRI SOUP",
          price: 1799,
          productImage: product6,
        },
        {
          id: 7,
          productName: "OGBONO SOUP",
          price: 4990,
          productImage: product7,
        },
        {
          id: 8,
          productName: "OHA SOUP",
          price: 5990,
          productImage: product8,
        },
        {
          id: 9,
          productName: "OKRO SOUP",
          price: 5990,
          productImage: product9,
        },
      ]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
 
    const [bagVisibilty, setBagVisible] = useState(false);
    const [navVisibilty, setnavVisible] = useState(false);
    const [productsInBag, setProducts] = useState( JSON.parse(localStorage.getItem("shopping-cart")) || []);
    useEffect(() => {
     localStorage.setItem("shopping-cart", JSON.stringify(productsInBag));
   }, [productsInBag]);
   
   const addProductToBag = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInBag, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  useEffect(() => {
    const filteredResults = products.filter(product => ((product.productName).toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResult(filteredResults);
  }, [products, search]);

    return(
        <DataContext.Provider value={{
            bagVisibilty, setBagVisible, navVisibilty, setnavVisible, onProductRemove, onQuantityChange, productsInBag, searchResult, search, setSearch, addProductToBag

        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;