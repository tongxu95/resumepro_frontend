import React from 'react';
import logo from "../assets/img/navbar-logo.svg";
import portfolio1 from '../assets/img/portfolio/1.jpg';
import portfolio2 from '../assets/img/portfolio/2.jpg';
import portfolio3 from '../assets/img/portfolio/3.jpg';
import portfolio4 from '../assets/img/portfolio/4.jpg';
import portfolio5 from '../assets/img/portfolio/5.jpg';
import portfolio6 from '../assets/img/portfolio/6.jpg';
import about1 from '../assets/img/about/1.jpg';
import about2 from '../assets/img/about/2.jpg';
import about3 from '../assets/img/about/3.jpg';
import about4 from '../assets/img/about/4.jpg';
import people1 from '../assets/img/team/1.jpg';
import people2 from '../assets/img/team/2.jpg';
import people3 from '../assets/img/team/3.jpg';
import { Link } from 'react-router-dom';


function Home(props) {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a href="#page-top"><img class="logo" src={logo} alt="..." /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header class="masthead">
                <div class="container">
                    <div class="masthead-subheading">One of the Kind Resume Marketplace</div>
                    <div class="masthead-heading text-uppercase">One Step Closer to Your Dream Job</div>
                    <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
                </div>
            </header>
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">E-Commerce</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">Responsive Design</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">Web Security</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page-section bg-light" id="portfolio">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Portfolio</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="portfolio-item">
                                <Link className="portfolio-link" to="/resume-marketplace">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"></div>
                                    </div>
                                    <img class="img-fluid" src={portfolio1} alt="..." />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Threads</div>
                                    <div class="portfolio-caption-subheading text-muted">Illustration</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-item">
                                <Link className="portfolio-link" to="/resume-marketplace">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"></div>
                                    </div>
                                    <img class="img-fluid" src={portfolio2} alt="..." />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Explore</div>
                                    <div class="portfolio-caption-subheading text-muted">Graphic Design</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-item">
                                <Link className="portfolio-link" to="/resume-marketplace">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"></div>
                                    </div>
                                    <img class="img-fluid" src={portfolio3} alt="..." />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Finish</div>
                                    <div class="portfolio-caption-subheading text-muted">Identity</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-item">
                                <Link className="portfolio-link" to="/resume-marketplace">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"></div>
                                    </div>
                                    <img class="img-fluid" src={portfolio4} alt="..." />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Lines</div>
                                    <div class="portfolio-caption-subheading text-muted">Branding</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-item">
                                <Link class="portfolio-link" to="/resume-marketplace">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"></div>
                                    </div>
                                    <img class="img-fluid" src={portfolio5} alt="..." />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Southwest</div>
                                    <div class="portfolio-caption-subheading text-muted">Website Design</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-item">
                                <Link className="portfolio-link" to="/resume-marketplace">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"></div>
                                    </div>
                                    <img class="img-fluid" src={portfolio6} alt="..." />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Window</div>
                                    <div class="portfolio-caption-subheading text-muted">Photography</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-item">
                                <Link className="portfolio-link" to="/resume-marketplace">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"></div>
                                    </div>
                                    <img class="img-fluid" src={portfolio1} alt="..." />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Threads</div>
                                    <div class="portfolio-caption-subheading text-muted">Illustration</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-item">
                                <Link className="portfolio-link" to="/resume-marketplace">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"></div>
                                    </div>
                                    <img class="img-fluid" src={portfolio1} alt="..." />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Threads</div>
                                    <div class="portfolio-caption-subheading text-muted">Illustration</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page-section" id="about">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">About</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul class="timeline">
                        <li>
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={about1} alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 class="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={about2} alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 class="subheading">An Agency is Born</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={about3} alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>December 2015</h4>
                                    <h4 class="subheading">Transition to Full Service</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={about4} alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>July 2020</h4>
                                    <h4 class="subheading">Phase Two Expansion</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src={people1} alt="..." />
                                <h4>Parveen Anand</h4>
                                <p class="text-muted">Lead Designer</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src={people2} alt="..." />
                                <h4>Diana Petersen</h4>
                                <p class="text-muted">Lead Marketer</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src={people3} alt="..." />
                                <h4>Larry Parker</h4>
                                <p className="text-muted">Lead Developer</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
            <section class="page-section" id="contact">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Contact Us</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div class="row align-items-stretch mb-5">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div class="form-group mb-md-0">
                                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-group-textarea mb-md-0">
                                    <textarea class="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none" id="submitSuccessMessage">
                            <div class="text-center text-white mb-3">
                                <div class="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                        <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                    </form>
                </div>
            </section>
            <footer class="footer py-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Home;