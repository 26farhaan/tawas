import { SVGProps } from "react";

type IconShoppingCartProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconShoppingCart = (props: IconShoppingCartProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || "24"}
    height={props.size || "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M17 17H6V3H4" />
    <path d="m6 5 14 1-1 7H6" />
  </svg>
);

export default IconShoppingCart;
