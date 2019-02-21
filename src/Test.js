'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import CoinView from './Others/CoinView'
const tab_w = 100
const tab_marigin = 10
const colorAry = ['gray', 'green']
const titleAry = ['买币行情', '卖币行情']

const WIDTH = Dimensions.get('window').width
const max_w = (tab_w + tab_marigin) * colorAry.length
let data = [
  { title: 'BTC', data: ['24808.76 CNY'] },
  { title: 'ETH', data: ['24808.76 CNY'] }

]
export default class HOME extends React.Component {
  constructor (props) {
    super(props)
    if (this.props.TabWidth) {
      this.WIDTH = this.props.TabWidth
    } else {
      this.WIDTH = WIDTH
    }
    this.state = {
      tabArr: []
    }
  };

  componentDidMount () {
    this._setIndex(0)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={{ width: this.WIDTH }}>
          <FlatList
            ref={(flatList) => this._flatList = flatList}
            renderItem={this._renderTabItem}
            horizontal
            data={this.state.tabArr}
            keyExtractor={(v, i) => i}
          />
        </View>

        <View>
          <ScrollView style={styles.scrollViewStyle}
            ref={(scrollView) => this._scrollView = scrollView}
            horizontal
            pagingEnabled
            onMomentumScrollEnd={this._onAnimationEnd}
          >
            {this._renderItem()}
          </ScrollView>
        </View>

      </View>
    )
  }

  _renderItem () {
    // 数组
    let itemAry = []
    // 颜色数组
    // 遍历
    for (let i = 0; i < colorAry.length; i++) {
      itemAry.push(
        <View key={i} style={[styles.itemStyle, { backgroundColor: colorAry[i] }]}>
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
    return itemAry
  }

    _renderTabItem = (data, index) => {
      if (data.item.selected) {
        return (
          <TouchableOpacity key={index} onPress={(index) => this._tabClick(data.item.index)}>

            <View style={
              {
                backgroundColor: 'white',
                height: 40,
                marginLeft: tab_marigin,
                width: tab_w,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'green' }}>{data.item.title}</Text>
              <View style={{ width: tab_w, height: 2, backgroundColor: 'green', marginTop: 17 }} />
            </View>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity key={index} onPress={(index) => this._tabClick(data.item.index)}>

            <View style={
              {
                backgroundColor: '#ffff66',
                height: 40,
                marginLeft: tab_marigin,
                width: tab_w,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'black' }}>{data.item.title}</Text>
            </View>
          </TouchableOpacity>

        )
      }
    }

    _tabClick (index) {
      this._tabScrollToIndex(index)
      this._scrollView.scrollTo({ x: index * WIDTH, y: 0, animated: true })
    }

    _onAnimationEnd = (e) => {
      var offset = e.nativeEvent.contentOffset.x
      if (offset < 0) {
        return
      }

      var currentX = Math.floor(offset / WIDTH)
      this._tabScrollToIndex(currentX)
    }

    _tabScrollToIndex (index) {
      this._setIndex(index)

      var centerX = this.WIDTH / 2.0

      var tabOffset = index * (tab_w + tab_marigin)

      var itemX = tabOffset + tab_w / 2.0

      var scrollX = itemX - centerX

      if (scrollX < 0) {
        scrollX = 0
      }

      if (scrollX >= max_w - this.WIDTH) {
        scrollX = max_w - this.WIDTH
      }
      this._flatList.scrollToOffset({ offset: scrollX })
    }
    _setIndex (index) {
      if (index >= colorAry.length) {
        return
      }
      let arr = []
      for (let i = 0; i < colorAry.length; i++) {
        let tabItem
        if (i == index) {
          tabItem = {
            title: colorAry[i],
            index: i,
            selected: true
          }
        } else {
          tabItem = {
            title: colorAry[i],
            index: i,
            selected: false
          }
        }
        arr.push(
          tabItem
        )
      }
      this.setState({
        tabArr: arr
      })
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd'
  },
  scrollViewStyle: {
    // 背景色
    backgroundColor: 'red'
  },
  itemStyle: {
    // 尺寸
    width: WIDTH,
    // height: 300,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  containerView: {
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
