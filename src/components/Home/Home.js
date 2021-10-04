import React from 'react';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import LandPage from '../LandPage/LandPage';

const Home = () => {
    return (
        <div >
            <LandPage></LandPage>
            <br />
            <Courses></Courses>
            <br />
            <Contact></Contact>
        </div>
    );
};

export default Home;