import { StyleSheet } from 'react-native';
import { primaryColor } from '../../inclusive/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: primaryColor,
    borderBottomWidth: 3,
    paddingTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 5,
    paddingBottom: 10
  },
  header: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: primaryColor
  },
  name: {
    color: '#b8b8ff',
    fontSize: 15,
    fontStyle: 'italic'
  }
});

export default styles;
