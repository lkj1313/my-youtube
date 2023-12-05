import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Main = (props) => {
  return (
    <>
      <Header />
      <main id="main" role="main">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
