import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import VenuePage from './pages/VenuePage';
import InfoPage from './pages/InfoPage';
import WelcomesPage from './pages/WelcomesPage';
import PeoplePage from './pages/PeoplePage';
import DocumentPage from './pages/DocumentPage';
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
  Schedule: { screen: SchedulePage },
  Venue: { screen: VenuePage },
  Info: { screen: InfoPage },
  Welcomes: { screen: WelcomesPage },
  People: { screen: PeoplePage },
  Documents: { screen: DocumentPage }
});

const App = createAppContainer(MainNavigator);

export default App;
