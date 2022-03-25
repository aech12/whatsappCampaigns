import { Link, useOutletContext } from "remix";
import type { FormContext, CampaignType } from "../nueva-campana";

export default function App() {
  const { name, setName, setType } = useOutletContext<FormContext>();

  const handleChange = (e: any) => setName(e.target.value);
  const handleTypeSelection = (type: CampaignType) => setType(type);

  return (
    <div className="flex flex-col bg-gray-200  body-font">
      name: {name}
      <input value={name} onChange={handleChange} />
      <button onClick={() => handleTypeSelection("sms")}></button>
      <button onClick={() => handleTypeSelection("whatsapp")}></button>
      <Link to="../2">Siguiente</Link>
    </div>
  );
}
