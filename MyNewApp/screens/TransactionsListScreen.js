import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TransactionsListScreen = ({ navigation }) => {
 
  

  const [transactions] = useState([
    { id: '1', name: 'Starbucks', amount: 12.00, date: '2024-08-20' },
    { id: '2', name: 'Apple Store', amount: 101.00, date: '2024-08-20' },
    { id: '3', name: 'Sephora', amount: 120.00, date: '2024-08-20' },
    { id: '4', name: 'Shoppers Drug Mart', amount: 120.00, date: '2024-08-20' },
    { id: '5', name: 'Pizza Hut', amount: 24.00, date: '2024-08-20' },
    { id: '6', name: 'Cheesecake Factory', amount: 45.00, date: '2024-08-20' },
    { id: '7', name: 'Nike', amount: 250.00, date: '2024-08-20' },
    { id: '8', name: 'Tim Hortons', amount: 7.89, date: '2024-08-20' },
    { id: '9', name: 'Whole Foods', amount: 78.00, date: '2024-08-20' },
    { id: '10', name: 'Cineplex', amount: 42.50, date: '2024-08-20' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={() => {
              console.log(`Navigating to TransactionDetail for: ${item.name}`);
              navigation.navigate('TransactionDetail', { transaction: item });
            }}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.amountText}>${item.amount.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  amountText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TransactionsListScreen;



