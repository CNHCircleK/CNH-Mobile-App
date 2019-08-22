import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import MapPage from './pages/MapPage';
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
  Onboarding: { screen: OnboardingPage },
  Home: { screen: HomePage },
  Schedule: { screen: SchedulePage },
  Map: { screen: MapPage },
  Info: { screen: InfoPage },
  Welcomes: { screen: WelcomesPage },
  People: { screen: PeoplePage },
  Documents: { screen: DocumentPage }
}, {
  headerMode: "none"
});

const App = createAppContainer(MainNavigator);

export default App;
