const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-08-17', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://www.flyandnotdown.com' },
    { title: '🎉 开源游戏引擎 Explosion 开发中，欢迎加入', url: 'https://github.com/ExplosionEngine/Explosion' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享图形编程',
  HEO_HERO_TITLE_2: '与游戏人日常',
  HEO_HERO_TITLE_3: 'FLYANDNOTDOWN.COM',
  HEO_HERO_TITLE_4: 'NEW',
  HEO_HERO_TITLE_5: '博客上新',
  HEO_HERO_TITLE_LINK: '/tag/latest',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/recommend' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/hot' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/tutorial' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: 'recommend',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🏃 脚踏实地行动派',
    '🤖️ 数码科技爱好者',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/FlyAndNotDown',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: '/links',
  HEO_INFO_CARD_TEXT3: '交换友链',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Unreal',
      img_1: '/images/heo/unreal.png',
      color_1: '#ffffff',
      title_2: 'C++',
      img_2: '/images/heo/cpp.svg',
      color_2: '#ffffff'
    },
    {
      title_1: 'JavaScript',
      img_1: '/images/heo/javascript.webp',
      color_1: '#f7df1e',
      title_2: 'PyCharm',
      img_2: '/images/heo/pycharm.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/git.png',
      color_1: '#df5b40',
      title_2: 'CLion',
      img_2: '/images/heo/clion.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Vim',
      img_1: '/images/heo/vim.png',
      color_1: '#ffffff',
      title_2: 'VSCode',
      img_2: '/images/heo/vscode.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Rider',
      img_1: '/images/heo/rider.png',
      color_1: '#ffffff',
      title_2: 'Notion',
      img_2: '/images/heo/notion.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'AndroidStudio',
      img_1: '/images/heo/as.png',
      color_1: '#ffffff',
      title_2: 'Blender',
      img_2: '/images/heo/blender.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'WebStorm',
      img_1: '/images/heo/webstorm.png',
      color_1: '#ffffff',
      title_2: 'DX12',
      img_2: '/images/heo/dx12.png',
      color_2: '#000000'
    },
    {
      title_1: 'Python',
      img_1: '/images/heo/python.svg',
      color_1: '#ffffff',
      title_2: 'Explosion',
      img_2: '/images/heo/explosion.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Vulkan',
      img_1: '/images/heo/vulkan.svg',
      color_1: '#ffffff',
      title_2: 'OpenGL',
      img_2: '/images/heo/opengl.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'CMake',
      img_1: '/images/heo/cmake.png',
      color_1: '#ffffff',
      title_2: 'VisualStudio',
      img_2: '/images/heo/vs.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Vercel',
      img_1: '/images/heo/vercel.png',
      color_1: '#ffffff',
      title_2: 'GitHub',
      img_2: '/images/heo/github.png',
      color_2: '#ffffff'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: '',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
