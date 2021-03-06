import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import CustomButton from '../../Shared/CustomButton/CustomButton';
const ServicesTerms = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src={ treatment } className="max-w-sm rounded-lg shadow-2xl" />
                <div className="p-2">
                    <h1 className="text-5xl text-accent font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <CustomButton>Get Started</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default ServicesTerms;