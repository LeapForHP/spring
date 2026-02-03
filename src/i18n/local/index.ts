import { common as jaCommon } from './ja/common';
import { common as enCommon } from './en/common';
import { common as zhCommon } from './zh/common';
import { common as zhTWCommon } from './zh-TW/common';

import { blog as jaBlog } from './ja/blog';
import { blog as enBlog } from './en/blog';
import { blog as zhBlog } from './zh/blog';
import { blog as zhTWBlog } from './zh-TW/blog';

const resources = {
  ja: {
    common: jaCommon,
    blog: jaBlog,
  },
  en: {
    common: enCommon,
    blog: enBlog,
  },
  zh: {
    common: zhCommon,
    blog: zhBlog,
  },
  'zh-TW': {
    common: zhTWCommon,
    blog: zhTWBlog,
  },
};

export default resources;