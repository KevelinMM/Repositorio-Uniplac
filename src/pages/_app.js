import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

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
        <GoogleAnalytics measurementId="G-HLXR7QF7J2" />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
