import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export function CodeMessageIcon({ color = "currentColor", ...props }: SvgProps) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        d="M2.5 7.75c0-.77.63-1.4 1.4-1.4h16.2c.77 0 1.4.63 1.4 1.4v8.5c0 .77-.63 1.4-1.4 1.4H3.9c-.77 0-1.4-.63-1.4-1.4V7.75Z"
        stroke={color}
        strokeWidth={1.5}
      />
      <Path
        d="M7.75 11h-.01M12.25 11h-.01M16.75 11h-.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
} 