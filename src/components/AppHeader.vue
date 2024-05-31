<script>
  export default {
    name: 'AppHeader',
    data(){
      return {
        menu: [
          {
            'text' : 'Home',
            'route' : 'home'
          },
           {
            'text' : 'About',
            'route' : 'about'
          },
           {
            'text' : 'Blog',
            'route' : 'blog'
          },
          {
            'text': 'Contacts',
            'route': 'contacts'
          }
        ]
      }
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
          <router-link :to="{ name: item.route }" v-for="item in menu">{{item.text}}</router-link>    
        </div>
      </div>
    </nav>


  </header>

</template>

<style scoped>

</style>
