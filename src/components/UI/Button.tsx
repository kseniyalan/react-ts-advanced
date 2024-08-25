import { type ComponentPropsWithoutRef } from 'react';

// Here we use again 2 types of props, one for button and one for anchor elements

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never // This is a way to say that the href prop is not allowed in this type (button can not have href)
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href: string // This is a way to say that the href prop is required in this type (anchor must have href)
  disabled?: never // This is a way to say that the disabled prop is not allowed in this type (anchor can not have disabled)
};

// An examle of using the type predicate function to let TypeScript know which type of props we are using
// and what will be the return type of the function
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  // const {el, ...otherProps} = props;
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
