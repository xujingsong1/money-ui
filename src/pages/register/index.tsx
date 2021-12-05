import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtForm, AtInput } from "taro-ui";
import "./index.less";
import request from "../../../request/request";
import Taro from "@tarojs/taro";

export default class Index extends Component {
  state = {
    userName: "",
    password: "",
    phone: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange = (type, value) => {
    this.setState({ [type]: value });
  };

  register = async () => {
    const { userName, password, phone } = this.state;
    console.log(userName, password, phone);

    // const a = await request({
    //   query: `
    //   mutation($account:String!,$password:String!,$phone:Int!) {
    //     addUser(account:$account,password:$password,phone:$phone) {
    //       id
    //       name
    //     }
    //   }
    //   `,
    //   variables: {
    //     account: "xjs",
    //     password: "xjs",
    //     phone:13795941326
    //   },
    // });
    // console.log(a);
  };

  render() {
    return (
      <View className="index">
          <View className="title"><h3>注册账号</h3></View>
        <AtForm>
          <AtInput
            name="userName"
            title="账号"
            type="text"
            placeholder="请输入账号"
            clear={true}
            onChange={this.handleChange.bind(this, "userName")}
          />
          <AtInput
            name="password"
            title="密码"
            type="password"
            placeholder="请输入密码"
            onChange={this.handleChange.bind(this, "password")}
          />
          <AtInput
            name="phone"
            title="电话号码"
            type="text"
            placeholder="请输入电话号码"
            onChange={this.handleChange.bind(this, "phone")}
          />
          <View className="btnBox">
            <AtButton
              className="loginBtn"
              type="primary"
              onClick={this.register}
            >
              注册
            </AtButton>
          </View>
        </AtForm>
      </View>
    );
  }
}
