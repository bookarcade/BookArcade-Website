import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Logo from "../assets/logo.png";
import TableList from "./TableList";
// import HomePage from "./HomePage";

const { Header, Content, Sider } = Layout;

class Dashboard extends Component {
  componentWillMount() {
    const { fetchUser } = this.props;
    console.log(this.props.auth);
    fetchUser();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  handleLogout = () => {
    const { fetchBuy, userLogout } = this.props;
    fetchBuy();
    userLogout();
  };

  state = {
    collapsed: false,
    key: "1"
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleMenu = ({ item, key }) => {
    this.setState({
      key
    });
  };

  render() {
    const { data } = this.props;
    console.log(data);
    if (this.props.auth.user === null) return <Redirect to="/login" />;
    return (
      <Layout>
        <Sider
          theme="dark"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <div className="logo-container">
            <img src={Logo} alt="Logo" />
            {!this.state.collapsed && <span>BookArcade</span>}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" onClick={this.handleMenu}>
              <Icon type="user" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.handleMenu}>
              <Icon type="video-camera" />
              <span>Buy Orders</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.handleMenu}>
              <Icon type="upload" />
              <span>Rent Orders</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={this.handleMenu}>
              <Icon type="upload" />
              <span>Returns</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={
            this.state.collapsed ? { marginLeft: 80 } : { marginLeft: 200 }
          }
        >
          <Header
            style={{
              padding: 0,
              zIndex: 1,
              width: "100%"
            }}
          >
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <Icon
              className="trigger"
              type="logout"
              onClick={this.handleLogout}
              style={{ float: "right" }}
            />
          </Header>
          <Content
            style={{
              margin: "16px",
              background: "#fff",
              minHeight: 280,
              padding: "10px 25px",
              overflow: "initial"
            }}
          >
              <TableList key={this.state.key} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({ data, auth }, ownProps) => {
  return {
    data,
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
