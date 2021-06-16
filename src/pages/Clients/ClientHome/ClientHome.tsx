import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import Courses from '../../../components/Courses/Courses';
import { Footer } from '../../../components/Footer/Footer';
import PricingSection from '../../../components/PricingSection/PricingSection';

interface Props {}

export const ClientHome = (props: Props) => {
  // console.log(environmentVariable);
  return (
    <>
      <Carousel />
      <Courses />
      <Footer />
    </>
  );
};
