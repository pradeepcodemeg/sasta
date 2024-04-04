import React from 'react';
import { View, Button } from 'react-native';
import notifee, { AndroidStyle } from '@notifee/react-native';

export default function Notifee() {
    

    return (
        <View>
            <Button title="Display Notification" onPress={() => onDisplayNotification()} />
        </View>
    );

}
