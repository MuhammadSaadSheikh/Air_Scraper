import { store } from '../store';
import { UserType } from '../types';
import { setLoader } from '../slices/loaderSlice';
import { setUserData, setUserToken } from '../slices/userSlice';

const dispatch = store.dispatch;

export const userActions = {
  setUserData: (userData: UserType) => dispatch(setUserData(userData)),
  setUserToken: (token: string) => dispatch(setUserToken(token)),
};

export const loaderActions = {
  startLoader: () => dispatch(setLoader(true)),
  stopLoader: () => dispatch(setLoader(false)),
  setLoader: (value: boolean) => dispatch(setLoader(value)),
};
