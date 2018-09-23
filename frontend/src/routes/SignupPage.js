import React from 'react';
import {Button, Card, Form, Input, Layout, Select} from 'antd';
import DocumentTitle from 'react-document-title';
import avaterUser from '../assets/avatar_user.jpg';
import styles from './SignupPage.css';
import NavHeader from "../components/NavHeader";

const FormItem = Form.Item;
const Option = Select.Option;


class SignupPage extends React.Component {

  getFormLabel(label) {
    return (
      <span className={styles.formLabel}>{label}</span>
    );
  }

  getForm() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label={this.getFormLabel("Site Owner")}
          colon={false}
        >
          <div className={styles.formNameContainer}>
            <a className={styles.formNameAvatarContainer}>
              <img
                src={avaterUser}
                alt="User name"
                className={styles.formNameAvatar}
              />
            </a>
            <div><h4>BitMaster</h4></div>
          </div>

          <p className={styles.formTextSmall}>
            <a href="#">Login with a different account</a>
          </p>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={this.getFormLabel("Website Name")}
          colon={false}
        >
          {getFieldDecorator('site_name', {
            rules: [{required: true, message: 'Please input name of your website!', whitespace: true}],
          })(
            <Input placeholder="Enter the name of your website"/>
          )}

          <p className={styles.formTextSmall}>
            You can always change this later
          </p>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={this.getFormLabel("Website URL")}
          colon={false}
        >
          {getFieldDecorator('site_url', {
            rules: [{required: true, message: 'Please input your website URL!', whitespace: true}],
          })(
            <Input placeholder="Enter the URL of your website"/>
          )}

          <p className={styles.formTextSmall}>
            Your unique Pravda URL will be: https://
            <span className={styles.formTextGrayLight}>
              shortname
            </span>.pravda.io
            <span>
              <br/>
              <a href="#">Customize Your URL</a>
            </span>
          </p>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={this.getFormLabel("Category")}
          colon={false}
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              {required: true, message: 'Please select your country!'},
            ],
          })(
            <Select placeholder="Please select a category">
              <Option value="shopping">News</Option>
              <Option value="restaurant">Personal blog</Option>
              <Option value="auto_service">Gaming</Option>
              <Option value="medical_service">Food</Option>
              <Option value="medical_service">Politics</Option>
              <Option value="medical_service">Others</Option>
            </Select>
          )}
        </FormItem>

        <br/>

        <div className={styles.formFooter}/>

        <FormItem
          wrapperCol={{span: 12, offset: 6}}
        >
          <Button type="primary" htmlType="submit" href="/#/install" className={styles.nextButton}>
            Create Account
          </Button>
        </FormItem>
      </Form>
    );
  }

  render() {
    return (
      <DocumentTitle title="Register website">
        <Layout>
          <NavHeader/>

          <div className={styles.background}>
            <Card
              className={styles.registerStepCard}
              title={
                <div>
                  <h2 className={styles.registerStepTitle}>Get Started</h2>
                  <p className={styles.registerStepSubTitle}>All fields are required.</p>
                </div>
              }
            >
              {this.getForm()}
            </Card>
          </div>

        </Layout>
      </DocumentTitle>
    );
  }
}

export default Form.create()(SignupPage);
