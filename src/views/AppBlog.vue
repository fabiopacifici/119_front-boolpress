<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';
export default {
  name: 'AppBlog',
  components: {
    AppBanner
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8001',
      base_posts_url: '/api/posts',
      posts: [],
      loading: true
    }
  },
  methods: {

    goTo(page) {
      const url = this.base_api_url + this.base_posts_url + `?page=${page}`
      console.log(url);
      this.callAPI(url)
    },
    prevPage(url) {
      console.log(url)
      this.callAPI(url)
    },

    nextPage(url) {
      console.log(url)
      this.callAPI(url)
    },

    callAPI(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.posts = response.data.posts
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

  <AppBanner title="BoolPress Blog" lead-text="Read our amaing blog posts" call-to-action="Find more about us"
    call-to-action-url="about"></AppBanner>

  <div class="container">

    <div class="row" v-if="!loading">
      <div class="col" v-for="post in posts.data">

        <div class="card">

          <router-link :to="{ name: 'singlePost', params: { id: post.id } }">

            <template v-if="post.cover_image.startsWith('uploads')">
              <img :src="base_api_url + '/storage/' + post.cover_image" alt="">
            </template>
            <template v-else>
              <img :src="post.cover_image" alt="">
            </template>

          </router-link>


          <div class="card-body">
            <router-link :to="{ name: 'singlePost', params: { id: post.id } }">
              <h3>
                {{ post.title }}
              </h3>
            </router-link>
          </div>
        </div>

      </div>
    </div>
    <div class="row" v-else>
      <div class="col">
        Loading ...
      </div>
    </div>



    <nav class="pagination" aria-label="Page navigation">
      <ul>
        <li class="page-item" v-show="posts.prev_page_url" @click="prevPage(posts.prev_page_url)">
          <button class="page-link" aria-label="Previous">
            <span aria-hidden="true"><i class="fas fa-chevron-left fa-sm fa-fw"></i>
            </span>
          </button>
        </li>

        <li class="page-item" :class="{ 'active': page == posts.current_page }" v-for="page in posts.last_page"
          @click="goTo(page)">
          <button class="page-link">{{ page }}</button>
        </li>


        <li class="page-item" v-show="posts.next_page_url" @click="nextPage(posts.next_page_url)">
          <button class="page-link" aria-label="Next">
            <span aria-hidden="true">
              <i class="fas fa-chevron-right fa-sm fa-fw"></i>
            </span>
          </button>
        </li>
      </ul>
    </nav>


  </div>


</template>



<style scoped></style>