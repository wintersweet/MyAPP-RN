/* eslint-disable no-return-assign */
import React, { Component } from 'react'
import {
  View, Text, StyleSheet, FlatList, Button, Image,
  Dimensions
} from 'react-native'
const { width, height } = Dimensions.get('window')
export default class Type extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props)
  }
  refreshing () {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      // alert('刷新成功')
    }, 1500)
  }
  _onload () {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      // alert('加载成功')
    }, 1500)
  }
  render () {
    var data = []
    for (var i = 0; i < 50; i++) {
      data.push({ key: i, title: i + '' })
    }

    return (
      <View style={{ flex: 1 }}>
        <Button title="滚动到指定位置" onPress={() => {
          this._flatList.scrollToOffset({ animated: true, offset: 500 })
        }} />
        <View style={{ flex: 1 }}>
          <FlatList
            ref={(flatList) =>
              this._flatList = flatList
            }
            ListHeaderComponent={this._header}
            ListFooterComponent={this._footer}
            ItemSeparatorComponent={this._separator}
            renderItem={this._renderItem}
            onRefresh={this.refreshing}
            refreshing={false}
            onEndReachedThreshold={0}
            onEndReached={
              this._onload
            }
            numColumns={3}
            columnWrapperStyle={{ borderWidth: 2, borderColor: 'black', paddingLeft: 20 }}

            // horizontal={true}

            getItemLayout={(data, index) => (
              { length: 100, offset: (100 + 2) * index, index }
            )}

            data={data} />
        </View>

      </View>
    )
  }

    _renderItem = (item) => {
      var txt = '第' + item.index + '个' + ' title=' + item.item.title
      var bgColor = item.index % 2 == 0 ? 'cyan' : 'green'
      return <Text style={[{ flex: 1, height: 100, backgroundColor: bgColor }, styles.txt]}>{txt}</Text>
    }

    _header = () => {
      return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是头部</Text>
    }

    _footer = () => {
      return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是尾部</Text>
    }

    _separator = () => {
      return <View style={{ height: 2, backgroundColor: 'yellow' }} />
    }
}
const styles = StyleSheet.create({
  container: {

  },
  content: {
    width: width,
    height: height,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cell: {
    height: 100,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ececec',
    borderBottomWidth: 1

  },
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 20
  }

})
