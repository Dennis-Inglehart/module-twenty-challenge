import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles['header-h1']}>Dennis Inglehart</h1>
      <section className={styles['header-ul']}>
        <ul>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#my-work">My work</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </section>
      <section className={styles['header-image']}></section>
    </header>
  );
}

export default Header;