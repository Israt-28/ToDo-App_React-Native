import React, { useState } from 'react';
import { View, Text, Pressable, Modal, Alert, Switch, Button } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Task({ id, description, done, onStatusChange, onDeleteTask }) {

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  }

  const handleStatusChange = () => {
    onStatusChange(!done, id)
  }

  const handleDeleteTask = () => {
    Alert.alert('Delete Taak',
      `This message will delete the task ${description}. \n\nAre you sure?`,
      [{
        text: 'Confirmed',
        onPress: () => {
          onDeleteTask(id);
        }
      }, {
        text: 'Cancel'
      }])

  }

  return (

    <View>
      <Pressable onPress={handleModalToggle} animationType='fade' transparent={true}>
        <View style={styles.container}>
          <Text style={styles.title}>{description}</Text>
          <Text style={styles.text}>Id: {id}</Text>
          <Text style={styles.text}>Status: {done ? 'Completed' : 'Open'}</Text>
        </View>
      </Pressable>

      <Modal visible={showModal} animationType='fade' transparent={true}>
        <View style={styles.mContainer}>
          <View style={styles.modalBox}>
            <View style={styles.taskCloseContainer}>
              <Text style={styles.header}>Task Details</Text>
              <Entypo.Button
                name="circle-with-cross"
                size={15}
                backgroundColor="transparent"
                underlayColor='#ffdddd'
                color="#cc0000"
                onPress={handleModalToggle} >
                Close
              </Entypo.Button>
            </View>

            <Text style={styles.labels}>{description}</Text>
            <View style={styles.switchContainer}>
              <View style={styles.switch}>
                <Switch value={done}
                  onValueChange={handleStatusChange} />
                <Text style={styles.done}> Status: {done ? 'completed' : 'Open'}</Text>
              </View>
              <MaterialCommunityIcons.Button
                name="delete-sweep-outline"
                size={20}
                backgroundColor="transparent"
                color="#cc0000"
                onPress={handleDeleteTask}>
                Delete
              </MaterialCommunityIcons.Button>

            </View>
          </View>
        </View>
      </Modal>






    </View>







  )
}
