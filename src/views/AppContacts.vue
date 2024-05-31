<script>
import AppBanner from '../components/AppBanner.vue';
export default {
  name: 'AppContacts',
  components: {
    AppBanner
  }
}
</script>

<template>
  <AppBanner title="Get in touch" lead-text="Contact me for anything i will get back to you in a jiffy"
    call-to-action="about" call-to-action-url="about">
  </AppBanner>

  <section class="py-8">
    <div class="container">


      <form action="">




        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>



        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>


        <div class="col-span-full mb-4">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">Type your message</p>
        </div>



        <button type="submit" class="p-4 bg-gray-400 text-gray-100 rounded-lg w-full hover:bg-gray-800 transition">
          Send
        </button>


      </form>



    </div>
  </section>



</template>



<style scoped></style>