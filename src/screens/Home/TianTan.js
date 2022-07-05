import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const TianTan = () => {
  return (
    <View>
      <Details 
        img={require('../../assets/images/temple2.jpg')}
        locName={'Hong Kong, China'}
      />

      <Card2 
        locName={'Tian Tan Buddha'}
        rating={'5.0'}
        location={'Hong Kong, China'}
        time={'30 minutes'}
      />
    </View>
  )
}

export default TianTan
