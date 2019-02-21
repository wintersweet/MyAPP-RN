import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import CoinView from './Others/CoinView'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'

export default class Type extends Component {
  render () {
    let data = [
      { title: 'BTC', data: ['24808.76 CNY'] },
      { title: 'ETH', data: ['24808.76 CNY'] }

    ]
    return (
      <View style={styles.container}>
        <View style={styles.containerWap}>
          {
            data.map(item => <CoinView title={item.title} detailText={item.data} key={item.title} />)
          }
        </View>
        <View style={styles.containerWap}>
          {
            data.map(item => <CoinView title={item.title} detailText={item.data} key={item.title} />)
          }
        </View>
        <View style={styles.containerWap}>
          {
            data.map(item => <CoinView title={item.title} detailText={item.data} key={item.title} />)
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  containerWap: {
    // flex: 1,
    flexDirection: 'row'
  }
})
