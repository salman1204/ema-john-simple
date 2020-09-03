import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStle ={
        borderBottom:'1px solid lightgray', 
        padding:'10px',
        marginLeft:'30px'
    }
    return (
        <div style={reviewItemStle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>${price}</p>
            <button onClick={() => props.removeProduct(key)} className="main-button">Review Items</button>
        </div>
    );
};

export default ReviewItem;