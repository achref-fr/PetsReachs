import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Replace with your actual email service credentials
    console.log("Submitting form data:", data);
    const serviceId = "service_lp1l30g";
    const templateId = "template_5pvvdtl";
    const userId = "Ns6vTeoZQY0dLZPZ3";

    // Send the email
    emailjs.send(serviceId, templateId, data, userId)
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast.success('Your message has been successfully sent!');
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        toast.error('An error occurred while sending your message.');
      });
  };
  return (
    <>
     <ToastContainer />
      <HeroSection />
      <Cards />
     
        
        
         <section className='footer-subscription'>
         <p className='footer-subscription-heading'>
         Expertise in lead generation empowers you with 10 extra bookings monthly – guaranteed.
        </p>
        <p className='footer-subscription-text'>
        Claim Your Free Consultation - Book Now!
        </p>
     
     
      <div id='11' class="login-box">
  <h2>Contact Us</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
  <div class="user-box">
    <input
  className='footer-input'
  name='fullname'
  type='text'
  placeholder='Full name'
  {...register('fullname')} // Add this line
/>
      <label>Full name</label>
    </div>
    <div class="user-box">
    <input
  className='footer-input'
  name='email'
  type='email'
  placeholder='Your Email'
  {...register('email')} // Add this line
/>
      <label>Email</label>
    </div>
    <div class="user-box">
    <input
  className='footer-input'
  name='number'
  type='text'
  placeholder='Your Number'
  {...register('number')} // Add this line
/>
      <label>Number</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  <input
  
  type='submit'
  value ="Submit"
/>
    </a>
  </form>
</div>
</section>
    </>
    
  );
}

export default Home;