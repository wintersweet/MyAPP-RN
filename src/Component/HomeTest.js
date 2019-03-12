import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081', height: 200 }]} />
)
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7', height: 200 }]} />
)
export default class TbaViewExamlpe extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: '第三级详情',
      gestureResponseDistance: { horizontal: 300 },
      headerBackTitle: null,
      headerTintColor: 'white'
    });
    state = {
      index: 0,
      routes: [
        { key: 'first', title: '场外' },
        { key: 'second', title: '币币' }
      ]
    };
    render () {
      return (
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute
          })}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'black' }}
              activeColor="#0080ff"
              inactiveColor="#666"
              labelStyle={{ fontSize: 16 }}
              style={styles.tabBarStyle}
              tabStyle={{ width: 80, marginRight: 0 }}
            />
          }
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      )
    }
}
const styles = StyleSheet.create({
  scene: {
    // flex: 1
  },
  indicatorStyle: {
    backgroundColor: '#0080ff',
    width: 20,
    height: 4,
    borderRadius: 5
  }
})
