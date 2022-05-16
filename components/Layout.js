import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Prism from "prismjs";
import React, { useEffect } from 'react';

export default function Layout({title, keywords, description, children}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='flex flex-col h-screen'>
        <Head>
            <title>{title}</title>
            <meta name='keywords' content={keywords}></meta>
            <meta name='description' content={description}></meta>
            <link rel='icon' href='/favicon.ico'></link>
        </Head>
        <Header />
        <main className='container mx-auto my-7 flex-grow' >{children}</main>
        <Footer />
    </div>
  )
}



// add some defaults 
Layout.defaultProps = {
    title: "Welcome to Nextjs.net",
    keywords: "Tutorials, Next,js, Nextjs, next js",
    description: "The best Next.js tuturials"

}
