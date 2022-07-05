import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const Rajasthan = () => {
  return (
    <View>
      <Details 
        img={require('../../assets/images/reservoir2.jpg')}
        locName={'Rajasthan, India'}
      />

      <Card2 
        locName={'Rajasthan Lake'}
        rating={'5.0'}
        location={'Rajasthan, India'}
        time={'30 minutes'}
      />
    </View>
  )
}

export default Rajasthan
