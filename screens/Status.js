import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function Status() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <View style={styles.logoutButton}>
                <Button onPress={() => navigation.navigate("Login")} title="Logout" />
                </View>                   
            </View>
        </View>
        
    );
};

export default () => {
    return (
        <NativeBaseProvider>
            <Status/>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    statusText:{
        marginTop:100,
        fontSize:30,
        fontWeight:'bold'
    },
    Middle:{
        alignItems:'center',
        justifyContent:'center',
    },
    logoutButton:{
        marginTop:30,
        marginLeft:15,
        marginRight:15,
    }

})
