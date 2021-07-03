import Head from 'next/head'
import NavBar from '../../components/nav-bar/nav-bar';
import Footer from '../../components/footer';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <NavBar />
            {/* <!-- Page Header--> */}
            <header className="masthead" style={{ backgroundImage: 'url(/images/post-bg.jpg)' }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="post-heading">
                                <h1>{postData.title}</h1>
                                <h2 className="subheading">{postData.subTitle}</h2>
                                <span className="meta">
                                    Posted by{' '}
                                    <a href="#!"> {postData.author}</a>
                                    <Date dateString={postData.created} readingTime={postData.readingTime} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Post Content--> */}
            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7" dangerouslySetInnerHTML={{
                            __html: postData.contentHtml
                        }}>

                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </Layout>
    )
}