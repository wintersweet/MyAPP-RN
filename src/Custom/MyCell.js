import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch
} from 'react-native'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width
export default class MyCell extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      title: '默认值',
      isSwitch: true,
      detailText: 'detail...',
      isOn: true
    })
  }
  render () {
    return (
      <TouchableOpacity style={styles.containStyle} onPress={() => { alert('aaa') }} >
        <Text> {this.props.title ? this.props.title : '默认值'} </Text>
        {this._renderRightView()}
      </TouchableOpacity>
    )
  }
  _renderRightView () {
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
  containStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 44,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5

  },
  rightViewStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
