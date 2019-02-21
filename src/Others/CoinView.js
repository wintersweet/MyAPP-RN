import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width
export default class CoinView extends Component {
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
      <View style={styles.containStyle} >
        <Image source={require('../../images/crypto1.png')} style={styles.image} />
        {this._renderRightView()}
      </View>

    )
  }
  _renderRightView () {
    return (
      <View style={styles.rightViewStyle}>
        <Text style={{ height: 20, marginTop: 5 }} >{this.props.title }</Text>
        <Text style={{ height: 20 }} >{this.props.detailText }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    // paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5
  },
  rightViewStyle: {
    marginLeft: 20
  },
  image: {
    marginTop: 5,
    width: 40,
    height: 40
  }
})
