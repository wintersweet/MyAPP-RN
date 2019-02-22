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
  { key: 'Devin' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Tom' },
  { key: 'Jack' },
  { key: 'Jone' }
]
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
      <View style={styles.contain}>
        {/* {this.renderRightView()} */}
        {this.renderFlatListView()}
      </View>

    )
  }
  renderFlatListView () {
    return (
      <FlatList
        data={data2}
        renderItem={({ item }) => {
          <View>
            <Image source={require('../../images/crypto1.png')} style={styles.image} />
            <Text style={{ height: 20, marginTop: 5 }} >{'111'}</Text>
            <Text style={{ height: 20 }} >{'222' }</Text>
          </View>
        }
        }
        horizontal={false}
        numColumns={2}
      />
    )
  }
  renderRightView () {
    return (
      <View style={styles.contain}>
        <Image source={require('../../images/crypto1.png')} style={styles.image} />
        <Text style={{ height: 20, marginTop: 5 }} >{'title' }</Text>
        <Text style={{ height: 20 }} >{'detail' }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'row'
  },
  containStyle: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 10,
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
