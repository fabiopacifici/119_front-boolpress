<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}

</script>

<template>

  <AppHeader></AppHeader>
  <main>
    <RouterView />
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
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/contacts">Contacts</router-link>
            </li>

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
