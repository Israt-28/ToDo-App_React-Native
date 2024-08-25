import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens'; 
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import ErrorBoundary from './screens/ErrorBoundary'; 



// Enable screens for better performance
enableScreens();

// Import Screens
import TransactionsListScreen from './screens/TransactionsListScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import SummaryScreen from './screens/SummaryScreen';

// Create Stack Navigator
const Stack = createStackNavigator();

// Create Stack Navigator for Transactions
function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TransactionsList" 
        component={TransactionsListScreen} 
        options={{ title: 'Transactions List' }} 
      />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen} 
        options={{ title: 'Transaction Detail' }} 
      />
    </Stack.Navigator>
  );
}

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider> 
      <ErrorBoundary>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen 
              name="Transactions" 
              component={TransactionsStack} 
            />
            <Tab.Screen 
              name="Summary" 
              component={SummaryScreen} 
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}