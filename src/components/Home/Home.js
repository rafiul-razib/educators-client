import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDoorOpen, faBookOpen, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';
import Carousel from '../Carousel/Carousel'



const Home = (props) => {
    const[courses] = useCourses();

    const homeCourses = courses.slice(0,4);

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="home">
            <Carousel></Carousel>
         <div>
            <div className= "container intro">
                <h1>Get Your Education Today</h1>
            </div>

            <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 container mx-auto">
                <div className="col">
                    <div className="card text-white bg-dark mb-3 h-100 thumb" style={{"maxWidth": "18rem"}}>
                    <div className="card-body">
                        <h2 className="card-title"><FontAwesomeIcon icon={faDoorOpen}/> Online Courses</h2>
                        <p className="card-text">View more</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className="card text-white bg-dark mb-3  h-100 thumb" style={{"maxWidth": "18rem"}}>
                    <div className="card-body">
                        <h2 className="card-title"><FontAwesomeIcon icon={faBookOpen}/> Our Open Library</h2>
                        <p className="card-text">View more</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className="card text-white bg-dark mb-3  h-100 thumb" style={{"maxWidth": "18rem"}}>
                    <div className="card-body">
                        <h2 className="card-title"><FontAwesomeIcon icon={faChalkboardTeacher}/> Our Friendly Teachers</h2>
                        <p className="card-text">View more</p>
                    </div>
                    </div>
                </div>

            </div>
         </div>

            <div>
                <div className="popular-courses container">
                <h2>Popular Courses</h2>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mx-auto">
                {
                    homeCourses.map(course => <Course key={course.key} handleAddToCart={handleAddToCart} course= {course}></Course>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;