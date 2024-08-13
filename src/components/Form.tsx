import { type ComponentPropsWithoutRef, type FormEvent } from "react";

// Which tupe should be passed to the onSave function?
// Form component is a wrapper component, so we don't know what exactly kind of data it will receive.
// So we will use the unknown type.
type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...props }: FormProps) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Form submitted');

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSave(data);
    }

    return (
        <form
            {...props}
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    );
}