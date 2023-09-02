import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className={styles.header}>Home Page</h2>
    </>
  );
}
