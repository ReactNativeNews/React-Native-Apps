import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

const Card2 = ({ locName, rating, location, time }) => {
  return (
      <View style={styles.container}>
        <View style={styles.align}>
            <Text style={styles.text}>
                {locName}
            </Text>

            <View style={styles.rating}>
                <Icon name={'star'} size={15} color='yellow' />
                <Text style={styles.ratingText}> {rating} </Text>
            </View>
        </View>

        <View style={[styles.align, {justifyContent: null, left: 5}]}>
            <Icon name={'location'} size={15} color='white' />
            <Text style={[styles.text, {
                fontSize: 13,
                top: 2,
                padding: 0,
                color: 'white',
            }]}> {location} </Text>
        </View>

        <View style={[styles.align, {justifyContent: null, left: 5, top: 10}]}>
            <Icon name={'time'} size={15} color='white' />
            <Text style={[styles.text, {
                fontSize: 13,
                top: 2,
                padding: 0,
                color: 'white',
            }]}> {time} </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity style={styles.button}>
                <Text style={[styles.text, {
                    fontSize: 15,
                }]}>
                    See on the map
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {
                width: '16%',
            }]}>
                <Icon name='bookmark' size={20} color='white' />
            </TouchableOpacity>
        </View>
      </View>
  )
}

export default Card2

const styles = StyleSheet.create({
    align: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
    },

    container: {
        backgroundColor: 'grey',
        opacity: 0.7,
        top: 560,
        height: 160,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 20
    },

    text: {
        fontFamily: 'reost-semibold',
        color: 'white',
        fontSize: 18,
        padding: 10,
    },

    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    ratingText: {
        fontFamily: 'reost-semibold',
        color: 'white',
        fontSize: 12,
        top: 2
    },

    button: {
        backgroundColor: 'black',
        width: '70%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        top: 20,
        left: -5
    }
})