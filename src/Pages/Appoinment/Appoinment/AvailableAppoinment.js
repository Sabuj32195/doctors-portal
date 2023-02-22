import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal/BookingModal';
import OptionCard from './OptionCard';




const AvailableAppoinment = ({ selectedDate, setSelectedDate }) => {

    const [options, setOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appoinmentOption.json')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])

    return (
        <div>
            <div>
                <p>Available Date:{format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10'>
                {

                    options.map(option => <OptionCard
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></OptionCard>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                    treatment={treatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppoinment;