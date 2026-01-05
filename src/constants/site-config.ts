type SiteConfig = {
  title: string; // 网站标题名称（banner 上）
  alternate?: string; // 网站英文短名
  subtitle?: string; // 副标题
  name: string; // 站点作者
  description?: string; // 站点简介（一段话）
  avatar?: string; // 站点头像 logo.png or url
  showLogo?: boolean; // 是否显示 logo，否则用 alternate 当·logo
  author?: string; // 文章作者
  // theme
  site: string; // 站点线上域名 用于 RSS 生成等
  startYear?: number; // 站点创建年份
  keywords?: string[]; // 站点关键词 SEO
  featuredCategories?: {
    link: string;
    image: string;
    label?: string;
    description?: string;
  }[];

  // 首页特殊系列配置
  featuredSeries?: {
    categoryName: string; // 分类名（如 '周刊'）
    label?: string; // 显示名称（如 '前端周刊'）
    enabled?: boolean; // 是否启用，默认 true
    // 周刊详细信息
    fullName?: string; // 完整名称
    description?: string; // 描述
    cover?: string; // 封面图
    links?: {
      github?: string; // GitHub 仓库
      rss?: string; // RSS 订阅链接
      chrome?: string; // Chrome 商店链接
      docs?: string; // 文档链接
    };
  };
};

// 社交媒体配置类型
type SocialPlatform = {
  url: string;
  icon: string;
  color: string; // default bg-primary/20
};

type SocialConfig = {
  github?: SocialPlatform;
  google?: SocialPlatform;
  twitter?: SocialPlatform;
  zhihu?: SocialPlatform;
  music?: SocialPlatform;
  weibo?: SocialPlatform;
  about?: SocialPlatform;
  email?: SocialPlatform;
  facebook?: SocialPlatform;
  stackoverflow?: SocialPlatform;
  youtube?: SocialPlatform;
  instagram?: SocialPlatform;
  skype?: SocialPlatform;
  douban?: SocialPlatform;
  bilibili?: SocialPlatform;
  rss?: SocialPlatform;
};

// TODO: change to backend

// https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/config/
export const siteConfig: SiteConfig = {
  title: '胡桃の博客', // 网站名称
  alternate: 'Walnut', // 网站名称
  subtitle: '往生堂堂主', // 副标题
  name: '胡桃', // 站点作者简称
  description: '一个基于 Astro 的现代化博客主题', // 站点简介（一段话）
  avatar: '/img/auth-hutao.png', // 站点头像 - 请替换 public/img/avatar.webp
  showLogo: true, // 是否显示 svg logo 否则用 title
  author: '胡桃', // 作者名称 - 请修改为你的名字
  site: 'https://樱花.top', // 站点线上域名 - 部署后请修改为你的域名
  startYear: 2025, // 站点创建年份
  keywords: ['博客', '工具', '技术', '软件'], // SEO 关键词
  featuredCategories: [
    {
      link: 'life',
      label: '随笔',
      image: '/img/cover/2.webp',
      description: '生活记录、随想随笔',
    },
    {
      link: 'note',
      label: '笔记',
      image: '/img/cover/4.webp',
      description: '技术笔记、学习笔记',
    },
    {
      link: 'note/front-end',
      label: '前端',
      image: '/img/cover/1.webp',
      description: '前端技术相关',
    },
    {
      link: 'tools',
      label: '工具',
      image: '/img/cover/11.webp',
      description: '工具使用、效率提升',
    },
  ],
  featuredSeries: {
    categoryName: '周刊',
    label: '我的周刊',
    fullName: '我的技术周刊',
    description: `这是周刊/系列文章功能的示例配置。

你可以用它来发布定期更新的系列内容，如技术周刊、读书笔记系列等。

设置 enabled: false 可以关闭此功能。`,
    cover: '/img/weekly_header.webp',
    enabled: true,
    links: {
      github: 'https://github.com/your-username/your-repo',
      rss: '/rss.xml',
    },
  },
};

// 社交媒体配置
// 图标查询: https://icon-sets.iconify.design/ri/
export const socialConfig: SocialConfig = {
  github: {
    url: 'https://github.com/timoxiaokai', // 替换为你的 GitHub 链接
    icon: 'ri:github-fill',
    color: '#191717',
  },
  email: {
    url: 'mn960820@gmail.com', // 替换为你的邮箱
    icon: 'ri:mail-line',
    color: '#ff6600',
  },
  rss: {
    url: '/rss.xml',
    icon: 'ri:rss-line',
    color: '#ff6600',
  },
  twitter: {
    url: 'https://x.com/hntimor', //推特
    icon: 'ri:twitter-fill',
    color: '#4b9ae4',
  },
  bilibili: {
    url: 'https://space.bilibili.com/84061885', //B站
    icon: 'ri:bilibili-fill',
    color: '#da708a',
  },
  music: {
    url: 'https://music.163.com/#/user/home?id=1292486722', //网易云音乐
    icon: 'ri:netease-cloud-music-line',
    color: '#e60026',
  },
};

const { title, alternate, subtitle } = siteConfig;

export const seoConfig = {
  title: `${alternate ? `${alternate} = ` : ''}${title}${subtitle ? ` = ${subtitle}` : ''}`,
  description: siteConfig.description,
  keywords: siteConfig?.keywords?.join(',') ?? '',
  url: siteConfig.site,
};

export const defaultCoverList = Array.from({ length: 21 }, (_, index) => index + 1).map((item) => `/img/cover/${item}.webp`);

// 圣诞特效配置类型
type ChristmasConfig = {
  enabled: boolean;
  features: {
    snowfall: boolean;
    christmasColorScheme: boolean;
    christmasCoverDecoration: boolean;
    christmasHat: boolean;
    readingTimeSnow: boolean;
  };
  snowfall: {
    speed: number;
    intensity: number;
    mobileIntensity: number;
    /** 桌面端最大层数，默认 4 */
    maxLayers: number;
    /** 桌面端每层最大迭代次数，默认 6 */
    maxIterations: number;
    /** 移动端最大层数，默认 2 */
    mobileMaxLayers: number;
    /** 移动端每层最大迭代次数，默认 3 */
    mobileMaxIterations: number;
  };
};

// 圣诞特效配置
export const christmasConfig: ChristmasConfig = {
  enabled: false,
  features: {
    snowfall: true,
    christmasColorScheme: true,
    christmasCoverDecoration: true,
    christmasHat: true,
    readingTimeSnow: true,
  },
  snowfall: {
    speed: 0.5,
    intensity: 0.7,
    mobileIntensity: 0.4,
    // 密度配置：层数 × 迭代次数 = 总迭代次数（原始值为 6×12=72）
    maxLayers: 6,
    maxIterations: 8,
    mobileMaxLayers: 4,
    mobileMaxIterations: 6,
  },
};
