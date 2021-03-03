import React from 'react';
import { Helmet } from "react-helmet";

function Seo() {
  return (
    <Helmet>
      <title>My Title</title>
      <meta name="description" content="Helmet application" />
    </Helmet> 
  );
}

export default Seo;