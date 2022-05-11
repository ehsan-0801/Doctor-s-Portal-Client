import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;