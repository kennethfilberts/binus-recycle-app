import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const PassIcon = (props: any) => (
  <Svg width={45} height={45} fill="none" {...props}>
    <Rect width={45} height={45} fill="#FE7A6B" rx={10} />
    <Path
      fill="#F5F5FC"
      fillRule="evenodd"
      d="M28.01 25.601a.75.75 0 0 0 .75-.75V23a.75.75 0 0 0-.75-.75h-5.692a2.596 2.596 0 0 0-2.478-1.85 2.604 2.604 0 0 0-2.6 2.6 2.604 2.604 0 0 0 2.6 2.602 2.596 2.596 0 0 0 2.479-1.852h2.111v1.102a.75.75 0 0 0 1.5 0V23.75h1.33v1.102c0 .414.336.75.75.75ZM18.666 13h8.67c3.387 0 5.664 2.378 5.664 5.917v8.167C33 30.623 30.722 33 27.333 33h-8.667c-3.39 0-5.667-2.377-5.667-5.916v-8.167C13 15.377 15.276 13 18.666 13ZM18.74 23c0-.608.495-1.102 1.102-1.102.607 0 1.102.494 1.102 1.102a1.103 1.103 0 0 1-2.204 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default PassIcon;
