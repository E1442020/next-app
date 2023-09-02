"use client";
import React, { Suspense } from "react";
import { Box, Button, Flex, Rating, Text, Title } from "@mantine/core";
import Link from "next/link";
import ProductDetails from "@/app/components/ProductDetails/ProductDetails";

export default function page({ params }: { params: any }) {
  const productId = params.id;
  const loading = <h1>loading...</h1>;

  return (
    <>
      <Title order={3} mb="lg">
        Product Details
      </Title>
      <Suspense fallback={loading}>
        <ProductDetails productId={productId} />
      </Suspense>
    </>
  );
}
