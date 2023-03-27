import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

function Login() {
    return (
        <div className={styles.loginContainer}>
            <Navbar />
            <div className={styles.mainRegIcon}>
                <div className={styles.mainLogImageInnerDiv}>
                    <img width="150px" height="150px" src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg" />
                </div>
            </div>
            <div className={styles.formDiv}>

                <form>
                    <div style={{ display: "flex" }}>
                        <FaUserAlt fontSize="40px" />&nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder='Username' /><br />
                    </div>
                    <div>
                        <RiLockPasswordFill fontSize="40px" />&nbsp;&nbsp;&nbsp;

                        <input type="password" placeholder='Password' /><br />
                    </div>
                    <Link to="/register">Don't have an accaunt? Register</Link>&nbsp;
                    <button>Login</button>
                </form>

            </div>
        </div>
    );
}

export default Login;
