<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';
export default {
  name: 'SinglePost',
  components: {
    AppBanner
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8001',
      base_posts_url: '/api/posts',
      post: null,
      loading: true
    }
  },
  methods: {

  },
  mounted() {
    console.log(this.$route.params.id, this.base_api_url, this.base_posts_url)
    const url = this.base_api_url + this.base_posts_url + `/${this.$route.params.id}`
    console.log(url);


     axios.get(url)
     .then(response => {
       console.log(response)
      if(response.data.success) {
        // get the data
        console.log(response.data.response)
        this.post = response.data.response
        this.loading = false

      } else {
        // handle a 404 page 
      }


     }).catch(err => {
       console.error(err)
   })
  }
}
</script>

<template>


  <template v-if="post">




    <AppBanner :title="post.title" lead-text="" call-to-action="Find more about us" call-to-action-url="about">
    </AppBanner>



    <div class="container py-6">


      <template v-if="post.cover_image.startsWith('uploads')">
        <img :src="base_api_url + '/storage/' + post.cover_image" alt="">
      </template>
      <template v-else>
        <img :src="post.cover_image" alt="">
      </template>


      <h3 class="py-4 font-bold">
        {{ post.title }}
      </h3>

      <div class="content">
        {{ post.content }}
      </div>

    </div>
  </template>


</template>



<style scoped></style>