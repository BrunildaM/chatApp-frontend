export type User = {
  id: number;
  createdAt: string;
  email: string;
  fullname: string;
  password: string;
  avatar: string;
  groups: Group[];
};

export type Group = {
  id: number;
  messages: Message[];
  users: User[];
};

export type Message = {
  id: number;
  text: string;
  group: Group;
  sender: User;
  reciever: User;
};

export type State = {
  navigate: string,
  setnavigate: (text : string) => void,

  users: User[],
  getUsersFromServer: () => void

  currentUser: User | null,
  signInUser:(formData:any,navigate:any)=>void,
  signUpUser:(formData:any,navigate:any)=>void

  signInErrors: [],
  signUpErrors:[],
  setErrors:()=>void,

  signOutUser:()=>void,
}
