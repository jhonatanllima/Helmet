import React from 'react';
import { Helmet } from "react-helmet";

function Seo() {
  return (
    <Helmet>
      <title>oi gabriel</title>
      <meta name="description" content="Helmet application" />
      <meta property="og:image" content="https://antigo.abqm.com.br/img/image-default.png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />

      <meta
      name="description"
      content="Esse é um teste pra poder testar as paradas"
    />
    </Helmet> 
  );
}

export default Seo;