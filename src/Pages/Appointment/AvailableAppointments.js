import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentsSlots from './AppointmentsSlots';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState()
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className="text-center text-secondary my-16">Available Appointments on { format(date, 'PP') }</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-24">
                {
                    services.map(service => <AppointmentsSlots
                        key={ service._id }
                        service={ service }
                        setTreatment={ setTreatment }
                    ></AppointmentsSlots>)
                }
                { treatment && <BookingModal key={ treatment._id } date={ date } treatment={ treatment } setTreatment={ setTreatment }></BookingModal> }
            </div>
        </div>
    );
};

export default AvailableAppointments;