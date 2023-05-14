import * as React from 'react';
import Svg, {Path, SvgProps, G, Defs, Circle} from 'react-native-svg';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface RewardIconProps extends SvgProps {
  navigation: any;
}

const ScanIcon = ({navigation, ...props}: RewardIconProps) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      navigation.navigate('Scan');
    }}
    style={styles.scanButton}>
    <Svg width={81} height={81} fill="none" {...props}>
      <G filter="url(#a)">
        <Circle cx={40.5} cy={40.5} r={32.5} fill="#fff" />
        <Circle cx={40.5} cy={40.5} r={34.5} stroke="#142625" strokeWidth={4} />
      </G>
      <Path
        fill="#142625"
        fillRule="evenodd"
        d="M35.832 30.5c.49 0 .888.39.888.872a.88.88 0 0 1-.888.87l-1.9.002c-1.578.002-2.86 1.261-2.86 2.81v2.168c0 .48-.4.872-.89.872a.88.88 0 0 1-.888-.872v-2.169c0-2.508 2.08-4.55 4.637-4.552l1.9-.001h.001Zm8.369 0h1.858c2.563 0 4.647 2.044 4.647 4.557v2.166a.88.88 0 0 1-.888.871.88.88 0 0 1-.888-.871v-2.166c0-1.552-1.288-2.815-2.87-2.815H44.2a.879.879 0 0 1-.887-.87.88.88 0 0 1 .888-.872Zm-.978 4.366h-6.445c-1.474.015-2.66 1.197-2.647 2.644v1.453c.004.17.142.308.315.314h11.107a.326.326 0 0 0 .318-.314V37.51a2.644 2.644 0 0 0-.77-1.87 2.65 2.65 0 0 0-1.878-.774Zm-15.167 6.182h23.89c.49 0 .887.39.887.872 0 .48-.398.87-.887.87h-1.24v4.152c0 2.515-2.084 4.558-4.646 4.558H44.2a.88.88 0 0 1-.889-.872c0-.48.398-.87.89-.87h1.858c1.583 0 2.87-1.262 2.87-2.816V42.79h-3.06v1.157c.012 1.447-1.172 2.63-2.648 2.644h-6.444c-1.475-.014-2.66-1.197-2.648-2.644v-1.157h-3.06v4.158c0 1.548 1.285 2.807 2.863 2.81h1.9c.49 0 .888.39.888.871a.88.88 0 0 1-.89.872l-1.9-.001c-2.556-.002-4.637-2.044-4.637-4.552v-4.158h-1.238a.88.88 0 0 1-.89-.87c0-.48.4-.87.89-.87Z"
        clipRule="evenodd"
      />
      <Defs />
    </Svg>
  </TouchableOpacity>
);
export default ScanIcon;

const styles = StyleSheet.create({
  scanButton: {
    marginBottom: 40,
  },
});
