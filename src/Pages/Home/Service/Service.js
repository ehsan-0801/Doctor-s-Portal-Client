import React from 'react';

const Service = ({ img, serviceTitle }) => {
    return (
        <div className="card lg:max-w-lg bg-white  drop-shadow-md text-neutral-content my-8">
            <div className="card-body items-center text-center">
                <figure className="pl-7"><img src={ img } alt="Album" /></figure>
                <h2 className="card-title text-accent">{ serviceTitle }</h2>
                <p className="text-black">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.</p>
            </div>
        </div>
    );
};

export default Service;