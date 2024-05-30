<script>

import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
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

  <header>


    <nav class="main_menu">

      <div class="container">
        <div class="logo">
          LOGO
        </div>

        <div class="right-menu">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/contacts">Contacts</a>
        </div>
      </div>
    </nav>


  </header>

  <main>


    <div class="banner">
      <div class="container">
        <h1>My blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi aliquam aperiam ipsa iusto similique optio
          officiis consectetur. Dignissimos, sit beatae? Vitae similique praesentium cum dolore dicta pariatur
          perspiciatis culpa?
        </p>
        <a class="btn btn-primary " href="#">View Blog</a>
      </div>
    </div>


    <div class="container">

      <div class="row" v-if="!loading">
        <div class="col" v-for="post in posts.data">

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
  </main>


  <footer>

    <div class="container">
      <div class="row">
        <div class="col">
          <h3>LOGO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque unde distinctio consectetur fuga
            ipsum harum eum quas assumenda nesciunt vero ducimus aliquid natus quis ratione, dolor optio eius ea.

          </p>
        </div>
        <div class="col">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>

          </ul>
        </div>
        <div class="col">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">GDPR</a></li>
          </ul>
        </div>
        <div class="col">
          <h3>Find me also</h3>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-linkedin fa-sm fa-fw"></i>
                Linkedin
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-youtube fa-sm fa-fw"></i>
                YouTube
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-github fa-sm fa-fw"></i>
                GitHub
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>



  </footer>
</template>

<style></style>
