import React from 'react';
import SmallCard from '../SmallCard';

function LoremIpsum() {
  return (
    <SmallCard
      id="lorem-ipsum"
      link="https://loremipsum.io/"
      imageSrc="./assets/images/lorem-ipsum.png"
      alt="lorem-ipsum"
      title="Lorem Ipsum"
    />
  );
}

export default LoremIpsum;