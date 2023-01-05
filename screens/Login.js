import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Status from './Status';

function Login() {
    const navigation = useNavigation();

    const [emailInput, setEmailInput] = useState([]);
    const [passwordInput, setPasswordInput] = useState("");
    
    const employeeList = [
        'mathieu.houde@codeboxx.biz',
        'patrick.thibault@codeboxx.biz',
        'francis.patry-jessop@codeboxx.biz',
        'david.amyot@codeboxx.biz',
        'marie-eve.goupil@codeboxx.biz',
        'francois.boivin@codeboxx.biz',
        'timothy.wever@codeboxx.biz',
        'kiril.kleinerman@codeboxx.biz',
        'felicia.hartono@codeboxx.biz',
        'eileen.ai@codeboxx.biz',
    ]

    const Password = "pswd123"     
   
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Rocket Elevators</Text>
            </View>

            {/*Username or Email*/}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input onChangeText={text => setEmailInput(text)}
                        autoCapitalize='none'
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="user-secret" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color: 'black',
                                }}
                                _dark={{
                                    color: 'gray.300',
                                }}
                            />
                        }
                        variant="outline"
                        placeholder="Email"
                        _light={{
                            color: "black",
                        }}
                    />
                </View>
            </View>

            {/*Password*/}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input onChangeText={text => setPasswordInput(text)}
                        autoCapitalize='none'
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="key" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color: "black",
                                }}
                                _dark={{
                                    color: "gray.300"
                                }}
                            />
                        }
                        variant="outline"
                        secureTextEntry={true}
                        placeholder="Password"
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50"
                        }}

                    />
                </View>
            </View>
            <View style={styles.buttonLogin}>
                <Button onPress={() => { if (employeeList.includes(emailInput) && Password === passwordInput) {
                     navigation.navigate("Homescreen")
                    } else {
                        alert("Please enter valid email or contact Admin")
                   }}
                }
                    >
                    <Text style={styles.loginText}>Login</Text>
                </Button>
            </View>
        </View>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Login />
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10
    },
    LoginText: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5
    },
    loginText: {
        fontWeight: 'bold',
        color: 'white'
    },
    emailInput: {
        marginTop: 10,
        marginRight: 5
    },
    buttonStyle: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15
    },
    buttonStyleX: {
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15
    },
    buttonLogin: {
        paddingVertical: 13,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    lineStyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center'
    },
    boxStyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-around'
    },
})

