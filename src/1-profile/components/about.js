import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { warnas, gs } from '../../warna'

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.about}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 23
    },
    about: {
        fontSize: 15,
        fontWeight: "500",
        color: warnas.darkHl,
        marginTop: 8,
        lineHeight: 22
    }
})
