<template>
  <div class="header">
    <van-nav-bar v-bind:title="$store.state.title" left-arrow>
      <div slot="right" class="userInfo">
        <span class="name">用户</span>
        <img src="http://source.haoduotools.com/Upload/7A914C19BBA14A9584E40D42A6E0F5/Image/School/Teacher/Avatar/59/5980F21B0449482C92B4D3442F6BC733.png" alt="">
      </div>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar } from 'vant'

export default {
  name: 'Header',
  components: {
    [NavBar.name]: NavBar
  }
}
</script>

<style lang="scss" scoped>
  .header {
    .userInfo {
      display: flex;
      align-items: center;
      font-size: 14px;
      justify-content: flex-end;
      .name {
        padding-right: 5px;
      }
      img {
        width: 32px;
        height: 32px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
    }
  }
</style>
