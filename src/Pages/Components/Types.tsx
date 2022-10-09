export type User = {
  id: number;
  createdAt: string;
  email: string;
  username: string;
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
