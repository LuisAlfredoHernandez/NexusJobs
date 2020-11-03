import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, StyleSheet, FlatList } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import Carousel from 'react-native-snap-carousel';
import BackButton from '../components/backIcon'
import JobIcon from '../assets/Iconos developer.svg'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);


export default function App({ navigation }) {

    const [index, setIndex] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        setData(navigation.getParam('data'))

    })

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.JobIconContainer}>
                    <JobIcon style={styles.JobIcon} />
                </View>
                <Text style={styles.itemLabel}>{` ${item.data[0].rol}`}</Text>
                <View style={styles.divisionLineContainer} >
                    <Text style={styles.divisionLine}> </Text>
                </View>
                <View style={styles.descriptionContainer} >
                    <Text style={styles.textHeader}>Descripción de empleo</Text>
                    <Text style={styles.descriptionText}>{item.data[0].longDescription} </Text>
                </View>
                <View style={styles.divisionLineContainer} >
                    <Text style={styles.divisionLine}> </Text>
                </View>
                <View style={styles.descriptionContainer} >
                    <Text style={styles.textHeader}>Destalles de empleo</Text>
                    <FlatList data={item.data[0].details} keyExtractor={(item, index) => item + index} renderItem={({ item }) => <Text style={styles.flatListText} keyExtractor={item + 1}>{`\u2022 ${item}`}</Text>} />
                </View>
            </View>
        );
    }


    return (
        <View style={styles.container} >
            <BackButton color={'#483EE8'} />
            <Carousel
                data={data}
                renderItem={_renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                inactiveSlideShift={0}
                onSnapToItem={(index) => setIndex({ index })}
                useScrollView={true}
            />
        </View>
    );
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
        position: 'relative',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    itemLabel: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 8
    },

    JobIconContainer: {

        borderColor: '#ededed',
        borderWidth: 1,
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        zIndex: 5,
    },

    JobIcon: {
        height: 75,
        width: 65,
        borderRadius: 10,
        backgroundColor: 'white',
    },

    divisionLineContainer: {
        width: '100%',
        marginTop: 7
    },

    divisionLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#ededed',
    },

    descriptionContainer: {
        width: '90%',
        justifyContent: 'center',
        marginTop: 9
    },

    descriptionText: {
        fontSize: 10,
    },

    textHeader: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 6
    },
    flatListText: {
        fontSize: 12
    },
});
