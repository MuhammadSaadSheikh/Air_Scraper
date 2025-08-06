// import { userActions } from '../actions';
// import { getCurrentUser } from './firebase';
// import { UserType } from '../types';

// interface TokenResponse {
//   access_token: string;
//   expires_in: number;
//   refresh_token: string;
//   token_type: string;
// }

// const refreshToken = async (): Promise<boolean> => {
//   try {
//     const currentUser = getCurrentUser();
//     const user: any = currentUser?.toJSON();
//     userActions.setUserData(user as UserType);

//     const myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');

//     const body = JSON.stringify({
//       grant_type: 'refresh_token',
//       //   refresh_token:user?.refreshToken,
//       refresh_token:
//         'AMf-vBzngs8_LrepKBrhysYhR_l_OlnLlKke34D7U-raP5XSYF7DAyQLVkn1MRT1sqk9uIlsxwnZvvjtU-Vt8nTFK_ls7xZpKbaM4IRgvtyrQ6Sq0aa0-_3pAAmV1sEQbiJ6eLXyXIhvainVD8x-rP-jbYUQZdpRo-xiXcbinA7o7DMODQGlWFKDeAtXALPzbUIh7h-Gv82usRbU-TW1krhGldI8M2PjG4IF5VZ8nw04tYRsOCEBxq4',
//     });

//     const requestOptions: {} = {
//       method: 'POST',
//       headers: myHeaders,
//       body: body,
//       redirect: 'follow',
//     };

//     const response = await fetch(
//       'https://securetoken.googleapis.com/v1/token?key=AIzaSyDQV_pQKyDsN3Hp2JqSIenUWRtW1vLW4iY',
//       requestOptions,
//     );

//     const result: TokenResponse = await response.json();
//     userActions.setUserToken(result.access_token);

//     return true;
//   } catch (error) {
//     console.error('Error during token refresh:', error);
//     return false;
//   }
// };

// export default refreshToken;
