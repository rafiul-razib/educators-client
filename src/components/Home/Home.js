import React, { useEffect, useState } from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDoorOpen, faBookOpen, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const[courses, setCourses] = useState([]);

    const homeCourses = courses.slice(0,3)

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="container">
            <div className= "intro">
                <h1>Get Your Education Today</h1>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card text-white bg-dark mb-3 h-100" style={{"maxWidth": "18rem"}}>
                    <div className="card-body">
                        <h2 className="card-title"><FontAwesomeIcon icon={faDoorOpen}/> Online Courses</h2>
                        <p className="card-text">View more</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card text-white bg-dark mb-3  h-100" style={{"maxWidth": "18rem"}}>
                    <div className="card-body">
                        <h2 className="card-title"><FontAwesomeIcon icon={faBookOpen}/> Our Open Library</h2>
                        <p className="card-text">View more</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card text-white bg-dark mb-3  h-100" style={{"maxWidth": "18rem"}}>
                    <div className="card-body">
                        <h2 className="card-title"><FontAwesomeIcon icon={faChalkboardTeacher}/> Our Friendly Teachers</h2>
                        <p className="card-text">View more</p>
                    </div>
                    </div>
                </div>

            </div>

            <div className="popular-courses">
                <h2>Popular Courses</h2>
                {
                    homeCourses.map(course => <li>{course.courseName}</li>)
                }
            </div>
        </div>
    );
};

export default Home;