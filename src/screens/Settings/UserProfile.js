import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconContainer from '../../components/IconContainer';
import SettingsCard from '../../components/SettingsCard';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.iconContainer}>
          <Image source={require('../../assets/images/icon.jpg')} style={styles.img} />
          <Icon name='add-circle' size={35} color='black' style={styles.check} />
        </View>

        <Text style={styles.text}>
            Nana Kofi Mantey
        </Text>
      </View>

      <View style={styles.lower}>
        <SettingsCard 
          iconName='person-circle'
          setting='Profile'
        />

        <SettingsCard 
          iconName='lock-closed'
          setting='Security'
        />

        <SettingsCard 
          iconName='shield-checkmark'
          setting='Access Rights'
        />

        <SettingsCard 
          iconName='language'
          setting='Language'
        />
      </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: SCREENHEIGHT,
  },

  text: {
    fontSize: 25,
    fontFamily: 'reost-bold',
    color: 'black',
    alignSelf: 'center',
    top: 60,
  },

  upper: {
    height: SCREENHEIGHT/3.5,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  iconContainer: {
    height: 100,
    width: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    top: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    height: 80,
    width: 80,
  },

  check: {
    position: 'absolute',
    bottom: -5,
    right: -12,
  },

  lower: {
    height: SCREENHEIGHT-(SCREENHEIGHT/3.5),
    backgroundColor: 'black',
    padding: 10,
  }
})