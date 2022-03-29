import { useField } from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
  type?: string;
};

export default function MyInput({ name, label, type }: MyInputProps) {
  // export const MyInput = ({ name, label, type }: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...getInputProps({ id: name })} type={type} />
      {error && <span className="my-error-class">{error}</span>}
    </div>
  );
}
