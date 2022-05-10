import React from 'react';

const InfoCard = ({ img, heading, p, bgColor }) => {
    return (
        <div className={ `card lg:card-side bg-base-100 shadow-xl ${bgColor} p-2` } >
            <figure className="pl-7"><img src={ img } alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{ heading }</h2>
                <p>{ p }</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div >
    );
};

export default InfoCard;