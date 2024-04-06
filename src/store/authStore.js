import { create } from 'zustand';

const useAuthStore = create((set) => ({
  currentUser: null,
  userLoggedIn: false,
  loading: true,
  isAuth: false,
  toggleAuth: () => {
    set((state) => {
      return { ...state, isAuth: !state.isAuth };
    });
  },
  initializeUser: async (user) => {
    if (user) {
      set({ currentUser: { ...user }, userLoggedIn: true, loading: false });
    } else {
      set({ currentUser: null, userLoggedIn: false, loading: false });
    }
  },
}));

export default useAuthStore;
