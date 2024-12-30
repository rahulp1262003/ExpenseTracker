
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import { GloableStyles } from './constants/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from './components/UI/IconButton';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOvervew() {
  return <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GloableStyles.colors.Blue004 },
      headerTintColor: GloableStyles.colors.Black,
      tabBarStyle: { backgroundColor: GloableStyles.colors.Blue004 },
      tabBarActiveTintColor: GloableStyles.colors.Black,
      headerRight: ({ tintColor }) => <IconButton size={30} icon="add" color={tintColor} onPress={() => { navigation.navigate('ManageExpense') }} />
    })}
  >
    <BottomTabs.Screen
      name='RecentExpenses'
      component={RecentExpense}
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent ',
        tabBarIcon: ({ color, size }) => <Icon name='history' color={color} size={size} />
      }}
    />
    <BottomTabs.Screen
      name='AllExpenses'
      component={AllExpenses}
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expensess',
        tabBarIcon: ({ color, size }) => <Icon name='calendar-month' color={color} size={size} />
      }}
    />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{ backgroundColor: GloableStyles.colors.Blue004 },
        }}>
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOvervew}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ManageExpense'
            component={ManageExpense}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}