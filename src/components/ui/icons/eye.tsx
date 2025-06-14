import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export function EyeIcon({ color = "currentColor", ...props }: SvgProps) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        d="M2.25 12c0-5.11 4.14-9.25 9.25-9.25S20.75 6.89 20.75 12 16.61 21.25 11.5 21.25 2.25 17.11 2.25 12Z"
        stroke={color}
        strokeWidth={1.5}
      />
      <Path
        d="M11.5 15.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  );
} 