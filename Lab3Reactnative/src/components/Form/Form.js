import { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Keyboard } from 'react-native';
import styles from './styles';

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


    }
    else {
      setErrorMessage('The description is required.');
    }
  }

  const handleDescriptionChange = (value) => {
    setDescription(value);
  }

  const handleStatusChange = (value) => {
    setDone(value);
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
        onChangeText={handleDescriptionChange}
        defaultValue={description}
        style={styles.textbox}
      />

      <View style={styles.switch.container}>
        <Text style={styles.switch.label}>Completed:</Text>
        <Switch
          value={done}
          onValueChange={handleStatusChange}
        />
      </View>

      <Button
        title='Add'
        onPress={handleAddPress}
      />



    </View>
  );
}