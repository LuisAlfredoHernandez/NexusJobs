import React, { useState } from 'react'
import { StyleSheet, View, SectionList, Text, TouchableOpacity } from 'react-native'
import FooterWT from '../components/footerWithTabs'
import TabsHeader from '../components/HeaderWithTabs'
import DevIcon from '../assets/Iconos developer.svg'
import DesignerIcon from '../assets/Iconos diseño.svg'
import ShareIcon from '../assets/Iconos compartir.svg'

export default function ListaVacantes({ navigation }) {

    const [serverResponse, setServerResponse] = useState([])

    const getJobsList = () => {
        fetch('http://newnexusvacantsapp-env.eba-ismjscyn.us-east-2.elasticbeanstalk.com/jobs', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${navigation.getParam('token')}`,
            },
        }).then(x => x.json())
            .then(x => {
                orderData(x)
            })
    }

    const orderData = (response) => {
        if (0) {
            return ordereDataByDate(response)
        }
        else if (1) {
            return orderDatadByPosition(response)
        }
        else if (0) {
            return orderDatadByAlfabeth(response)
        }
    }

    const ordereDataByDate = (response) => {
        let res = response.sort(function (a, b) {
            return Date.parse(b.creationDate) < Date.parse(a.creationDate);
        });

        return setResponse(res.reverse())
    }

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
        const mainObject = { developer: developerArr, manager: managerArr, contable: contableArr, director: directorArr }
        return serializeOrderedByPosition(mainObject);
    }

    const serializeOrderedByPosition = (mainObject) => {
        const developerObj = { title: 'Developer', data: mainObject.developer }, managerObj = { title: 'Manager', data: mainObject.manager }
            , contableObj = { title: 'Contable', data: mainObject.contable }, directorObj = { title: 'Director', data: mainObject.director }
        const resultArr = [developerObj, managerObj, contableObj, directorObj]
        setServerResponse(resultArr)

    }

    // {item.rol =='developer'?<DevIcon style={styles.icon}/>:<DesignerIcon style={styles.icon}/>}
    return (
        <View style={styles.container}>

            {/* service caller */}
            { serverResponse.length < 1 && getJobsList()}

            <View style={styles.headerContainer}>
                <TabsHeader />
            </View>

            <View style={styles.segmentation}>
                <SectionList
                    sections={serverResponse}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) =>
                        <View style={styles.segmentMainContainer}>
                            <View style={styles.buttonContainer}>
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
                                    <TouchableOpacity onPress={()=> navigation.navigate('Carousel', {data:serverResponse})}>
                                        <ShareIcon style={styles.shareIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
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

    shareIcon: {

    },
    
    divisionLine:{
     
       height:60,
       width:1,
       backgroundColor:"#b8b9cf",
       marginLeft:5
    },

   footerContainer: {
        backgroundColor: "red",
        flex: 0.7,
    }

});