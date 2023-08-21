import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <Component {...pageProps} />
    </Provider>
  );
}
