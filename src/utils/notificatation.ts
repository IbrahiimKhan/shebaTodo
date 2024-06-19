import {TaskProps} from '@/types/taskTypes';
import {PushNotificationIOS} from 'react-native';
import PushNotification from 'react-native-push-notification';
import * as RootNavigation from '@/navigators/RootNavigation';

export const configureNotifications = () => {
  PushNotification.configure({
    onRegister: function (_token: any) {},
    onNotification: function (notification: any) {
      RootNavigation.navigate('ViewTask', notification?.data);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (_notification: any) {},
    onRegistrationError: function (_err: any) {},
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
        autoCancel: true,
        data: {
          ...task,
          expiryDate: expiryDate.toISOString(),
        },
      });
    }
  });
};
