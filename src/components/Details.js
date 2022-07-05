import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import IconContainer2 from './IconContainer2';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Details = ({ img, locName }) => {
  return (
    <View style={{flex:1}}>
      <Image source={img} style={styles.image} />

      <View style={styles.top}>
          <IconContainer2 
            iconName={'arrow-left'}
          />

          <Text style={styles.text}>
            Region
            {'\n'}
            {locName}
          </Text>

          <IconContainer2
            iconName={'info'}
          />
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: SCREENWIDTH,
    height: SCREENHEIGHT,
  },

  top: {
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    width: SCREENWIDTH,
  },

  text: {
    fontFamily: 'reost-semibold',
    fontSize: 15,
    color: 'black',
    top: 10
  },
})