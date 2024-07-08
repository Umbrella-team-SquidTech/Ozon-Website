import { create } from "zustand";
type UserState = {
  user: UserI;
  setUser: (user: UserI) => void;
  removeUser: () => void;
};

const initialState = {
  auth: false,
  id: 0,
  name: "",
  email: "",
  certified: 0,
  lastName: "",
  profilePic: "",
};

const useUserStore = create<UserState>((set) => ({
  user: initialState,
  setUser: (user) => {
    return set({ user });
  },
  removeUser: () => {
    return set({ user: { ...initialState } });
  },
}));

export default useUserStore;
