import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import DonationInitialScreen from '../screens/DonationFunction/DonationInitialScreen';
import CashDonationForm1Screen from '../screens/DonationFunction/CashDonationForm1Screen';
import CashDonationForm2Screen from '../screens/DonationFunction/CashDonationForm2Screen';
import ItemsDonationForm1Screen from '../screens/DonationFunction/ItemsDonationForm1Screen';
import ItemsDonationForm2Screen from '../screens/DonationFunction/ItemsDonationForm2Screen';
import ItemsDonationForm3Screen from '../screens/DonationFunction/ItemsDonationForm3Screen';


const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name ="Splash" component={SplashScreen} />
                <Stack.Screen name ="Login" component={LoginScreen} />
                <Stack.Screen name ="DonationInitial" component={DonationInitialScreen} />
                <Stack.Screen name ="CashDonationForm1" component={CashDonationForm1Screen} />
                <Stack.Screen name ="CashDonationForm2" component={CashDonationForm2Screen} />
                <Stack.Screen name ="ItemsDonationForm1" component={ItemsDonationForm1Screen} />
                <Stack.Screen name ="ItemsDonationForm2" component={ItemsDonationForm2Screen} />
                <Stack.Screen name ="ItemsDonationForm3" component={ItemsDonationForm3Screen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;