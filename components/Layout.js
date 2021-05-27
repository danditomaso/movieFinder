import React from "react";
import PropTypes from "prop-types";
import { Header, Footer } from "@/components/ComponentMap";
import style from "@/styles/Layout.module.scss";

/**
 * Renders a <Layout /> component
 * @param  props.children - this component can wrap other components and render them wihtin the main html element.
 * @returns <Layout> <div>...</div> </Layout>
 *
 **/

export default function Layout({ children }) {
  return (
    <>
      <div className={style.container}>
        <Header />

        {children}
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
