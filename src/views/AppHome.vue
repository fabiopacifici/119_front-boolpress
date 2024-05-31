<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';
  export default {
    name: 'AppHome',
    components: {
      AppBanner
    },
    data(){
      return {
        loading: true,
        latestPosts: [],
        base_api_url: 'http://127.0.0.1:8000',
        base_posts_url: '/api/latest',
      }
    },
  methods: {

    callAPI(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.latestPosts = response.data.posts
          this.loading = false
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {

    let url = this.base_api_url + this.base_posts_url
    this.callAPI(url);
  }
  }
</script>

<template>
  <AppBanner title="Welcome to Boolpress" lead-text="House of amazing writers" call-to-action="Read our blog"
    call-to-action-url="blog"></AppBanner>

  <section class="latest">
    <div class="container">
      <h2>Latest posts</h2>

      <div class="row" v-if="!loading">
        <div class="col" v-for="post in latestPosts">

          <div class="card">
            <template v-if="post.cover_image.startsWith('uploads')">
              <img :src="base_api_url + '/storage/' + post.cover_image" alt="">
            </template>
            <template v-else>
              <img :src="post.cover_image" alt="">
            </template>

            <div class="card-body">
              <h3>
                {{ post.title }}
              </h3>
            </div>
          </div>

        </div>
      </div>
      <div class="row" v-else>
        <div class="col">
          Loading ...
        </div>
      </div>


    </div>

  </section>


</template>



<style scoped>

</style>