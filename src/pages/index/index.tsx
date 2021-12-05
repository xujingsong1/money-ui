import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtForm, AtInput } from "taro-ui";
import "./index.less";
import request from "../../../request/request";
import Taro from "@tarojs/taro";

export default class Index extends Component {
  state = {
    value: "",
    password: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange = (e, type) => {
    console.log(e);
    console.log(type);
  };

  onLogin = async () => {
    const a = await request({
      query: `
      query($account:String!,$password:String!) {
        login(account:$account,password:$password) {
          id
          name
        }
      }
      `,
      variables: {
        account: "admin",
        password: "money",
      },
    });
    console.log(a);
  };

  render() {
    return (
      <View className="index">
        <View className="content"> 
          <AtForm>
            <AtInput
              name="value"
              title="账号"
              type="text"
              placeholder="请输入账号"
              value={this.state.value}
              onChange={this.handleChange.bind(this, "value")}
            />
            <AtInput
              name="password"
              title="密码"
              type="password"
              placeholder="请输入密码"
              value={this.state.password}
              onChange={(value) => {
                console.log(value);
              }}
            />
            <View className="btnBox">
              <AtButton
                className="loginBtn"
                type="primary"
                formType="submit"
                onClick={this.onLogin}
              >
                登陆
              </AtButton>
            </View>
          </AtForm>
          <View className="helpBox">
            <Text>忘记密码？</Text>
            <Text
              onClick={() => {
                Taro.navigateTo({ url: "pages/register/index" });
              }}
            >
              手机注册
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
