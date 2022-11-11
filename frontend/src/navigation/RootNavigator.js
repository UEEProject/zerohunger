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
import AddWorkshopCategory from '../screens/WorkshopFunction/AddWorkshopCategory';
import AddWorkshop from '../screens/WorkshopFunction/AddWorkshop';
import Guidance from '../screens/GuidanceFunction/GuidanceInitialScreen';
import BusinessHelpFormScreen from '../screens/GuidanceFunction/BusinessHelpFormScreen';
import BusinessStartForm1Screen from '../screens/GuidanceFunction/BusinessStartForm1Screen';
import BusinessStartForm2Screen from '../screens/GuidanceFunction/BusinessStartForm2Screen';
import BusinessStartForm3Screen from '../screens/GuidanceFunction/BusinessStartForm3Screen';



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

                <Stack.Screen name ="AddWorkshopCategory" component={AddWorkshopCategory} />
                <Stack.Screen name ="AddWorkshop" component={AddWorkshop} />

                <Stack.Screen name ="Guidance" component={Guidance} />
                <Stack.Screen name ="BusinessHelpForm" component={BusinessHelpFormScreen} />
                <Stack.Screen name ="BusinessStartForm1" component={BusinessStartForm1Screen} />
                <Stack.Screen name ="BusinessStartForm2" component={BusinessStartForm2Screen} />
                <Stack.Screen name ="BusinessStartForm3" component={BusinessStartForm3Screen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;