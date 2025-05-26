import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
						statusBarHidden: true
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;