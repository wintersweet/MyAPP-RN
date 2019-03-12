/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Alert
} from 'react-native'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width

let data2 = [
  { image: 'pexels-photo-1', title: '八合里火锅', des: '便宜，实惠，好吃', id: '1' },
  { image: 'pexels-photo-2', title: '八合里火锅', des: '便宜，实惠，好吃', id: '2' },
  { image: 'pexels-photo-3', title: '八合里火锅', des: '便宜，实惠，好吃', id: '3' },
  { image: 'pexels-photo-4', title: '八合里火锅', des: '便宜，实惠，好吃', id: '4' },
  { image: 'pexels-photo-5', title: '八合里火锅', des: '便宜，实惠，好吃', id: '5' },
  { image: 'pexels-photo-5', title: '八合里火锅', des: '便宜，实惠，好吃', id: '6' }
]
export default class HomeSectionThere extends Component {
  _keyExtractor = (item, index) => item.id;

  constructor (props) {
    super(props)
    this.state = ({
      title: '标题',
      isSwitch: true,
      detailText: '副标题',
      isOn: true,
      data: []
    })
  }
  render () {
    return (
      <View style={styles.contain}>
        {this.renderFlatListView()}
      </View>
    )
  }
  _onPress () {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: this._onClickFuntion },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
  }
  _onClickFuntion () {
    console.log('测试方法')
  }
  _pushToDetail () {

  }
  renderFlatListView () {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={this._onPress}>
            <View style={styles.containStyle}>
              <Image source={{ uri: item.posters.thumbnail }} style={styles.image} />
              <View style={styles.rightViewStyle}>
                <Text>{item.title}</Text>
                <Text>{item.id}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooterer}
        horizontal={false}
        numColumns={1}
        keyExtractor={item => item.id}
      />
    )
  }
  renderHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <Text>商家展示</Text>
        <VectorIcon name="chevron-right" size={25} color={'gray'} />
      </View>
    )
  };
  renderFooterer = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>到底了</Text>
      </View>
    )
  };
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
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    paddingLeft: 15,
    backgroundColor: '#e8e8e8'
  },
  image: {
    marginTop: 5,
    width: 45,
    height: 45
  },
  rightViewStyle: {
    marginLeft: 10
  }
})
