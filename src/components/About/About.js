import React from 'react';
import img from '../../images/about.png'
import './prac.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const About = () => {
    return (
        <div className="container">
            <h1 className="text-center">About Us</h1>



            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-md-12 col-sm-12">
                    <div className="list_facts_wrap">
                        <div className="sec-heading mb-3">
                            <h2>Know about <span className="theme-cl">e-Learn</span> learning platform</h2>
                        </div>
                        <div className="list_facts">
                            <div className="list_facts_icons"><i aria-hidden="true" className="fas fa-dharmachakra"></i></div>
                            <div className="list_facts_caption">
                                <h4>Cost effective</h4>
                                <p>Learnup is one of the cost effective learning centres from last decade.
                                </p>
                            </div>
                        </div>
                        <div className="list_facts">
                            <div className="list_facts_icons"><i aria-hidden="true" className="far fa-heart"></i></div>
                            <div className="list_facts_caption">
                                <h4>Improves performance and productivity</h4>
                                <p>Learnup helps learners to train quicker and the easiest way to increase performance.
                                </p>
                            </div>
                        </div>
                        <div className="list_facts">
                            <div className="list_facts_icons"><i aria-hidden="true" className="far fa-file-alt"></i></div>
                            <div className="list_facts_caption">
                                <h4>Saves time</h4>
                                <p>Our instructor uploads the materials in time and shares the content with the learners in time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-modern">Know More<span> <ArrowForwardIcon></ArrowForwardIcon> </span></a>
                </div>
                <div className="col-lg-6 col-md-6 col-md-12 col-sm-12">
                    <div className="list_facts_wrap_img">
                        <img height="555" src="https://learnup.smartdemowp.com/wp-content/uploads/2021/05/edu_2.png" className="attachment-full img-fluid size-full" alt="" loading="lazy" /> </div>
                </div>
            </div>

        </div>
    );
};

export default About;