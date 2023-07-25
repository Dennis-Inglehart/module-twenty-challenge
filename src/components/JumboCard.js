import React from 'react';
import styles from '../styles/JumboCard.module.css';

function JumboCard() {
  return (
    <a href="https://dennis-inglehart.github.io/prework-study-guide/">
      <section className={styles['card-section']}>
        <section className={styles['jumbo-card']}>
          <div className={styles['card-text']}>MY FINEST CREATION!!</div>
        </section>
      </section>
    </a>
  );
}

export default JumboCard;