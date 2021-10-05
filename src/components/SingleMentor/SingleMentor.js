import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBCol } from 'mdb-react-ui-kit';
const SingleMentor = (props) => {
    const { instructor, InstructorImg } = props.course;
    return (
        <div className="col-md-3 mt-4">
            <MDBCard style={{ maxWidth: '20rem', height: '350px' }}>
                <MDBCardImage style={{ maxWidth: '150px', height: '150px' }} src={InstructorImg} className="rounded-circle m-auto" position='top' alt='...' />
                <div className="m-auto">
                    <MDBCardBody>
                        <MDBCardTitle> <p className='text-center' style={{ color: '#4A5682', fontWeight: 'bolder' }}> {instructor}</p></MDBCardTitle>
                        <MDBCardText>
                            <p className="text-center">  Software Engineer</p>
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a className="text-white btn btn-sm" role="button" style={{ "backgroundColor": " #3b5998" }} href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></a>

                            <a className="text-white btn btn-sm" style={{ "backgroundColor": "#55acee" }} href="#!" role="button"
                            ><i className="fab fa-twitter"></i
                            ></a>

                            <a className="text-white btn btn-sm" style={{ "backgroundColor": "#0082ca" }} href="#!" role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>
                        </MDBCol>
                    </MDBCardBody>
                </div>
            </MDBCard>
        </div>
    );
};

export default SingleMentor;