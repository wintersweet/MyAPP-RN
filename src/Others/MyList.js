import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SectionList
} from 'react-native'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width
export default class MyList extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      title: '默认值',
      isSwitch: true,
      detailText: 'detail...',
      isOn: true
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.props.dataTest}
          renderSectionHeader={({ section }) =>
            <Text> 测试 </Text>
          }
          renderItem={({ item }) =>
            <Text style={styles.item}> {item} </Text>
          }

          // renderSectionFooter = {({section})=>
          // <Text style = {styles.sectionFooter}>我是底部</Text>
          // }
          ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 44 }}>
            <Text style={{ fontSize: 16, color: '#ffffff', paddingTop: 7 }}>通讯录尾部</Text>
          </View>
          }
          keyExtractor={(item, index) => index}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  containStyle: {
  }
})
