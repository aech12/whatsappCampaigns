export type User = {
  email: string;
  passwordHash: string;
  token: string;
  name: string;
  contacts: Contact[];
  campaigns: Campaign[];
  templates: Template[];
};

export type Contact = {
  name: string;
  phone: string;
  userId: string;
};

export type Campaign = {
  name: string;
  type: string; // sms/whatsapp
  content: string;
};

export type Template = {
  name: string;
  type: string; // sms/whatsapp
  content: string;
};
