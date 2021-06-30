import React, { Component } from 'react'
import {StyleSheet, Text, View, ImageBackground} from 'react-native'
import Header from "../Header/Header"
import Body from "../Body/Body"
// import Footer from "../Footer/Footer"

export default class App1 extends Component {
    render() {
        return (
            <View style={Style.container}>

<ImageBackground
          resizeMode={'center'}
          style={{flex: 1}} 
          source={require('../../assets/img/bg.png')}
        >
          {/* <ScrollView>
          </ScrollView> */}

                <Header />
                <Body />
                {/* <Footer /> */}
        </ImageBackground>

            </View>
        )
    }
}

const Style = StyleSheet.create({
    container:{
        // flex: 1,
        margin: 0,
        height: "100%",
        backgroundColor: "#56385a",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        // backgroundAttachment: "fixed",


    }
})