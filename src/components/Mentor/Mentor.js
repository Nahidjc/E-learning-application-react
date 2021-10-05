import React from 'react';
import './Mentor.css'
import useCourse from '../hooks/useCourse';
import SingleMentor from '../SingleMentor/SingleMentor';
const Mentor = () => {
    const [courses] = useCourse([])
    console.log(courses);
    return (
        <div>
            <div className="row">
                <div className="col-lg-5 mx-auto py-3 col-md-6 col-sm-12">
                    <div className="sec-heading  center">
                        <p c>Meet Instructors</p>
                        <h3> <span className="theme-cl">Top &amp; Famous</span> Instructor in Your City</h3>
                    </div>
                </div>
            </div>
            <div className="row">

                {
                    courses.map(course => <SingleMentor key={course.id} course={course}></SingleMentor>)
                }


            </div>
        </div>
    );
};

export default Mentor;