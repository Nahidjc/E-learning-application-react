import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuizIcon from '@mui/icons-material/Quiz';
import Rating from 'react-rating';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
const Overview = (props) => {
    const { overview, InstructorImg, instructor, img, star, Lesson, price, durations, details } = props.find

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    return (
        <div className='mt-5'>
            <div className="row">
                <div className="col-md-8">
                    <Card sx={8}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Course Overview
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {overview}
                                </Typography>
                                <br />
                                <Typography variant="body2" color="p">
                                    <h6>Requirements</h6>
                                    <ul style={{ 'listStyle': "none" }}>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            You must have the basic knowledge of the operation system.
                                        </li>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            Because visualization is so important in AWS, you should be familiar with it.
                                        </li>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            All operations require a cloud platform that includes networking, as it is a necessary component.
                                        </li>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            Knowing the difference between a public and a private cloud is essential.
                                        </li>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            Last but not least, you must have a fundamental understanding of coding.
                                        </li>

                                    </ul>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <br />
                    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 'auto', flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid xs={4} item>
                                <ButtonBase sx={{ height: 228 }}>
                                    <Img style={{ 'borderRadius': '10px' }} alt="complex" src={InstructorImg} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={8} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {instructor}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <div className="d-flex ">

                                                <p className='me-4'><PlayArrowIcon></PlayArrowIcon> {Lesson} lessons </p>
                                                <p className='me-4'><QuizIcon></QuizIcon> 10 Quizs</p>
                                                <p className='me-4'><PersonIcon></PersonIcon> Exp. 5 Year</p>
                                                <p>
                                                    <CheckCircleOutlineOutlinedIcon></CheckCircleOutlineOutlinedIcon> 5 Courses
                                                </p>
                                            </div>

                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {details}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <div >
                                                Instructor rating
                                                <Rating
                                                    className="ms-2"
                                                    initialRating={star}
                                                    emptySymbol="far fa-star icon-color"
                                                    fullSymbol="fas fa-star icon-color"
                                                    readonly></Rating>
                                            </div>
                                        </Typography>
                                    </Grid>
                                    {/* <Grid item>
                                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                            <Button color="error" variant="contained">Enroll</Button>
                                        </Typography>
                                    </Grid> */}
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        ${price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>

                <div className="col-md-4">
                    <Card sx={4}>
                        <CardContent>
                            <div className="d-flex mb-2">
                                <CardMedia
                                    component="img"
                                    style={{
                                        width: "auto",
                                        maxHeight: "100px",
                                        borderRadius: "15px"


                                    }}
                                    image={InstructorImg}
                                    alt="green iguana"
                                />
                                <Typography variant="small" className="ms-2" component="div">
                                    <small>
                                        {instructor}
                                        <br />
                                        Software Engineer,SoftTech IT
                                        Dhaka,Bangladesh
                                    </small>
                                </Typography>

                            </div>
                            <hr />
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <p>Actual Price</p>
                                <h3 style={{ color: "#D70040" }}>${price}</h3>
                            </Typography>
                            <Typography variant="body2">
                                <p>Course Features</p>
                                <ul style={{ listStyle: "none" }}>
                                    <li>
                                        <ArrowRightIcon></ArrowRightIcon> Fully Programming
                                    </li>
                                    <li>
                                        <ArrowRightIcon></ArrowRightIcon> Help Code to Code
                                    </li>
                                    <li>
                                        <ArrowRightIcon></ArrowRightIcon> Free Trial 7 Days
                                    </li>
                                    <li>
                                        <ArrowRightIcon></ArrowRightIcon> {Lesson} Videos
                                    </li>
                                    <li>
                                        <ArrowRightIcon></ArrowRightIcon> 24x7 Support
                                    </li>
                                </ul>


                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className="mx-4" style={{ backgroundColor: '#DA0B4E' }} size="block" variant="contained" fullWidth>Buy Now</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Overview;