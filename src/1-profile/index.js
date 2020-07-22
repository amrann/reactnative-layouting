import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, StatusBar } from 'react-native'  
import Header from './components/header'
import Stats from './components/stats'
import About from './components/about'
import Location from './components/location'
import Photos from './components/photos'

export default class index extends Component {
    state = {
        user: {},
        isLoading: true
    }

    async componentDidMount() {
        try {
            let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&info")
            let users = await res.json()

            this.setState({user: users.results[0]}, () => {
                this.setState({isLoading: false})
            })
        } catch(err) {
            console.log(err)
        }
    }
    
    render() {
        if(this.state.isLoading) {
            return (
                <ScrollView style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <ActivityIndicator size="large" />
                </ScrollView>
            )
        }
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header user={this.state.user}/>
                <Stats />
                <About />
                <Location />
                <Photos />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})

