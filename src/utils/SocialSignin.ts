import {
  appleAuth,
  AppleAuthRequestResponse,
} from '@invertase/react-native-apple-authentication';
import Auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Settings, AccessToken, LoginManager } from 'react-native-fbsdk-next';
import Toast from 'react-native-toast-message';

import { socialSignin } from '../../redux/APIs';

// Configure Google SignIn
GoogleSignin.configure({
  webClientId:
    '163536674995-l46h1pcokmjeg25tlc7k53hj3d0qbume.apps.googleusercontent.com',
});

// Set Facebook App ID
Settings.setAppID('1101411500700897');

// Google SignIn Method
const Google = async (): Promise<void> => {
  try {
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = Auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    const userAuth = await Auth().signInWithCredential(googleCredential);
    const accessToken = await (await userAuth.user.getIdToken()).toString();

    await socialSignin(accessToken, 'google');
  } catch (error) {
    console.log(error);
    Toast.show({
      text1: 'Unable to sign in with Google',
      type: 'error',
      visibilityTime: 3000,
    });
  }
};

// Facebook SignIn Method
const Facebook = async (): Promise<void> => {
  try {
    const login = await LoginManager.logInWithPermissions(['public_profile']);
    if (login.isCancelled) {return;}

    const fbAuth = await AccessToken.getCurrentAccessToken();
    const fbCredential = Auth.FacebookAuthProvider.credential(
      fbAuth.accessToken,
    );
    const userAuth = await Auth().signInWithCredential(fbCredential);

    await socialSignin(userAuth, 'facebook');
  } catch (error) {
    console.log(error);
    Toast.show({
      text1: 'Unable to sign in with Facebook',
      type: 'error',
      visibilityTime: 3000,
    });
  }
};

// Apple SignIn Method
const Apple = async (): Promise<void> => {
  try {
    const appleAuthRequestResponse: AppleAuthRequestResponse =
      await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = Auth?.AppleAuthProvider?.credential(
      identityToken,
      nonce,
    );
    const credentialState = await Auth()?.signInWithCredential(appleCredential);

    await socialSignin(credentialState, 'apple');
  } catch (error) {
    console.log(error);
    Toast.show({
      text1: 'Unable to sign in with Apple',
      type: 'error',
      visibilityTime: 3000,
    });
  }
};

export default { Google, Apple, Facebook };
