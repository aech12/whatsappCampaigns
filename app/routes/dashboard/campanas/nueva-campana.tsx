import { Outlet } from "remix";
import { useState } from "react";

export type CampaignType = "sms" | "whatsapp";
export type FormContext = {
  name: string | undefined;
  type: CampaignType | undefined;
  people: any | undefined;
  message: string | undefined;
  setName: any;
  setType: any;
  setPeople: any;
  setMessage: any;
};

export default function App() {
  // campaign name, type, people and message
  const [name, setName] = useState<string>();
  const [type, setType] = useState();
  const [people, setPeople] = useState();
  const [message, setMessage] = useState<string>();

  const context: FormContext = {
    name,
    type,
    people,
    message,
    setName,
    setType,
    setPeople,
    setMessage,
  };

  return (
    <div className="flex flex-col bg-gray-200  body-font">
      <p>1 Campaña</p>
      <p>2 Personas</p>
      <p>3 Mensajes</p>
      <Outlet context={context} />;
    </div>
  );
}
