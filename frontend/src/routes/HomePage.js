import React from 'react';
import DocumentTitle from 'react-document-title';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import {
  Row, Col, Button
} from 'antd';
import styles from './HomePage.css';
import logoImg from '../assets/logo.png';
import metrics1Img from '../assets/metrics1.png';
import metrics2Img from '../assets/metrics2.png';
import metrics3Img from '../assets/metrics3.png';

class HomePage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Pravda">
        <StickyHeader
          // This is the sticky part of the header.
          header={
            <div className={styles.header}>
              <span>
                <img src={logoImg} className={styles.logo} />
              </span>

              <div className={styles.menu}>
                <span>
                  Features
                </span>

                <span>
                  Pricing
                </span>

                <span>
                  Team
                </span>

                <span>
                  Blog
                </span>
              </div>
            </div>
          }
        >
          <div className={styles.pageBody}>
            <div className={styles.contentContainer}>
              <div className={styles.titleBox}>
                <h1>
                  Express Yourself Securely
                </h1>
                <h2>
                  Decentralized & Anonymous Commenting, Powered by EOS
                </h2>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <div className={styles.actionButtonList}>
                <Button className={styles.actionButton} href="/#/onboard">
                  Get started
                </Button>
                <Button className={styles.actionButton} href="/#/blog">
                  Sample blog
                </Button>
              </div>
            </div>

            <div className={styles.metricsContainer}>
              <Row>
                <Col span={8}>
                  <Row>
                    <span className={styles.metricsBig}>13,556</span>
                    <span className={styles.metricsSmall}>Blogs</span>
                  </Row>
                  <Row>
                    <img src={metrics1Img} />
                  </Row>
                </Col>
                <Col span={8}>
                  <Row>
                    <span className={styles.metricsBig}>2,456,149</span>
                    <span className={styles.metricsSmall}>Comments</span>
                  </Row>
                  <Row>
                    <img src={metrics2Img} />
                  </Row>
                </Col>
                <Col span={8}>
                  <Row>
                    <span className={styles.metricsBig}>93,472</span>
                    <span className={styles.metricsSmall}>Secure accounts</span>
                  </Row>
                  <Row>
                    <img src={metrics3Img} style={{marginTop: 22}}/>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </StickyHeader>
      </DocumentTitle>
    );
  }
}

export default HomePage;
