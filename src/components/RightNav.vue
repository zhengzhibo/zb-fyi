<template>
  <div class="right-nav">
    <github class="icons" />
    <twitter class="icons" />
  </div>
</template>

<script>
import github from '../components/SvgIcon/github.svg'
import twitter from '../components/SvgIcon/twitter.svg'

export default {
  components: { github, twitter }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/vars.scss';

.right-nav {
  position: absolute;
  right: 0;
  background-color: $main-color;
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
