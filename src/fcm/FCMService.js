import messaging from '@react-native-firebase/messaging';
import {isIOS} from 'common';

class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification,
    );
  };

  registerAppWithFCM = async () => {
    if (isIOS) {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = onRegister => {
    messaging()
      .hasPermission()
      .then(enable => {
        if (enable) {
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      })
      .catch(e => {
        console.log('log--fcm-permission-rejected', e);
      });
  };

  getToken = onRegister => {
    messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          onRegister(fcmToken);
        } else {
          console.log('log--fcm-user-does-not-have-token');
        }
      })
      .catch(e => {
        console.log('log--fcm-get-token-rejected', e);
      });
  };

  requestPermission = onRegister => {
    messaging()
      .requestPermission()
      .then(authStatus => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          this.getToken(onRegister);
        } else {
          console.log('log--fcm-request-permission-failed');
        }
      })
      .catch(e => {
        console.log('log--fcm-request-permission-rejected', e);
      });
  };

  deleteToken = () => {
    console.log('log--fcm-delete-token');
    messaging()
      .deleteToken()
      .catch(e => {
        console.log('log--fcm-delete-token-rejected', e);
      });
  };

  createNotificationListeners = (
    onRegister,
    onNotification,
    onOpenNotification,
  ) => {
    // when the application is running, but in the background
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'log--Notification caused app to open from background state:',
      );
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        onOpenNotification(notification);
      }
    });

    // when the application is opened from a quit state
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log('log--Notification caused app to open from quit state:');
        if (remoteMessage) {
          const notification = remoteMessage.notification;
          onOpenNotification(notification);
        }
      });

    // foreground state messages
    this.messageListener = messaging().onMessage(async remoteMessage => {
      console.log('log--A new FCM message arrived!');
      if (remoteMessage) {
        let notification = null;
        if (isIOS) {
          notification = remoteMessage.data.notification;
        } else {
          notification = remoteMessage.notification;
        }
        onNotification(notification);
      }
    });

    // triggered when have a new token
    messaging().onTokenRefresh(fcmToken => {
      console.log('log--fcm-new-token-refresh', fcmToken);
      onRegister(fcmToken);
    });
  };

  unRegister = () => {
    this.messageListener();
  };
}

export const fcmService = new FCMService();
