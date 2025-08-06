// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId:
//     '520515165513-elvpm3abs9h4tf836all5nvtib6sm2ia.apps.googleusercontent.com', // Replace with your web client ID
// });

export const signInWithOTP = async (email: string) => {
  //   const actionCodeSettings = {
  //     // The URL to redirect the user to after they click the sign-in link
  //     // Make sure this URL is in your Firebase console authorized domains
  //     url: 'https://www.example.com/finishSignUp?cartId=1234',
  //     handleCodeInApp: true,
  //   };
  //   try {
  //     const user = await auth().sendSignInLinkToEmail(email, actionCodeSettings);
  //     console.log('🚀 ~ signInWithOTP ~ user:', user);
  //   } catch (error: any) {
  //     console.error('Google sign-in error:', error.message);
  //     throw error;
  //   }
};

export const signInWithGoogle = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const {
  //       data: { idToken },
  //     } = (await GoogleSignin.signIn()) as any;
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     console.log('🚀 ~ signInWithGoogle ~ googleCredential:', googleCredential);
  //     const userCredential = await auth().signInWithCredential(googleCredential);
  //     return userCredential.user;
  //   } catch (error: any) {
  //     console.error('Google sign-in error:', error.message);
  //     throw error;
  //   }
};

export const signOutUser = async () => {
  // try {
  //   await auth().signOut();
  // } catch (error: any) {
  //   console.error('Sign-out error:', error.message);
  //   throw error;
  // }
};

export const getCurrentUser = () => {
  // try {
  //   const user = auth().currentUser;
  //   return user;
  // } catch (error: any) {
  //   console.error('Get current user error:', error.message);
  //   throw error;
  // }
};
