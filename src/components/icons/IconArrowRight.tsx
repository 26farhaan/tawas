import { SVGProps } from "react";

type IconArrowRightProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconArrowRight = (props: IconArrowRightProps) => (
  <svg
    {...props}
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.75 12.5h16.5M13.5 5.75l6.75 6.75-6.75 6.75" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default IconArrowRight;
