import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPage = () => {

    return (
        <MDBFooter color="blue" className="pt-4 mt-4 font-small">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Learn Up Content</h5>
                        <p>
                            Education is the passport to the future, for tomorrow belongs to those who prepare for it today
                        </p>
                    </MDBCol>
                    <MDBCol md="6">

                        <ul>
                            <li className="list-unstyled" >
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to='/about'>About</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to='Courses'>Courses</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to='Contact'>Contact</Link>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="py-3 text-center footer-copyright">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a style={{ 'textDecoration': 'none' }} href="#">Learn Up with Sabbir Al Azim </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;