/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList
} from 'react-native'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width

let data2 = [
  { title: 'BTC', price: '24808.76 CNY' },
  { title: 'ETH', price: '24808.76 CNY' },
  { title: 'USDT', price: '24808.76 CNY' },
  { title: 'ETH', price: '24808.76 CNY' },
  { title: 'XRP', price: '24808.76 CNY' },
  { title: 'XXX', price: '24808.76 CNY' }
]
export default class CoinView extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      title: '标题',
      isSwitch: true,
      detailText: '副标题',
      isOn: true
    })
  }
  render () {
    return (
      <View style={styles.contain}>
        {this.renderFlatListView()}
      </View>
    )
  }
  renderFlatListView () {
    return (
      <FlatList
        data={data2}
        renderItem={({ item }) =>
          <View style={styles.containStyle}>
            <Image source={{ uri: 'feedBack' }} style={styles.image} />
            <View style={styles.rightViewStyle}>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        }
        horizontal={false}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'column'
  },
  containStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 16,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5
  },
  rightViewStyle: {
    marginLeft: 5
  },
  image: {
    marginTop: 5,
    width: 40,
    height: 40
  }
})
