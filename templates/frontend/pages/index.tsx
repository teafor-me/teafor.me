import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contribute to teafor.me</title>
      </Head>
      <main className={styles.main}>
        <h1>thanks for contributing to teafor.me!</h1>
      </main>
    </>
  );
};

export default Home;
