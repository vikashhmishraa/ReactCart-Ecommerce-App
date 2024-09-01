import { useState } from "react";

const useHandleFilter = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [products, setProducts] = useState(null);

  const handleFilter = (type, value) => {
    if (!allProducts) {
      console.error("Products data is not loaded yet.");
      return;
    }

    let filteredData = [];

    switch (type) {
      case "topRated":
        filteredData = allProducts.filter((obj) => obj.rating > 4);
        break;
      case "category":
        filteredData = allProducts.filter((obj) => obj.category === value);
        break;
      case "viewAll":
        filteredData = allProducts;
        break;
      case "search":
        filteredData = allProducts.filter((obj) =>
          obj.title
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase().trim())
        );
        break;
      default:
        filteredData = allProducts;
    }

    setProducts(filteredData);
  };

  return { handleFilter, setAllProducts, setProducts };
};

export default useHandleFilter;
