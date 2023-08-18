import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    
    <div className='cards'>
     <h1 className='aboutx'>Who Are We?</h1>
         <p className='aboutr'> We're a specialized Social Media Marketing Agency devoted to elevating pet businesses. </p>
          <p className='aboutr'>Our passion drives tailored strategies for your brand.</p>    
         
          <p className='aboutr'>Embrace success with our data-driven approach, personalized service, and a love for pets. </p>
      
      <div className='cards__container'>
        <h1>Our Strategy !</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-22.jpg'
              text='At Pets Reach, we excel at crafting and launching targeted social media ads that captivate your audience.          
              With creative visuals and compelling ad copy, we showcase your pet business to the right people, driving brand awareness, engagement, and increased visibility in the competitive pet industry.'
              label='Launch Ads'
              path='/services'
            />
            <CardItem
              src='images/img-33.jpg'
              text='Our lead generation expertise ensures a steady stream of potential customers for your pet business. Through data-driven strategies, we identify and engage with the most relevant audience, converting them into valuable leads. This approach maximizes your chances of turning leads into loyal, long-term clients.'
              label='Generate Leads'
              path='/services'
            />  
            <CardItem
              src='images/img-44.png'
              text='After generating high-quality leads, our dedicated team proactively reaches out to potential customers. With personalized attention and expert communication, we schedule grooming sessions and services directly, ensuring a seamless experience for your clients and maximizing your business bookings. 

              '
              label='Book appointements'
              path='/services'
            />
          </ul>
         
        </div>
      </div>
     
       
       
    </div>
    
    
  );
}

export default Cards;