import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,selectedDate,setTreatment }) => {
    const { name ,slots} = treatment;
    const date=format(selectedDate,'pp')


    const bookingSubmit=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.email.value;
        const treatment=form.treatmentName.value;
        const slot=form.slot.value;
        const booking={
            Name:name,
            Email:email,
            Phone:phone,
            Treatment:treatment,
            Slot:slot,
            Date:date



        }
        console.log(booking)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={bookingSubmit}>
                        <input type="text" name='treatmentName' value={name} disabled className="input input-bordered w-full max-w-xs m-2" />
                        <input type="text" name='date' disabled value={date} className='input input-bordered w-full max-w-xs  m-2' />
                        <select name='slot' className="input-bordered select w-full max-w-xs">
                            {
                                slots.map((slot,i)=><option key={i} value={slot}>{slot}</option>
                                )
                            }
                        </select>
                        <input type="text" name='name' placeholder='Name' className="input input-bordered w-full max-w-xs  m-2" />
                        <input type="text" name='email' placeholder='Email' className="input input-bordered w-full max-w-xs  m-2" />
                        <input type="text" name='phone' placeholder='Phone' className="input input-bordered w-full max-w-xs  m-2" />
                        <br />
                        <button className='btn-primary p-2 w-full max-w-xs' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;