import Head from 'next/head'
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { useState } from 'react';
import { Fragment } from 'react';

function paginate(array, pageSize = 4, pageNumber = 1) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData: paginate(allPostsData),
        }
    }
}

export default function Home({ allPostsData }) {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <Layout>
            <Head>
                <title>Milad E. Fahmy</title>
            </Head>
            <NavBar />
            {/* <!-- Page Header--> */}
            <header className="masthead" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Milad Blog</h1>
                                <span className="subheading">Milad Ezzat is a software engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- Main Content--> */}
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {
                            allPostsData.map((post, index) => {
                                return (<Fragment key={post.id + index}>
                                    {/* <!-- Post preview--> */}
                                    <div className="post-preview" key={post.id}>
                                        <a href="post.html">
                                            <h2 className="post-title">{post.title}</h2>
                                            <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                                        </a>
                                        <p className="post-meta">
                                            Posted by
                                            <a href="#!">Start Bootstrap</a>
                                            on September 24, 2021
                                        </p>
                                    </div>
                                    {/* <!-- Divider--> */}
                                    <hr className="my-4" key={post.id + index} />
                                </Fragment>)
                            })
                        }


                        <div className="d-flex justify-content-end  mb-4">
                            {/* <!-- Pager--> */}
                            {
                                pageNumber > 1 &&
                                <div className=" d-flex justify-content-start w-50"><a className="btn btn-primary text-uppercase" href="#!">←Latest Posts</a></div>
                            }


                            {/* <!-- Pager--> */}
                            <div className="d-flex justify-content-end w-50"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}
