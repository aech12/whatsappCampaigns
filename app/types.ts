export type Contact = {
  id: string;
  name: string;
  phone: string;
  userId: number;
};

export type Usern = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  passwordHash: string;
  contacts: Contact[];
};
export type NewUser = {
  email: string;
  password: string;
};

export type User = {
  email: string;
};
