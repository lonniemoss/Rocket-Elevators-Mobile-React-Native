import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const StatusStack = createStackNavigator();

function StatusScreen({ route }) {
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
        const statuses = ['Inactive'];
        return statuses[Math.floor(Math.random() * statuses.length)];
      };
      const currentStatus = queryStatus();
      setCurrentStatus(currentStatus);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Declare a state variable to hold the visibility of the "End Task" button
  const [showEndTaskButton, setShowEndTaskButton] = useState(status !== 'Active');

  // Declare a state variable to hold the visibility of the "Go Back" button
  const [showGoBackButton, setShowGoBackButton] = useState(false);

  // Function to update the status of the elevator to "Active"
  const updateStatus = async () => {
    // Make a request to update the status of the elevator
    // Replace this with your actual update function
    const updateElevatorStatus = async () => {
      return 'Active';
    };
    const updatedStatus = await updateElevatorStatus();
    setCurrentStatus(updatedStatus);

    // Show the "Go Back" button if the status was successfully updated
    setShowGoBackButton(updatedStatus === 'Active');
  };

  return (
    <View style={styles.container}>
      {currentStatus === 'Active' ? (
        <Text style={[styles.statusText, styles.activeStatusText]}>
          {currentStatus}
        </Text>
      ) : (
        <Text style={[styles.statusText, styles.inactiveStatusText]}>
          {currentStatus}
        </Text>
      )}

      {/* Show the "End Task" button if the status is not "Active" */}
      {showEndTaskButton && (
        <Button title="End Task" onPress={updateStatus} style={styles.button} />
      )}

     
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          style={styles.button}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  activeStatusText: {
    color: 'green',
  },
  inactiveStatusText: {
    color: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});


export default StatusScreen;