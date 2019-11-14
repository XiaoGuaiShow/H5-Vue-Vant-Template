<template>
  <van-tabbar route :safe-area-inset-bottom="true">
    <van-tabbar-item icon="home-o" replace to="/show">功能展示</van-tabbar-item>
    <van-tabbar-item icon="orders-o" replace to="/article">文章列表</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'Footer',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>
