import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";


const ProductAll = ({ setPage }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const [query, setQuery] = useSearchParams()
  const searchQuery = query.get('q') || ""

  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/teddybearkim/hnm-2/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {
        products.length > 0 ? (
          products.map((e, i) => {
            return (
              <div className="product-cardbox" onClick={() => {
                setPage(`/detail/${e.id}`)
                navigate(`/detail/${e.id}`)
              }} key={i}>
                <ProductCard data={e} />
              </div>
            );
          }
          )) : null
      }
    </div>
  );
};

export default ProductAll;