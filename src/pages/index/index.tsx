import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton,AtForm,AtInput } from 'taro-ui'
import './index.less'

export default class Index extends Component {
  state = {
    value:"",
    password:""
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }
  
  componentDidHide () { }

  handleChange = (e,type)=>{
    console.log(e);
    console.log(type)
  }

  render () {
    return (
      <View className='index'>
        <AtForm>
          <AtInput 
            name='value' 
            title='账号' 
            type='text' 
            placeholder='请输入账号' 
            value={this.state.value} 
            onChange={this.handleChange.bind(this, 'value')} 
          />
          <AtInput 
            name='password' 
            title='密码' 
            type='password' 
            placeholder='请输入密码' 
            value={this.state.password}
          />
          <View className='btnBox'>
            <AtButton className='loginBtn' type='primary' formType='submit'>登陆</AtButton>
            <AtButton className='loginBtn' type='primary' formType='reset'>注册</AtButton>
          </View>
        </AtForm>
      </View>
    )
  }
}
