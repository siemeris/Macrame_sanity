import "bootstrap/dist/css/bootstrap.min.css"
import { Toaster } from "react-hot-toast";
import '../styles/globals.css'
import { Layout } from '../components';
import { StateContext } from "../context/StateContext";
import { useEffect } from "react";





function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
    </StateContext>
  )
}

export default MyApp
