const topTab = [
  {
    "name": "首页"
  },
  {
    "name": "沸点"
  },
  {
    "name": "课程",
    "count": "上新"
  },
  {
    "name": "直播"
  },
  {
    "name": "活动"
  },
  {
    "name": "竞赛",
    "count": "马上报名"
  },
  {
    "name": "商城"
  },
  {
    "name": "App",
    "count": "800"
  },
  {
    "name": "插件"
  },
  {
    "name": "会员五折购"
  },
  {
    "name": "abc"
  },
  {
    "name": "dfg"
  }

]

const artTab = [
  {
    "name": "综合"
  }, {
    "name": "关注"
  }, {
    "name": "后端"
  }, {
    "name": "前端"
  }, {
    "name": "Android"
  }, {
    "name": "iOS"
  }, {
    "name": "人工智能"
  }, {
    "name": "开发工具"
  }, {
    "name": "代码人生"
  }, {
    "name": "阅读"
  },
  {
    "name": "代码人生"
  }, {
    "name": "阅读"
  },
  {
    "name": "代码人生"
  }, {
    "name": "阅读"
  },
  {
    "name": "代码人生"
  }, {
    "name": "阅读"
  },

]

const list = [
  {
    listHeader: {
      name: "推荐"
    },
    listWrap: [
      {
        userMessage: "摹客",
        data: "1月前",
        tagList: ["前端", "GitHub", "Java"],
        title: "改bug神器，ChatGPT分分钟扫描，真香！",
        description: " 最近ChatGPT大火，各大论坛中都会出现它的关键词。机器和人对话本不是什么新鲜事，而ChatGPT上线仅5天，用户数量就超百万，之所以能在短时间吸引到这么多用户尝鲜，是因为它比“人工智障”的AI前"
      },
      {
        userMessage: "掘金酱",
        data: "25天前",
        title: "「兔了个兔」创意投稿大赛来袭！秀兔兔创意，迎新年好礼！",
        description: "又是一年新春之际，祝福大家兔年快乐！本期创意投稿大赛主题为「兔了个兔」，围绕“兔”这个元素展开创意！又是一年新春之际，祝福大家兔年快乐！本期创意投稿大赛主题为「兔了个兔」，围绕“兔”这个元素展开创意！",
        img: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb72413461364175af5edf2a1fae4446~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "掘金酱",
        data: "4天前",
        title: "新年伊始，2月更文带你在技术写作之路「兔飞猛进」｜ 掘金日新计划",
        description: "掘友们新年快乐~2023年第一次更文挑战正式上线啦！相信大家已经调整好状态，蓄势待发了，2月与掘金一起在技术写作之路「兔飞猛进」吧！",
        img: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf647779fc3443fd90baf52053a93c78~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "海阔_天空",
        data: "22天前",
        tagList: ["前端", "性能优化", "Vue.js"],
        title: "前端性能优化——首页资源压缩63%、白屏时间缩短86%",
        description: "提升首屏的加载速度，是前端性能优化中最重要的环节，这里笔者梳理出一些 `常规且有效` 的首屏优化建议 通过对比优化前后的性能变化，来验证方案的有效性，了解并掌握其原理",
        img: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/baf9043e819f418f9b09bd458d05f063~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "黄金林",
        data: "21天前",
        tagList: ["前端", 'Vue.js'],
        title: "vue阻止重复请求",
        description: "项目当中前端代码会遇到同一个请求向服务器发了多次的情况,我们要避免服务器资源浪费,同一个请求一定时间只允许发一次请求,如果业务简单可以用定时器做防抖,如果业务复杂我要通过ajax库统一取消ajax请求",
      },
      {
        userMessage: "海阔_天空",
        data: "22天前",
        tagList: ["前端", "性能优化", "Vue.js"],
        title: "前端性能优化——首页资源压缩63%、白屏时间缩短86%",
        description: "提升首屏的加载速度，是前端性能优化中最重要的环节，这里笔者梳理出一些 `常规且有效` 的首屏优化建议 通过对比优化前后的性能变化，来验证方案的有效性，了解并掌握其原理",
        img: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/baf9043e819f418f9b09bd458d05f063~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "海阔_天空",
        data: "22天前",
        tagList: ["前端", "性能优化", "Vue.js"],
        title: "前端性能优化——首页资源压缩63%、白屏时间缩短86%",
        description: "提升首屏的加载速度，是前端性能优化中最重要的环节，这里笔者梳理出一些 `常规且有效` 的首屏优化建议 通过对比优化前后的性能变化，来验证方案的有效性，了解并掌握其原理",
        img: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/baf9043e819f418f9b09bd458d05f063~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "海阔_天空",
        data: "22天前",
        tagList: ["前端", "性能优化", "Vue.js"],
        title: "前端性能优化——首页资源压缩63%、白屏时间缩短86%",
        description: "提升首屏的加载速度，是前端性能优化中最重要的环节，这里笔者梳理出一些 `常规且有效` 的首屏优化建议 通过对比优化前后的性能变化，来验证方案的有效性，了解并掌握其原理",
        img: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/baf9043e819f418f9b09bd458d05f063~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "海阔_天空",
        data: "22天前",
        tagList: ["前端", "性能优化", "Vue.js"],
        title: "前端性能优化——首页资源压缩63%、白屏时间缩短86%",
        description: "提升首屏的加载速度，是前端性能优化中最重要的环节，这里笔者梳理出一些 `常规且有效` 的首屏优化建议 通过对比优化前后的性能变化，来验证方案的有效性，了解并掌握其原理",
        img: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/baf9043e819f418f9b09bd458d05f063~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      }
    ]
  },
  {
    listHeader: {
      name: "最新"
    },
    listWrap: [
      {
        userMessage: "京东云开发者",
        data: "2小时前",
        tagList: ["前端", "Vue.js", '架构'],
        title: "Backbone前端框架解读",
        description: "在前端的发展道路中，前端框架元老之一jQuery对繁琐的DOM操作进行了封装，提供了链式调用、各类选择器，屏蔽了不同浏览器写法的差异性，但是前端开发过程中依然存在作用域污染、代码复用度低、冗余度高",
        img: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce8db9517d16446aa964872a5acbacba~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "法医",
        data: "2小时前",
        tagList: ["前端", "后端"],
        title: "2023高频前端面试题合集之网络篇",
        description: "近期整理了一下高频的前端面试题，分享给大家一起来学习。如有问题，欢迎指正！ 欢迎大家关注该专栏：点赞👍 + 收藏🤞 前端面试题系列文章： 【1】2022高频前端面试题——HTML篇 【2】2022高频",
        img: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42e99d383d5a402f82222f0f0311995e~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "loveX001",
        data: "2小时前",
        tagList: ["JavaScript"],
        title: "如何整理自己的前端面试题库",
        description: "一个 tcp 连接能发几个 http 请求？ 如果是 HTTP 1.0 版本协议，一般情况下，不支持长连接，因此在每次请求发送完毕之后，TCP 连接即会断开，因此一个 TCP 发送一个 HTTP 请求",
      },
      {
        userMessage: "躺平使者",
        data: "1天前",
        tagList: ["前端"],
        title: "[兔了个兔]——兔年元宵猜灯谜",
        description: "今日元宵佳节，有些地方在这天会有盛大的集会，举办猜灯谜活动。在外工作的我，不能感受猜灯谜的气氛，只能自己动手搞一个猜灯谜小游戏。"
      },
    ]
  },
  {
    listHeader: {
      name: "热榜"
    },
    listWrap: [
      {
        userMessage: "狼叔",
        data: "2天前",
        tagList: ["前端"],
        title: "2022大前端总结和2023就业分析",
        description: "我在年前给掘金平台分享了《2022年热点技术盘点》的前端热点，算是系统性的梳理了一下我自己对前端一整年的总结。",
        img: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e1d1bf265d54a3d8e7d3f50d9b03d53~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "桃小瑞",
        data: "2天前",
        tagList: ['JavaScript', "前端", 'Vue.js'],
        title: "Vue 3 中的极致防抖/节流（含常见方式防抖/节流）",
        description: "今天给大家带来的是《Vue 3 中的极致防抖/节流（含常见方式防抖/节流）》这篇文章，文章中不仅会讲述原来使用的防抖或节流方式，还会带来新的一种封装方式，使用起来更简单、更清晰。。",
        img: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ac03f7a273b400fb6404effa6b1c5ba~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?"
      },
      {
        userMessage: "狼叔",
        data: "2天前",
        tagList: ["前端"],
        title: "2022大前端总结和2023就业分析",
        description: "我在年前给掘金平台分享了《2022年热点技术盘点》的前端热点，算是系统性的梳理了一下我自己对前端一整年的总结。",
        img: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ac03f7a273b400fb6404effa6b1c5ba~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      },
      {
        userMessage: "颜酱",
        data: "16小时前",
        tagList: ["前端", "Vue.js", "JavaScript"],
        title: "跳转别人的页面，怎么加个返回呢",
        description: "有时候需要跳转别人的页面，但是需要在别人的页面，加个返回之类等，我们需要的逻辑。 此时，iframe就是个不错的解决方案. 但是 iframe 的属性，我总记不住，索性写个组件，回头就可以直接用了",
      },
    ]
  },
]

const advertisement = {
  img: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc4c75e2a9a040c5948838adbdbbcad6~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?'
}

const user = [
  {
    photo: "https://p3-passport.byteimg.com/img/user-avatar/91ac9fa11eade880762f4f76cdb2cba0~100x100.awebp",
    name: "Nakano_May",
    position: "Java开发工程师",
    level: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png"
  },
  {
    photo: "https://p3-passport.byteimg.com/img/user-avatar/3298f2149155cd4fce1f6942122778a3~100x100.awebp",
    name: "Elasticsearch",
    position: "Elastic 社区首席布道师 @ Elastic",
    level: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png"
  },
  {
    photo: "https://p3-passport.byteimg.com/img/user-avatar/c97ce801b1a67d1851d8a768ee4de388~100x100.awebp",
    name: "小钟同学",
    position: "撸码员",
    level: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png"
  }
]

const app = {
  link: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png",
  line: "下载稀土掘金APP",
  desc: "一个帮助开发者成长的社区"
}

export default () => {
  return {
    topTab,
    artTab,
    list,
    advertisement,
    user,
    app
  }
}