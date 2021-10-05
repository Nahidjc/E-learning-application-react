import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
const Course = (props) => {

    const { id, star, img, courseName, details, InstructorImg, instructor } = props.course;
    return (
        <div className="my-2 col-md-3">
            <Card sx={{ maxWidth: 345 }} style={{ 'height': '450px' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {courseName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        {details.slice(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{ mr: 5 }}>Enroll</Button>
                    <Button size="small">
                        <Link to={`/course-details/${id}`}>Learn More</Link>
                    </Button>
                </CardActions>
                <div className="">
                    <div className="p-3 d-flex justify-content-between">
                        <div >
                            <div className="d-flex">
                                <img src={InstructorImg} alt="" style={{ 'height': '25px', 'width': '25px', 'borderRadius': '50%' }} />
                                <small className='my-auto ms-2'> {instructor}</small>
                            </div>
                        </div>
                        <div className="ms-2">
                            <Rating
                                initialRating={star}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly></Rating>
                        </div>

                    </div>
                </div>


            </Card>

        </div>
    );
}


export default Course;