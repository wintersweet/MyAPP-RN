import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions
} from 'react-native'

let { width, height } = Dimensions.get('window')

export default class MyAlertView extends Component {
    // 定义静态的属性,可以通过this.props.alertTitle传值
    static propTypes = {
      // alertTitle: PropTypes.string,      //标题
      // alertContent: PropTypes.string,  //文本内容
      // cancleName: PropTypes.string,     //取消
      // conformName: PropTypes.string,     //确定
    }

    constructor (props) {
      super(props)
      this.state = ({
        isShow: false,
        conformName: '确定',
        cancleName: '取消'
      })
    }

    render () {
      if (!this.state.isShow) {
        return null
      } else {
        return (
          <Modal
            visible={this.state.isShow}
            // 显示是的动画默认none
            // 从下面向上滑动slide
            // 慢慢显示fade
            // animationType={'fade'}
            onRequestClose={() => {

            }}
          >
            <View style={styles.containerStyle}>
              {
                this.renderMongoliaView()
              }
              {
                this.renderAlertView()
              }
            </View>
          </Modal>
        )
      }
      ;
    }

    // 蒙层背景
    renderMongoliaView () {
      return (
        <TouchableOpacity style={styles.bgContainViewStyle}
          onPress={() => this.hideAlertView()}>
          <View />
        </TouchableOpacity>
      )
    }

    // 绘制Alert视图
    renderAlertView () {
      return (
        <View style={styles.alertViewStyle}>
          <View style={styles.titleContainerStyle}>
            <Text style={styles.titleStyle}>{this.props.alertTitle}</Text></View>
          <View style={styles.contentContainerStyle}>
            <Text style={styles.contentStyle}>{this.props.alertContent}</Text></View>
          <View style={styles.horizontalLineStyle} />

          <View style={styles.btnContainerStyle}>
            <TouchableOpacity onPress={() => {
              this.dissmissDialog(0)
              this.dissmissDialog()
              this.props.comformClik ? this.props.comformClik() : null
            }} style={styles.btnStyle}>
              <Text style={{ fontSize: 16, color: '#157efb', fontWeight: '700' }}>{this.props.conformName}</Text>
            </TouchableOpacity>

            <View style={styles.verticalLineStyle} />

            <TouchableOpacity onPress={() => {
              this.dissmissDialog(0)
              this.dissmissDialog()
              this.props.cancelClick ? this.props.cancelClick() : null
            }} style={styles.btnStyle}>
              <Text style={{ fontSize: 16, color: '#157efb' }}>{this.props.cancleName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    hideAlertView () {
      this.setState({
        isShow: false
      })
    }

    // 显示
    showDialog () {
      this.setState({
        isShow: true
      })
    }

    // 消失弹窗，最好delay0.3秒
    dissmissDialog = (delay) => {
      let duration = delay
      this.timer = setTimeout(() => {
        this.setState({
          isShow: false
        })
        this.timer && clearTimeout(this.timer)
      }, duration * 1000)
    }
}

const styles = StyleSheet.create({
  bgContainViewStyle: {
    height: height,
    width: width,
    position: 'absolute',
    opacity: 0.4,
    backgroundColor: 'rgb(0,0,0)'
  },
  containerStyle: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center'
  },
  alertViewStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    height: 130,
    marginLeft: 50,
    marginRight: 50,
    borderColor: 'lightgrey'
  },
  titleContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    height: 30
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '900'
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  contentStyle: {
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 14
  },
  horizontalLineStyle: {
    height: 0.5,
    backgroundColor: 'lightgrey'
  },
  btnContainerStyle: {
    flexDirection: 'row',
    width: width - 100,
    height: 48
  },
  verticalLineStyle: {
    height: 50,
    backgroundColor: 'lightgrey',
    width: 0.5
  },
  btnStyle: {
    flex: 1,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
