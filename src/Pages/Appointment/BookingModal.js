import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">{ name }</h3>
                    <form onSubmit={ handleSubmit } className="grid grid-cols-1 gap-5 justify-items-center my-5">
                        <input type="text" disable value={ format(date, 'PP') } class="input input-bordered input-secondary w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={ slot }>{ slot }</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" name="email" placeholder="Email" class="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;