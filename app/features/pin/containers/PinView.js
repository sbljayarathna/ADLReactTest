import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import PinItems from '../components/PinItems'
import NavigationService from '../../../navigation/NavigationService'

export default class PinView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            pinLength: 0,
            savedPin: '7890',
            incorrectPinCount: 0
        };
    }

    _onKeyPress = (key) => {
        console.log(key)
        if (key == '<' && this.state.pinLength > 0) {
            this.setState({
                pinLength: this.state.pinLength - 1,
                pin: this.state.pin.slice(0, -1)
            })
        } else if (key != '<' && this.state.pinLength < 4) {
            this.setState({
                pinLength: this.state.pinLength + 1,
                pin: this.state.pin.concat(key)
            }, () => {
                console.log(this.state.pinLength, this.state.pin)
                if (this.state.pinLength == 4 && this.state.pin == this.state.savedPin) {
                    this.setState({
                        pinLength: 0
                    })
                    NavigationService.navigate('PinReset')
                } else if (this.state.pinLength == 4 && this.state.pin != this.state.savedPin) {
                    this.setState({
                        pinLength: 0,
                        pin: '',
                        incorrectPinCount: this.state.incorrectPinCount + 1
                    })
                }
            })
        }
    }

    render() {
        buttons = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['-', 0, '<']]
        rows = []
        for (let i = 0; i < 4; i++) {
            rowItem = []
            for (let j = 0; j < 3; j++) {
                if (buttons[i][j] == '-') {
                    rowItem.push(
                        <View
                            key={j}
                            style={{ width: 70, height: 70, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                        </View>
                    )
                } else {
                    rowItem.push(
                        <TouchableOpacity
                            key={j}
                            onPress={() => this._onKeyPress(buttons[i][j])}
                            style={{ width: 70, height: 70, margin: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 35 }}>
                            <Text style={{ fontSize: 20 }}>{buttons[i][j]}</Text>
                        </TouchableOpacity>
                    )
                }


            }
            rows.push(
                <View key={i} style={{ flex: 1, flexDirection: 'row' }}>
                    {rowItem}
                </View>
            )
        }


        return (
            <View style={styles.container}>
                <View style={{ flex: 2, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View><Text>Enter PIN to unlock</Text></View>
                    <PinItems pinLength={this.state.pinLength} />
                    {this.state.incorrectPinCount == 2 ? <Text>Pin incorrect. Next incorrect attempt will block you.</Text> : null}
                </View>
                <View style={styles.keyboard}>
                    {rows}
                </View>
                <View style={styles.bottom}>
                    <Text style={{ fontWeight: "bold" }}>Forgot PIN?</Text>
                    <TouchableOpacity onPress={() => this._onResetPressed()}>
                        <Text style={{ padding: 5 }}>Tap here to reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _onResetPressed = () => {
        NavigationService.navigate('PinReset')
    }
}
