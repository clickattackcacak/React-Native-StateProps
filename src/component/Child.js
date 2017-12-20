import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class Child extends Component {

    state = {
        bColor: this.props.bColor || 'yellow',
        disabledChangeBorderColor: this.props.changeBorderColor ? false : true, // check if this prop exists
    }

    render() {
        return (
            <View style={[styles.main, { backgroundColor: this.state.bColor }]}>
                <Text style={styles.text}>CHILD</Text>
                <Text>{this.props.v1}</Text>
                <Text>{this.props.v2}</Text>
                <Text>{this.props.v3}</Text>
                <Text>{this.props.v4}</Text>
                <TouchableHighlight onPress={() => this.state.bColor == 'yellow' ? this.setState({ bColor: 'orange' }) : this.setState({ bColor: 'yellow' })}>
                    <View style={styles.button}>
                        <Text>Change background Color of this Child</Text>
                    </View>
                </TouchableHighlight>

                {/* SHOW THIS BUTTON ON EVERY CHILD, BUT DISABLE IT IF IT DOESN'T HAVE this.props.changeBorderColor */}
                <TouchableOpacity disabled={this.state.disabledChangeBorderColor} onPress={() => this.props.changeBorderColor()}>
                    <View style={[styles.button, {opacity: this.state.disabledChangeBorderColor ? 0.5 : 1}]}>
                        <Text>Change color of Parent</Text>
                    </View>
                </TouchableOpacity>

                {/* ONLY SHOW THIS BUTTON IF IT HAS PROPS changeInParent */}
                {this.props.changeVrednost4 &&
                    <TouchableHighlight onPress={() => this.props.changeVrednost4() }>
                        <View style={styles.button}>
                            <Text>Only this child can change PARENT state of vrednost4</Text>
                        </View>
                    </TouchableHighlight>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        borderColor: 'red',
        borderWidth: 5,
        padding: 10,
        margin: 10,
        height: 220,
        marginBottom: 20
    },
    text: {
        color: 'red'
    },
    button: {
        backgroundColor: '#77e6ff',
        padding: 5,
        borderColor: 'blue',
        borderRadius: 10,
        margin: 5
    }

});