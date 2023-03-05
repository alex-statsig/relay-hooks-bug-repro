import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

// No SSR just to avoid dealing with that in the repro
const NoSSRContent = dynamic(() => import("../components/NoSSRContent"), {
  ssr: false,
});

const AboutPage = () => (
  <Layout title="React Relay Repro">
    <h1>react-relay / relay-hooks bug repro</h1>
    <NoSSRContent />
  </Layout>
);

export default AboutPage;
