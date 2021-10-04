import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="pt-4 mt-4 font-small">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
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
                    &copy; {new Date().getFullYear()} Copyright: <a style={{ 'textDecoration': 'none' }} href="https://nahidjc.xyz">Learn Up with Nahid </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;