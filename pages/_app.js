import '../styles/globals.css'
import Head from 'next/head'

export const siteTitle = 'Milad E. Fahmy'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="_-p2XdKwtGd6MPXJye2VTAIfwoQtDxLoelu7ojSoNqM" />


        <meta name="description" content="Milad E. Fahmy, A Software Engineer with industry experience building web services. Specializing in Full Stack development with Node.js, Reactjs." />
        <meta name="keywords" content="HTML, CSS, JavaScript, node.js, node, mongo, mongodb, developer, Software Engineer" />
        <meta name="author" content="Milad E. Fahmy" />
        <meta property="og:description" content="Milad E. Fahmy, A Software Engineer with industry experience building web services. Specializing in Full Stack development with Node.js, Reactjs." />
        <meta name="twitter:description" content="Milad E. Fahmy, A Software Engineer with industry experience building web services. Specializing in Full Stack development with Node.js, Reactjs." />
        <meta property="og:image" content="/images/profile.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="/images/profile.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XZ2KJXR4P6"></script>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script src="/scripts/google-analytics.js"></script>                
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
      </Head>
      <Component {...pageProps} />

      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src='/scripts/scripts.js'></script>
    </>
  )
}

export default MyApp
