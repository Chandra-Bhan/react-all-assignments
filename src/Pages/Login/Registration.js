import React from 'react';
import Navbar from '../../Navbar/Navbar';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

function Registration() {
  return (
    <div className={styles.loginContainer}>
      <Navbar />
      <div className={styles.mainRegIcon}>
        <div className={styles.mainRegIconInnerDiv}>
          <FaUserAlt color='white' fontSize="110px" />
        </div>
      </div>
      <div className={styles.formDiv}>




        <form>
          <div>
            <AiOutlineMail fontSize="40px" />&nbsp;&nbsp;&nbsp;

            <input type="email" placeholder='Email' /><br />
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt fontSize="40px" />&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder='Username' /><br />
          </div>
          <div>
            <RiLockPasswordFill fontSize="40px" />&nbsp;&nbsp;&nbsp;

            <input type="password" placeholder='Password' /><br />
          </div>
          <button>Register</button>
        </form>

      </div>
    </div>
  );
}

export default Registration;
