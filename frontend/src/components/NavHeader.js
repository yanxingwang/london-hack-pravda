import React from 'react';
import {Layout} from 'antd';
import avaterUser from '../assets/avatar_user.jpg';
import logo from '../assets/logo.png';
import styles from './NavHeader.css';

const {Header} = Layout;

const NavHeader = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogoContainer}>
          <div className={styles.headerLogo}>
            <a href="#">
              <img
                className={styles.logoImg}
                src={logo}
                alt="logo"
              />
            </a>
          </div>
        </div>

        <div className={styles.headerContainerRight}>
          <div className={styles.headerContainerName}>Hello BitMaster</div>
          <div className={styles.headerContainerAvater}>
            <img
              src={avaterUser}
              alt="user"
            />
          </div>
        </div>
      </div>
    </Header>
  );
};

NavHeader.propTypes = {};

export default NavHeader;
