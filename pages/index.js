import Head from 'next/head';
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { useRouter } from 'next/router';

const pageSize = 4;

function paginate(array, pageSize, pageNumber = 1) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData: allPostsData,
        }
    }
}

export default function Home({ allPostsData }) {
    const [pageNumber, setPageNumber] = useState(1);
    const [allposts, setPosts] = useState(paginate(allPostsData, pageSize, pageNumber));
    const router = useRouter();
    const { page } = router.query;

    useEffect(() => {
        if (page) {
            setPageNumber(+page);
            setPosts(paginate(allPostsData, pageSize, +page));
        }
    }, [page]);

    const handleNextPosts = () => {
        if (pageNumber * pageSize < allPostsData.length) {
            router.query.page = pageNumber + 1
            router.push(router);

            setPosts(paginate(allPostsData, pageSize, pageNumber + 1));
            setPageNumber(pageNumber + 1);
        }
    }

    const handlePrevPosts = () => {
        if (pageNumber * pageSize > 0) {
            router.query.page = pageNumber - 1;
            router.push(router);

            setPosts(paginate(allPostsData, pageSize, pageNumber - 1));
            setPageNumber(pageNumber - 1);
        }
    }

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
                            allposts.map(({ id, created, title, subTitle, tags, readingTime, author }, index) => {
                                return (<Fragment key={id + index}>
                                    {/* <!-- Post preview--> */}
                                    <div className="post-preview" key={id}>
                                        <a href={`/posts/${id}`}>
                                            <h2 className="post-title">{title}</h2>
                                            <h3 className="post-subtitle">{subTitle}</h3>
                                        </a>
                                        <p className="post-meta">
                                            Posted by{' '}
                                            <a href='https://milad-ezzat.netlify.app/'>{author}</a>
                                            <Date dateString={created} readingTime={readingTime} />
                                            {tags?.map(tag => (
                                                <span key={`${tag}-${id}`}><span className={`${utilStyles.tag} text-white`} key={tag}>#{tag} </span>&nbsp;</span>
                                            ))}
                                        </p>
                                    </div>
                                    {/* <!-- Divider--> */}
                                    <hr className="my-4" key={id + index} />
                                </Fragment>)
                            })
                        }


                        <div className="d-flex justify-content-end  mb-4">
                            {/* <!-- Pager--> */}
                            {
                                pageNumber > 1 &&
                                <div className=" d-flex justify-content-start w-50">
                                    <button className="btn btn-primary text-uppercase" onClick={handlePrevPosts}>←Latest Posts</button>
                                </div>
                            }


                            {/* <!-- Pager--> */}
                            <div className="d-flex justify-content-end w-50">
                                <button className="btn btn-primary text-uppercase" onClick={handleNextPosts}>Older Posts →</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}
