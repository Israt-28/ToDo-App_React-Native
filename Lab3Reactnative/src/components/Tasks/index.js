import { View, ScrollView, Text, Pressable, Modal, Button, DevSettings } from 'react-native';
import Task from './Task/Task';
import styles from './styles';
import { useState } from 'react';
useState

export default function Tasks({ tasks, onStatusChange, onDeleteTask }) {

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          {tasks.map((task, index) => {
            return (
              <Task key={index} {...task}
                onStatusChange={onStatusChange}
                onDeleteTask={onDeleteTask}
              />
            )
          })}
        </ScrollView>
      </View>


    </View>
  );
}
