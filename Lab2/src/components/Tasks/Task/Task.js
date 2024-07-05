import React, { useState } from 'react';
import { View, Text, Pressable, Modal, Alert, Switch, Button } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { changingStatus, deletingTask } from '../../../Redux/taskSlice';
import * as database from '../../../database'


export default function Task({ id, description, done }) {

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  }

  const handleStatusChange = async () => {

    const updatedData = await database.update(id, { done: !done })


    if (updatedData) {
      const data = {
        done: !done,
        id: id
      }
      dispatch(changingStatus(data))

    } else {
      console.log("Error")
    }


  }

  const handleDeleteTask = () => {
    Alert.alert('Delete Taak',
      `This message will delete the task ${description}. \n\nAre you sure?`,
      [{
        text: 'Confirmed',
        onPress: async () => {
          const deletedData = await database.removeData(id)
          if (deletedData) {
            dispatch(deletingTask({ id }))
            setShowModal(!showModal)

          } else {
            console.log("Error")
          }

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












/* const [showModal, setShowModal] = useState(false);
 
const handleModalToggle = () => setShowModal(!showModal);
 
// Toggle task completion status
const toggleTaskStatus = () => {
 // Call the provided function to toggle the status
 onToggleStatus(id);
};

// Remove the task
const removeTask = () => {
 // Call the provided function to remove the task
 onRemove(id);
 handleModalToggle(); // Close the modal after removing
};



return (
 <View>
   <Text>hI</Text>

   <Pressable onPress={handleModalToggle} style={styles.container}>
     <Text style={styles.text}>Id: {id}</Text>
     <Text style={styles.title}> Description: {description}</Text>
     <Text style={styles.text}>Status:{done ? 'Completed' : 'Open'}</Text>
   </Pressable>
   <View style={styles.modalOverlay}>
     <View style={styles.modalView}>
       <Text style={styles.modalTitle}>{description}</Text>
       <Switch
         value={done}
         onValueChange={toggleTaskStatus}
       />
       <TouchableOpacity onPress={removeTask} style={styles.modalRemoveButton}>
         <Text>Remove</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={handleModalToggle} style={styles.modalCloseButton}>
         <Text>Close</Text>
       </TouchableOpacity>
     </View>
</View>


 </View>

);
}

// add styles for the new buttons and switch here
const styles = StyleSheet.create({
// ... existing styles
modalOverlay: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: 'rgba(0,0,0,0.5)',
},
modalView: {
 margin: 20,
 backgroundColor: 'white',
 borderRadius: 20,
 padding: 35,
 alignItems: 'center',
 shadowColor: '#000',
 shadowOffset: {
   width: 0,
   height: 2,
 },
 shadowOpacity: 0.25,
 shadowRadius: 4,
 elevation: 5,
},
modalTitle: {
 fontSize: 18,
 marginBottom: 15,
},
modalCloseButton: {
 backgroundColor: '#2196F3', // Use a color that fits your design
 padding: 10,
 borderRadius: 5,
 marginTop: 10,
},
modalRemoveButton: {
 backgroundColor: '#f44336', // Red color for remove button
 padding: 10,
 borderRadius: 5,
 marginTop: 10,
},
// ... any other new styles 
});*/


/*  <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={handleModalToggle}
      > */