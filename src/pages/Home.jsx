/* eslint-disable no-unused-vars */
import React from 'react';
import HeroSection from './Hero';
import { DeliveryComponent, MenuComponent } from '../components';

function Home() {
  return (
    <div className='flex justify-center '>
      {/* <h1 className="font-heading text-3xl">This is a Heading</h1>
      <p className="font-primary text-base">This is some body text.</p> */}
   <div className='md:w-[80%]'>
   <section>
    <HeroSection/>
   </section>
   <section>
   <DeliveryComponent/>
   </section>
   <section>
   <MenuComponent/>
   </section>
    </div>
    </div>
  );
}

export default Home;
