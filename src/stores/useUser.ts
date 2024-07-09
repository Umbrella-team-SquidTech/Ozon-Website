import { create } from "zustand";
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "@/utils/storage";
type UserState = {
  user: UserI | null;
  setUser: (user: UserI | null) => void;
  removeUser: () => void;
};

const initialValue = getLocalStorage("user", true);

const useUserStore = create<UserState>((set) => ({
  user: initialValue,
  setUser: (user) => {
    setLocalStorage("user", JSON.stringify(user));
    return set({ user });
  },
  removeUser: () => {
    removeLocalStorage("user");
    return set({ user: null });
  },
}));

export default useUserStore;
