import React from 'react';
import * as Splash from 'expo-splash-screen';

export default function SplashScreen() {
    Splash.preventAutoHideAsync();
    setTimeout(Splash.hideAsync, 2500);
}