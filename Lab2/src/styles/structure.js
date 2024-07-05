import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../inclusive/colors";

export default StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },

    list: {
        backgroundColor: 'aqua',
        flex: 1
    },
    form: {
        backgroundColor: secondaryColor,
        flex: 1
    }

}

)

