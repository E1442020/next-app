"use client";
import React from "react";
import { Flex, Loader } from "@mantine/core";

export default function loading() {
  return (
    <Flex justify="center" align="center">
      <Loader />
    </Flex>
  );
}
