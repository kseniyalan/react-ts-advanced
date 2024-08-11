// Genrtic type for component props 
// WithoutRef is a utility type that removes the ref prop for useRef() rom a component's props
// We can also use ComponentPropsWithRef to keep the ref prop
import { type ComponentPropsWithoutRef } from "react"; 

// Here we can merge our custom props with the default input props
type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({id, label, ...props}: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
