<template>
  <div>
    <header v-show="isShow">
      <!-- 顶部tab -->
      <div id="top_tab">
        <a href="https://juejin.cn/" class="logo">
          <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
            alt="稀土掘金" title="稀土掘金">
        </a>
        <nav class="main_nav">
          <ul class="nav_list">
            <li class="main_nav_list">
              <ul class="phone-hide">
                <li v-for="(topTab,index) in topTabInfo" v-bind:key="index">
                  <a href="">{{ topTab.name }}</a>
                  <i class="count" v-if="topTab.count">{{ topTab.count }}</i>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div id="art_tab">
        <div class="tabList">
          <div class="tab_left"><a href="" v-for="(artTab,index) in artTabInfo" v-bind:key="index">{{ artTab.name }}</a>
          </div>
          <div class="tab-right">
            <a href="">标签管理</a>
          </div>
        </div>

      </div>

    </header>
    <main v-show="!isShow">
      <div id="art_tab2">
        <div class="tabList">
          <a href="" v-for="(artTab,index) in artTabInfo" v-bind:key="index">{{ artTab.name }}</a>
          <div class="tab-right">
            <a href="">标签管理</a>
          </div>
        </div>
      </div>
    </main>
    <nuxt-page />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    hraderScrollListener() {
      //获取操作元素最顶端到页面顶端的垂直距离
      var hraderScrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (hraderScrollTop >= 400) {
        this.isShow = false //大于480时显示元素
      } else {
        this.isShow = true //小于480时隐藏元素
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.hraderScrollListener)
    window.removeEventListener('scroll', this.advert_scrollListener)
  }
}
</script>
<script setup>
const { data: topTab } = await useFetch('/api/info', {
  pick: ['topTab']
})
const { data: artTab } = await useFetch('/api/info', {
  pick: ['artTab']
})
const topTabInfo = topTab.value.topTab
const artTabInfo = artTab.value.artTab
console.log(topTabInfo)
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #515767;
}

body {
  font-size: 12px;
  background-color: #f4f5f5;
}



/* 顶部tab  */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
}

#top_tab {
  height: 60px;
  line-height: 60px;
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
}

#top_tab .logo {
  margin-right: 1rem;
  margin-left: 24px;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  width: auto;
}

#top_tab .logo img {
  display: block;
  width: 107px;
  height: 22px;
}

#top_tab nav.main_nav {
  height: 100%;
  flex: 1 0 auto;
  line-height: normal;
}

#top_tab nav.main_nav li.main_nav_list ul.phone-hide {
  display: flex;
  flex-direction: row;
}

#top_tab nav.main_nav li.main_nav_list ul.phone-hide li {
  position: relative;
  display: inline-block;
  margin: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

#top_tab nav.main_nav li.main_nav_list ul.phone-hide li:first-child a {
  color: #1e80ff;
}


#top_tab nav.main_nav li.main_nav_list ul.phone-hide li a::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 57px;
  line-height: 60px;
}

#top_tab nav.main_nav li.main_nav_list ul.phone-hide li a:hover {
  color: #2f2e2e;
}

#top_tab nav.main_nav li.main_nav_list ul.phone-hide li a:hover::before {
  border-bottom: 3px solid #1e80ff;
}

#top_tab nav.main_nav li.main_nav_list ul.phone-hide li i {
  position: absolute;
  top: 3px;
  left: 10px;
  z-index: 9;
  white-space: nowrap;
  padding: 3px 7px;
  background-color: #ee502f;
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  transform: scale(.5);
  line-height: 18px;
  color: #fff;
}

#art_tab {
  position: fixed;
  top: 60.5px;
  left: 0;
  right: 0;
  display: flex;
  height: 46px;
  width: 100%;
  font-size: 14px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

#art_tab2 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 46px;
  width: 100%;
  font-size: 14px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.tabList {
  position: relative;
  width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  line-height: 1;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.tabList a {
  padding: 0 12px;
  line-height: 46px;
  white-space: nowrap;
  display: inline-block;
}

.tabList .tab_right {
  position: absolute;
  top: 0;
  right: 0;
}

.tabList .tab_left {
  flex: 1;
  display: inline-block;
}
</style>

