<template>
  <section class="content">
    <div v-if="post">
      <h1>{{ post.attributes.title }}</h1>
      <component :is="post.VueComponent" />
    </div>
    <div v-else>
      <h1>找不到对应文章…</h1>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'Post',
  props: {
    postUrl: {
      type: String
    }
  },
  setup: (props) => {
    const posts = inject('posts')
    const post = ref()

    watchEffect(() => {
      post.value = posts.value.find(post => post.attributes.url === props.postUrl)
    })

    return {
      post
    }
  }
})
</script>
