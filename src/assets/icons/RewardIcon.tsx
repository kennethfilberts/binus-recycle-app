import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface RewardIconProps extends SvgProps {
  color: string;
}

const RewardIcon = ({color, ...props}: RewardIconProps) => (
  <Svg width={25} height={25} {...props}>
    <Path
      fillRule="evenodd"
      d="M19.761 12.001c0 .814.668 1.475 1.489 1.475.414 0 .75.333.75.743v2.677C22 19.159 20.142 21 17.858 21H6.143C3.859 21 2 19.159 2 16.896v-2.677c0-.41.336-.743.75-.743.822 0 1.49-.662 1.49-1.475 0-.793-.641-1.39-1.49-1.39a.752.752 0 0 1-.53-.217.74.74 0 0 1-.22-.525l.002-2.764C2.002 4.842 3.86 3 6.144 3h11.712c2.284 0 4.143 1.842 4.143 4.105L22 9.782a.741.741 0 0 1-.219.526.753.753 0 0 1-.531.218c-.821 0-1.489.662-1.489 1.475Zm-5.509.647 1.179-1.137a.73.73 0 0 0-.409-1.25l-1.629-.236-.729-1.462a.737.737 0 0 0-.662-.41H12a.74.74 0 0 0-.663.409l-.729 1.463-1.626.235a.735.735 0 0 0-.6.498.724.724 0 0 0 .187.753l1.179 1.137-.278 1.608a.727.727 0 0 0 .295.719.742.742 0 0 0 .777.054L12 14.27l1.455.757a.733.733 0 0 0 .78-.053.723.723 0 0 0 .296-.718l-.279-1.608Z"
      clipRule="evenodd"
      fill={color}
    />
  </Svg>
);
export default RewardIcon;
