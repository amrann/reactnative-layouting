import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { gs } from '../../warna'

const dataPhotos = [
    require("../assets/travel1.jpg"),
    require("../assets/travel2.jpg"),
    require("../assets/travel3.jpg"),
    require("../assets/travel4.jpg"),
    require("../assets/travel5.jpg"),
    require("../assets/travel6.jpg"),
    require("../assets/travel7.jpg"),
    require("../assets/travel8.jpg")
]

export default function photos() {
    return (
        <View style={[gs.sectionContainer, {marginTop: 8}]}>
            <Text style={[gs.sectionTitle, {color: "#fff"}]}>MY PHOTOS</Text>
            <View style={styles.photosContainer}>
                {dataPhotos.map((p, index) => {
                    return <Image 
                                source={p} 
                                key={index} 
                                style={[styles.foto, {marginRight: (index + 1 % 3 === 0 ? 0 : 12)}]} 
                            />
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    photosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16
    },
    foto: {
        width: 125,
        height: 125,
        marginBottom: 12,
        borderRadius: 8
    }
})
