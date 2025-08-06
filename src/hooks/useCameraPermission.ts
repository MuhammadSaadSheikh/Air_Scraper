import { useState } from 'react';
import { Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const useCameraPermission = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const requestCameraPermission = async () => {
    try {
      const cameraPermission = Platform.select({
        android: PERMISSIONS.ANDROID.CAMERA,
        ios: PERMISSIONS.IOS.CAMERA,
      });

      const status = await check(cameraPermission as any);
      if (status === RESULTS.GRANTED) {
        setHasPermission(true);
        return;
      }

      const result = await request(cameraPermission as any);
      setHasPermission(result === RESULTS.GRANTED);
    } catch (error) {
      console.error('Permission error:', error);
      setHasPermission(false);
    }
  };

  return { hasCameraPermission: hasPermission, requestCameraPermission };
};

export default useCameraPermission;
