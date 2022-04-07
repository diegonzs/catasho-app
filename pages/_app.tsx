import "styles/globals.css";
import type { AppProps } from "next/app";
import NiceModal from "@ebay/nice-modal-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NiceModal.Provider>
      <Component {...pageProps} />
    </NiceModal.Provider>
  );
}

export default MyApp;
