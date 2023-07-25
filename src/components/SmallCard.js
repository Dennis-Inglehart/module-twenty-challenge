import React from 'react';

function SmallCard(props) {
  return (
    <div className="flex-card" id={props.id}>
      <a href={props.link}>
        <img src={props.imageSrc} alt={props.alt} style={{ width: '100%' }} />
        <div className="card-text">{props.title}</div>
      </a>
    </div>
  );
}

export default SmallCard;