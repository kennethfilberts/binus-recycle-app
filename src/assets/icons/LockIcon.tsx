import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const LockIcon = (props: SvgProps) => (
  <Svg width={15} height={15} viewBox="0 0 1000 1001" {...props}>
    <Path d="M472 1h58c.92 1.09 2.09 1.61 3.51 1.6 9.76-.05 19.11 2.58 28.44 4.83C603.62 17.49 639.76 38 671.44 66.56c18.69 16.85 33.8 36.66 46.5 58.32 21.91 37.37 33.4 77.64 33.44 121.06 0 12.83.01 25.66.01 38.49 0 28.32.1 56.65-.09 84.97-.03 4.85 1.52 6.46 6.34 6.3 9.15-.3 18.33.15 27.49-.14 8.95-.29 17.5 1.43 25.96 4 37.36 11.35 65.38 47.56 65.35 87.42-.13 147.78-.08 295.57.03 443.35 0 7.24-.69 14.34-2.66 21.17-8.85 30.74-27.93 52.38-57.88 64.3-5.23 2.08-10.98 2.38-15.92 5.2H202c-1.92-2.5-4.94-1.59-7.41-2.33-21.09-6.3-38.59-17.71-51.51-35.74-10.51-14.67-17.32-30.88-17.34-49.06-.16-150.29-.07-300.57-.15-450.86 0-6.77 1.44-13.21 3.26-19.56 5.78-20.15 16.88-36.71 33.82-49.28 15.37-11.41 32.39-18.17 51.68-18.5 9.66-.17 19.33-.04 28.99-.05q7.27-.01 7.29-7.16c0-39.15.18-78.31-.07-117.46-.12-18.87 1.76-37.38 5.78-55.84 9.52-43.75 30.5-81.38 60.13-114.42 21.38-23.84 47.2-42.06 75.81-56.06C416.15 13 441.32 4.99 468.01 2.66c1.55-.14 2.97-.37 4.01-1.65Zm28.74 374.62h158.93c6.98 0 7.01-.02 7.01-6.96 0-40.15-.07-80.3.03-120.45.04-14.73-2.37-29.17-6.59-43.09-9.46-31.2-26.21-57.84-51.14-79.35-27.23-23.5-58.9-36.4-94.25-40.16-20.11-2.14-40.24.24-59.59 6.19-39.58 12.16-71.33 35.2-93.68 70.36-17.04 26.81-26.07 56.15-26.13 88.04-.07 39.32-.02 78.63-.02 117.95q0 7.46 7.5 7.47h157.93Zm-1.26 168.61c-4.58.44-10.61.01-16.77 1.57-23.97 6.04-41.61 19.98-53.91 41.13-9.74 16.74-12.09 35.13-8.83 53.55 3.97 22.48 16.36 40.51 35.51 53.36 3.85 2.59 4.93 5.59 4.9 9.96-.14 29.65-.07 59.3-.06 88.96 0 2.16-.17 4.4.29 6.47 4.16 18.54 20.69 34.48 42.16 33.92 19.51-.5 38.86-19.52 38.89-39.43.04-28.82.23-57.64-.13-86.46-.09-7.01 1.88-11.38 7.76-15.6 28.07-20.14 40.95-55.74 29.81-91.08-9.36-29.69-41.18-58.05-79.63-56.36Z" />  
  </Svg>
);
export default LockIcon;
