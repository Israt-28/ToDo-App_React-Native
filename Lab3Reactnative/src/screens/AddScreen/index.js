import Form from "../../components/Form/Form";
import { View, Text } from "react-native";


export default function AddScreen({ onAddTask }) {
    return (
        <View>
            <Form onAddTask={onAddTask} />
        </View>
    )

}
