<template>
  <div class="right-nav">
    <github class="icons" />
    <weibo class="icons" />
  </div>
</template>

<script>
import github from '/@/components/SvgIcon/github.svg'
import weibo from '/@/components/SvgIcon/weibo.svg'

export default {
  components: { github, weibo }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/vars.scss';

.right-nav {
  position: absolute;
  right: 0;
  background-color: $color-primary;
  width: 150px;
  height: 50px;
  padding: 0 10px;
  border-radius: 0 0 0 5px;
  z-index: 20;
}

.icons {
  width: 30px;
  margin: 5px 15px;
  fill: $fore-color;
  cursor: pointer;

  &:hover {
    fill: $fore-color-dark-2;
  }
}
</style>
