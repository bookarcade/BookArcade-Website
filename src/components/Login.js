import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row } from "antd";
import { authRef, db } from "../config/firebase";
import ColumnGroup from "../../node_modules/antd/lib/table/ColumnGroup";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        // this.props.login(values);
        authRef
          .signInWithEmailAndPassword(values.userName, values.password)
          .then(user => {
            console.log("user:" + user);
            console.log(authRef.currentUser.email);
            db.collection("books")
              .get()
              .then(snapshot => {
                snapshot.forEach(doc => {
                  console.log(doc.id, "=>", doc.data().name);
                });
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + errorMessage);
            // ...
          });

        console.log(this.state.user);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row className="row-form" type="flex" align="middle">
        <div align="center" className="container-fluid">
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
