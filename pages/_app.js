/* eslint-disable no-undef */
/* eslint-disable @next/next/inline-script-id */
import '@/css/tailwind.css'
import '@/css/prism.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Script
        async
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7839879913941805"
        crossorigin="anonymous"
      ></Script>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        strategy="beforeInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XZ2KJXR4P6"
      ></Script>
      <Script strategy="afterInteractive">
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-XZ2KJXR4P6');
      </Script>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
