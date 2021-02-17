<template>
  <footer class="page-footer">
    <div class="row">
      <div class="column">
        <div>
          <span class="title">Title</span>
          <div class="split"></div>
          <ul class="sub-list">
            <router-link to="/">
              <li class="sub-item">item1</li>
            </router-link>
            <router-link to="/">
              <li class="sub-item">item2</li>
            </router-link>
            <router-link to="/">
              <li class="sub-item">item3</li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="column">
        <div>
          <span class="title">Title</span>
          <div class="split"></div>
          <ul class="sub-list">
            <router-link to="/">
              <li class="sub-item">item1</li>
            </router-link>
            <router-link to="/">
              <li class="sub-item">item2</li>
            </router-link>
            <router-link to="/">
              <li class="sub-item">item3</li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFooter',
  setup: () => {
  }
})
</script>

<style lang="scss" scoped>
@import 'src/styles/vars.scss';

.page-footer {
  background: $color-primary;
  width: 100%;
  max-width: calc(112rem + (100% - 112rem) / 2);
  border-radius: 0 25px 0 0;
  color: $fore-color;
  display: flex;
  flex-direction: row-reverse;

  .row {
    width: 100%;
    max-width: 112rem;
  }

  .title {
    font-size: 36px;
  }

  .split {
    border-top: 4px solid $fore-color;
    width: 20px;
    margin: 20px 0 30px 0;
  }

  .sub-list {
    font-size: 18px;
    list-style: none;
    a {
      color: $fore-color;
    }
  }
}
</style>
