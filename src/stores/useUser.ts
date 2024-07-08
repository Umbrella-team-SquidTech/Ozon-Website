import { create } from "zustand";
type UserState = {
  user: UserI | null;
  setUser: (user: UserI | null) => void;
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
    localStorage.setItem("user", JSON.stringify(user));
    return set({ user });
  },
  removeUser: () => {
    localStorage.removeItem("user");
    return set({ user: null });
  },
}));

export default useUserStore;
