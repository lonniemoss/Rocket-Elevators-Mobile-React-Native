import React, { useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native';
import Status from './Status';


function Homescreen () {
    const navigation = useNavigation();

    const [data, setData] = useState([
        {
            "id": 5,
            "status": "Inactive",
            "column_id": 5,
            "column": null
        },
        {
            "id": 6,
            "status": "Inactive",
            "column_id": 6,
            "column": null
        },
        {
            "id": 7,
            "status": "Inactive",
            "column_id": 7,
            "column": null
        },
        {
            "id": 9,
            "status": "Inactive",
            "column_id": 9,
            "column": null
        },
        {
            "id": 10,
            "status": "Inactive",
            "column_id": 10,
            "column": null
        },
        {
            "id": 12,
            "status": "Inactive",
            "column_id": 12,
            "column": null
        },
        {
            "id": 14,
            "status": "Inactive",
            "column_id": 14,
            "column": null
        },
        {
            "id": 16,
            "status": "Inactive",
            "column_id": 16,
            "column": null
        },
        {
            "id": 17,
            "status": "Inactive",
            "column_id": 17,
            "column": null
        },
        {
            "id": 18,
            "status": "Inactive",
            "column_id": 18,
            "column": null
        },
        {
            "id": 19,
            "status": "Inactive",
            "column_id": 19,
            "column": null
        },
        {
            "id": 21,
            "status": "Inactive",
            "column_id": 21,
            "column": null
        },
        {
            "id": 24,
            "status": "Inactive",
            "column_id": 24,
            "column": null
        }
    ])
        console.log(data)
    // const [loading, setLoading] = useState(true)
    // const inactElevatorsURL = "https://172.31.98.61:7262/api/Elevator/status"


    // useEffect(() => {
    //     fetch(inactElevatorsURL)
    //     .then((response)=>response.json())
    //     .then((json)=>setData(json))
    //     .catch((error)=>console.error(error))
    //     .finally(()=>setLoading(false))

    // },[])

    let updateStatus = async (id) => {
        await fetch(`https://6e4d-173-246-74-146.ngrok.io/api/Elevator/5/active/`, {
            method: "PUT"
        })
    }

    const handleOnPress = (id, status) => {
        updateStatus(id);
        navigation.navigate('Status', { id, status });
        alert('Elevator status updated');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.welcome}>
                .
                .
                .
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.welcome}>
                    {data.length}
                    </Text>
                </TouchableOpacity>
            <FlatList 
                data={data} 
                renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={() => handleOnPress(item.id, item.status)}
                    style={styles.itemContainer}
                    >
                        <Text style={styles.itemText}>{item.id}</Text>
                        <Text style={styles.itemText}>{item.status}</Text>
                    </TouchableOpacity>
    
                )} 
                keyExtractor={item => item.id.toString()}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Refresh List</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text></Text>
            </TouchableOpacity>
        </View>
    );
    
};

export default () => {
    return (
        <NativeBaseProvider>
            <Homescreen/>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
       
    },
    itemText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});

