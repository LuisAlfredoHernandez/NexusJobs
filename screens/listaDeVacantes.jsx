import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SectionList, Text, TouchableOpacity, Share } from 'react-native'
import FooterWT from '../components/footerWithTabs'
import TabsHeader from '../components/HeaderWithTabs'
import DevIcon from '../assets/Iconos developer.svg'
import ManagerIcon from '../assets/manging2.png'
import AccountatIcon from '../assets/accountant.png'
import MarketingIcon from '../assets/marketing Director.png'
import ShareIcon from '../assets/Iconos compartir.svg'

export default function ListaVacantes({ navigation }) {

    const [serverResponse, setServerResponse] = useState([])
    const [searchParameter, setSearchParameter] = useState('byAlphabet')


    const getJobsList = async () => {
        await fetch('http://newnexusvacantsapp-env.eba-ismjscyn.us-east-2.elasticbeanstalk.com/jobs', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${navigation.getParam('token')}`,
            },
        }).then(x => x.json())
            .then(x => {
                orderData(x)
            })
    }


    useEffect(() => {
        getJobsList()
    }, [searchParameter])


    const updateSelectedStatus = (searchParameter) => {
        setSearchParameter(searchParameter)
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
            let arrProperty = { title: '', data: [] }
            arrProperty.title = 'Dia: '.concat(((arr[i].creationDate).replace(/T/g, ', Hora: ')).slice(0, 23))
            arrProperty.data.push(arr[i])
            resultArr.push(arrProperty)
        }
        setServerResponse(resultArr)
    }

    const orderByDateOrAlfabethFilterForCarousel = (item) => {
        let arrToSend = []
        let res = serverResponse.map((item) => {
            arrToSend.push(item.data[0])
        })

        AddItemSelectedAsFirstIndex(arrToSend, item)
        navigation.navigate('Carousel', { data: arrToSend })
    }



    //Ordering by position flow

    const orderDatadByPosition = (response) => {
        const developerArr = [], managerArr = [], contableArr = [], directorArr = []
        let resFixed = response.map((item) => {
            if (item.rol.charAt(0).toUpperCase() + item.rol.slice(1) === 'Developer') {
                developerArr.push(item)
            } else if (item.rol === 'Manager') {
                managerArr.push(item)
            } else if (item.rol === 'Contable') {
                contableArr.push(item)
            } else if (item.rol === 'Director') {
                directorArr.push(item)
            }
        })
        const mainObject = { developer: developerArr, manager: managerArr, contable: contableArr, director: directorArr }
        return serializeOrderedByPosition(mainObject)
    }

    const serializeOrderedByPosition = (mainObject) => {
        const developerObj = { title: 'Developer', data: mainObject.developer }, managerObj = { title: 'Manager', data: mainObject.manager }
            , contableObj = { title: 'Contable', data: mainObject.contable }, directorObj = { title: 'Director', data: mainObject.director }
        const resultArr = [developerObj, managerObj, contableObj, directorObj]
        setServerResponse(resultArr)
    }

    const orderByPositionFilterForCarousel = (item) => {
        let arrToSend = []
        if (serverResponse[0].data[0].rol.charAt(0).toUpperCase() + item.rol.slice(1) === item.rol.charAt(0).toUpperCase() + item.rol.slice(1)) {
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



    // Order Data by Alfabeth flow

    const orderDatadByAlfabeth = (response) => {
        let resultArr = []
        for (let i = 0; i < response.length; i++) {
            if ((response[i].name).startsWith('D')) {
                checkAndOrdertAlphabetWord('D', resultArr, response[i])
            } else if ((response[i].name).startsWith('M')) {
                checkAndOrdertAlphabetWord('M', resultArr, response[i])
            } else if ((response[i].name).startsWith('C')) {
                checkAndOrdertAlphabetWord('C', resultArr, response[i])
            } else if ((response[i].name).startsWith('S')) {
                checkAndOrdertAlphabetWord('S', resultArr, response[i])
            } else if ((response[i].name).startsWith('E')) {
                checkAndOrdertAlphabetWord('E', resultArr, response[i])
            }
        }
        serializeOrderByAlfabeth(resultArr)
    }

    const checkAndOrdertAlphabetWord = (word, resultArr, response) => {
        let objectContainer = { data: [], title: '' }
        objectContainer.data.push(response)
        objectContainer.title = word
        resultArr.push(objectContainer)
    }

    const serializeOrderByAlfabeth = (resultArr) => {
        let res = resultArr.sort(function (a, b) {
            return b.title < (a.title);
        });
        setServerResponse(resultArr)
    }

    //End of ordering by Alphabet flow.


    const AddItemSelectedAsFirstIndex = (arr, item) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === item.id)
                arr.splice(i, 1)
        }
        arr.unshift(item)
    }


    const selectFilterData = (item) => {
        if (searchParameter === 'byPosition')
            return orderByPositionFilterForCarousel(item)
        else
            return orderByDateOrAlfabethFilterForCarousel(item)
    }


    const onShare = async (item) => {
        try {
            const result = await Share.share({
                message:
                    `Rol: ${item.rol}. 
               Posición: ${item.name}. 
               Descripcion: ${item.shortDescription}.
               Responsabilidades: ${item.longDescription}.`
            });
        } catch (error) {
            alert(error.message);
        }
    }

    const IconTypeConditional = (props) => {
        let rol = props.rol.charAt(0).toUpperCase() + props.rol.slice(1)
        switch (rol) {
            case 'Developer':
                return <DevIcon style={styles.jobIcon} />
            case 'Director':
                return <MarketingIcon style={styles.jobIcon} />
            case 'Manager':
                return <ManagerIcon style={styles.jobIcon} />
            case 'Contable':
                return <AccountatIcon style={styles.jobIcon} />
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.headerInputContainer}>
                    <TabsHeader />
                </View>

                <View style={styles.headerButtonsContainer}>
                    <TouchableOpacity onPress={() => { updateSelectedStatus('byAlphabet'); }}
                        style={[styles.headerButton, { backgroundColor: searchParameter == 'byAlphabet' ? '#A7A1F3' : 'white' }]} >
                        <Text style={[styles.buttonText, { color: searchParameter == 'byAlphabet' ? 'white' : '#A7A1F3' }]}>A-Z</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { updateSelectedStatus('byDate'); }}
                        style={[styles.headerButton, { backgroundColor: searchParameter == 'byDate' ? '#A7A1F3' : 'white' }]} >
                        <Text style={[styles.buttonText, { color: searchParameter == 'byDate' ? 'white' : '#A7A1F3' }]}>Fecha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { updateSelectedStatus('byPosition'); }}
                        style={[styles.headerButton, { backgroundColor: searchParameter == 'byPosition' ? '#A7A1F3' : 'white' }]} >
                        <Text style={[styles.buttonText, { color: searchParameter == 'byPosition' ? 'white' : '#A7A1F3' }]}>Posición</Text>
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
                                    <TouchableOpacity onPress={() => onShare(item)}>
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