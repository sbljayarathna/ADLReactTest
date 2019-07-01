import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image,Alert } from 'react-native';
import styles from './styles'
import NavigationService from '../../../navigation//NavigationService'

export default class PinResetView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin1: '', pin2: ''
        };
    }

    _onResetPress = () => {
        console.log("Btn Pressed")
        if(this.state.pin1=='' || this.state.pin2==''){
            Alert.alert("Pin cannot empty")
        }
        else if(this.state.pin1==this.state.pin2){
            console.log("Success")
            NavigationService.goBack()
        }else{
            Alert.alert("Pin mismatch")
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 80, height: 80, borderWidth: 1, borderColor: 'black', borderRadius: 40, backgroundColor: 'white' }} >
                        <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../../assets/key.jpg')} />
                    </View>
                </View>
                <View style={{ flex: 2, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>Reset your PIN</Text>
                    <Text>Enter PIN</Text>
                    <TextInput style={{ width: '80%' }} underlineColorAndroid="black"
                        onChangeText={(pin1) => this.setState({ pin1: pin1 })}
                    />
                    <Text>Enter PIN again</Text>
                    <TextInput style={{ width: '80%' }} underlineColorAndroid="black"
                        onChangeText={(pin2) => this.setState({ pin2: pin2 })} />
                    <Button style={{ width: '80%' }} title='Reset' onPress={() => this._onResetPress()} />
                </View>
            </View>
        );
    }
}
