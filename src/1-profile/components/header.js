import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { warnas, gs } from '../../warna'

export class header extends Component {
    render() {
        const user = this.props.user
        const name = `${user.name.first} ${user.name.last}`
        return (
            // <LinearGradient colors={[warnas.orange, warnas.pink]} start={[0, 0]} end={[1, 1]}>
            <View style={{backgroundColor: warnas.orange}}>
                <View style={{marginHorizontal: 32, paddingVertical: 64}}>
                    <View style={gs.rowBetween} >
                        <Ionicons name="md-arrow-back" size={32} color={warnas.text}/>
                        <Entypo name="dots-three-vertical" size={24} color={warnas.text}/>
                    </View>
                    <View style={styles.imageContainer}>
                        <View>
                            <View style={styles.check}>
                                <Ionicons name="md-checkmark" size={20} color={warnas.orange}/>
                            </View>
                            <Image source={{uri: user.picture.large}} style={{width: 100, height: 100, borderRadius: 32}}/>
                        </View>
                    </View>
                    <View style={[gs.center, {marginVertical: 12}]}>
                        <Text style={gs.title}>{name}</Text>
                        <Text style={[gs.subTitle, {marginTop: 8}]}>Developer</Text>

                        <TouchableOpacity style={styles.follow}>
                            <Entypo name="plus" size={20} color="rgba(255, 255, 255, 0.6)"/>
                            <Text style={styles.followText}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default header

const styles = StyleSheet.create({
    imageContainer: {
        ...gs.center,
        marginTop: 16,
        shadowColor: warnas.darkBg,
        shadowOffset: {height: 3, width: 1},
        shadowOpacity: 0.5
    },
    check: {
        ...gs.center,
        backgroundColor: warnas.text,
        borderRadius: 100,
        width: 32,
        height: 32,
        // shadowColor: warnas.darkBg,
        // shadowOffset: {height: 100, width: 100},
        // shadowOpacity: 100,
        zIndex: 1,
        position: "absolute",
        right: -16,
        bottom: 16
    },
    follow: {
        ...gs.button,
        ...gs.rowCenter,
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginTop: 16,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 2
    },
    followText: {
        fontSize: 16,
        color: warnas.text,
        fontWeight: "600",
        marginLeft: 4
    }
})
