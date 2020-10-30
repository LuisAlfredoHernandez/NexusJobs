import React, { useState } from 'react'
import { StyleSheet, View, Button, SectionList, Text, SafeAreaView } from 'react-native'
import FooterWT from '../components/footerWithTabs'
import TabsHeader from '../components/HeaderWithTabs'

export default function ListaVacantes({ navigation }) {

    const [serverResponse, setResponse] = useState([])

    const getJobsList = () => {

        fetch('http://newnexusvacantsapp-env.eba-ismjscyn.us-east-2.elasticbeanstalk.com/jobs', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${navigation.getParam('token')}`,
            },
        })
            .then(x => x.json())
            .then(x => {
                orderData(x)
            })
    }


    const orderData = (response) => {

        if (0) {
            return dataOrderedByDate(response)
        }

        else if (1) {
            return dataOrderedByPosition(response)
        }

        else if (0) {
            return dataOrderedByAlfabeth(response)
        }
    }

    const dataOrderedByDate = (response) => {
        let res = response.sort(function (a, b) {
            return Date.parse(b.creationDate) < Date.parse(a.creationDate);
        });
        console.log(res.reverse())
        return setResponse(res.reverse())
    }

    const dataOrderedByPosition = (response) => {

        const developerArr = [], managerArr = [], contableArr = [], directorArr = []
        
        let resFixed = response.map((item) => {

            if (item.rol === 'Developer') {
                developerArr.push(item)
            } else if (item.rol === 'Manager') {
                managerArr.push(item)
            } else if (item.rol === 'Contable') {
                contableArr.push(item)
            } else if (item.rol === 'Director') {
                directorArr.push(item)
            }

        })

        console.log(resFixed)
    }

    const DATA = [
        {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
            //data: serverResponse
        }
    ];

    const DATA2 = {
        Contable: { title: 'Contable', data: [] },
        developer: { title: 'Developer', data: [] },
        Manager: { title: 'Manager', data: [] }
    }


    const Item = ({ title }) => (
        <View style={styles.contentHeader}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    { getJobsList() }

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <TabsHeader />
            </View>

            <View style={styles.segmentation}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
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

    headerContainer: {
        flex: 1.1,
        width: '100%'

    },

    contentHeader: {
        fontSize: 25,
        backgroundColor: "blue",
        color: 'black'
    },

    infocontainer: {

    },

    segmentation: {
        flex: 4.2,
        marginTop: 2,
        backgroundColor: "white",
        width: '100%'
    },

    footerContainer: {
        backgroundColor: "red",
        flex: 0.7,
    }

});