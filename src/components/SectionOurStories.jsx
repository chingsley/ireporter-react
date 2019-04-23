import React from 'react';
import CardStory from './CardStory';
import { card1, card2, card3 } from '../assets/dummyData';


const OurStories = () => (
  <section className="section-stories">
    <h1 className="section-stories__title">Our Breakthroughs</h1>
    <div className="section-stories__cards-container">
      <CardStory
        src={card1.src}
        title={card1.title}
        // text={card1.text}
      />
      <CardStory
        src={card2.src}
        title={card2.title}
        // text={card2.text}
      />
      <CardStory
        src={card3.src}
        title={card3.title}
        // text={card3.text}
      />
    </div>
  </section>
);

export default OurStories;
