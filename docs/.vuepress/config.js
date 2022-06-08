// 配置导航栏logo(themeConfig.logo)
// 配置导航栏logo(themeConfig.logo)
module.exports = {
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  title: 'zenghuaming', // 网站的标题
  description: 'zenghuaming测试网页', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  // host port在本地运行就不配置了
  themeConfig: {
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      { text: 'Home', link: '/' },
      // 对应blog/fontend/README.md
      { 
        text: '计算机基础', 
        items: [
          { text: '计算机网络', link: '/language/chinese/' },
          { text: '操作系统', link: '/language/chinese/' },
          { text: '计算机组成原理', link: '/language/english/' }
        ] 
      },
      { 
        text: '面试相关', 
        items: [
          { text: '计算机网络', link: '/language/chinese/' },
          { text: '操作系统', link: '/language/chinese/' },
          { text: '计算机组成原理', link: '/language/english/' }
        ] 
      },
      { text: '后端', link: '/blog/backend/' },
      // 对应/guide/guide.md
      { text: '导航', link: '/guide/guide' },
    ],
    sidebar: {
      "/blog/fontend/":[
        ["","111"],
        {
          title: "css",
          name: "css",
          collabsable: false,
          children: [
            ["css/", "目录"],
            ['css/1', "css常考面试题"]
          ]
        }
    ],
    "/blog/backend/":[
      {
        title: "css1",
        name: "css",
        collabsable: true,
        children: [
          ["", "目录"],
          ['java', "css常考面试题"]
        ]
      },{
        title: "css2",
        name: "css2",
        collabsable: true,
        children: [
          ["", "22222"],
          ['java', "33333"]
        ]
      }
  ]
  },
  sidebarDepth: 2,
  lastUpdated: 'Last Updated',
    //search: true, // 设置是否使用导航栏上的搜索框
    //searchMaxSuggestions: 10  // 搜索框显示的搜索结果数
  }
}