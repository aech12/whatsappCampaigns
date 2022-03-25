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
  type: "sms" | "whatsapp";
};

export type Template = {
  name: string;
  type: "sms" | "whatsapp";
  content: string;
};
