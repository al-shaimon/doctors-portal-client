import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import TermsBanner from '../TermsBanner/TermsBanner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <TermsBanner></TermsBanner>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
