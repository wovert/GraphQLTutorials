import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hi Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <button>call login mutation</button>
      </p>
    </Layout>
  );
};

export default IndexPage;
