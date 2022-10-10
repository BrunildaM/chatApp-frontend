import create from "zustand";
import {State} from "./Types";


export const useStore = create < State > ((set, get) => ({
    navigate: "chats",
    setnavigate: (text : string) => set(
        {navigate: text}
    ),

    users: [],
    getUsersFromServer: () => {
        fetch(`http://localhost:4444/users`).then(resp => resp.json()).then(data => set({users: data}))
    },

    currentUser: null,

    signInUser: (formData : any, navigate : any) => {
        fetch(`http://localhost:4444/sign-in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(resp => resp.json()).then(data => {
            set({currentUser: data.user})
            localStorage.token = data.token
            navigate("/chat")
        })
    },

    signOutUser: () => {
        localStorage.removeItem("token")
        set({currentUser: null})
    }

}))
