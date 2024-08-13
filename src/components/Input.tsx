// Genrtic type for component props 
// WithoutRef is a utility type that removes the ref prop for useRef() rom a component's props
// forwardRef is a higher-order component (function) that acceps a component function as an argument
// and allows us to access the ref prop in the component
import { forwardRef, type ComponentPropsWithoutRef } from "react"; 

// Here we can merge our custom props with the default input props
type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

// Here ref is not a part of the props, so we need to pass it separately
// forwardRef is a generic function, that needs 2 types to be passed:
// 1. Type which will be passed to the ref
// 2. Type of the props that will be passed to the component function
const Input = forwardRef<HTMLInputElement, InputProps>(function Input({id, label, ...props}, ref) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
