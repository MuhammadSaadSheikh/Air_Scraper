// import { logoutUser } from 'src/redux/actions';
import { errorToast } from '../redux/services/validations';
import NavService from './NavService';

const ErrorHandler = (e: any, showError = true, defaultError = true) => {
  // if (e.response?.status === 401) {
  //   errorToast('Session Expired. Please Login Again');
  //   // logoutUser();
  //   NavService.reset(0, [{ name: 'AuthStack' }]);
  //   return;
  // } else {
  // const error = e?.response?.data?.errors;
  // const error2 = e?.response?.data?.message;
  const error = e?.data?.errors;
  const error2 = e?.data?.message;

  if (showError) {
    if (
      e?.message?.includes('timeout of ') &&
      e?.message?.includes('ms exceeded')
    ) {
      errorToast("Can't connect to server");
    } else if (
      (typeof error === 'object' && Object.keys(error)?.length > 0) ||
      error?.length
    ) {
      if (typeof error === 'string') {
        errorToast(error);
      } else if (Array.isArray(error) && error?.length > 0) {
        const err = error.map((item, index) => {
          if (typeof item === 'string') {
            return item;
          } else {
            return index === error?.length - 1
              ? item?.message
              : item?.message + '\n';
          }
        });
        errorToast(err?.join());
      } else if (typeof error === 'object') {
        for (let key in error) {
          errorToast(error[key]);
        }
      }
    } else if (
      (typeof error2 === 'object' && Object.keys(error2)?.length > 0) ||
      error2?.length
    ) {
      if (typeof error2 === 'string') {
        errorToast(error2);
      } else if (Array.isArray(error2) && error2?.length > 0) {
        const err = error2?.map((item, index) =>
          index === error2?.length - 1 ? item?.message : item?.message + '\n',
        );
        errorToast(err.join());
      } else if (typeof error2 === 'object') {
        for (let key in error2) {
          errorToast(error2[key]);
        }
      }
    } else {
      errorToast(e?.data?.error);
    }
  } else if (defaultError) {
    errorToast(error2 || e?.message);
  }
};

export default ErrorHandler;
