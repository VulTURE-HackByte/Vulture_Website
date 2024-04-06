import { create } from 'zustand';

const useAuthStore = create((set) => ({
  userName: '',

  userEmail: '',

  setUserName: (name) => {
    set((state) => {
      return { ...state, userName: name };
    });
  },

  setUserEmail: (email) => {
    set((state) => {
      return { ...state, userEmail: email };
    });
  },

  isAuth: false,

  addAuth: () => {
    set((state) => {
      return { ...state, isAuth: true };
    });
  },

  removeAuth: () => {
    set((state) => {
      return { ...state, isAuth: false };
    });
  },
}));

export default useAuthStore;
