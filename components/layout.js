import Head from 'next/head';
import Image from 'next/image';
import styles from "./layout.module.css";
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Milad E. Fahmy'
export const siteTitle = 'Milad E. Fahmy'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="_-p2XdKwtGd6MPXJye2VTAIfwoQtDxLoelu7ojSoNqM" />
        <meta name="description" content="Milad Ezzat, A Software Engineer with industry experience building web services. Specializing in Full Stack development with Node.js, Reactjs." />
        <meta name="keywords" content="HTML, CSS, JavaScript, node.js, developer, software engineer" />
        <meta name="author" content="Milad E. Fahmy" />
        <meta property="og:description" content="Milad Ezzat, A Software Engineer with industry experience building web services. Specializing in Full Stack development with Node.js, Reactjs." />
        <meta name="twitter:description" content="Milad Ezzat, A Software Engineer with industry experience building web services. Specializing in Full Stack development with Node.js, Reactjs." />
        <meta property="og:image" content="/images/profile.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="/images/profile.png" />
        <div dangerouslySetInnerHTML={{ __html: `<script>
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="ZQeiscAhvET7lmyu8Dm8RJX8n4aag6sF";analytics.SNIPPET_VERSION="4.13.2";
  analytics.load("ZQeiscAhvET7lmyu8Dm8RJX8n4aag6sF");
  analytics.page();
  }}();
</script>` }} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={200}
              width={200}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}