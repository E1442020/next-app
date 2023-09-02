"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Flex, Rating, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

export default function ProductDetails({ productId }: any) {
  const isMobile = useMediaQuery("(max-width: 720px)");

  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <Box px="md">
      <Flex
        justify="space-between"
        gap="md"
        direction={isMobile ? "column" : undefined}
      >
        <Box w={isMobile ? "100%" : "49%"} h="400px">
          <img
            src={product.image}
            alt={product.title}
            height="100%"
            width="100%"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <Flex direction="column" gap="md" w={isMobile ? "100%" : "49%"}>
          <Title order={3}>{product.title}</Title>

          <Text>{product.description}</Text>
          <Text color="green" fw="bold">
            ${product.price}
          </Text>
          <Text>Category: {product.category}</Text>
          <Rating defaultValue={2} />
        </Flex>
      </Flex>
      <Flex justify="center">
        <Button mt="xl">
          <Link href="/shop">Back To Shop</Link>
        </Button>
      </Flex>
    </Box>
  );
}
