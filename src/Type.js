import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import CoinView from './Others/CoinView'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
let data1 = [
  { title: 'BTC', price: ['24808.76 CNY'] },
  { title: 'ETH', price: ['24808.76 CNY'] },
  { title: 'ETH', price: ['24808.76 CNY'] }
]
let data2 = [
  { key: 'Devin' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Tom' },
  { key: 'Jack' },
  { key: 'Jone' }
]
export default class Type extends Component {
  render () {
    return (
      <View style={styles.container}>
        <CoinView
        />
        {/* <FlatList
          data={data1}
          renderItem={({ item }) =>
            <Text>{item.title} </Text>

          }
          horizontal={false}
          numColumns={1}
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  containerWap: {
    // flex: 1,
    flexDirection: 'row'
  }
})
