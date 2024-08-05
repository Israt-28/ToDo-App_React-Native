import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import { primaryColor } from '../../inclusive/colors';


export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name='tasks' size={24} color={primaryColor} />
      <View style={styles.header}>
        <Text style={styles.appName}>Todo App</Text>
        <Text style={styles.name}>
          by Israt Jahan
        </Text>
      </View>
    </View>
  );
}
