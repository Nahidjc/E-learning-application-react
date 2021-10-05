import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PersonIcon from '@mui/icons-material/Person';
import QuizIcon from '@mui/icons-material/Quiz';
import Rating from 'react-rating';
import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const CourseDetails = () => {
    const { id } = useParams();


    const [courses, setCourses] = useState([])
    const [find, setFind] = useState({})
    let course_id = parseInt(id)
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Nahidjc/learn-up/master/public/courses.json')
            .then(res => res.json())
            .then(data => {

                setCourses(data)
            })

    }, [])

    useEffect(() => {
        if (courses.length) {
            let current = courses.find(course => course.id === course_id)
            setFind(current)
        }


    }, [courses])
    console.log(find);


    const [isOpen, setOpen] = useState(false)

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    return (
        <div className="container p-5">
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: 'auto', flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={4} item>
                        <ButtonBase sx={{ height: 228 }}>
                            <Img style={{ 'borderRadius': '10px' }} alt="complex" src={find.img} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={8} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {find.courseName}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <div className="d-flex ">

                                        <p className='me-4'><PlayArrowIcon></PlayArrowIcon> {find.Lesson} lessons </p>
                                        <p className='me-4'><QuizIcon></QuizIcon> 10 quiz</p>
                                        <p className='me-4'><PersonIcon></PersonIcon> 17 Students Enrolled</p>
                                        <p>
                                            <AccessTimeIcon></AccessTimeIcon> {find.durations} Hours
                                        </p>
                                    </div>

                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {find.details}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div >
                                        Review
                                        <Rating
                                            className="ms-2"
                                            initialRating={find.star}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly></Rating>
                                    </div>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    <Button color="error" variant="contained">Enroll</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                ${find.price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default CourseDetails;