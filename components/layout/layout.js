import Head from "next/head"
export default function Layout({ children, home }) {
    return (
        <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            {children}
        </>
    )
}