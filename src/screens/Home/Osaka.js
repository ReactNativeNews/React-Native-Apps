import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const Osaka = () => {
  return (
    <View>
      <Details 
        img={require('../../assets/images/temple.jpg')}
        locName={'Osaka, Japan'}
      />

      <Card2 
        locName={'Osaka Castle'}
        rating={'5.0'}
        location={'Osaka, Japan'}
        time={'30 minutes'}
      />
    </View>
  )
}

export default Osaka
