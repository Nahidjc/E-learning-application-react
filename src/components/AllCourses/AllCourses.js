import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';


const AllCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })

    }, [])
    return (
        <div className="container mb-5">
            <h5 className="my-4 text-center">All Courses</h5>
            <div className="row">

                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }


            </div>

        </div>
    );
};

export default AllCourses;