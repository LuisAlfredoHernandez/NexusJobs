import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, StyleSheet, FlatList, TouchableOpacity, Share } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import BackButton from '../assets/Iconos atras.svg'
import JobIcon from '../assets/Iconos developer.svg'
import ShareIcon from '../assets/Iconos compartir.svg'
import HTMLView from 'react-native-htmlview'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export default function CarouselScreen({ navigation }) {

    const [index, setIndex] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        setData(navigation.getParam('data'))

    })

    const onShare = async (item) => {
        try {
          const result = await Share.share({
            message:
              `Rol: ${item.rol}. 
               Posición: ${item.name}. 
               Descripcion: ${item.shortDescription}.
               Detalles de la posición: ${<HTMLView value={item.longDescription}/>}.`
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      }  


    const _renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>

                <View style={styles.contentHeader}>
                    <View style={styles.JobIconContainer}>
                        <JobIcon style={styles.JobIcon} />
                    </View>
                    <Text style={styles.itemLabel}>{item.name}</Text>
                    <View style={styles.divisionLineContainer} >
                        <Text style={styles.divisionLine}></Text>
                    </View>
                </View>

                <View style={styles.jobDescriptionContainer}>
                    <View style={styles.descriptionContainer} >
                        <Text style={styles.textHeader}>Descripción de empleo</Text>
                        <Text style={styles.descriptionText}>{item.longDescription} </Text>
                    </View>
                </View>

                <View style={styles.contentLowerSide}>
                    <View style={styles.divisionLineContainer} >
                        <Text style={styles.divisionLine}></Text>
                    </View>
                    <View style={styles.detailContainer} >
                        <Text style={styles.textHeader}>Destalles de empleo</Text>
                        <FlatList data={item.details} keyExtractor={(item, index) => item + index} renderItem={({ item }) =>
                            <Text keyExtractor={item + 1}> {item.length > 5 ? <HTMLView value={item.concat(' ')}/> : ''}</Text>} />
                    </View>
                    <View style={styles.shareButtonContainer} >
                        <TouchableOpacity onPress={()=> onShare(item)} style={styles.shareButton}>
                            <ShareIcon style={styles.shareIcon} />
                            <Text style={styles.shareButtomText}>COMPARTIR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container} >
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <BackButton color={'#483EE8'} />
                    <Text style={{ color: '#A7A1F3', fontSize: 17, fontWeight: 'bold', marginLeft: -12 }}>BACK</Text>
                </TouchableOpacity>
            </View>
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
        marginTop: 8,
    },
    itemContainer: {
        width: '100%',
        height: '95%',
        position: 'relative',
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 10,
        borderRadius:10
    },
    itemLabel: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 8
    },

    JobIconContainer: {
        borderColor: '#ededed',
        borderWidth: 2,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        zIndex: 5,
        backgroundColor: 'white',
    },

    JobIcon: {
        height: 55,
        width: 65,
    },

    divisionLineContainer: {
        width: '100%',
        marginTop: 10,
    },

    divisionLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#ededed',
    },


    contentHeader: {
        flex: 1.3,
        alignItems: 'center',
        width: '100%'
    },

    jobDescriptionContainer: {
        flex: 1.6,
        width: '100%',
        alignItems: 'center'
    },

    contentLowerSide: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    descriptionContainer: {
        width: '90%',
        justifyContent: 'center',
    },

    detailContainer: {
        flex: 4.9,
        width: '90%',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 15
    },

    descriptionText: {
        fontSize: 13,
    },

    textHeader: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 6
    },

    backButtonContainer: {
        height: 40,
        marginTop: 20,
        width: 60,
        marginLeft: 6,
    },

    backButton: {
        width: 50,
        height: 25,
        flexDirection: 'row',
        color: '#A7A1F3',
        alignItems: 'center',
        marginTop: 15
    },

    shareButtonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    shareButton: {
        flexDirection: 'row',
        backgroundColor: '#483EE8',
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    shareButtomText: {
        color: 'white',
        marginLeft: 5
    },

    shareIcon: {
        height: 23,
        width: 22
    }
});
