import React from 'react';
import { Helmet } from "react-helmet";

function Seo() {
  return (
    <Helmet>
      <title>oi gabriel</title>
      <meta name="description" content="Helmet application" />
      <meta property="og:image" content="https://image.shutterstock.com/z/stock-vector-background-for-social-media-proportions-of-the-web-banner-is-x-px-vector-1030361545.jpg" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta
      name="description"
      content="Esse é um teste pra poder testar as paradas"
    />
    </Helmet> 
  );
}

export default Seo;