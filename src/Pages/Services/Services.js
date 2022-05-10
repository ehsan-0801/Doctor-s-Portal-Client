import React from 'react';
import Service from '../Service/Service';
import img1 from '../../assets/images/fluoride.png'
import img2 from '../../assets/images/cavity.png'
import img3 from '../../assets/images/whitening.png'
import ServicesTerms from '../ServicesTerms/ServicesTerms';
const Services = () => {
    const serviceTitle1 = `Fluoride Treatment`;
    const serviceTitle2 = `Cavity Filling`;
    const serviceTitle3 = `Teeth Whitening`;
    return (
        <div className="my-16">
            <h3 className="uppercase text-2xl text-center text-secondary font-bold">Our Services</h3>
            <h2 className="text-3xl text-center ">Services We Provide</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Service img={ img1 } serviceTitle={ serviceTitle1 }></Service>
                <Service img={ img2 } serviceTitle={ serviceTitle2 }></Service>
                <Service img={ img3 } serviceTitle={ serviceTitle3 }></Service>
            </div>
            <ServicesTerms></ServicesTerms>
        </div>
    );
};

export default Services;