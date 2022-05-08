import React, { useEffect, useRef, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AOS from "aos";
import "../src/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import logo from "../src/iGem IITM Logo.png";
import team from "../src/team.jpg";
import background from "../src/background.png";
import id from"../src/id.png"
import mail from "../src/email_logo.png"
import ig from "../src/Instagram_logo.png"
import twitter from "../src/Twitter_logo.png"
import fb from "../src/FB_logo.png"
import linkedin from "../src/Linkedin_logo.png"

const App =() => {
    useEffect(() => {
        AOS.init({duration: 2000});
    },[]);
    
    const ref0 = useRef()
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    function topFunction() {
        ref0.current.scrollIntoView({ behavior : "smooth"})
    }
    function toref1() {
        ref1.current.scrollIntoView({ behavior : "smooth"})
    }
    function toref2() {
        ref2.current.scrollIntoView({ behavior : "smooth"})
    }
    function toref3() {
        ref3.current.scrollIntoView({ behavior : "smooth"})
    }
    function toref4() {
        ref4.current.scrollIntoView({ behavior : "smooth"})
    }
  return (
      <html  style={{
        backgroundImage: 'url('+background+')'}}>
        <div className="container-fluid nav_bg sticky-top">
          <div className="row">
              <div className="col-12 mx-auto">
                    <nav className ="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand cursor" onClick={topFunction}>
                                <img src={logo} className="logocss" alt="logo img" />
                                iGEM-IITM
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link cursor" onClick={topFunction}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link cursor" onClick={toref1}>Achievements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link cursor" onClick={toref2}>Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link cursor" onClick={toref3}>Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link cursor" onClick={toref4}>About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <section id="header" className="d-flex align-items-center" ref={ref0}>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <h1>Welcome to the <strong className="brand-name">iGEM IIT Madras</strong> Wiki!</h1>
                                <div className="mt-3">
                                    <button className="btn-get-started" onClick={toref1}>get started</button>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <img src={team} className="img-fluid animated" alt="home img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="Achievements" className="d-flex align-items-center aligncenter" ref={ref1}>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out"><strong>Achievements</strong></h1>
                            </div>
                        </div>
                        <div className="row" style={{padding:"10px 0 0 0"}}>
                            <div className="col-md-6 border border-dark rounded order-1 order-lg-1" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <div className="row">
                                    <div className="col-2 mx-auto d-flex justify-content-center flex-column">
                                        <h2 className="font-weight-bold font-italic">2008</h2>
                                    </div>
                                    <div className="col-4 pt-2 mx-auto">
                                        <h4 className="font-weight-bold font-italic">Silver Medal</h4>
                                        <h5>"Best Foundational Advance"<br/>
                                        "Best New Biobrick"</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 border border-dark rounded order-2 order-lg-2" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <div className="row">
                                    <div className="col-2 mx-auto d-flex justify-content-center flex-column">
                                        <h2 className="font-weight-bold font-italic">2009</h2>
                                    </div>
                                    <div className="col-4 pt-2 mx-auto">
                                        <br/>
                                        <h4 className="font-weight-bold font-italic">Silver Medal</h4>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 border border-dark rounded order-1 order-lg-1" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <div className="row">
                                    <div className="col-2 mx-auto d-flex justify-content-center flex-column">
                                        <h2 className="font-weight-bold font-italic">2010</h2>
                                    </div>
                                    <div className="col-4 pt-2 mx-auto">
                                        <br/>
                                        <h4 className="font-weight-bold font-italic">Gold Medal</h4>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 border border-dark rounded order-2 order-lg-2" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <div className="row">
                                    <div className="col-2 mx-auto d-flex justify-content-center flex-column">
                                        <h2 className="font-weight-bold font-italic">2011</h2>
                                    </div>
                                    <div className="col-4 pt-2 mx-auto">
                                        <h4 className="font-weight-bold font-italic">Gold Medal</h4>
                                        <h5>"Best New BioBrick Part, Natural, Asia"<br/>
                                        "Safety Commendation, Asia"</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 border border-dark rounded order-1 order-lg-1" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <div className="row">
                                    <div className="col-2 mx-auto d-flex justify-content-center flex-column">
                                        <h2 className="font-weight-bold font-italic">2013</h2>
                                    </div>
                                    <div className="col-4 pt-2 mx-auto">
                                        <h4 className="font-weight-bold font-italic">Gold Medal</h4>
                                        <h5>"Best Human Practices Advance, Asia"</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 border border-dark rounded order-2 order-lg-2" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <div className="row">
                                    <div className="col-2 mx-auto d-flex justify-content-center flex-column">
                                        <h2 className="font-weight-bold font-italic">2016</h2>
                                    </div>
                                    <div className="col-4 pt-2 mx-auto">
                                        <br/>
                                        <h4 className="font-weight-bold font-italic">Gold Medal</h4>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 border border-dark rounded order-1 order-lg-1" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <div className="row">
                                    <div className="col-2 mx-auto d-flex justify-content-center flex-column">
                                        <h2 className="font-weight-bold font-italic">2017</h2>
                                    </div>
                                    <div className="col-4 pt-2 mx-auto">
                                        <br/>
                                        <h4 className="font-weight-bold font-italic">Silver Medal</h4>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 border border-dark rounded order-2 order-lg-2" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                <div className="row">
                                    <div className="col-2 mx-auto d-flex justify-content-center flex-column">
                                        <h2 className="font-weight-bold font-italic">2018</h2>
                                    </div>
                                    <div className="col-4 pt-2 mx-auto">
                                        <br/>
                                        <h4 className="font-weight-bold font-italic">Gold Medal</h4>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row border border-dark rounded" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="col-md-6 d-flex justify-content-center flex-column">
                                <h2 className="font-weight-bold font-italic">2018</h2>
                            </div>
                            <div className="col-md-6">
                                <h4 className="font-weight-bold font-italic">Gold Medal</h4>
                                <h5>"Nominated for “Best Education & Public Engagement"</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="row aligncenter mt-4" ref={ref2}>
            <div className="col-md-12">
                <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out"><strong>Projects</strong></h1>
            </div>
        </div>
        <section id="swippercss" className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1: "auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                autoplay={{
                    delay: 2700,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>Building BioBricks(2008)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>In 2008, a group of like-minded individuals came together to lay the foundation of the IGEM team at IIT Madras. Their aim was to design and validate a library of sigma-dependent promoters for Escherichia coli. They developed the stRessKit which was a BioBrick library of Lac-repressed σ24, σ28, σ32 and σ38 promoters for E.Coli. The following design specifications were taken into consideration while working on this project: the designed promoters must conform to the BioBrick standards, express modularity and must be LacI repressed but σ dependent.</p>
                        <a href="https://2008.igem.org/Team:IIT_Madras/Project">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>Project PLASMID(2009)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>The 2009 IGEM team worked on the system PLASMID - Plasmid Locking Assembly for Sustaining Multiple Inserted DNA. Their goal was to design a novel versatile system that is able to maintain any proposed plasmid into E.coli by utilizing consumer-defined selection pressure. Based on this conjecture, a custom plasmid retaining system can be designed and co-transformed along with the plasmid of interest which will maintain this plasmid. Working in collaboration with each other, they designed genetic circuits in cells aiming to direct plasmid loss in a regulated fashion.</p>
                        <a href="https://2009.igem.org/Team:IIT_Madras/Theory">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>SynBio for Sweeteners(2010)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>Diabetes is a condition that affects about 422 million people worldwide and is often referred to as a silent killer. Inspired to provide an alternative sweetener for diabetic patients, the 2010 team set out to modify pro-biotic lactic acid bacteria to produce Monellin, a heat and pH stable sweetening protein. Their objective was to engineer Lactococcus lactis, a Gram-positive bacteria to express and secrete Monellin and use it as a substitute for polysaccharides based sweeteners in dairy products with a reduction in the calories intake as well</p>
                        <a href="https://2010.igem.org/Team:IIT_Madras/Project/Motivation">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>Carbon Stress Buster(2011)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>To participate in the 2011 IGEM competition, the team members worked in conjunction with each other to design the multipurpose “Carbon Stress Buster” that rescues E.coli cells from carbohydrate starvation. Additionally, they ideated the Project Artemis and Project Sunscreen to enhance the recombinant protein yield for low substrate conditions and for light-based screening for positive clones respectively. They also developed In- Silico, a dry lab model simultaneously. This model analyses the global effects of Proteorhodopsin on metabolic pathways.</p>
                        <a href="https://2011.igem.org/Team:IIT_Madras">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>Novel Applications of Chimeric Estrogen Receptor(2012)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>In 2012, our team embarked upon a journey to use biological systems for the separation of commercially important compounds. They aimed to express codon-optimized ligand binding domain of Estrogen Receptor α in conjugation with the ToxR DNA binding domain from Vibrio cholerae in E. coli to separate stereoisomers that have profoundly different impacts on biological systems. Additionally, they made efforts to develop a system for bioremediation of endocrine disruptors that has an unfavourable effect on India’s population.</p>
                        <a href="https://2012.igem.org/Team:IIT_Madras/Project">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>Shiga toxin(2013)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>Our team proposed a two-fold, novel synthetic biology approach to combat the lethal effect of the Shiga toxin, aiming to neutralize the already produced toxin through a nine amino acid Gb3 mimic peptide. We expected to finally initiate a new perspective of tackling Shiga toxicosis using synthetic biology tools through this project.</p>
                        <a href="https://2013.igem.org/Team:IIT_Madras/Background">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>Combating antibiotic resistance(2015)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>Our team made an effort to develop a system that can tackle the problem of antibiotic resistance. We aimed to do this by leveraging the power of evolution and natural selection under selective pressure, and synthetic biology. It achieved this by sensing the cell density of pathogenic bacteria, releasing antimicrobial peptides to kill the pathogens, and finally creating a stress-free environment that favours the wild type rather than the mutants. Read more on this project through the following link:</p>
                        <a href="http://2015.igem.org/Team:IIT_Madras/Description">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>Cellular computations(2016)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>Our team’s goal was to make logic-based computations in cells as precise and predictive as we have them in our laptop chips. We sought to apply efficient methods and technology to assess, predict and control the variability in cells. The team then went on to develop a system of exploring the noise in devices and also developed a device known as RIBOS, acting as a biological on-off switch.</p>
                        <a href="https://2016.igem.org/Team:IIT-Madras/Description">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>ChassiDex(2017)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>Starting off with the realisation that different hosts can be useful for different purposes, our team created a database storing various attributes related to various host organisms that can be used by synthetic biologists, to know which host would be most useful. Read more on this project here:</p>
                        <a href="https://2017.igem.org/Team:IIT-Madras/Description">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>ADaPtat1on(2018)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>Our team presented 3 projects this year. Our wetlab project, ADaPtat1on, involves expanding the toolbox for Acinetobacter baylyi ADP1 to make it easier to work with the chassis. The dry lab project was ChassiDex, the project that was made last year, this time with an improved interface and more data and tools. We also initiated The Language Project, a multilingual science communication project.</p>
                        <a href="https://2018.igem.org/Team:IIT-Madras/Description">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className="cardheader">
                        <h3>Phyte Club(2019)</h3>
                    </div>
                    <div className="cardcontent">
                        <p>The main players of our project for 2019 were the fungus Fusarium solani, a plant Nothapodytes nimmoniana and the anti-cancer drug camptothecin. Nothapodytes nimmoniana is endemic to the Western Ghat region of India and has been overharvested for medicinal purposes. As an alternative, we aimed to produce camptothecin using F. solani.</p>
                        <a href="https://2019.igem.org/Team:IIT-Madras/Description">Read More</a>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </section>
        <section ref={ref3}>
            <div className="row">
                <div className="col-12">
                    <div className="row aligncenter mt-4">
                        <div className="col-12">
                            <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out"><strong>Team Members</strong></h1>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-md-3 mt-2" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="membercard">
                                <div className="memberid">
                                    <img src={id} className="mx-auto py-3 d-flex justify-content-center flex-column" alt="member img" />
                                </div>
                                <div className="memberdetails">
                                    <h5>
                                        Name:-  --- --- ---<br/>
                                        Position:- -----<br/>
                                        Team:- -----<br/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="membercard">
                                <div className="memberid">
                                    <img src={id} className="mx-auto py-3 d-flex justify-content-center flex-column" alt="member img" />
                                </div>
                                <div className="memberdetails">
                                    <h5>
                                        Name:-  --- --- ---<br/>
                                        Position:- -----<br/>
                                        Team:- -----<br/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="membercard">
                                <div className="memberid">
                                    <img src={id} className="mx-auto py-3 d-flex justify-content-center flex-column" alt="member img" />
                                </div>
                                <div className="memberdetails">
                                    <h5>
                                        Name:-  --- --- ---<br/>
                                        Position:- -----<br/>
                                        Team:- -----<br/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="membercard">
                                <div className="memberid">
                                    <img src={id} className="mx-auto py-3 d-flex justify-content-center flex-column" alt="member img" />
                                </div>
                                <div className="memberdetails">
                                    <h5>
                                        Name:-  --- --- ---<br/>
                                        Position:- -----<br/>
                                        Team:- -----<br/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-md-3 mt-2" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="membercard">
                                <div className="memberid">
                                    <img src={id} className="mx-auto py-3 d-flex justify-content-center flex-column" alt="member img" />
                                </div>
                                <div className="memberdetails">
                                    <h5>
                                        Name:-  --- --- ---<br/>
                                        Position:- -----<br/>
                                        Team:- -----<br/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="membercard">
                                <div className="memberid">
                                    <img src={id} className="mx-auto py-3 d-flex justify-content-center flex-column" alt="member img" />
                                </div>
                                <div className="memberdetails">
                                    <h5>
                                        Name:-  --- --- ---<br/>
                                        Position:- -----<br/>
                                        Team:- -----<br/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="membercard">
                                <div className="memberid">
                                    <img src={id} className="mx-auto py-3 d-flex justify-content-center flex-column" alt="member img" />
                                </div>
                                <div className="memberdetails">
                                    <h5>
                                        Name:-  --- --- ---<br/>
                                        Position:- -----<br/>
                                        Team:- -----<br/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                            <div className="membercard">
                                <div className="memberid">
                                    <img src={id} className="mx-auto py-3 d-flex justify-content-center flex-column" alt="member img" />
                                </div>
                                <div className="memberdetails">
                                    <h5>
                                        Name:-  --- --- ---<br/>
                                        Position:- -----<br/>
                                        Team:- -----<br/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer d-flex align-items-center aligncenter" ref={ref4}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-7 order-1">
                                <div className="row" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                    <h3 className="p-3 font-weight-bold font-italic">About Us</h3>
                                </div>
                                <div className="row" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                    <p>We are the iGem team of IT madras IGEM is an international annual synthetic biology competition that sees participation from thousands of teams worldwide.<br/><br/>
                                        The team is actively involved in everything synbio, from cancer drug probucing fung, to a catabase of microbial host organisms, the team has produced a wide range of projects We have also collaborated with other institutions to take forward ideas and projects.<br/><br/>
                                        The team also envisions to communicate to people of diverse backgrounds about the emerging and ever growing field of synthetic biology One of our flagship initiative is the language project, explaining symbic concepts in several indian and foreign languages<br/>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5 order-2">
                                <div className="row" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                    <h3 className="p-3 font-weight-bold font-italic">Contact Us</h3>
                                </div>
                                <div className="row border-bottom" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out">
                                    <p>
                                        <h4>Department of Biotechnology, IIT Madras.<br/>
                                        Chennai 36, India.
                                        </h4>
                                    </p> 
                                </div>
                                <div className="row">
                                    <h3 className="p-3 font-weight-bold font-italic">SocialMedia Handles</h3>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-1 oreder-1 mx-auto">
                                        <a href="mailto:igem@smail.iitm.ac.in">
                                           <img src={mail} alt="Email logo" className="smhi" />
                                        </a>
                                    </div>
                                    <div className="col-1 oreder-2 mx-auto">
                                        <a href="https://www.instagram.com/igemiitm/">
                                           <img src={ig} alt="Email logo" className="smhi" />
                                        </a>
                                    </div>
                                    <div className="col-1 oreder-3 mx-auto">
                                        <a href="https://twitter.com/iGEM_IITM">
                                           <img src={twitter} alt="Email logo" className="smhi" />
                                        </a>
                                    </div>
                                    <div className="col-1 oreder-4 mx-auto">
                                        <a href="https://www.facebook.com/igem.iitm/">
                                           <img src={fb} alt="Email logo" className="smhi" />
                                        </a>
                                    </div>
                                    <div className="col-1 oreder-5 mx-auto">
                                        <a href="https://www.linkedin.com/in/igemiitm/">
                                           <img src={linkedin} alt="Email logo" className="smhi" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </html>
  );
};
export default App;