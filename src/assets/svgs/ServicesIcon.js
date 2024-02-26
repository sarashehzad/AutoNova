import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ServicesIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#60C2F9"
      strokeWidth={1.5}
      d="M20.358 13.357c-1.19 1.189-3.427 1.143-6.859 1.143a4.002 4.002 0 0 1-3.999-4c0-3.43-.046-5.67 1.143-6.859 1.19-1.189 1.715-1.14 6.984-1.14a.57.57 0 0 1 .406.973L15.32 6.187a1.763 1.763 0 1 0 2.492 2.494l2.714-2.712a.57.57 0 0 1 .974.405c0 5.268.048 5.794-1.142 6.983Z"
    />
    <Path
      stroke="#60C2F9"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m13.5 14.5-6.172 6.172a2.829 2.829 0 0 1-4-4L9.5 10.5"
    />
    <Path
      stroke="#60C2F9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.509 18.5H5.5"
    />
  </Svg>
);
export default ServicesIcon;
