import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Repositório Institucional Uniplac</title>
        <meta name="description" content="Repositório Institucional" />
        <link rel="icon" href="http://ww2.uniplaclages.edu.br/aviso-webmail/img/logo.png" />
      </Head>
      <Header/>
      <Component {...pageProps}/>
      <Footer/>
    </div>
  );
}

export default MyApp;
