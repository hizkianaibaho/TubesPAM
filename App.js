import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import { StatusBar } from 'react-native';
import SplashScreen from './components/SplashScreen';

import DetailScreen from './screen/DetailScreen';
import TransactionScreen from './screen/TransactionScreen';
import WishlistScreen from './screen/WishlistScreen';
import HistoryScreen from './screen/HistoryScreen';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';
import EditProfile from './screen/EditProfile';
import EditPassword from './components/EditPassword';
import SuccesChangePassword from './components/SuccessChangePassword';
import OrderScreen from './screen/OrderScreen';
import { ProfileScreen } from './screen/ProfileScreen';
import SearchBar from './screen/SearchBar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SplashScreen />
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transaksi" component={TransactionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchBar} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Edit Profil" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Edit Password" component={EditPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Change Password Success" component={SuccesChangePassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
