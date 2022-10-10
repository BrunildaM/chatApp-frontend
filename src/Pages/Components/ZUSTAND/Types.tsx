export type User = {
  id: number;
  createdAt: string;
  email: string;
  fullName: string;
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



export default interface UserStoreState {
  users: User[];
  currentUser: User | null;
  searchTerm: string;
  setUsers: () => (User[]);
  setCurrentUser: (data: any) => void;


  emailLogin: string;
  passwordLogin: string;
  handleEmailChangeLogin: (e: any) => void;
  handlePasswordChangeLogin: (e: any) => void;
  handleFormSubmitLogin: (e: any) => void;

  emailRegister: string;
  passwordRegister: string;
  handleFormSubmitRegister: (e: any) => void;
  handleEmailRegister: (e: any) => void;
  handlePasswordChangeRegister: (e: any) => void;
}