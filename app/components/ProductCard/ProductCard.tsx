import { Box, Button, Flex, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <>
      <div className="cardWrapper">
        <Flex direction="column" gap="md">
          <Box w="100%" h="200px">
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
          <Flex direction="column" gap="sm" px="sm" pb="sm">
            <Title order={4}> {product.title.slice(0, 15)}</Title>
            <Text>{product.description.slice(0, 50)}...</Text>
            <Flex justify="space-between" align="center">
              <Text color="green" fw="bold">
                ${product.price}
              </Text>
              <Button size="xs">
                <Link href={`/shop/${product.id}`}>View</Link>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
