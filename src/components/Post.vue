<template>
  <section>
    <div v-if="post" class="content">
      <h1>{{ post.attributes.title }}</h1>
      <component :is="post.VueComponent" />
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
