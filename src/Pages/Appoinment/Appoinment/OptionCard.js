import React from 'react';

const OptionCard = ({option,setTreatment}) => {
    const {name,slots}=option
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-2 bg-secondary p-8">
                <h2 className="card-title text-bold mx-auto">{name}</h2>
                <p>{slots.length>0?slots[0]:'try another day'}</p>
                <p>{slots.length} {slots.length>1?'spaces':'space'} available</p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setTreatment(option)}
                    htmlFor="booking-modal" className="btn">Book Appoinment</label>
                </div>
            </div>
    );
};

export default OptionCard;