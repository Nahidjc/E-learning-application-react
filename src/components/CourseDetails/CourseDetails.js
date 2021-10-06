import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ReactLoading from "react-loading";

import Overview from "../Overview/Overview";
import MentorCourse from "../MentorCourse/MentorCourse";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
const CourseDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);


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
            setLoading(true)
        }


    }, [courses])
    console.log(find);



    return (
        <div className="container p-5">

            {loading ? <MentorCourse find={find}></MentorCourse> : <Box sx={{ display: 'flex' }}>   <div className="m-auto"> <CircularProgress /></div>

            </Box>


            }

        </div >

    );
};




export default CourseDetails;