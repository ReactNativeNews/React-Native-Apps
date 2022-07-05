import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const WelcomeScreen = () => {
    const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={require('../assets/images/bg2.jpg')} style={styles.image}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
                Explore the world
            </Text>

            <Text style={[styles.text, {
                fontFamily: 'reost-medium',
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40
            }]}>
                Discover great travel experiences
                {'\n'}
                in your country and beyond
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
                <Text style={[styles.text, {
                    fontFamily: 'reost-bold',
                    fontSize: 18,
                    color: 'black',
                    top: 0,
                    alignSelf: 'center'
                }]}>
                    Get started
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.text, {
                    fontFamily: 'reost-medium',
                    fontSize: 15,
                    color: 'white',
                    top: 90,
                    alignSelf: 'center'
                }]}>
                    Sign in
                </Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: SCREENHEIGHT-(SCREENHEIGHT/3.2),
        width: SCREENWIDTH,
    },

    textContainer: {
        height: SCREENHEIGHT/2.8,
        width: SCREENWIDTH,
        backgroundColor: 'black',
        top: SCREENHEIGHT-(SCREENHEIGHT/2.8),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    text: {
        fontFamily: 'pd-ebi',
        fontSize: 38,
        color: 'white',
        alignSelf: 'center',
        top: 20
    },

    button: {
        backgroundColor: 'white',
        width: '80%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        top: 70,
    }
})