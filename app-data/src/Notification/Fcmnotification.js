import React from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidStyle } from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
    }
}

export const GetFCMToken = async () => {
    let fcmtoken = await AsyncStorage.getItem("fcmtoken");
    if (!fcmtoken) {
        try {
            const token = await messaging().getToken();
            if (token) {
                await AsyncStorage.setItem("fcmtoken", token);
            }
        } catch (error) {
        }
    }
}

export const initFCM = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
       
    });

    messaging().getInitialNotification().then(remoteMessage => {
        if (remoteMessage) {
           
        }
        else{
        }
    });
}
export const OnDisplayNotification = async (data)=>{
  
    await notifee.requestPermission()
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });

    await notifee.displayNotification({
        title: data.title,
        body: data.body,
        android: {
            channelId,
            //smallIcon: 'name-of-a-small-icon',
            //style: { type: AndroidStyle.BIGPICTURE, picture: data.picture},
        },
    });
}

 
   
