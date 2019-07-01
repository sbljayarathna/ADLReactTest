import React, { Component } from 'react';
import { View } from 'react-native';

const PinItems = ({ pinLength }) => {
    let pinItems = []
    for (let i = 0; i < 4; i++) {
        if (i < pinLength) {
            pinItems.push(
                <View key={i} style={{ width: 20, height: 20, margin: 10, borderWidth: 1, borderColor: 'black', borderRadius: 15, backgroundColor: 'black' }} ></View>
            );
        } else {
            pinItems.push(
                <View key={i} style={{ width: 20, height: 20, margin: 10, borderWidth: 1, borderColor: 'black', borderRadius: 15 }} ></View>
            );
        }

    }

    return <View style={{ flexDirection: 'row' }} >{pinItems}</View>;
}

export default PinItems