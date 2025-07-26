import { SVGProps } from "react";

type IconSearchProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconSearch = (props: IconSearchProps) => (
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
    <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6" />
  </svg>
);

export default IconSearch;
