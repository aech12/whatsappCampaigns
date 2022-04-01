export type User = {
  email: string;
  passwordHash: string;
  token: string;
  name: string;
  contacts: Contact[];
  campaigns: Campaign[];
  templates: Template[];
};
export type UserLogin = {
  // token: string;
  userId: string;
};

export type Contact = {
  name: string;
  phone: string;
  userId: number;
};

export type Campaign = {
  name: string;
  type: "sms" | "whatsapp";
};
export type Template = {
  id?: number;
  name: string;
  type: "sms" | "whatsapp";
  content: string;
  userId?: number;
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
