import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: `The services that I receive from (DN) is excellent. Dr. (Name) and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.`,
            img: people1,
            from: 'california'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: `Wonderful experience with (Clinic name). Dr. (Name) was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up. I am so glad I chose (Clinic name) and would highly recommend to anyone.`,
            img: people2,
            from: 'New York'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: `This practice is terrific. Dr. (Name) combines expertise and a willingness to listen and discuss. She’s also an excellent surgeon. Also, the staff is very friendly and professional. I’ve never had to wait more than a few minutes when I arrive on time for an appointment.`,
            img: people3,
            from: 'Georgia'
        },
    ]
    return (
        <section className="my-28">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What our Patients say</h2>
                </div>
                <div>
                    <img src={ quote } className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 my-5">
                {
                    reviews.map(review => <Reviews
                        key={ review._id }
                        review={ review }
                    ></Reviews >)
                }
            </div>
        </section>
    );
};

export default Testimonials;