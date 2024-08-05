import Tasks from "../../components/Tasks";
import { View, Text } from "react-native";
import Form from "../../components/Form/Form";
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();

export default function ListScreen({ navigation, route, tasks, onStatusChange, onDeleteTask }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" options={{ headerShown: false }}>
                {(props) => (
                    <Tasks {...props} tasks={tasks} onStatusChange={onStatusChange} onDeleteTask={onDeleteTask} />
                )
                }
            </Stack.Screen>
        </Stack.Navigator>


    )
} 