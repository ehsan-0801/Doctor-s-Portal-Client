import React from 'react';

const AppointmentsSlots = ({ service, setTreatment }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary mx-auto">{ service.name }</h2>
                <p>{ service.slots.length ? <span>{ service.slots[0] }</span> : <span className="text-red-500">No Slots for today</span> }</p>
                <p>{ service.slots.length } { service.slots.length > 1 ? 'spaces' : 'space' } available</p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-Modal"
                        onClick={ () => setTreatment(service) }
                        disabled={ service.slots.length === 0 }
                        className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsSlots;