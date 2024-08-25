import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.amountText}>${transaction.amount.toFixed(2)}</Text>
      <Text style={styles.nameText}>{transaction.name}</Text>
      <Text style={styles.locationText}>North York, ON</Text>
      <Text style={styles.labelText}>Transaction Date</Text>
      <Text style={styles.dateText}>{transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  amountText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    marginBottom: 5,
  },
  locationText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransactionDetailScreen;


