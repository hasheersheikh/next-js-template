import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button>hello</Button>
      </main>
    </div>
  );
}
