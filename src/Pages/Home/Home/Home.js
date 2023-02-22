import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import AppoinmentDoctor from './AppoinmentDoctor/AppoinmentDoctor';
import Services from './Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <AppoinmentDoctor></AppoinmentDoctor>
        </div>
    );
};

export default Home;