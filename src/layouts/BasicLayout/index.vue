<template>
  <div class="BasicLayout">
    <Header />
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="router"></router-view>
      </keep-alive>
      <router-view class="router" v-else></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import defaultSetting from '@/settings'
export default {
  name: 'BasicLayout',
  computed: {
    transitionName () {
      if (defaultSetting.needPageTrans) {
        return this.$store.state.direction
      }
      return ''
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .router {
    position: absolute;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    top: 50px;
    right: 0;
    bottom: 50px;
    left: 0;
  }
</style>
