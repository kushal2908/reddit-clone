import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'
import { customizedTheme } from "../chakra/theme";
import Layout from "@/components/Layout/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ChakraProvider theme={customizedTheme}>
          <Head>
            <title>Reddit Clone</title>
            <link rel="icon" type="image/png" sizes="16x16" href="/favico.png" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}
