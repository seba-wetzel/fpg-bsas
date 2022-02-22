import '../styles/globals.css'
import Layout from '../components/Layout'
import SearchContextProvider from "context/Search"
function MyApp ({ Component, pageProps }) {
  return <SearchContextProvider> <Layout> <Component {...pageProps} /> </Layout> </SearchContextProvider>
}

export default MyApp
