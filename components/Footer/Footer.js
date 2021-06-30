import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

export default function Footer() {

    const { s: Style } = new BootstrapStyleSheet()

    return (

        <View style={styles.mainContainer}>

            <Text style={styles.heading}>Additional Information</Text>

            <Text style={styles.container}>

                <Text style={{ width: '25%' }}>Wind</Text>
                <Text style={{ width: '25%', paddingRight: '10px', textAlign: "right" , color: "#6c757d"}}>12m/h</Text>
                <Text style={{ width: '25%', paddingLeft: '10px' }}>Humidity</Text>
                <Text style={{ width: '25%', textAlign: "right", color: "#6c757d"}}>55%</Text>


            </Text>

            <Text style={styles.container}>

                <Text style={{ width: '25%' }}>Visibility</Text>
                <Text style={{ width: '25%', paddingRight: '10px', textAlign: "right", color: "#6c757d"}}>25km</Text>
                <Text style={{ width: '25%', paddingLeft: '10px' }}>UV</Text>
                <Text style={{ width: '25%', textAlign: "right", color: "#6c757d"}}>1</Text>


            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer:{
        margin: '20px'

    },
    heading: {
        fontSize: 18,
        color: '#ffb37b',

    },
    container:{
        display: 'flex',
        marginLeft: "5px",
        marginRight: "5px",
        marginTop: "20px",
        marginBottom: "20px",
        color: "white"
    }
})