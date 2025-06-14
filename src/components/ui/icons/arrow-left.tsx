import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export function ArrowLeftIcon({ color = "currentColor", ...props }: SvgProps) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        d="M10.25 6.75L4.75 12L10.25 17.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M19.25 12H5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
} 