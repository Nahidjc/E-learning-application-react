import { useEffect, useState } from "react";
import useCourse from "./useCourse";


const useFindCourse = (courses) => {

    const [course, setCourse] = useState({})

    useEffect(() => {
        console.log(courses);
        // if (courses.length) {
        //     const current = course.filter(cou => cou.id === id)

        //     setCourse(current)
        // }

    }, [courses]);
    return [course]

}

export default useFindCourse;