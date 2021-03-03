<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink m-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="200"
        />


      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.ownagepranks.com/"
        target="_blank"
        text
        color="secondary"
      >
        <span class="mr-2">Visit Our Website</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
       <home />
    </v-main>
  </v-app>
</template>

<script>
import home from './views/Home';

export default {
  name: 'App',

  components: {
    home,
  },

  data: () => ({
    pranks:[]
  }),

};
</script>
