import { View, ScrollView, Text, Pressable, Modal, Button, DevSettings } from 'react-native';
import Task from './Task/Task';
import styles from './styles';
import { useSelector } from 'react-redux';
import { changingStatus } from '../../Redux/taskSlice';

export default function Tasks() {
  const tasks = useSelector((state) => state.task.tasks)

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          {tasks.map((task, index) => {
            return (
              <Task key={index} {...task}
              />
            )
          })}
        </ScrollView>
      </View>


    </View>
  );
}















/* <View style={styles.container}>
      <Text>Hi</Text>
      {
        /*  <ScrollView>
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                {...task}
                onRemove={onRemove}
                onToggleStatus={onToggleStatus}
              />
            )
          })} 
        </ScrollView
      
      </View> */
