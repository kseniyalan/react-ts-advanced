import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

// ElmentType is a special type in React that represents a component type.
// It means that it should be a valid React component type, such as a string for a built-in element (e.g., "div") or a React component (e.g., Button).
// "as" prop is a way to specify the element type that will be rendered (returned) by the Container component.
// We also want to accept props for every element type, which could be rendered
// So we will do ContainerProps type a generic type too (will work with some additional type only)
// ...<T> --> generic type, T is a placeholder for the type that will be passed to the ContainerProps type.
// T extends ElementType --> T must be a valid React component type.
type ContainerProps<T extends ElementType> = {
    as?: T; // element name or component, is not required because we have a default value 'div'
    children: ReactNode; // JSX code
} & ComponentPropsWithoutRef<T>;

// It is a polymorphic component that can render any element type.
// We will do this function generic too, by adding <C> after the function name.
// C is a placeholder for the type that will be passed to the Container function and then as a type for the ContainerProps type.
// We wil add <C extends ElementType> to make sure that C is a valid React component type.
export default function Container<C extends ElementType>({ as, children, ...props }: ContainerProps<C>) {
    const ComponentToRender = as || 'div'; // If as is not provided, it will render a div element.
    return (
        <ComponentToRender {...props}>{children}</ComponentToRender>
    );
}