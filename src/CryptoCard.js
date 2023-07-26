import React from "react";

const CryptoCard = ({ image, name, price }) => {
    return (
        <div >
            <div >
                <img src={image} alt={name} />
            </div>
            <div >
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
        </div>
    );
};

export default CryptoCard;