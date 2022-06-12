import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Landing() {
  return (
    <Layout>
      <Hero />
      <Hero />
    </Layout>
  );
}
