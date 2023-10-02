import { Montserrat } from 'next/font/google';
import './global.css'

const mont = Montserrat({subsets: ["latin"], variable: '--font-mont',})


function MyApp({ Component, pageProps }) {
    return (
      <div className={mont.className}>
        <Component {...pageProps} />
      </div>
    );
  }
  
  export default MyApp;