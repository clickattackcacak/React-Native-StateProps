import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Child from './Child.js';

export default class Parent extends Component {

    state = {
        vrednost1: 'vrednost1',
        vrednost2: 'vrednost2',
        vrednost3: 'vrednost3',
        vrednost4: '',
        color: 'blue'
    }

    changeVrednost4() {
        this.state.vrednost4 == '' ? this.setState({ vrednost4: 'vrednost4' }) : this.setState({ vrednost4: '' });
    }

    changeBorder() {
        this.state.color == 'blue' ? this.setState({ color: 'green' }) : this.setState({ color: 'blue' });
    }



    render() {
        console.log('render Parenta');
        return (
            <View>
                <Text style={[styles.text, { color: this.state.color }]}>PARENT</Text>
                <ScrollView style={[styles.main, { borderColor: this.state.color }]}>
                    <View style={styles.childCont}>
                        <Child v1={this.state.vrednost1} />
                        <Child v1={this.state.vrednost1} v2={this.state.vrednost2} v4={this.state.vrednost4} />
                        <Child v1={this.state.vrednost1} v2={this.state.vrednost2} v3={this.state.vrednost3} />
                        <Child v4={this.state.vrednost4} changeBorderColor={() => this.changeBorder()} />
                        <Child v1={this.state.vrednost1} v2={this.state.vrednost2} v3={this.state.vrednost3} v4={this.state.vrednost4} />
                        <Child v4={this.state.vrednost4} changeVrednost4={() => this.changeVrednost4()} />
                        <Child bColor={'green'} />
                        <Child bColor={'blue'} />

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {

        marginBottom: 100,
        borderWidth: 5,
        padding: 10
    },
    text: {
        fontSize: 30
    },
    childCont: {
        margin: 10
    }

});