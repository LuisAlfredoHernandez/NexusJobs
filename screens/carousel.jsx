import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import BackButton from '../components/backIcon'
import JobIcon from '../assets/Iconos developer.svg'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

export default class App extends Component {

    state = {
        index: 0
    }

    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this)
    }

    _renderItem({ item }) {
        return (
            <View style={styles.itemContainer}>
                <View> 
                <JobIcon  style={styles.JobIcon} />
                </View>
                <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container} >
                <BackButton color={'#483EE8'} />
                <Carousel
                    ref={(c) => this.carousel = c}
                    data={DATA}
                    renderItem={this._renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    containerCustomStyle={styles.carouselContainer}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => this.setState({ index })}
                    useScrollView={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F7'
    },

    carouselContainer: {
        height: '100%',
        marginTop: 30
    },
    itemContainer: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        backgroundColor: 'dodgerblue'
    },
    itemLabel: {
        color: 'white',
        fontSize: 24
    },

    JobIcon: {
        height: 90,
        width: 75, 
        borderRadius: 10,
        backgroundColor:'white',
     

    }

});
