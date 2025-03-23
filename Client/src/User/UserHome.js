import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function UserHome() {

    const [category,setCategory] = useState([]);
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("");

    const fetchCategory = () => {
        axios.get('http://localhost:3001/fetchCategory')
        .then((res) => {
            console.log(res.data);
            setCategory(res.data);
        }).catch((error) => {
            console.log(error);
        });  
    }
    const fetchContact = () => {
        axios.get('http://localhost:3001/fetchContact')
        .then((res) => {
            console.log(res.data);
            setEmail(res.data[0].email);
            setMobile(res.data[0].mobile);
        }).catch((error) => {
            console.log(error);
        }); 
    }

    useEffect(()=>{
        fetchCategory();
        fetchContact();
    },[]);

  return (
    <>
      <div className='wrapper'>
        {/* Header Start */}
        <header className="header">
                <section className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="contact">
                                    <p><span className="phone"><a href="/">Phone: +91 {9876543210}</a></span><span className="email"><a href="/">Email: {"abc@gmail.com"}</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="join-us">
                                    <p><Link to={"/Login"}>LOGIN</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12">
                                <a href="/">
                                    <div className="main-logo">
                                        <img src="assets/img/main-logo.png" alt="" />
                                        <h2>CHARITY NAVIGATOR</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12">
                                <div className="menu collapse navbar-collapse">
                                    {/* <ul className="nav navbar-nav mr-auto"> */}
                                        {/* <li className="active"><a href="/">HOME</a></li> */}
                                        {/* <li><a href="/">ABOUT US</a></li>
                                        <li><a href="/">CAUSES</a></li>
                                        <li><a href="/">EVENT</a></li>
                                        <li><a href="/">PORTFOLIO </a></li>
                                        <li><a href="/">BLOG</a></li>
                                        <li><a href="/">CONTACT</a></li> */}
                                    {/* </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            {/* Header End */}
            {/* Help Start */}
            <section className="carosal-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="client owl-carousel owl-theme">
                                {
                                    category.map((item)=>
                                        <div className="item">
                                            <div className="text">
                                                <h3>{item.category}</h3>
                                                <p>{item.details}</p>
                                                <h5 className="white-button"><Link to={"/Login"}>DONATE NOW</Link></h5>
                                                <h5><a href="/">CONTACT US</a></h5>
                                            </div>
                                        </div>   
                                    )
                                }
                                {/* <div className="item">
                                    <div className="text">
                                        <h3>HUNGRY PEOPLES NEED YOUR HELP</h3>
                                        <p></p>
                                        <h5 className="white-button"><Link to={"/Login"}>DONATE NOW</Link></h5>
                                        <h5><a href="/">CONTACT US</a></h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="text">
                                        <h3>NATURE NEED YOUR HELP</h3>
                                        <p></p>
                                        <h5 className="white-button"><Link to={"/Login"}>DONATE NOW</Link></h5>
                                        <h5><a href="/">CONTACT US</a></h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="text">
                                        <h3>FOREST NEED YOUR HELP</h3>
                                        <p></p>
                                        <h5 className="white-button"><Link to={"/Login"}>DONATE NOW</Link></h5>
                                        <h5><a href="/">CONTACT US</a></h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="text">
                                        <h3>SENIORCITIZEN NEED YOUR HELP</h3>
                                        <p></p>
                                        <h5 className="white-button"><Link to={"/Login"}>DONATE NOW</Link></h5>
                                        <h5><a href="/">CONTACT US</a></h5>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Help End */}
            {/* Activity Start */}
            <section className="our_activity">
                <h2>ABOUT US</h2>
                <img src="https://blog.turbotax.intuit.com/wp-content/uploads/2010/11/box-of-donations.jpg?w=2121&h=1200&crop=1.jpg" alt="" width="500" height="250" />
                
                <img src="https://www.salaambaalaktrust.com/blog/wp-content/uploads/2022/02/Tax-Exemption-1024x683.jpg" alt="" width="500" height="250" />
                <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcyG5_MUflkno6GdH8dggceOyZlk5WJ46Dg&usqp=CAU"  alt="" width="445" height="250" /> 
                <p> <br /> An NGO donation refers to the act of providing financial support, resources, or other forms of assistance to Non-Governmental Organizations (NGOs). NGOs are typically independent, nonprofit organizations that operate separately from government entities. They often focus on addressing various social, environmental, humanitarian, or developmental issues both locally and globally.NGO donations are essential for sustaining the operations and impact of these organizations. They enable NGOs to deliver vital services, advocate for social change, promote human rights, protect the environment, and address the needs of vulnerable populations.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <div className="single-Promo">
                                <div className="promo-icon">
                                    <i className="material-icons">near_me</i>
                                </div>
                                <h2><a href="https://www.ketto.org/blog/twenty-five-quick-fundraising-ideas/">Fundraising</a></h2>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="single-Promo">
                                <div className="promo-icon">
                                    <i className="material-icons">favorite</i>
                                </div>
                                <h2><a href="https://www.helpguide.org/articles/healthy-living/volunteering-and-its-surprising-benefits.htm/">Volunteering</a></h2>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="single-Promo">
                                <div className="promo-icon">
                                    <i className="material-icons">dashboard</i>
                                </div>
                                <h2><a href="https://www.children.org/see-the-impact/charity-programs#educated/">Our Programs</a></h2>
                                <p> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Activity End */}
            {/* Cause Start */}
            <section className="donate_section">
                <div className="container">
                    <div className="col-md-12">
                        <h4>URGENT  CAUSE</h4>
                        <h3>Recent Environmental Disasters</h3>
                        <p></p>
                        <div className="progress-text">
                            <p className="progress-top">80%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="70" style={{width:500}}></div>
                            </div>
                            <p className="progress-left">Raised: ₹1,20,000</p>
                            <p className="progress-right">Goal: ₹1,75,000</p>
                            <h2><Link to={"/Login"}>DONATE NOW</Link></h2>
                        </div><br></br>
                    </div>
                </div>
            </section>
            {/* Cause End */}
            {/* Event Start */}
            <section className="events_section_area">
                <h2>UPCOMING EVENTS</h2>
                <p></p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <div className="events_single">
                                <img src="assets/img/events_single_one.jpg" alt="" />
                                <p><span className="event_left"><i className="material-icons">access_time</i>12:00 pm - 3:00 pm</span><span className="event_right"><i className="material-icons">location_on</i>Gandhi Nagar</span></p>
                                <div className="clear"></div>
                               
                                <h3><a href="https://www.harekrishnacharities.org/donate-food-for-student-education">Education for Cildren</a></h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="events_single">
                                <img src="assets/img/events_single_two.jpg" alt="" />
                                <p><span className="event_left"><i className="material-icons">access_time</i>3:00 pm - 7:00 pm</span><span className="event_right"><i className="material-icons">location_on</i>Delhi</span></p>
                                <h3><a href="https://timesofindia.indiatimes.com/city/bhopal/cm-inaugurates-free-medical-treatment-scheme-for-sr-citizens/articleshow/109674940.cms">Health Treatment For SeniorCitizen</a></h3>
                                 
                                <h6></h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="events_single">
                                <img src="assets/img/events_single_three.jpg" alt="" />
                                <p><span className="event_left"><i className="material-icons">access_time</i>11:00 pm - 2:00 pm</span><span className="event_right"><i className="material-icons">location_on</i>Mumbai</span></p>
                                <h3><a href="https://aarnafoundationindia.org/distribute-sanitary-napkins-at-a-negligible-price-free-to-the-less-privileged-women-living-in-slums-2/">Distribute Food & Clothes</a></h3>
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Event End */}
            {/* Favorite Start */}
            <div className="block-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                            <div className="block">
                                <p><i className="material-icons">favorite</i></p>
                                <p className="counter-wrapper"><span className="fb"></span></p>
                                <p className="text-block">CAUSES</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                            <div className="block">
                                <p><i className="material-icons">language</i></p>
                                <p className="counter-wrapper"><span className="code"></span></p>
                                <p className="text-block">PLACES</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                            <div className="block">
                                <p><i className="material-icons">person_add</i></p>
                                <p className="counter-wrapper"><span className="bike"></span></p>
                                <p className="text-block">VOLUNTEERS</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                            <div className="block">
                                <p><i className="material-icons">people</i></p>
                                <p className="counter-wrapper"><span className="coffee"></span></p>
                                <p className="text-block">SAVED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Favorite End */}
            {/* Cause Start */}
            <section className="our_cuauses">
                <h2>OUR CAUSES</h2>
                <p></p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="our_cuauses_single owl-carousel owl-theme">
                                <div className="item">
                                    <img src="assets/img/our_cuauses_one.jpg" alt="" />
                                    <div className="for_padding">
                                        <h2>DONATION FOR CHILDREN</h2>
                                        <p></p>
                                        <div className="progress-text">
                                            <p className="progress-top">50%</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:136}}></div>
                                            </div>
                                            <p className="progress-left">Raised: <span>₹1,00,000</span></p>
                                            <p className="progress-right">Goal: <span>₹2,50,000</span></p>
                                        </div>
                                        <h2 className="borderes"><Link to={"/Login"}>DONATE NOW</Link></h2>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/our_cuauses_two.jpg" alt="" />
                                    <div className="for_padding">
                                        <h2>DONATION FOR EDUCATION</h2>
                                        <p></p>
                                        <div className="progress-text">
                                            <p className="progress-top">50%</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:170}}></div>
                                                
                                                 </div>
                                            <p className="progress-left">Raised: <span>₹1,50,000</span></p>
                                            <p className="progress-right">Goal: <span>₹3,00,000</span></p>
                                        </div>
                                        <h2 className="borderes"><Link to={"/Login"}>DONATE NOW</Link></h2>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/our_cuauses_three.jpg" alt="" />
                                    <div className="for_padding">
                                        <h2>DONATION FOR FOOD & CLOTHES</h2>
                                        <p></p>
                                        <div className="progress-text">
                                            <p className="progress-top">50%</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:105}}></div>
                                            </div>
                                            <p className="progress-left">Raised: <span>₹55,000</span></p>
                                            <p className="progress-right">Goal: <span>₹1,80,000</span></p>
                                        </div>
                                        <h2 className="borderes"><Link to={"/Login"}>DONATE NOW</Link></h2>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/our_cuauses_three.jpg" alt="" />
                                    <div className="for_padding">
                                        <h2>DONATION FOR HEALTH</h2>
                                        <p></p>
                                        <div className="progress-text">
                                            <p className="progress-top">50%</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:150}}></div>
                                            </div>
                                            <p className="progress-left">Raised: <span>₹2,00,000</span></p>
                                            <p className="progress-right">Goal: <span>₹5,00,000</span></p>
                                        </div>
                                        <h2 className="borderes"><Link to={"/Login"}>DONATE NOW</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* Cause End */}
             {/* Donation Start */}
            {/* <section className="donors">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="donors_input">
                                <h2>DONATION NOW</h2>
                                <form action="#" method="post">
                                    <p className="amount">
                                        <label htmlFor="usd">AMOUNT : </label>
                                        <input type="radio" name="usd" id="usd" checked />20usd
                                        <input type="radio" name="usd" id="usd" />50usd
                                        <input type="radio" name="usd" id="usd" />100usd </p>
                                    <p className="type">
                                        <label htmlFor="type">TYPE : </label>
                                        <input type="radio" name="time" id="type" checked />One Time
                                        <input type="radio" name="time" id="type" />Monthly
                                        <input type="radio" name="time" id="type" />Yearly <br/>
                                    </p>
                                    <h5>
                                        <input type="text" placeholder="Name" />
                                        <input type="email" placeholder="Email" />
                                    </h5>
                                    <h4>
                                        <select>
                                        <option>I Want To Donate For 1</option>
                                        <option>I Want To Donate For 2</option>
                                        <option>I Want To Donate For 3</option>
                                    </select>
                                    </h4>
                                    <input type="submit" value="DONATION NOW" />
                                </form>
                            </div>
                            <div className="donors_image">
                                <h2>FEATURED DONORS</h2>
                                <div className="donors_featured owl-carousel owl-theme">
                                    <div className="item">
                                        <img src="img/donors_featured_one.jpg" alt="" />
                                        <h3>Kenneth J. Garnica</h3>
                                        <p>Donated Amount : <span>220 USD</span> </p>
                                    </div>
                                    <div className="item">
                                        <img src="img/donors_featured_one.jpg" alt="" />
                                        <h3>Kenneth J. Garnica</h3>
                                        <p>Donated Amount : <span>220 USD</span> </p>
                                    </div>
                                    <div className="item">
                                        <img src="img/donors_featured_one.jpg" alt="" />
                                        <h3>Kenneth J. Garnica</h3>
                                        <p>Donated Amount : <span>220 USD</span> </p>
                                    </div>
                                    <div className="item">
                                        <img src="img/donors_featured_one.jpg" alt="" />
                                        <h3>Kenneth J. Garnica</h3>
                                        <p>Donated Amount : <span>220 USD</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Donation End */}
            {/* Volunteer Start */}
            <div className="clear"></div>
            <section className="volunteer_area">
                <h2>Our Volunteer</h2>
                <p>..... <br /> </p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="volunteer_single owl-carousel owl-theme">
                                <div className="item">
                                    <img src="assets/img/volanteer_1.jpg" alt="" />
                                    <div className="text">
                                        <h3>Sarah Brown</h3>
                                        <h6>Designer</h6>
                                        <p>"The smallest act of kindness is worth more than the grandest intention. “ </p>
                                        <h5><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a><a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/volanteer_2.jpg" alt="" />
                                    <div className="text">
                                        <h3>Albert</h3>
                                        <h6>Engineer</h6>
                                        <p>No one has ever become poor by giving</p>
                                        <h5><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a><a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/volanteer_3.jpg" alt="" />
                                    <div className="text">
                                        <h3>James</h3>
                                        <h6>Engineer</h6>
                                        <p>The best way to find yourself is to lose yourself in the service of others. “</p>
                                        <h5><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a><a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/volanteer_1.jpg" alt="" />
                                    <div className="text">
                                        <h3> Jammy</h3>
                                        <h6>Designer</h6>
                                        <p>“We rise by lifting others. “</p>
                                        <h5><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a><a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/volanteer_2.jpg" alt="" />
                                    <div className="text">
                                        <h3>Alpaana</h3>
                                        <h6>Singer</h6>
                                        <p>“Every gift which is given, even though it be small, is in reality great, if it is given with affection. “ </p>
                                        <h5><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a><a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="assets/img/volanteer_3.jpg" alt="" />
                                    <div className="text">
                                        <h3> Anni</h3>
                                        <h6>Fashion Designer</h6>
                                        <p>“Every person can make a difference, and every person should try.”</p>
                                        <h5><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a><a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Volunteer End */}
            {/* Designer Start */}
            <section className="carosal_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="carosal_bottom_single owl-carousel owl-theme">
                                <div className="item">
                                    <img src="assets/img/volanteer_1.jpg" alt="" />
                                    <p>“Life’s most persistent and urgent question is, what are you doing for others?” </p>
                                    <h5><i className="material-icons">format_quote</i></h5>
                                    <h4>Arjun</h4>
                                    <h6>Enginneer</h6>
                                </div>
                                <div className="item">
                                    <img src="assets/img/volanteer_2.jpg" alt="" />
                                    <p>“When I started counting my blessings, my whole life turned around.” </p>
                                    <h5><i className="material-icons">format_quote</i></h5>
                                    <h4>Sarthak</h4>
                                    <h6>Engineer</h6>
                                </div>
                                <div className="item">
                                    <img src="assets/img/volanteer_3.jpg" alt="" />
                                    <p>“Alone we can do so little; together we can do so much.” </p>
                                    <h5><i className="material-icons">format_quote</i></h5>
                                    <h4>Addarsh</h4>
                                    <h6>Engineer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Designer End */}
            {/* News Start */}
            <section className="letast_news">
                <h2>latest news</h2>
                <p>Over Rs 55,000 crore in foreign contributions received by Indian NGOs in 2019-22 period. <br />India has around 3.2 million registered NGOs working around the clock to help people, communities, and ecosystems in need on a daily basis. It gives you a feeling of satisfaction and fulfilment, apart from giving underprivileged children a chance to improve their circumstances and lessen the hardships that they face in their daily lives  </p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single_news">
                                <img src="assets/img/news_images_1.jpg" alt="" />
                                <div className="texts">
                                    <p className="date"><a href="/">30 May, 2022</a></p>
                                    <h3>Direct Relief CEO Showcases Donations in Action <br /> </h3>
                                    <p className="test"> Direct Relief’s President and CEO, Thomas Tighe, creates an impromptu video talking to the nonprofit’s online audience live from a Santa Cruz County storm emergency response. </p>
                                    <h3><a href="https://www.classy.org/blog/social-media-post-examples-drive-engagement/">READ MORE</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single_news">
                                <img src="assets/img/news_images_2.jpg" alt="" />
                                <div className="texts">
                                    <p className="date"><a href="/">30 May, 2017</a></p>
                                    <h3>Wood Work Adds Value To <br /> Your Property Five</h3>
                                    <p className="test">Enhancing outdoor living areas, such as building decks and patios, is increasingly popular. These spaces provide a great return on investment (ROI), with wood decks offering about a 75.6% ROI compared to patios at 55.2%. These improvements create desirable spaces for relaxation and entertaining, adding significant value to your property​ </p>
                                    <h3><a href="https://www.raleighwoodworks.com/post/5-ways-to-add-value-to-your-home">READ MORE</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single_news">
                                <img src="assets/img/news_images_3.jpg" alt="" />
                                <div className="texts">
                                    <p className="date"><a href="/">30 May, 2017</a></p>
                                    <h3>Half of donations made by The Musk Foundation had links to Musk, his businesses <br /></h3>
                                    <p className="test">Elon Musk's charity makes infrequent donations and the ones it does make often support his own interests, according to an in-depth analysis by The New York Times.. </p>
                                    <h3><a href="https://www.businessinsider.in/finance/news/half-of-donations-made-by-the-musk-foundation-had-links-to-musk-his-businesses-nyt/articleshow/108401733.cms/">READ MORE</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* News End */}
            {/* Help Start */}
            <section className="footer_carosal">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer_carosal_icon owl-carousel owl-theme">
                                <div className="item">
                                    <img src="assets/img/microsoft.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/envato.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/yahoo.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/jquery.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/amazon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Help End */}
            {/* Footer Start */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="footer-charity-text">
                                <h2>HELP CHARITY</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                                <hr />
                                <p><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a><a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a><a href="/"><i className="fa fa-dribbble" aria-hidden="true"></i></a></p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4 col-sm-5">
                                    <div className="footer-text one">
                                        <h3>RECENT POST</h3>
                                        <ul>
                                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Consectetur Adipisicing Elit</a></li>
                                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Consectetur Adipisicing </a></li>
                                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Consectetur Adipisicing Elit</a></li>
                                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Consectetur Adipisicing</a></li>
                                            <li><a href="/"><i className="material-icons">keyboard_arrow_right</i> Consectetur Adipisicing Elit</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-3">
                                    <div className="footer-text two">
                                        <h3>USEFUL LINKS</h3>
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/">Causes</a></li>
                                            <li><a href="/">Event</a></li>
                                            <li><a href="/">Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="footer-text one">
                                        <h3>CONTACT US</h3>
                                        <ul>
                                            <li><a href="/"><i className="material-icons">location_on</i>1 Street, derby, FL 2147, USA</a></li>
                                            <li><a href="/"><i className="material-icons">email</i>dartthemes@gmail.com</a></li>
                                            <li><a href="/"><i className="material-icons">call</i>+123456789</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer_bottom">
                    <p>Copyright @ 2017 <a href="/">DartThemes</a> | All Rights Reserved </p>
                </div> */}
            </footer>
            {/* Footer End */}

      </div>
      
    </>
  )
}

export default UserHome
