import * as React from 'react';
import Svg, {Path, SvgProps, G} from 'react-native-svg';

interface ToggleArrowIcon extends SvgProps {
  rotation?: number;
}

const ToggleArrowIcon = ({rotation = 0, ...props}: ToggleArrowIcon) => (
  <Svg width={9} height={16} fill="none" {...props}>
    <G transform={`rotate(${rotation} 18 18)`}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 7 7-7 7"
      />
    </G>
  </Svg>
);
export default ToggleArrowIcon;
