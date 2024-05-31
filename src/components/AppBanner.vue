<script>
export default {
  name: 'AppBanner',
  props: {
    'title' : String,
    'leadText' : String,
    'callToAction': String,
    'callToActionUrl' : String
  }
}
</script>
<template>
  <div class="banner">
    <div class="container">
      <h1>{{title}}</h1>
      <p>
        {{leadText}}
      </p>
      <router-link class="btn btn-primary" :to="{name: callToActionUrl}">{{callToAction}}</router-link>
    </div>
  </div>
</template>


<style scoped></style>