import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { API } from "../../App";
import { User } from "./Types";

const useStore = create((set, get) => ({
  users: fetch(`${API}/users`),
  currentUser: (`${API}/sign-in`),
  setUsers: (users: User[]) => set((state: User[]) => ({ users })),
  setCurrentUser: (user: User) => set((state: User) => ({ user })),
  addUser: (user: User) =>
    set((state: any) => ({
      users: [
        {
          userName: user.username,
          id: Math.random() * 100,
          email: user.email,
          password: user.password,
        },
        ...state.users,
      ],
    })),
  removeStudent: (id: number) =>
    set((state: any) => ({
      currentUser: state.users.filter((user: User) => user.id !== id),
    })),
  updateUser: (user: User) =>
    set((state: any) => ({
      users: state.users.map((target: User) => {
        if (target.id === user.id) {
          return {
            ...target,
            username: user.username,
            avatar: user.avatar,
            password: user.password
          };
        } else {
          return target;
        }
      }),
    })),
}));

export const useUserStore = useStore;
