import { common as jaCommon } from './ja/common';
import { common as enCommon } from './en/common';
import { common as zhCommon } from './zh/common';
import { common as zhTWCommon } from './zh-Tw/common';

const resources = {
  ja: {
    common: jaCommon,
  },
  en: {
    common: enCommon,
  },
  zh: {
    common: zhCommon,
  },
  'zh-TW': {
    common: zhTWCommon,
  },
};

export default resources;
