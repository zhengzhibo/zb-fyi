<template>
  <div class="wrapper">
    <right-nav />
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
    const rawMds = import.meta.glob('./articles/*.md')
    const posts = shallowRef<object>([])
    const promiseCollection: Promise<object>[] = []

    for (const path in rawMds) {
      promiseCollection.push(rawMds[path]())
    }
    Promise.all(promiseCollection).then(mdObjects => {
      mdObjects = mdObjects.map(post => {
        post.attributes.parsedTime = new Date(post.attributes.time)
        return post
      })

      mdObjects.sort((a, b) => {
        return a.attributes.parsedTime.getTime() - b.attributes.parsedTime.getTime()
      })

      posts.value = mdObjects
    })

    provide('posts', posts)
  }
})
</script>

<style lang="scss" scoped>

</style>
