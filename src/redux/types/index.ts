import { store } from '../store';

export type RootState = ReturnType<typeof store.getState>;

export type UserType = {
  displayName: string | null; // displayName can be null if the user hasn't set it
  email: string;
  firstName: string | null; // firstName can be null if the user hasn't set it
  lastName: string | null; // lastName can be null if the user hasn't set it
  emailVerified: boolean;
  phone: string | null; // phoneNumber can be null
  photoURL: string;
  providerId: string;
  uid: string;
  avatar: string;
};
