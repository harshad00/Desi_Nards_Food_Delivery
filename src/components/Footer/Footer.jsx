import React from 'react';
import Logo from '../Logo';

// You can replace these SVG paths with the actual paths of your social media icons
const InstagramIcon = () => (
<i className="fa-brands fa-instagram"></i>);

const FacebookIcon = () => (
<i className="fa-brands fa-facebook-f"></i>
);

const TwitterIcon = () => (
<i className="fa-brands fa-twitter"></i>);

const Footer = () => {
  return (
    <footer className="bg-white px-10  ">
      <div className="max-w-screen-xl mx-auto  flex-col lg:flex-row justify-evenly space-y-4 md:space-y-0">
        <div className="flex flex-col justify-center  items-center  lg:flex-row md:space-x-12">
          <div className='flex flex-col items-center md:items-start'> 
             <Logo className='text-center' size={"3rem"} />
            <p className='text-center md:text-start' >Our job is to fill your tummy with delicious <br/> food and with fast and free delivery.</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-200"><InstagramIcon /></a>
              <a href="#" className="hover:text-gray-200"><FacebookIcon /></a>
              <a href="#" className="hover:text-gray-200"><TwitterIcon /></a>
            </div>
          </div>
          <div className="flex gap-2 flex-col  md:flex-row md:space-x-12">
            <div className=" flex flex-col space-y-2">
              <h5 className="font-bold">About</h5>
              <a href="#" className= "flex-nowraphover:text-gray-200">AboutUs</a>
              <a href="#" className="hover:text-gray-900">Features</a>
              <a href="#" className="hover:text-gray-900">News</a>
              <a href="#" className="hover:text-gray-900">Menu</a>
            </div>
            <div className="flex flex-col  space-y-2">
              <h5 className="font-bold">Company</h5>
        <a href="#" className="text-nowrap  hover:text-gray-900">Partner With Us</a>
              <a href="#" className="text-nowrap hover:text-gray-900">FAQ</a>
              <a href="#" className="text-nowrap hover:text-gray-900">Blog</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h5 className="font-bold">Support</h5>
              <a href="#" className="text-nowrap hover:text-gray-900">Account</a>
              <a href="#" className="text-nowrap hover:text-gray-900">Support Center</a>
              <a href="#" className="text-nowrap hover:text-gray-900">Feedback</a>
              <a href="#" className="text-nowrap hover:text-gray-900">Contact Us</a>
              <a href="#" className="text-nowrap hover:text-gray-900">Accessibility</a>
            </div>
          </div>
          <div className='flex flex-col items-center ml-2 md:items-baseline'>
          <h5 className="font-bold ">Get in Touch</h5>
          <a className='text-nowrap' href='#'>Question or feedback? </a>
          <a className='text-nowrap' href='#'> We'd love to hear from you </a>
         
          <form className="flex mt-2">
            <input type="email" placeholder="Email Address" className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"/>
            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 rounded-r-lg p-2">Send</button>
          </form>
        </div>
        </div>
      
      </div>
    </footer>
  );
}

export default Footer;
