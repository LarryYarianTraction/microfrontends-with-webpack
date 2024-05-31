import { create } from "zustand";

export enum LocalStorageSessionKeys {
  userSessionToken = "token",
}

interface State {
  token: string;
  searchText: string;
}

interface Actions {
  setToken: (token: string) => void;
  clearToken: () => void;
  search: (text: string) => void;
}

export const useSessionStore = create<State & Actions>((set) => ({
  token: "",
  searchText: "",
  setToken: (token) => {
    set({ token });
    localStorage.setItem(LocalStorageSessionKeys.userSessionToken, token);
  },
  clearToken: () => {
    set({ token: "" });
    localStorage.removeItem(LocalStorageSessionKeys.userSessionToken);
  },
  search: (text) => {
    set({ searchText: text });
  },
}));
