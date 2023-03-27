import React from 'react';
import Navbar from '../../Navbar/Navbar';
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.aboutHeading}>About Us</h1>
      <div className={styles.infoContainer}>
        <div >
          <div className={styles.imageDiv}>
            <img width="400" height="400" src="https://img.freepik.com/premium-vector/cute-boy-stand-cartoon_435121-82.jpg" />
          </div>
          <div>
            <h4 style={{ fontSize: "30px", color: "blue" }}>Age: 23</h4>
            <h4 style={{ fontSize: "30px", color: "blue" }}>Location: India</h4>
          </div>
        </div>
        <div>
          <div style={{ width: "900px" }}>
            <h3>Chandra Bhan Prajapati</h3>
            <h3>Hello, As above my name is mention Chandra Bhan Prajapati. I am from Uttar Pradesh Atarra. I completed BCA in 2021 for web development. I like to visit ridge of the river beacause it was very relaxing for me.</h3>
          </div>
          <div className={styles.textInformationDiv}>
            <div className={styles.contentDiv}>
              <h3>What are my skills?</h3>
              <h3>HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT JS</h3>
            </div>
            <div className={styles.contentDiv}>
              <h3>What are my hobbies?</h3>
              <h3>Cricket and Games</h3>
            </div>
            <div className={styles.contentDiv}>
              <h3>What are you learning?</h3>
              <h3>I am learning react. It is a library that help us to make Single Page Applications.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
