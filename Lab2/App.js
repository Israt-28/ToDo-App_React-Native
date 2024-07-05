import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/components/Header/Header';
import styles from './src/styles/structure';
import AddScreen from './src/screens/AddScreen';
import ListScreen from './src/screens/ListScreen';
import * as SplashScreen from 'expo-splash-screen';
import AppLoader from './src/components/AppLoader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { primaryColor } from './src/inclusive/colors';
import { store } from './src/Redux/store'
import { Provider } from 'react-redux';



const Tab = createBottomTabNavigator();
// SplashScreen.preventAutoHideAsync();

export default function App() {




  return (
    <Provider store={store}>
      <AppLoader />

      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header />

          <Tab.Navigator>
            <Tab.Screen name='List Task'
              component={ListScreen}
              options={{
                // headerTintColor: '#0ff', -> overRide the primaryColor and chage to aqua. 
                title: 'Tasks',
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                  <MaterialCommunityIcons name='post' size={size} color={color} />
              }} />


            <Tab.Screen name='Add Task'
              component={AddScreen}
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
              }} />

          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </Provider>

  );
}







/* <Tab.Navigator>
          <Tab.Screen name='List'>
            {(props) => (
              <ListScreen {...props} tasks={tasks} />
            )}
          </Tab.Screen>
          <Tab.Screen name='Add' >
            {(props) => (
              <AddScreen {...props} onAddTask={handleAddTask} />
            )}
          </Tab.Screen>
        </Tab.Navigator> */

/* <View style={styles.container}>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="List">
              {() => <Tasks tasks={tasks} onRemove={removeTask} onToggleStatus={toggleTaskStatus} />}
            </Tab.Screen>onAddTask={handleAddTask}
            <Tab.Screen name="Add">
              {() => <Form  />}
            </Tab.Screen>
          </Tab.Navigator>
        </View> */




/*   */