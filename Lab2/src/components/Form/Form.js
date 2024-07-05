import { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Keyboard, ActivityIndicator } from 'react-native';
import styles from './styles';
import { addingTask } from '../../Redux/taskSlice';
import { useDispatch } from 'react-redux';
import * as database from '../../database'
import { primaryColor } from '../../inclusive/colors';



export default function Form() {

  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [savingData, setSavingData] = useState(false);

  const handleAddPress = async () => {

    if (description) {

      const data = {
        description,
        done,
      }

      setSavingData(true)
      const id = await database.save(data);
      setSavingData(false)

      if (id) {
        data.id = id
        console.log(data)
        dispatch(addingTask(data))
        setErrorMessage(null);
        setDescription('');
        setDone(false);
        Keyboard.dismiss();
      } else {
        setErrorMessage('COULDNT SAVE DATA')

      }

    }
    else {
      setErrorMessage('The description is required.');
    }
  }


  //If saving Data is true 
  if (savingData) {
    return (
      <View>
        <ActivityIndicator size="large" color={primaryColor} />
        <Text>Saving data........</Text>
        <Text>Please wait a few seconds........</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {errorMessage && (
        <View style={styles.errorMessage.container}>
          <Text style={styles.errorMessage.label}>Attention:</Text>
          <Text style={styles.errorMessage.text}>{errorMessage}</Text>
        </View>
      )}

      <Text style={styles.description}>
        Enter a task description:
      </Text>

      <TextInput
        maxLength={150}
        multiline
        onChangeText={setDescription}
        defaultValue={description}
        style={styles.textbox}
      />

      <View style={styles.switch.container}>
        <Text style={styles.switch.label}>Completed:</Text>
        <Switch
          value={done}
          onValueChange={setDone}
        />
      </View>

      <Button
        title='Add'
        onPress={handleAddPress}
      />



    </View>
  );
}





/* import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import styles from './styles';
import { useState } from 'react';

export default function Form(props) {
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddPress = () => {
    if (description) {
      props.onAddTask(description, done);
      setErrorMessage(null);
      setDescription('');
      setDone(false);
      Keyboard.dismiss();
    } else {
      setErrorMessage('The description is required.');
    }
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleStatusChange = (value) => {
    setDone(value);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        {errorMessage && (
          <View style={styles.errorView}>
            <Text style={styles.error}>Attention:</Text>
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        )}
        <TextInput
          style={styles.input}
          placeholder='Enter a task description'
          maxLength={150}
          onChangeText={handleDescriptionChange}
          defaultValue={description}
        />
        <View style={styles.completedView}>
          <Text style={styles.completed}>Completed:</Text>
          <Switch value={done} onValueChange={handleStatusChange} />
        </View>
        <Button style={styles.button} title='Add Task' onPress={handleAddPress} />
      </View>
    </KeyboardAvoidingView>
  );
}
 */