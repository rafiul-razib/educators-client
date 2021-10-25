import React from 'react';


const CartItem = (props) => {
    const{courseName, price, img} = props.course;
    return (

        // Added to cart items component
        <div>
            <div className="card my-3 h-100 d-flex align-items-center justify-content-center p-2" style={{"maxWidth": "540px"}}>
            <div className="row g-0">
                <div className="col-md-7">
                <img src={img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-5">
                <div className="card-body">
                    <h5 className="card-title">{courseName}</h5>
                    <p className="card-text"><small className="text-muted">Price: ${price}</small></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CartItem;