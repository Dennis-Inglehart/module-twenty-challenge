import React from 'react';

import LoremIpsum from './smallCards/LoremIpsum';
import OrangePlaceholder from './smallCards/OrangePlaceholder';
import RickrollInfo from './smallCards/RickrollInfo';
import MyWork from './smallCards/MyWork';
{/* Add more separate components for other small cards */}
{/*   import XXXXX from './smallCards/XXXXX'      <-- for copying & pasting */}

function SmallCards() {
  return (
    <section className="card-section">
      <LoremIpsum />
      <OrangePlaceholder />
      <RickrollInfo />
      <MyWork />
      {/* Add more separate components for other small cards */}
    </section>
  );
}

export default SmallCards;