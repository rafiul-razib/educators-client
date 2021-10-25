import React from 'react';
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';
import './AllCourses.css'

const AllCourses = (props) => {
    const handleAddToCart = props.handleAddToCart;
    const[courses] = useCourses()
    return (
        <div className="container text-center">
            <div><h1 className="mb-2 text-center all-courses">Our Services</h1></div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mx-auto">
                
                {
                    courses.map(course => <Course handleAddToCart= {handleAddToCart} key ={course.key} course = {course}></Course>)
                }
            </div>
        </div>
    );
};

export default AllCourses;