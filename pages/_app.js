import '../styles/globals.css'
//import '../styles/markdown_styles.scss'
import "prismjs/themes/prism-tomorrow.css";
import { WEBSITE_DIRECTION } from "@_data/config/index";

function MyApp({ Component, pageProps }) {
  if(WEBSITE_DIRECTION === "rtl"){
    return(
      <div dir='rtl'><Component {...pageProps} /></div>
    )
  } else {
    return(
      <Component {...pageProps} />
    )
  }
  
  
   
}

export default MyApp
