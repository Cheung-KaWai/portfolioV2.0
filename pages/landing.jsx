import React from "react";
import About from "../components/About";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

export default function Landing() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Footer />
    </Layout>
  );
}
