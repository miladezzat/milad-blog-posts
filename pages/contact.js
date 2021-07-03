import Head from 'next/head'
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>
            <NavBar />

            {/* <!-- Page Header--> */}
            <header className="masthead" style={{ backgroundImage: 'url(/images/about-bg.jpg)' }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>Contact Me</h1>
                                <span className="subheading">Have questions? I have answers.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- Main Content--> */}
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <div className="my-5">
                                {/* <!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!--> */}
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <div className="form-floating">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
                                        <label htmlFor="phone">Phone Number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div className="form-floating">
                                        <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: '12rem' }} data-sb-validations="required"></textarea>
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <br />
                                    {/* <!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted--> */}
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    {/* <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form--> */}
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                    {/* <!-- Submit Button--> */}
                                    <button className="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}