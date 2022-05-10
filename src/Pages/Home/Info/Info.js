import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Info = () => {
    const heading1 = `Opening Hours`
    const heading2 = `Visit our location`
    const heading3 = `Contact us now`
    const p1 = `Lorem Ipsum is simply dummy text of the pri`
    const p2 = `Brooklyn, NY 10036, United States`
    const p3 = `+000 123 456789`
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InfoCard img={ clock } heading={ heading1 } p={ p1 } bgColor="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard img={ marker } heading={ heading2 } p={ p2 } bgColor="bg-accent"></InfoCard>
            <InfoCard img={ phone } heading={ heading3 } p={ p3 } bgColor="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;