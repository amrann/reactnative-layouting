import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { warnas, gs } from '../../warna'

export default function location() {
    return (
        <View style={styles.container}>
            <View style={{width: 75, height: 75}}>
                <Image 
                    source={require("../assets/location.png")} 
                    style={{flex: 1, width: 45, height: 45}}
                    resizeMode="center" 
                />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.location}>Maros, Sulawesi Selatan</Text>
                <Text style={styles.distance}>227km away</Text>
            </View>
            <Entypo name="chevron-right" size={24} color={warnas.darkHl}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        backgroundColor: warnas.lightBg,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    location: {
        fontSize: 18,
        color: warnas.text,
        fontWeight: "500"
    }, 
    distance: {
        ...gs.smallText,
        color: warnas.darkHl,
        marginTop: 4,
        textTransform: "uppercase"
    }
})
