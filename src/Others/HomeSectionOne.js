/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width

let data2 = [
  { type: '美食', name: 'feedBack', id: 1 },
  { type: '美食', name: 'evaluate', id: 2 },
  { type: '电影', name: 'health', id: 3 },
  { type: '外卖', name: 'oversight', id: 4 },
  { type: 'KYV', name: 'law', id: 5 },
  { type: '丽人', name: 'customerService', id: 6 },
  { type: '旅游', name: 'myDeeds', id: 7 }

]
export default class SectionOneView extends Component {
  _keyExtractor = (item, index) => item.id;

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
        <FlatList
          data={data2}
          renderItem={({ item }) =>
            <View style={styles.containStyle}>
              <Image source={{ uri: item.name }} style={styles.image} />
              <Text style={styles.text}>{item.type}</Text>
            </View>
          }
          horizontal={false}
          numColumns={5}
          keyExtractor={(item, index) => index}

        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'

  },
  containStyle: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 15,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
    width: screenWidth / 5
  },
  text: {
    marginLeft: 7,
    marginTop: 10
  },
  image: {
    marginTop: 10,
    width: 40,
    height: 40
  }
})
