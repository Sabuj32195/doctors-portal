import React from 'react';
import appoinment from '../../../../assets/images/appointment.png';
import doctor from '../../../../assets/images/doctor.png';


const AppoinmentDoctor = () => {
    return (
        <section  className='m-32'
        style={{
            background:`url(${appoinment})`
        }}
        >
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={doctor} className="-mt-32 max-w-sm hidden lg:block rounded-lg shadow-2xl " alt=''/>
                    <div className='text-white '>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppoinmentDoctor;