import React from 'react';
import Navbar from '../../Navbar/Navbar';
import styles from './Home.module.css';
function Home() {
  return (
    <div>
      <Navbar />
      <img className={styles.homeImage} src="https://i.ytimg.com/vi/JIgIhgrAqGg/maxresdefault.jpg" />
    </div>
  );
}

export default Home;
