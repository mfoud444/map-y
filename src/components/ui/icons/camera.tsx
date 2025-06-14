import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function CameraIcon({ className, ...props }: SvgProps) {
  return (
    <Svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <Path d="M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </Svg>
  );
} 