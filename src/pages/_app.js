import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default MyApp;
