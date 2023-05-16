import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const LogoutIcon = (props: any) => (
  <Svg
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <Rect width={45} height={45} fill="#FE7A6B" rx={10} />
    <Path
      fill="#F5F5FC"
      fillRule="evenodd"
      d="M20.895 22.23a.77.77 0 0 0-.783.77c0 .42.346.77.783.77H27v4.78C27 31 24.975 33 22.472 33h-4.955C15.025 33 13 31.01 13 28.56V17.45c0-2.46 2.035-4.45 4.528-4.45h4.965C24.975 13 27 14.99 27 17.44v4.79h-6.105Zm9.735-2.69 2.92 2.91a.764.764 0 0 1 0 1.09l-2.92 2.91c-.15.15-.35.23-.54.23a.773.773 0 0 1-.55-1.32l1.6-1.59H27v-1.54h4.14l-1.6-1.59c-.3-.3-.3-.79 0-1.09.3-.31.79-.31 1.09-.01Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default LogoutIcon