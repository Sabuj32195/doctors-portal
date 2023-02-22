import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {

    return (
        <header>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair}className="w-full justify-center" alt='' />
                    <div className="w-full justify-center">
                    <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default AppoinmentBanner;