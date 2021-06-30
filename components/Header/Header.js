import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header(){


        // const parsedIcon = parseIconFromClassName('fab fa-apple')

        return (
            <View>
                <Text style={styles.mainHeader}> Weather For Cast </Text>

            </View>
        )
}

const styles = StyleSheet.create({
    mainHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffb37b',
        marginTop: 50,

    }
})