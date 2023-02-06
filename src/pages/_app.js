import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Site modelo Uniplac</title>
        <meta name="description" content="Site modelo Uniplac" />
        <link rel="icon" href="http://ww2.uniplaclages.edu.br/aviso-webmail/img/logo.png" />
      </Head>

      <Component {...pageProps} className="min-h-screen"/>

    </div>
  );
}

export default MyApp;
