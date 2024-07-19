import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import Box from "./desktopBox";

const PageProps = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
};

const Page = ({ children, description = null, title = "Facundo Franchino" }) => (
  <>
    <Box as="main">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </Box>
  </>
);

Page.propTypes = PageProps;

export default Page;