import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SectionList, Text, TouchableOpacity } from 'react-native'
import FooterWT from '../components/footerWithTabs'
import TabsHeader from '../components/HeaderWithTabs'
import DevIcon from '../assets/Iconos developer.svg'
import DesignerIcon from '../assets/Iconos diseño.svg'
import ShareIcon from '../assets/Iconos compartir.svg'


export default function ListaVacantes({ navigation }) {

    const [serverResponse, setServerResponse] = useState([])
    const [searchParameter, setSearchParameter] = useState('byDate')


    const getJobsList = async () => {
        await fetch('http://newnexusvacantsapp-env.eba-ismjscyn.us-east-2.elasticbeanstalk.com/jobs', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${navigation.getParam('token')}`,
            },
        }).then(x => x.json())
            .then(x => {
                orderData(x)
                console.log(1)
            })
    }

    useEffect(() => {
        getJobsList()
    }, [])

    // useEffect(() => {
    //     setServerResponse(serverResponse)
    // }, [serverResponse])

    const updateSelectedStatus = (searchParameter) => {
        setSearchParameter(searchParameter)
        getJobsList()
    }

    const orderData = (response) => {
        if (searchParameter === 'byDate') {
            return orderDataByDate(response)
        }
        else if (searchParameter === 'byPosition') {
            return orderDatadByPosition(response)
        }
        else if (searchParameter === 'byAlphabet') {
            return orderDatadByAlfabeth(response)
        }
    }


    //order data by date flow

    const orderDataByDate = (response) => {
        let res = response.sort(function (a, b) {
            return Date.parse(b.creationDate) < Date.parse(a.creationDate);
        });
        serializeOrderedArrByDate(res.reverse())
    }


    const serializeOrderedArrByDate = (arr) => {
        let resultArr = []
        for (let i = 0; i < arr.length; i++) {
            let arrProperty = {}
            arrProperty.title = arr[i].creationDate
            arrProperty.data = arr[i]
            resultArr.push(arrProperty)
        }
         setServerResponse(resultArr)
       // console.log(serverResponse)
    }

    const orderedByDateFilterDataForCarousel = (item) => {
        AddItemSelectedAsFirstIndex(serverResponse, item)
        navigation.navigate('Carousel', { data: serverResponse })
    }




    //Ordering by position

    const orderDatadByPosition = (response) => {
        const developerArr = [], managerArr = [], contableArr = [], directorArr = []
        let resFixed = response.map((item) => {
            if (item.rol === 'Developer' || item.rol == 'developer') {
                developerArr.push(item)
            } else if (item.rol === 'Manager') {
                managerArr.push(item)
            } else if (item.rol === 'Contable') {
                contableArr.push(item)
            } else if (item.rol === 'Director') {
                directorArr.push(item)
            }
        })
        console.log('position');
        const mainObject = { developer: developerArr, manager: managerArr, contable: contableArr, director: directorArr }
        return serializeOrderedByPosition(mainObject)
    }


    const serializeOrderedByPosition = (mainObject) => {
        const developerObj = { title: 'Developer', data: mainObject.developer }, managerObj = { title: 'Manager', data: mainObject.manager }
            , contableObj = { title: 'Contable', data: mainObject.contable }, directorObj = { title: 'Director', data: mainObject.director }
        const resultArr = [developerObj, managerObj, contableObj, directorObj]
        setServerResponse(resultArr)
        // console.log(resultArr);
    }


    const orderedByPositionFilteredForCarousel = (item) => {
        let arrToSend = []
        if (serverResponse[0].data[0].rol === item.rol || item.rol === "Developer" || item.rol == "developer") {
            arrToSend = serverResponse[0].data
        } else if (serverResponse[1].data[0].rol === item.rol) {
            arrToSend = serverResponse[1].data
        } else if (serverResponse[2].data[0].rol === item.rol) {
            arrToSend = serverResponse[2].data
        } else if (serverResponse[3].data[0].rol === item.rol) {
            arrToSend = serverResponse[3].data
        }
        AddItemSelectedAsFirstIndex(arrToSend, item)
        navigation.navigate('Carousel', { data: arrToSend })
    }

    // End of position flow



    const orderDatadByAlfabeth = () => {
        console.log('alafabeh')
    }


    const AddItemSelectedAsFirstIndex = (arr, item) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === item.id)
                arr.splice(i, 1)
        }
        arr.unshift(item)
    }

    const selectFilterData = (item) => {
        if (searchParameter === 'byPosition') {
            return orderedByPositionFilteredForCarousel(item)
        } else if (searchParameter === 'byDate') {
            return orderedByDateFilterDataForCarousel(item)
        }
        else {
            console.log('na de na')
        }
    }


    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.headerInputContainer}>
                    <TabsHeader />
                </View>

                <View style={styles.headerButtonsContainer}>
                    <TouchableOpacity onPress={() => { updateSelectedStatus('byAlphabet'); }} style={styles.headerButton} >
                        <Text style={styles.buttonText}>A-Z</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { updateSelectedStatus('byDate'); }} style={styles.headerButton} >
                        <Text style={styles.buttonText}>Fecha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { updateSelectedStatus('byPosition'); }} style={styles.headerButton} >
                        <Text style={styles.buttonText}>Posición</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.segmentation}>
                <SectionList
                    sections={serverResponse}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) =>
                        <View style={styles.segmentMainContainer}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => selectFilterData(item)}>
                                <View style={styles.jobIconContainer}>
                                    <DevIcon style={styles.jobIcon} />
                                </View>
                                <View style={styles.JobInfoContainer}>
                                    <Text style={styles.jobName}>{item.name}</Text>
                                    <Text style={styles.jobDescription}>{item.shortDescription}</Text>
                                </View>
                                <View>
                                    <Text style={styles.divisionLine}> </Text>
                                </View>
                                <View style={styles.shareIconContainer}>
                                    <TouchableOpacity >
                                        <ShareIcon style={styles.shareIcon} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.contentHeader}>{title}</Text>
                    )}
                />
            </View>
            <View style={styles.footerContainer}>
                <FooterWT />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#483EE8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    segmentMainContainer: {
        alignItems: 'center',
    },

    headerContainer: {
        flex: 1.1,
        width: '100%'
    },

    contentHeader: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#133463',
        textAlign: 'center'
    },

    buttonContainer: {
        height: 80,
        width: '90%',
        flexDirection: 'row',
        borderBottomColor: '#b8b9cf',
        borderBottomWidth: 1,
        alignItems: 'center'
    },

    segmentation: {
        flex: 4.2,
        marginTop: 2,
        backgroundColor: "white",
        width: '100%',
    },

    jobIconContainer: {
        flex: 1,
        borderColor: '#483EE8',
        borderWidth: 2,
        borderRadius: 5,
        height: 65,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    jobIcon: {
        height: 50,
        width: '100%',
    },

    jobName: {
        fontWeight: "bold"
    },

    jobDescription: {
        marginTop: 3,
        fontSize: 10
    },

    JobInfoContainer: {
        flex: 4.3,
        marginLeft: 10
    },

    shareIconContainer: {
        flex: 0.5,
        marginLeft: 7,
    },

    divisionLine: {
        height: 60,
        width: 1,
        backgroundColor: "#b8b9cf",
        marginLeft: 5
    },

    footerContainer: {
        backgroundColor: "red",
        flex: 0.7,
    },

    headerInputContainer: {
        flex: 4.2,
        width: '100%',
        backgroundColor: '#483EE8',
        alignItems: 'center',
    },

    headerButton: {
        borderWidth: 1,
        borderColor: '#9a73ef',
        height: 34,
        width: '32.7%',
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerButtonsContainer: {
        flex: 1.8,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },

    buttonText: {
        color: '#9a73ef'

    }
});