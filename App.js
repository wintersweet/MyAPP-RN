
import React from 'react'
import { Button, Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

// 展示的页面
import home from './src/Home/Home'
import type from './src/Types/Type'
import shopCar from './src/Shops/ShopCar'
import mine from './src/Mine/Mine'
import details from './src/Details'
import test from './src/Test'
import homeTest from './src/Component/HomeTest'
// ***导航和Tab***/
const HomeStack = createStackNavigator(
  {
    Base: home,
    Profile: details,
    testPush: homeTest
  },
  {
    defaultNavigationOptions: {
      title: '首页',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0080F4'
      }
    },
    //  navigationOptions: ({navigation}) => StackOptions({navigation})
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/ic_home.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      )
    }
  }
)
const TypeStack = createStackNavigator(
  {
    Base: type,
    Profile: details
  },
  {
    defaultNavigationOptions: {
      title: '分类',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0080F4'
      }
    },
    navigationOptions: {
      tabBarLabel: '分类',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/ic_type.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      )
    }
  }
)
const ShopStack = createStackNavigator(
  {
    Base: shopCar,
    Profile: details
  },
  {
    defaultNavigationOptions: {
      title: '商店',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0080F4'
      }
    },
    navigationOptions: {
      tabBarLabel: '商店',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/ic_shop_car.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      )
    }
  }
)
const MineStack = createStackNavigator(
  {
    Base: mine,
    Profile: details
  },
  {
    defaultNavigationOptions: {
      title: '我的',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0080F4'
      }
    },

    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/ic_me.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      )
    }
  }
)
const StackOptions = ({ navigation }) => {
  console.log(navigation)
  let { state, goBack } = navigation

  // 用来判断是否隐藏或显示header
  const visible = state.params.isVisible
  let header
  if (visible === true) {
    header = null
  }
  const headerStyle = { backgroundColor: '#4ECBFC' }
  const headerTitle = state.params.title
  const headerTitleStyle = { fontSize: FONT_SIZE(20), color: 'white', fontWeight: '500' }
  const headerBackTitle = false
  const headerLeft = (
    <Button
      isCustom
      customView={
        <Icon
          name="ios-arrow-back"
          size={3}
          color="white"
          style={{ marginLeft: 13 }}
        />
      }
      onPress={() => { goBack() }}
    />
  )
  return { headerStyle, headerTitle, headerTitleStyle, headerBackTitle, headerLeft, header }
}
// 隐藏Tabbar
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  return {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/ic_home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
    tabBarVisible
  }
}
const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Type: { screen: TypeStack },
  ShopCar: { screen: ShopStack },
  Mine: { screen: MineStack }
}, {
  abBarOptions: {
    activeTintColor: '#e91e63'
  },
  /// / tabBar 显示的位置 ，android 默认是显示在页面顶端的
  tabBarPosition: 'top',
  animationEnabled: false, // 切换页面时是否有动画效果
  swipeEnabled: true, // 是否可以左右滑动切换tab 如果设置这个属性，这事例中下面设置的按钮 Go back home | Go to notifications就不好使了
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  // 第一次加载时，显示的tab
  initialRouteName: 'Home',
  tabBarOptions: {
    // activeTintColor: '#666', // 文字和图片选中颜色
    // inactiveTintColor: '#999', // 文字和图片未选中颜色
    scrollEnabled: false,
    indicatorStyle: {
      height: 2 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    style: {
      // backgroundColor: '#ff6449', // TabBar 背景色
      // height: 50,
    },
    labelStyle: {
      fontSize: 12, // 文字大小
      paddingTop: 0,
      marginTop: -2
    },
    tabStyle: {
      marginTop: -2,
      height: 50
    }
  }
}
)
export default createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 28,
    resizeMode: 'contain'

  }
})
//* **333***/
// import React from 'react';
// import {Platform, View, Text, Button ,Image} from 'react-native';
// import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
// // Version can be specified in package.json

// class LogoTitle extends React.Component{
//   render(){
//     return(
//      <Image  source={require('./images/ic_me.png')}
//      style = {{width:30,height:30}}
//      />
//     );
//   }
// }
// class HomeScreen extends React.Component {
//   static navigationOptions =({navigation}) => {
//     return {
//        title: 'Home',
//        headerTitle:<LogoTitle/>,
//        headerRight: (
//       <Button
//         // onPress = {()=>alert('右侧按钮')}
//          title ='+1'
//          color = {Platform.OS == "ios" ?'#fff':null}
//          onPress = {navigation.getParam('increaseCount')}
//       />
//     )
//     }
//   };
//   componentWillMount(){
//     this.props.navigation.setParams({increaseCount:this._increaseCount})
//   }
//   state = {
//     count :0
//   };
//   _increaseCount = ()=>{
//     this.setState({count:this.state.count +1});
//   };
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Text> count:{this.state.count}</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details',{
//             itemId:86,
//             otherParam:'anything'
//           })}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   // static navigationOptions = {
//   //   title:'Details',
//   // };
//   static navigationOptions = ({navigation,navigationOptions}) =>{
//     console.log(navigationOptions);
//        return{
//          title:navigation.getParam('otherParam','A Nested'),
//          //覆盖共享的navigationOptions
//          headerStyle:{
//            backgroundColor:navigationOptions.headerTintColor,
//          },
//          headerTintColor:navigationOptions.headerStyle.backgroundColor
//        };
//   };
//   render() {
//      /* 2. Get the param, provide a fallback value if not available */
//      const { navigation } = this.props;
//      const itemId = navigation.getParam('itemId', 'NO-ID');
//      const otherParam = navigation.getParam('otherParam', 'some default value');

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId:{JSON.stringify(itemId)}</Text>
//         <Text>otherParam:{JSON.stringify(otherParam)}</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//          <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//           <Button
//           title="update this title"
//           onPress={() => this.props.navigation.setParams({otherParam:'Updated!!'})}
//          />
//       </View>
//     );
//   }
// }
// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     /* The header config from HomeScreen is now here */
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
