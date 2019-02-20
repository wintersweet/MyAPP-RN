import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SectionList,
} from 'react-native';
import MyCell from './Custom/MyCell'

export default class ShopCar extends Component {
  render() {
    let data =  [
      {title: '品牌车', data: ['宝马','奔驰','奥迪']},
      {title: '类型', data: ['跑车', '轿车', 'SUV','面包车','商务车']},
    ];
    return (
      <View style={styles.container}>
        <SectionList
          sections={data}
          renderSectionHeader={({section}) => 
          <MyCell  title = {section.title} detailText={'去购买'}  />
          }
          renderItem={({item}) => 
          <Text style={styles.item}>{item}</Text>
          }
         
          // renderSectionFooter = {({section})=>
          // <Text style = {styles.sectionFooter}>我是底部</Text>  
          // }
          ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}>
          <Text style={{ fontSize: 16, color: '#ffffff' ,paddingTop: 7 }}>通讯录尾部</Text></View>
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 5,
  
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  sectionFooter: {
    height: 40,
    paddingTop: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'cyan',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(247,247,247,1.0)',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
  },
})