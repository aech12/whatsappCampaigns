import { useFormContext, useIsSubmitting } from "remix-validated-form";

export default function MySubmitButton() {
  const isSubmitting = useIsSubmitting();
  const { isValid } = useFormContext();
  const disabled = isSubmitting || !isValid;

  return (
    <button
      type="submit"
      // disabled={disabled}
      className={disabled ? "disabled-btn" : "btn"}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
}
