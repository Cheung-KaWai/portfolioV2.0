import React from "react";
import About from "../components/Home/About";
import Articles from "../components/Home/Articles";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Layout from "../components/Home/Layout";
import Projects from "../components/Home/Projects";

import { getArticles } from "../lib/data";

export async function getStaticProps() {
  return await getArticles();
}

export default function Home({ articles }) {
  return (
    <Layout>
      <Hero id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Articles id="articles" articles={articles} />
      <Footer />
    </Layout>
  );
}
