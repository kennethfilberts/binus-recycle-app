import * as React from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';

const EditIPIcon = (props: SvgProps) => (
  <Svg width={45} height={45} fill="none" {...props}>
    <Rect width={45} height={45} fill="#FE7A6B" rx={10} />
    <Path
      fill="#F5F5FC"
      fillRule="evenodd"
      d="M28.204 21.796L30 20c.545-.545.818-.818.964-1.112a2 2 0 000-1.776c-.146-.294-.419-.567-.964-1.112-.545-.545-.818-.818-1.112-.964a2 2 0 00-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 004.023 3.977zm-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9-.14.26-.199.555-.317 1.145l-.615 3.077c-.066.332-.1.498-.005.593.095.095.26.061.594-.005l3.076-.616c.59-.117.885-.176 1.146-.316.26-.14.473-.352.898-.777l6.89-6.89a12.9 12.9 0 01-4.02-3.98z"
      clipRule="evenodd"
    />
  </Svg>
);
export default EditIPIcon;
