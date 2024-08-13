import {
    type ComponentPropsWithoutRef,
    type FormEvent,
    forwardRef,
    useImperativeHandle,
    useRef
} from "react";

// Which tupe should be passed to the onSave function?
// Form component is a wrapper component, so we don't know what exactly kind of data it will receive.
// So we will use the unknown type.
type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

// The type for object that will be returned by the useImperativeHandle hook.
// It is also a type for the ref object that will be passed to the Form component in forwardRef.
export type FormHandle = {
    clear: () => void;
};

// forwardRef is a generic function, that needs 2 types to be passed:
// 1. Type which will be passed to the ref
// 2. Type of the props that will be passed to the component function
const Form = forwardRef<FormHandle, FormProps>(function Form({ onSave, children, ...props }, ref) {

    const formRef = useRef<HTMLFormElement>(null);

    // useImpreativeHandle is a hook that allows us to access the ref of the child component from the parent component.
    useImperativeHandle(ref, () => {
        // Here we can define the methods that we want to be accessible from the parent component.
        return {
            clear() {
                console.log('Clearing the form');
                formRef.current?.reset();
            }
        };
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSave(data);
        formRef.current?.reset();
    }

    return (
        <form
            {...props}
            onSubmit={handleSubmit}
            ref={formRef}
        >
            {children}
        </form>
    );
});

export default Form;