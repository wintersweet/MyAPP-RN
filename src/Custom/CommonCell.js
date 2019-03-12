/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  PropTypes
} from 'react-native'

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width

export default class CommonCell extends Component {
    // 定义静态的属性,可以通过this.props.alertTitle传值
    static propTypes = {
      alertTitle: PropTypes.string, // 标题
      alertContent: PropTypes.string, // 文本内容
      cancleName: PropTypes.string, // 取消
      conformName: PropTypes.string // 确定
    }

    constructor (props) {
      super(props)
      this.state = ({
        title: 'title...',
        isSwitch: true,
        detailText: 'detail...',
        isOn: true
      })
    }
    render () {
      return (
        <TouchableOpacity style={styles.containerStyle} onPress={() => { alert('点击cell!') }}>
          <Text>{this.props.title}</Text>
          {this.renderRightView()}
        </TouchableOpacity>
      )
    }

    renderRightView () {
      if (this.props.isSwitch) {
        return (
          <Switch value={this.state.isOn == true} onValueChange={() => { this.setState({ isOn: !this.state.isOn }) }} />
        )
      } else {
        return (
          <View style={styles.rightViewStyle}>
            {/* {this.props.detailText.length > 0 ? <Text>{this.props.detailText}</Text> : null} */}
            <Text>{this.props.detailText}</Text>
            <VectorIcon name="chevron-right" size={25} color={'gray'} />
          </View>
        )
      }
    }
}
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 44,
    width: screenWidth,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5
  },
  homeTextStyle: {
    fontSize: 20,
    marginLeft: 10
  },
  rightViewStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
