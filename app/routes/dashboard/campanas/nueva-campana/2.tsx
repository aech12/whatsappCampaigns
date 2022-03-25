import { Link, useOutletContext } from "remix";
import type { FormContext, CampaignType } from "../nueva-campana";

export default function App() {
  const { name, setName, setType } = useOutletContext<FormContext>();

  const handleChange = (e: any) => setName(e.target.value);
  const handleTypeSelection = (type: CampaignType) => setType(type);

  return (
    <div className="flex flex-col bg-gray-200  body-font">
      name: {name}
      <p>Personas</p>
      <Link to="../1">Back</Link>
      <Link to="../3">Siguiente</Link>
    </div>
  );
}
