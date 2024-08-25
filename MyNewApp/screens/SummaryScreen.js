import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = () => {
  const totalTransactions = 10;
  const balance = 692.39;
  const highSpending = { name: 'Nike', amount: 250.00 };
  const lowSpending = { name: 'Tim Hortons', amount: 7.89 };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.labelText}>Transactions</Text>
        <Text style={styles.valueText}>{totalTransactions}</Text> 
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>Balance</Text>
        <Text style={styles.valueText}>${balance.toFixed(2)}</Text> 
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>High Spending</Text>
        <Text style={styles.valueText}>{highSpending.name}</Text>
        <Text style={styles.valueText}>${highSpending.amount.toFixed(2)}</Text> 
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>Low Spending</Text>
        <Text style={styles.valueText}>{lowSpending.name}</Text>
        <Text style={styles.valueText}>${lowSpending.amount.toFixed(2)}</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    color: '#888',
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SummaryScreen;
