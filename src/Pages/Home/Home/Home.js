import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import TermsBanner from '../TermsBanner/TermsBanner';

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <TermsBanner></TermsBanner>
    </div>
  );
};

export default Home;
