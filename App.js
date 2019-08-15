import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage';
import SchedulePage from './components/SchedulePage';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <SchedulePage />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   }
// });

const MainNavigator = createStackNavigator({
  Home: { screen: HomePage },
  Schedule: { screen: SchedulePage }
});

const App = createAppContainer(MainNavigator);

export default App;
