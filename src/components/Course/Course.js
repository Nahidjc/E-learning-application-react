import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css'


const Course = (props) => {
    console.log(props.course);
    const { id, img, courseName, details, InstructorImg, instructor } = props.course;
    return (
        <div className="my-2 col-md-3">
            <Card sx={{ maxWidth: 345 }} style={{ 'height': '400px' }}>
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
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                <div className="card-bottom">
                    <div className="p-3 d-flex " style={{ 'justifyContent': 'between' }} >
                        <div >
                            <div className="d-flex">
                                <img src={InstructorImg} alt="" style={{ 'height': '25px', 'width': '25px', 'borderRadius': '50%' }} />
                                <small className='my-auto ms-2'> {instructor}</small>
                            </div>
                        </div>

                    </div>
                </div>


            </Card>

        </div>
    );
}


export default Course;