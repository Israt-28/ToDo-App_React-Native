import Tasks from "../../components/Tasks";
import { View, Text } from "react-native";
import Form from "../../components/Form/Form";
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();

export default function ListScreen({ navigation, route }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={Tasks} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
} 