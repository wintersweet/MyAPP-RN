import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native'
import { createStackNavigator, createNavigationContainer, createAppContainer } from 'react-navigation'
import CoinView from '../Others/CoinView'
import MyList from '../Others/MyList'

let datass = [
  { key: 'Devin' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Tom' },
  { key: 'Jack' },
  { key: 'Jone' }
]

export default class Home extends Component {
  componentWillMount () {
    console.log('aaaaa')
  }
    static navigationOptions = ({ navigation, screenProps }) => ({
    });

    render () {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
            () => {
              this.props.navigation.push('Profile')
            }
          }>
            <Text style={{ color: 'white' }}>首页</Text>
          </TouchableOpacity>
          <FlatList
            data={datass}
            renderItem={({ item }) =>
              <Text style={styles.item}>{item.key}</Text>
            }
            horizontal={false}
            numColumns={2}
          />

        </View>

      )
    }
}
class DetailsScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    width: 120,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4398ff'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
const DetailStack = createStackNavigator({
  Details: DetailsScreen
})
