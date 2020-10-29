import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';
import { sendData, getData } from './Firebase';


async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }
  
    return token;
}

export async function setupNotifications() {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false
        })
    });
    
    let expoToken = await registerForPushNotificationsAsync();
    let listTokens = await getData('expo-tokens');
    if(!listTokens.some(value => value.token === expoToken))
        await sendData('expo-tokens', { token: expoToken });
}

export async function sendPushNotification(expoPushToken, nTitle, nBody, nData) {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title: nTitle,
        body: nBody,
        data: { data: nData || '' },
    };
  
    let response = await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    return response.ok;
}

export async function scheduleNotification(nContent, nTrigger) {
    return await Notifications.scheduleNotificationAsync({
        content: nContent,
        trigger: nTrigger
    });
}

export async function cancelScheduledNotification(identifier) {
    await Notifications.cancelScheduledNotificationAsync(identifier);
}
