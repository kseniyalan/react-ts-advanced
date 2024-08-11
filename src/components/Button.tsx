import { type ComponentPropsWithoutRef } from 'react';

// Here we use again 2 types of props, one for button and one for anchor elements

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
  // const {el, ...otherProps} = props;
  if (props.el === 'anchor') {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
