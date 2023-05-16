import * as React from "react"
import Svg, { Circle, Path} from "react-native-svg"
const BackIcon = (props: any) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Circle
      cx={18}
      cy={18}
      r={18}
      fill="#F3EFEA"
      transform="rotate(-180 18 18)"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.854 23 11 17.5m0 0 5.854-5.5M11 17.5h15"
    />
  </Svg>
)
export default BackIcon