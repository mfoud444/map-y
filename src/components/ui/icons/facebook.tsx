import { Path, Svg, G, Defs, ClipPath, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export function FacebookIcon({ className, color = "currentColor", ...props }: SvgProps) {
  return (
    <Svg
      className={className}
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_33_1563)">
        <Path d="M24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 18.4895 4.38825 23.454 10.125 24.3542V15.9688H7.07812V12.5H10.125V9.85625C10.125 6.84875 11.9165 5.1875 14.6576 5.1875C15.9705 5.1875 17.3438 5.42188 17.3438 5.42188V8.375H15.8306C14.3399 8.375 13.875 9.29998 13.875 10.249V12.5H17.2031L16.6711 15.9688H13.875V24.3542C19.6118 23.454 24 18.4895 24 12.5Z" fill="#1877F2"/>
        <Path d="M16.6711 15.9688L17.2031 12.5H13.875V10.249C13.875 9.29998 14.3399 8.375 15.8306 8.375H17.3438V5.42188C17.3438 5.42188 15.9705 5.1875 14.6576 5.1875C11.9165 5.1875 10.125 6.84875 10.125 9.85625V12.5H7.07812V15.9688H10.125V24.3542C10.7359 24.4501 11.3621 24.5 12 24.5C12.6379 24.5 13.264 24.4501 13.875 24.3542V15.9688H16.6711Z" fill="white"/>
      </G>
      <Defs>
        <ClipPath id="clip0_33_1563">
          <Rect width={24} height={24} fill="white" transform="translate(0 0.5)"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
} 