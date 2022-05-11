import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{ review.review }</p>
                <div className="flex justify-between items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={ review.img } alt="users" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl text-accent font-bold">{ review.name }</h4>
                        <p className="text-xl">{ review.from }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;