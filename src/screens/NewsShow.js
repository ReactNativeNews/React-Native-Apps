import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, Text} from 'react-native'
export default class NewsShow extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
           <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
               <Text>
                   Hello
               </Text>
           </View>
        )
    }
}
