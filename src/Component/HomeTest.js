import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {createStackNavigator,createNavigationContainer,createAppContainer} from 'react-navigation'
const  Mine = require('../Mine')

export default class HomeTest extends Component {  
    componentWillMount(){
        console.log('aaaaa');
    }
    static navigationOptions = ({navigation, screenProps}) => ({
    });
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
                () => {
                    this.props.navigation.push('Profile')
                }
            }>
                <Text style={{color: 'white'}}>首页测试</Text>
            </TouchableOpacity>
        </View>
           
        );
    }
}
class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
        </View>
      );
    }
  }
  
const styles = StyleSheet.create({
    scroll:{
         flex:1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});
const DetailStack = createStackNavigator({
    Details: DetailsScreen,
  });