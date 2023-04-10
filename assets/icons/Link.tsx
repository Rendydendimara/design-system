import * as React from "react";
import { SVGProps } from "react";

export const Link = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1.333 4L4 1.333 6.667 4m0 4L4 10.667 1.333 8"
        />
    </svg>
);

