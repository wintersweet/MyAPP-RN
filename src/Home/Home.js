import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ActivityIndicator,
  Alert
} from 'react-native'
import { createStackNavigator, createNavigationContainer, createAppContainer } from 'react-navigation'
import CoinView from '../Others/CoinView'
import MyList from '../Others/MyList'
import SectionOneView from '../Others/HomeSectionOne'
import SectionThereView from '../Others/HomeSectioThere'
import SectionTwoView from '../Others/HomeSectionTwo'
import MyTestList from '../Others/MyTestList'
import { TEST_URL } from '../Common/contant'
// import HeadTopView from './HomeHeaderView'

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width
var REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json'
export default class Home extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
  });
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loaded: false,
      currentPage: 0
    }
    this.fetchData = this.fetchData.bind(this)
    this.onPressItem = this.onPressItem.bind(this)
  }
  componentWillMount () {
    console.log('aaaaa')
  }
  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    fetch(TEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true
        })
        console.log('成功了')
      })
      .catch(err => {
        this.setState({ error: err, loaded: false, refreshing: false })
        console.log(err)
      })
  }
  requestData = () => {

  }
  onPressItem (message) {
    this.props.navigation.navigate('testPush', {
      title: message.toString(),
      otherParam: this.state.data[0].year + '年' + this.state.data[0].title + '主演的电影'
    })
  }

  render () {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }
    return (
      <View>
        <ScrollView style={styles.scrollStyle}
          onMomentumScrollEnd={(e) => { this.updateCurrentPage(e) }}
        >
          <View style={styles.containStyle}>
            <View style={styles.sectionOne}>
              <SectionOneView />
              {/* <HeadTopView /> */}
            </View>
            <View style={styles.sectionTwo}>
              <CoinView />
            </View>
            <View style={styles.sectionThere}>
              <SectionThereView data={this.state.data} onPressItem={this.onPressItem} />
              {/* <MyTestList /> */}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
  updateCurrentPage (e) {
    var offset = e.nativeEvent.contentOffset.x
    var page = Math.floor(offset / screenWidth)
    this.setState({
      currentPage: page
    })
  }
  renderLoadingView () {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ backgroundColor: 'cyan' }}>加载数据中...</Text>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollStyle: {
    marginTop: 0,
    backgroundColor: '#e8e8e8',
    flexDirection: 'column'
  },
  containStyle: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  sectionOne: {
    flex: 1,
    backgroundColor: 'white'
  },
  sectionTwo: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  sectionThere: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    width: 120,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4398ff'
  },
  image: {
    width: 150,
    height: 100
  }
})
