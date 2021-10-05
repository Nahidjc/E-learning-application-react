import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
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





    return (
        <div>
            {courses.length}
            <h1>{find.courseName}</h1>
        </div>
    );
};

export default CourseDetails;