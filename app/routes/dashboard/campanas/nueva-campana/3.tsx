import { useOutletContext } from "remix";
import type { FormContext } from "../nueva-campana";

export default function App() {
  const { message, setMessage } = useOutletContext<FormContext>();

  const handleChange = (e: any) => setMessage(e.target.value);

  return (
    <div className="flex flex-col bg-gray-200  body-font">
      name: {name}
      <input value={message} onChange={handleChange} />
      <button>Enviar</button>
    </div>
  );
}
