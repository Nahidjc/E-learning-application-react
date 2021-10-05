import React from 'react';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import LandPage from '../LandPage/LandPage';
import SingleMentor from '../SingleMentor/SingleMentor';
import useCourse from '../hooks/useCourse';
import { Link } from 'react-router-dom';
const Home = () => {
    const [courses] = useCourse([])
    let mentors = courses.slice(0, 4)
    return (
        <div >
            <LandPage></LandPage>
            <br />
            <Courses></Courses>
            <br />
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h3>Course Mentor</h3>
                    <h3 className="my-auto"> <Link to='/about'>All Mentor</Link></h3>
                </div>
                <div className="row">
                    {
                        mentors.map(course => <SingleMentor key={course.id} course={course}></SingleMentor>)
                    }

                </div>
            </div>
            <br />
            <Contact></Contact>
            <br />


        </div>
    );
};

export default Home;