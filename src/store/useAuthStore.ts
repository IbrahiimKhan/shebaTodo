import {create} from 'zustand';
import {User} from '@/types/storeTypes';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from '@/storage/storage';

interface AuthStore {
  user: User;
  isLoggedIn: boolean;
  onLoginSuccess: (user: User) => void;
  onLogout: () => void;
  setUser: (user: User) => void;
}

const defaultUser = {
  name: '',
  email: '',
  uuid: '',
  token: '',
};

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      user: defaultUser,
      isLoggedIn: false,
      onLoginSuccess: (user: User) => {
        set({user, isLoggedIn: true});
      },
      onLogout: () => {
        set({user: defaultUser, isLoggedIn: false});
      },
      setUser: (user: User) => {
        set({user});
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useAuthStore;
