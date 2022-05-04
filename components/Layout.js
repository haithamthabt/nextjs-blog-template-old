import Head from 'next/head';
import Header from './Header';

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='keywords' content={keywords}></meta>
            <meta name='description' content={description}></meta>
            <link rel='icon' href='/favicon.ico'></link>
        </Head>
        <Header />
        <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}



// add some defaults 
Layout.defaultProps = {
    title: "Welcome to Nextjs.net",
    keywords: "Tutorials, Next,js, Nextjs, next js",
    description: "The best Next.js tuturials"

}
