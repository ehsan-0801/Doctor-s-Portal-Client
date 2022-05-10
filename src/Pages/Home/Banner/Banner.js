import React from 'react';
import chair from '../../../assets/images/chair.png'
import CustomButton from '../../Shared/CustomButton/CustomButton';
import './Banner.css'
const Banner = () => {

    return (
        <div className="">
            <div className="hero  min-h-screen bgCustom">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={ chair } className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-7xl font-bold text-accent">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <CustomButton>Get Started</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;