import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import footer from '../../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
const servicesData=[
    {
        id:1,
        name:'teeth whiting',
        img:fluoride,
        description:'this is the most important part of your mouth'
    },
    {
        id:2,
        name:'teeth whiting',
        img:cavity,
        description:'this is the most important part of your mouth'
    },
    {
        id:3,
        name:'teeth whiting',
        img:footer,
        description:'this is the most important part of your mouth'
    },

]

    return (
        <div>
            <div>
                <h1>Our Services</h1>
                <h2> Service We Provide </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 '>
                {
                    servicesData.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;