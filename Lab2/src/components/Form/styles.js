import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor } from '../../inclusive/colors';

const styles = StyleSheet.create({
  container: {
    opacity: 0.7,
    padding: 20,
    borderColor: '#fff',
    borderTopWidth: 2,
    marginHorizontal: 5
  },
  textbox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 7,
    fontSize: 16,
    height: 120,
    textAlignVertical: 'top',
    borderColor: '#b8b8ff'
  },

  description: {
    fontSize: 16,
  },

  switch: {
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 5
    },
    label: {
      fontSize: 16,
      marginRight: 10
    }
  },
  errorMessage: {
    container: {
      backgroundColor: '#fff',
      padding: 10,
      marginBottom: 10,
      borderColor: '#c00',
      borderWidth: 1,
      borderLeftWidth: 8
    },
    label: {
      color: '#c00',
      fontSize: 14,
      fontWeight: 'bold'
    },
    text: {
      color: '#c00',
      fontSize: 16
    },


  }
});

export default styles;




/* const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#bcbcbc',
    flex: 1,
    padding: 10
   
  },
  errorView: {
    borderWidth: 1,
    borderColor: 'orangered',
    borderLeftWidth: 5,
    padding: 4
  },
  error: {
    color: 'orangered'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginVertical: 6
  },
  completedView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  completed: {
    fontSize: 18,
    color: 'green'
  },

});
export default styles; */
