<template>
  <div class="content">
    <div class="list-container">
      <div class="list-header">
        <ul>
          <li>
            <router-link to="/" id="certain">推荐</router-link>
          </li>
          <li>
            <router-link to="/?sort=newest">最新</router-link>
          </li>
          <li>
            <router-link to="?sort=hottest">热榜</router-link>
          </li>
        </ul>
      </div>
      <List v-bind:address="query"></List>
    </div>
    <aside class="info">
      <div class="sidebar">
        <div class="advertisement">
          <a href="">
            <img v-bind:src="advertisementImg.img" alt="">
          </a>
        </div>
        <div class="app-link">
          <img v-bind:src="appInfo.link" alt="">
          <div class="content-box">
            <div class="headline">{{ appInfo.line }}</div>
            <div class="desc">{{ appInfo.desc }}</div>
          </div>
        </div>
      </div>
      <div class="recommend-author">
        <div class="user-header">🎖️作者榜</div>
        <div class="user-list">
          <ul>
            <li v-for="(user,index) in usersInfo" v-bind:key="index">
              <div class="user">
                <div class="user-photo">
                  <img v-bind:src="user.photo" alt="">
                </div>
                <div class="user-info">
                  <div class="user-name">
                    <span class="name">{{ user.name }}</span>
                    <span class="rank">
                      <img v-bind:src="user.level" alt="">
                    </span>
                  </div>
                  <div class="user-position">{{ user.position }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="complete">
          完整榜单
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
const { data: app } = await useFetch('/api/info', {
  pick: ['app']
})
const { data: user } = await useFetch('/api/info', {
  pick: ['user']
})
const { data: advertisement } = await useFetch('/api/info', {
  pick: ['advertisement']
})
const appInfo = reactive(app.value.app)
const usersInfo = reactive(user.value.user)
const advertisementImg = reactive(advertisement.value.advertisement)
const route = useRoute()
let query = computed({
  get() {
    return query.sort
  },
  set(value) {
    query = value
  }
})
watch(
  route,
  value => {
    query.value = value.query
  },
  { immediate: true }
)
</script> 

<style lang="css">
@font-face {
  font-family: 'icomoon';
  src: url('./fonts/icomoon.eot?7kkyc2');
  src: url('./fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'), url('./fonts/icomoon.ttf?7kkyc2') format('truetype'), url('../fonts/icomoon.woff?7kkyc2') format('woff'), url('../fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

body {
  height: 100%;
}
.adv2 {
  position: fixed !important;
  top: 700px;
}
/* 文章 */
.content {
  position: absolute;
  left: 50%;
  top: 110px;
  transform: translate(-50%);
  width: 960px;
  z-index: -1;
  margin-top: 12px;
}

.list-container {
  float: left;
  width: 700px;
  background-color: #fff;
}

.list-header {
  position: relative;
  height: 46px;
  padding-left: 14px;
  border-bottom: 1px solid #eaeaea;
}

.list-header ul {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.list-header li {
  line-height: 15px;
  text-align: center;
  display: inline-block;
  border-right: 1px solid #eaeaea;
}

.list-header li:last-child {
  border-right: 0;
}

.list-header a {
  width: 57px;
  height: 15px;
  display: inline-block;
  color: #909090;
  font-size: 15px;
}

.list-header a:hover {
  color: #1e80ff;
}

.list-wrap {
  width: 700px;
}

.list-wrap li {
  cursor: pointer;
  padding-top: 14px;
}

.list-wrap li:hover {
  background-color: #fafafa;
}

.list-meta {
  width: 660px;
  height: 22px;
  margin: auto;
}

.meta-container div {
  display: inline-block;
}

.user-message {
  color: #4e597d;
}

.data {
  color: #86909c;
}

.tag-list a {
  padding-right: 3px;
  text-align: center;
  color: #86909c;
  display: inline-block;
}

.tag-list a:hover,
.user-message:hover {
  color: #1d7dfa;
}

.tag-list a:first-child:before {
  content: '';
}

.tag-list a:before {
  content: '·';
  padding-right: 5px;
}

.tag-list:before {
  content: '|';
  color: #e5e6eb;
}

.dividing {
  width: 5px;
  height: 14px;
  color: #e5e6eb;
}

.list-main {
  width: 660px;
  height: 93px;
  margin: auto;
  border-bottom: 1px solid #eaeaea;
}

.list-content {
  width: 516px;
  height: 84px;
  display: inline-block;
}

.abstract {
  width: 516px;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abstract a {
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #86909c;
}

.list-action {
  width: 516px;
  height: 22px;
}

.list-info {
  width: 516px;
  height: 80px;
  display: inline-block;
}

.title {
  width: 516px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 8px;
  display: inline-block;
}

.title a {
  font-weight: 700;
  font-size: 16px;
  color: #1d2129;
}

.list-info .description {
  width: 516px;
  height: 44px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.description {
  width: 660px;
  height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.description a {
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #86909c;
}

.list-main img {
  float: right;
  width: 120px;
  height: 80px;
}

.list-action li {
  display: inline-block;
  padding-right: 20px;
  color: #4e5969;
}

.position {
  font-family: 'icomoon';
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  display: inline-block;
}

.list-action .item-like:hover,
.item-comment:hover {
  color: #1d7dfa;
}

.spin {
  line-height: 18px;
  transform: rotateY(180deg);
}

.title :visited {
  color: #86909c;
}

.info {
  float: right;
  width: 240px;
  background-color: #f4f5f5;
}

.recommend-author {
  width: 240px;
  background-color: #fff;
  margin-bottom: 20px;
}

.user-header {
  width: 240px;
  padding: 12px;
  border-bottom: 1px solid #f5f5f5;
}

.user-photo img {
  float: left;
  width: 46px;
  height: 46px;
  border-radius: 50%;
}

.user-list li {
  width: 240px;
}

.user-list li:hover {
  background-color: #fbfbfb;
}

.user-list,
.complete {
  cursor: pointer;
}

.user-list .user {
  width: 210px;
  height: 46px;
  padding: 12px;
}

.user-info {
  float: right;
  width: 158px;
  height: 38px;
}

.user-name .name {
  color: #333;
  font-weight: 400;
}

.user-position {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 5px;
  color: #909090;
}

.complete {
  position: relative;
  width: 240px;
  height: 44px;
  color: #007fff;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  border-top: 1px solid #f5f5f5;
}

.complete:after {
  position: absolute;
  content: '';
  font-family: 'icomoon';
  font-size: 18px;
}

.rank img {
  width: 35px;
  height: 16px;
}

.advertisement {
  position: relative;
  width: 240px;
  height: 200px;
  margin-bottom: 18px;
}

.advertisement a {
  display: inline-block;
}

.advertisement a:after {
  content: '广告';
  position: absolute;
  width: 44px;
  height: 22px;
  bottom: 10px;
  right: 10px;
  text-align: center;
  color: #fff;
  line-height: 22px;
  background-color: rgb(0, 0, 0, 0.2);
}

.app-link {
  width: 240px;
  height: 74px;
  box-sizing: border-box;
  padding: 12px;
  background-color: #fff;
  margin-bottom: 18px;
}

.app-link img {
  width: 50px;
  height: 50px;
}

.advertisement img {
  float: left;
  width: 240px;
  height: 200px;
}

.content-box {
  float: right;
}

.headline {
  font-size: 15px;
  margin-bottom: 8px;
}

.desc {
  color: #86909c;
}

#secure {
  position: fixed;
  right: 210px;
  top: 25px;
}

#certain {
  color: #1e80ff;
}
</style>