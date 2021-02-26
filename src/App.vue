<template>
  <right-nav />
  <div class="wrapper">
    <div class="container">
      <page-header />
      <router-view />
    </div>
    <page-footer />
  </div>
</template>

<script lang="ts">
import PageFooter from '/@/components/PageFooter.vue'
import PageHeader from '/@/components/PageHeader.vue'
import RightNav from '/@/components/RightNav.vue'

import { defineComponent, shallowRef, provide } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    PageHeader, PageFooter, RightNav
  },
  setup: () => {
    const postFile = import.meta.globEager('./articles/*.md')
    const posts = shallowRef<object>([])
    for (const path in postFile) {
      const post = postFile[path]
      post.attributes.parsedTime = new Date(post.attributes.time)
      post.attributes.path = path
    }

    posts.value = Object.values(postFile).sort((a, b) => {
      return a.attributes.parsedTime.getTime() - b.attributes.parsedTime.getTime()
    })

    provide('posts', posts)
  }
})
</script>

<style lang="scss" scoped>
@import "styles/vars";

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 12px solid $color-primary;
  min-height: 100vh;
}
</style>
