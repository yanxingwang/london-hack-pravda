import React from 'react';
import {
  Layout, Card, Alert, Button, Icon, message
} from 'antd';

import DocumentTitle from 'react-document-title';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

import styles from './InstallCode.css';
import NavHeader from '../components/NavHeader';

class InstallCode extends React.Component {

  onCopySuccessfully() {
    message.success('Copied to clipboard!', 1);
  }

  render() {
    const codeString = 'import { CommentWidget } from \'pravda-react\';\n\n' +
      '<CommentWidget\n' +
      '  appId={983} // Your Pravda application ID \n' +
      '  articleId={12478} // Your article or Blog ID \n' +
      '/>';

    return (
      <DocumentTitle title="Install Code">
        <Layout>
          <NavHeader/>

          <div className={styles.background}>
            <Card
              className={styles.installStepCard}
              title={
                <div>
                  <h2 className={styles.installStepTitle}>Code Install Instructions</h2>
                  <p className={styles.installStepSubTitle}>Using blog platforms like WordPress? <a href="#">Check here.</a></p>
                </div>
              }
            >
              <h3>Install React component</h3>
              <p>Your unique app ID is <b>983</b></p>

              <ol className={styles.instructionsList}>
                <li>
                  <p>Install the JavaScript library via <code>npm</code>:</p>
                  <div className={styles.codeContainer}>
                    <SyntaxHighlighter language='bash' style={docco}>npm install pravda-react</SyntaxHighlighter>
                    <div className={styles.codeCopy} onClick={() => this.onCopySuccessfully()}>
                      <Icon type="copy" theme="outlined" style={{marginRight: 4}} />
                      Copy to clipboard
                    </div>
                  </div>
                </li>

                <li>
                  <p>Place the following code to your React web page:</p>
                  <div className={styles.codeContainer}>
                    <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>
                    <div className={styles.codeCopy} onClick={() => this.onCopySuccessfully()}>
                      <Icon type="copy" theme="outlined" style={{marginRight: 4}} />
                      Copy to clipboard
                    </div>
                  </div>
                </li>
              </ol>

              <h2 className={styles.additionalCus}>Not using React?</h2>
              <Alert
                message={
                  <span>See our <a href="#">Developer Portal</a> for more documentations.</span>
                }
                type="success"
                showIcon
              />

              <br/>
              <br/>

              <div className={styles.listFooter}/>

              <Button href="/#/onboard">Go Back</Button>
            </Card>
          </div>
        </Layout>
      </DocumentTitle>
    );
  }

}

export default InstallCode;
