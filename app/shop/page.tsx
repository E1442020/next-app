"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Flex, Text } from "@mantine/core";
import ProductCard from "../components/ProductCard/ProductCard";

// export const metadata = {
//   title: "Shop Page",
// };
export default function page() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <Flex gap="md" wrap="wrap" justify="center">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </Flex>
    </div>
  );
}
