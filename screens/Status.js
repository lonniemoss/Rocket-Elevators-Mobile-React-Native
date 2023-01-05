import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const StatusStack = createStackNavigator();

function Status({ route }) {
  const navigation = useNavigation();
  const id = route.params?.id;
  const status = route.params?.status;

  // Declare a state variable to hold the current status of the elevator
  const [currentStatus, setCurrentStatus] = useState(status);

  useEffect(() => {
    // Query the current status of the elevator every 5 seconds
    const interval = setInterval(() => {
      // Make a query to retrieve the current status of the elevator
      // Replace this with your actual query function
      const queryStatus = () => {
        // Return a random status for the sake of this example
        const statuses = ['Active', 'Inactive', 'Maintenance'];
        return statuses[Math.floor(Math.random() * statuses.length)];
      }
      const currentStatus = queryStatus();
      setCurrentStatus(currentStatus);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      {currentStatus === 'Active' ? (
        <Text style={{ color: 'green', fontSize: 25, fontWeight: 'bold' }}>
          {currentStatus}
        </Text>
      ) : (
        <Text style={{ color: 'red', fontSize: 25, fontWeight: 'bold' }}>
          {currentStatus}
        </Text>
      )}
    </View>
  );
}


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusStack.Navigator>
        <StatusStack.Screen name="Status" component={Status} />
      </StatusStack.Navigator>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  Middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
});
