import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {

                const items = data.slice(0, 8)
                setCourses(items)
            })

    }, [])
    return (
        <div className="container mb-5">
            <h5 className="text-center">Featured Courses</h5>
            <div className="row">

                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }


            </div>

        </div>
    );
};

export default Courses;