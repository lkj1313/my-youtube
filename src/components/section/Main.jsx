import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Search from "./Search";
import ScrollTo from "../../utils/scrollTo";

const Main = (props) => {
  return (
    <HelmetProvider>
      <ScrollTo />
      <Helmet
        titleTemplate="%s | Webs Youtube"
        defaultTitle="Webs Youtube"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <Header />

      <main id="main" role="main">
        <Search />
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;
