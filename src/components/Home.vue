<template>
  <section class="content">
    <div v-for="post in posts" :key="post.attributes.url" class="post">
      <router-link :to="{path: `/post/${post.attributes.url}`}">
        <h1>{{ post.attributes.title }}</h1>
      </router-link>
      <component :is="post.VueComponent" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Home',
  setup: () => {
    const posts = inject('posts')

    return {
      posts
    }
  }
})
</script>

<style lang="scss" scoped>
.post {
  padding-bottom: 50px;
}

.post:last-child {
  padding-bottom: 0;
}
</style>
