import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { API } from "../../../App";
import UserStoreState, { User } from "./Types";

const useStore = create<UserStoreState>(
  (set, get): UserStoreState => ({
    users: [],
    currentUser: null,
    searchTerm: "",
    setSearchTerm: (string: string) => {
      set({ searchTerm: string });
    },
    setUsers: () => set({ users }),
    setCurrentUser: (data: any) => set({ user: data }),

    emailLogin: "",
    passwordLogin: "",
    handleEmailChangeLogin: (e) => {
      set({ emailLogin: e.target.value });
    },
    handlePasswordChangeLogin: (e) => {
      set({ passwordLogin: e.target.value });
    },
    handleFormSubmitLogin: (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const formData = {
        email: email,
        password: password,
      };
      fetch("http://localhost:4444/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            localStorage.setCurrentUser("token", data.token);
            set({ user: data.user });
          }
        });
    },


    fullNameRegister: "",
    emailRegister: "",
    passwordRegister: "",
    handleFormSubmitRegister: (e: any) => {
      e.preventDefault();
      const { fullNameRegister, emailRegister, passwordRegister } = get();
      const formData = {
        fullName: fullNameRegister,
        email: emailRegister,
        password: passwordRegister,
      };
      fetch("http://localhost:4444/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert("Oops, something went wrong.");
          } else {
            localStorage.setUsers("token", data.token);
            set({ user: data.user });
          }
        });
    },

    handleFullNameRegister: (e: any) => {
      set({ fullNameRegister: e.target.value });
    },
    handleEmailRegister: (e: any) => {
      set({ emailRegister: e.target.value });
    },
    handlePasswordChangeRegister: (e: any) => {
      set({ passwordRegister: e.target.value });
    },


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
              email: user.email,
              avatar: user.avatar,
              password: user.password,
            };
          } else {
            return target;
          }
        }),
      })),
  })
);

export const useUserStore = useStore;
