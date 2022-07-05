import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const Boseman = () => {
  return (
    <View>
      <Details 
        img={require('../../assets/images/reservoir.jpg')}
        locName={'Montana, USA'}
      />

      <Card2 
        locName={'Bozeman Reservoir'}
        rating={'5.0'}
        location={'Montana, USA'}
        time={'30 minutes'}
      />
    </View>
  )
}

export default Boseman
