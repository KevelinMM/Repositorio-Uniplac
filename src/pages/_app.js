import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Repositório Institucional Uniplac</title>
        <meta name="description" content="Repositório Institucional" />
        <link
          rel="icon"
          href="http://ww2.uniplaclages.edu.br/aviso-webmail/img/logo.png"
        />
      </Head>
      <Component {...pageProps} />
  
    </div>
  );
}

export default MyApp;
