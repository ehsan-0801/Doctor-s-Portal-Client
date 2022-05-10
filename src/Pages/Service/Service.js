import React from 'react';

const Service = ({ img, serviceTitle }) => {
    return (
        <div className="card w-96 bg-white  drop-shadow-lg text-neutral-content my-16">
            <div className="card-body items-center text-center">
                <figure className="pl-7"><img src={ img } alt="Album" /></figure>
                <h2 className="card-title text-accent">{ serviceTitle }</h2>
                <p className="text-black">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.</p>
            </div>
        </div>
    );
};

export default Service;