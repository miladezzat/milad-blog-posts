import Head from 'next/head'
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer';
import Layout from '../components/layout';
export default function Home() {
  return (
    <Layout>    
      <Head>
        <title>Milad E. Fahmy</title>
      </Head>
      <NavBar/>
      {/* <!-- Page Header--> */}
      <header className="masthead" style={{backgroundImage: "url('/images/home-bg.jpg')"}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>Clean Blog</h1>
                            <span className="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

      {/* <!-- Main Content--> */}
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    {/* <!-- Post preview--> */}
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                            <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 24, 2021
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                    {/* <!-- Post preview--> */}
                    <div className="post-preview">
                        <a href="post.html"><h2 className="post-title">I believe every human has a finite number of heartbeats. I do not intend to waste any of mine.</h2></a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 18, 2021
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                    {/* <!-- Post preview--> */}
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Science has not yet mastered prophecy</h2>
                            <h3 className="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on August 24, 2021
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                    {/* <!-- Post preview--> */}
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Failure is not an option</h2>
                            <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on July 8, 2021
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                    {/* <!-- Pager--> */}
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>

      <Footer/>
    </Layout>
  )
}
