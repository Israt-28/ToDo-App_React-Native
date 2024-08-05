import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor } from '../../../inclusive/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#b8b8ff',
    opacity: 0.7,
    margin: 10,
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#7b2cbf'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#7b2cbf',
    paddingBottom: 5

  },


  header: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#7b2cbf',
    textAlign: 'center'


  },
  labels: {
    fontSize: 15,
    paddingVertical: 5,
  },

  mContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',


  },

  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '80%',
    borderWidth: 1,
    borderColor: '#7b2cbf',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  taskCloseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },
  switch: {
    alignItems: 'center'
  },
  done: {
    color: secondaryColor,
    opacity: 0.7,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',

  },


});

export default styles;
