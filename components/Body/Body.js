import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    // faCoffee,
    // faCloud,
    // faCloudSun,
    // faCloudSunRain,
    faSun,
    faCloudShowersHeavy,
    faMoon,

} from '@fortawesome/free-solid-svg-icons'


export default function Body() {

    // const { s: Style } = new BootstrapStyleSheet()


    return (
        <View>
            {/* <Text style={{display: "block", fontFamily: "Ariel", height: "100%", border: "1px solid black"}}> */}

            <View>
                <Text style={styles.container}>


                    <FontAwesomeIcon icon={faSun} width={70} color="yellow" />
                    <Text style={{ margin: "auto", fontSize: 32, paddingBottom: 10 }}>31, 9</Text>
                    <Text>Karachi, Pakistan</Text>
                </Text>
            </View>

            <Card icon={faCloudShowersHeavy} color={'white'} header={"Today"}/>
            <Card icon={faSun} color={'yellow'} header={"Tomorrow"}/>
            <Card icon={faMoon} color={'skyblue'} header={"After Tomorrow"}/>



            {/* </Text> */}
        </View>
    )
}


function Card({icon, color, header}) {
    return (
        <View>
            <Text>
                <Text style={styles.heading}>{header}</Text>
            <Text style={styles.container1}>


                <Text>18: 00</Text>

                <FontAwesomeIcon icon={icon} style={{ margin: "auto" }} width={100} color={color} />
                <Text>12</Text>
            </Text>
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    heading:{
        textAlign: 'center',
        color: "white",
        fontWeight: 100,
        fontSize: 20,
        fontWeight: "bold",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',

        borderWidth: 1,
        borderColor: 'white',
        borderStyle: "solid",
    },
    container: {
        color: "white",
        padding: 22,
        height: 200,
        textAlign: 'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: '100',



    },
    container1: {
        margin: "20px",
        padding: "15px",
        height: "200px",
        textAlign: 'center',
        backgroundColor: "#4a304d",
        borderRadius: 3,

        // boxShadow: 0 '20px 25px' `-5px` `rgb(0 0 0 / 10%)`, 0 10px 10px -5px rgb(0 0 0 / 4%),
        // box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;
        
        shadowColor: "black",
        shadowOffset: {
                width: 20,
                height: 25
        },
        shadowOpacity: -5,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",


    }
})