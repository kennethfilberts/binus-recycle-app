import * as React from 'react';
import Svg, {Path, SvgProps, Circle} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

interface HomeIconProps extends SvgProps {
  navigation: any;
}
const HomeUserIcon = ({navigation, ...props}: HomeIconProps) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      navigation.navigate('User Profile');
    }}>
    <Svg width={59} height={59} fill="none" {...props}>
      <Circle cx={29.5} cy={29.5} r={29.5} fill="#fff" />
      <Path
        fill="#06A385"
        fillRule="evenodd"
        d="M40.35 40.165c-1.466-4.636-5.405-7.293-10.812-7.293H29.5c-5.42-.03-9.38 2.645-10.85 7.293l-.17.54.483.294c2.825 1.723 6.349 2.596 10.47 2.596h.137c4.178 0 7.604-.85 10.47-2.596l.481-.294-.17-.54ZM29.5 29.657c3.93 0 7.127-3.196 7.127-7.125 0-3.93-3.198-7.127-7.127-7.127s-7.125 3.196-7.125 7.127a7.133 7.133 0 0 0 7.125 7.125Z"
        clipRule="evenodd"
      />
    </Svg>
  </TouchableOpacity>
);
export default HomeUserIcon;
