// src/utils/notifications.ts
import PushNotification from 'react-native-push-notification';
import {PushNotificationIOS} from 'react-native';
import {TaskProps} from '@/types/taskTypes';

export const configureNotifications = () => {
  PushNotification.configure({
    onRegister: function (token: any) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification: any) {
      console.log('NOTIFICATION:', notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification: any) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },
    onRegistrationError: function (err: any) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  PushNotification.createChannel(
    {
      channelId: 'com.pushnotification',
      channelName: 'com.pushnotification',
    },
    (created: any) => console.log(`createChannel returned '${created}'`),
  );
};

export const scheduleTaskNotifications = (tasks: TaskProps[]) => {
  tasks.forEach(task => {
    const expiryDate = new Date(task.expiryDate);
    if (expiryDate > new Date()) {
      PushNotification.localNotificationSchedule({
        channelId: 'com.pushnotification',
        message: `Task "${task.title}" is due soon.`,
        date: expiryDate,
        vibrate: true,
        vibration: 300,
        playSound: true,
        soundName: 'default',
        actions: '["Yes", "No"]',
        autoCancel: true,
      });
    }
  });
};
