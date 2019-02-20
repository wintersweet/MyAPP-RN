import React, {Component} from 'react';
import {
    View,Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,SectionList,ScrollView,
} from 'react-native';
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
import MyAlertView from './Custom/MyAlert'
import Button from './Custom/Button'
import MyCell from './Custom/MyCell'
export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
          <ScrollView style = {styles.scrollStyle}>
            <View style = {styles.containerStyle}>
                {/* {this._renderAlert() }
                <Text style={styles.welcome} onPress={() => this._show()}>
                    点我->弹出框
                </Text> */}
                <View  style = {styles.sectionStyle} >
                  <MyCell title = {'扫一扫'}  detailText={''} />
                </View>
                <View style = {styles.sectionStyle} >
                  <MyCell  title = {'省流量模式'} isSwitch ={true}  /> 
                  <MyCell  title = {'我的订单'}  detailText={'10个'} /> 
                  <MyCell title = {'邀请好友'} />
                  <MyCell title = {'清空缓存'} detailText={'1.8M'} />
                </View>
                <View style = {styles.sectionStyle} >
                  <MyCell  title = {'问卷调差'}  /> 
                  <MyCell  title = {'支付帮助'}  /> 
                  <MyCell title = {'关于我们'} />
                  <MyCell title = {'精品应用'} detailText={''} />
                </View>
                {/* {this._renderCommonCell()} */}
                {/* <Button title={'登录'} /> */}
            </View>

          </ScrollView>
      );
    }
    _renderAlert() {
      return(
          <MyAlertView ref='alert' conformName={'确定1'} cancleName={'取消'}
                       alertTitle={'温馨提示'} alertContent={'提醒的内容接啊哈哈哈。。。'}
                       comformClik={() => {
                          //  this._confirm()
                       }}
                       dissmissClick={() => {
                           this._cancel()
                       }}
          />
      );
  }
  _renderCommonCell(){
    return(
     <Text> 111</Text>
    );

 }

  _show = () => {
      this.refs.alert && this.refs.alert.showDialog();
  }

  _confirm = () => {
      alert('点击了确定')
  };

  _cancel = () => {
      alert('点击了取消')
  }

}
  const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:screenWidth,
        height:100,
        backgroundColor:'#999999',
        borderBottomWidth: 0.5,
        borderBottomColor:'powderblue',
        paddingLeft:15,
        marginTop:10,
      },
      image:{
        width:50,
        height:50,
        marginLeft:10,
      },
      containerStyle: {
        flex: 1,
         backgroundColor: '#e8e8e8',
      },
     scrollStyle: {
          paddingBottom: 20,

     }, 
      sectionStyle:{
          marginTop:20,
      }

  })