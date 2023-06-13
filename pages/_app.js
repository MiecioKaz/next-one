import "../styles/globals.css";
import Layout from "../comps/Layout";
import { AuthContextProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </>
  );
}
