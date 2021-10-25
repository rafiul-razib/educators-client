import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    const{courseName, price, img} = props.course;
    
    return (

        // Course component
        <div className="col mt-5">
            <div className="card h-100" style={{"width": "auto"}}>
            <img src={img} style={{"height":"200px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{courseName}</h5>
                <p className="card-text">Price: ${price}</p>
            </div>
                <div className="pb-4">
                <button onClick={()=> props.handleAddToCart(props.course)} className="btn btn-info"><FontAwesomeIcon icon={faCartPlus}/> Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Course;