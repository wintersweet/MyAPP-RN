import React, { Component } from 'react';  
import {  
  StyleSheet,  
  Text,  
  TouchableOpacity,  
} from 'react-native';  
  
// 这里特别注意 export default 关键字，只有加上关键字才能在其他文件引用本文件  
// 注意class Button 是大写，与Button.js保持一致  
export default class Button extends Component { 
  constructor(props){
    super(props)
    this.state = ({
      title:'按钮1',
    })
  }
  render() {  
    return (  
      // 这层View只是在刚刚调整button的位置需要用到，单独一个button不需要考虑位置（由使用button的区域考虑），干掉  
      // <View style = { styles.container }>  
        <TouchableOpacity style = { styles.button }>  
          <Text style = { styles.btText }> { this.props.title ? this.props.title:'默认值' } </Text>  
        </TouchableOpacity>  
      // </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  button: {  
    height: 30,  
    width: 200,  
    backgroundColor: '#0f0',  
    borderRadius: 10,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  btText: {  
    color: '#fff',  
    fontSize: 16,  
  },  
});