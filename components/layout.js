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
        <meta property="og:image"content= "/images/profile.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="/images/profile.png" />
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