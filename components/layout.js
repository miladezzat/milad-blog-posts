import Head from 'next/head';
import Image from 'next/image';
import styles from "./layout.module.css";
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';

const name = 'Milad E. Fahmy'
export const siteTitle = 'Milad E. Fahmy'

export default function Layout({ children, home }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail('');
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ email })
    });
    const data = await response.json();
    setMessage(data.message);
  }
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
        <div dangerouslySetInnerHTML={{
          __html: `
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XZ2KJXR4P6"></script>
          <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          
          gtag('config', 'G-XZ2KJXR4P6');
          </script>` }} />
        <script data-ad-client="ca-pub-7839879913941805" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
      <div className={styles.footer}>
        <h1>Subscribe to the Newsletter</h1>
        <p>Subscribe to get my latest content by email.</p>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.emailInput}
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={async (e) => {
              const { value } = e.currentTarget;
              setEmail(value);
            }}
            required
          />
          <input className={styles.submitBtn} type="submit" value="subscribe" />
        </form>
        {message && (<p>{message}</p>)}
        <p>I won’t send you spam. Unsubscribe at any time.</p>
      </div>
    </div>
  )
}