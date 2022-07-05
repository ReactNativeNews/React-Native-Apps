import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon2 from 'react-native-vector-icons/Ionicons';

const Card = ({ img, locName, rating, location, detailsPage }) => {     
  return (
    <View>
      <TouchableOpacity
        onPress={detailsPage}
      >
        <View>
            <Image source={img} style={styles.img} />
        </View>

        <View style={styles.align}>
            <Text style={styles.text}>
                {locName}
            </Text>

            <View style={styles.rating}>
                <Icon2 name={'star'} size={15} color='yellow' />
                <Text style={styles.ratingText}> {rating} </Text>
            </View>
        </View>

        <View style={[styles.align, {justifyContent: null, left: 5}]}>
            <Icon2 name={'location'} size={15} color='white' />
            <Text style={[styles.text, {
                fontSize: 15,
                padding: 0,
                color: 'white',
            }]}> {location} </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    img: {
        resizeMode: 'cover',
        width: 260,
        height: 330,
        borderRadius: 20, 
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

    align: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250
    },
})