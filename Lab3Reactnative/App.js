import uuid from 'react-uuid';
import { useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/components/Header/Header';
import styles from './src/styles/structure';
import AddScreen from './src/screens/AddScreen';
import ListScreen from './src/screens/ListScreen';
import Tasks from './src/components/Tasks';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { primaryColor } from './src/inclusive/colors';


const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: 'Walk the dog',
      done: true
    },
    {
      id: uuid(),
      description: 'Wash the car',
      done: false
    },
    {
      id: uuid(),
      description: 'Finish the lab',
      done: false
    }
  ]);
  const handleAddTask = (description, done) => {
    const newTask = { id: uuid(), description, done }
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

  };



  const toggleTaskStatus = (value, id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = value;
      }
      return task;
    })
    setTasks(updatedTasks)
  };

  const removeTask = (id) => {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Tab.Navigator>
          <Tab.Screen name='List Task'
            options={{
              // headerTintColor: '#0ff', -> overRide the primaryColor and chage to aqua. 
              title: 'Tasks',
              tabBarBadge: tasks.length,
              headerShown: false,
              tabBarIcon: ({ color, size }) =>
                <MaterialCommunityIcons name='post' size={size} color={color} />
            }}>
            {
              (props) => (
                <ListScreen {...props} tasks={tasks} onStatusChange={toggleTaskStatus} onDeleteTask={removeTask} />
              )
            }
          </Tab.Screen>
          <Tab.Screen name='Add Task'
            options={{
              headerStyle: {
                backgroundColor: primaryColor,
                opacity: 0.8
              },
              headerShown: true,
              tabBarIcon: ({ color, size }) => {
                return (
                  <MaterialIcons name="add-box" size={24} color={color} />
                )
              }
            }}
          >
            {(props) => (
              <AddScreen {...props} onAddTask={handleAddTask} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
