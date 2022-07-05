import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const IconContainer = ({ iconName, bgColor}) => {
  return (
    <View style={styles.iconContainer}>
      <Icon name={iconName} color={'white'} size={20} />
    </View>
  )
}

export default IconContainer

const styles = StyleSheet.create({
    iconContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 45,
        height: 45,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white'
    },
})