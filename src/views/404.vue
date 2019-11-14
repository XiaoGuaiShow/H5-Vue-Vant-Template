<template>
  <div class="page404">
    <p>
      <svg-icon class="icon" icon-class="404" />
    </p>
    <router-link replace to="/">返回首页</router-link>
  </div>
</template>
<script>
export default {
  name: 'page404'
}
</script>
<style lang="scss" scoped>
  .page404 {
    @extend .tc;
    @include center();
    .icon {
      font-size: 100px;
    }
    a{
      font-size: 18px;
    }
  }
</style>
