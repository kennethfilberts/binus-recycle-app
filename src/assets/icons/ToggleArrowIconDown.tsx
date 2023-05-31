import * as React from 'react';
import Svg, {Path, SvgProps, G} from 'react-native-svg';

interface ToggleArrowIconDown extends SvgProps {
  rotation?: number;
}

const ToggleArrowIconDown = ({rotation = 0, ...props}: ToggleArrowIconDown) => (
  <Svg width={17} height={10} fill="none" {...props}>
    <G transform={`rotate(${rotation} 18 18)`}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.5 1.5-7 7-7-7"
      />
    </G>
  </Svg>
);
export default ToggleArrowIconDown;
