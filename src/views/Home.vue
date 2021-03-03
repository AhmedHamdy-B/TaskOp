<template>
  <div class="home">
    <div class="mt-8 d-flex justify-center align-center">
      <img class="logo" alt="OP logo" src="../assets/logo.png" />
    </div>
    <div class="mt-8 d-flex justify-center align-center">
      <v-chip-group outline active-class="Tag-btn-active  ">
        <v-chip
          v-for="category in pranksCategories"
          :key="category.id"
          label
          justify="center"
          class="justify-center ma-1 Tag-btn font-bold"
        >
          <v-img
            height="40"
            width="40"
            :src="category.img_url"
          ></v-img>
          <span class="px-2 headline text-capitalize">{{category.name}}</span>
        </v-chip>
      </v-chip-group>
    </div>
    <v-row class="mt-12 pranks" width="10rem">
      <v-col v-for="card in ideasData" :key="card.index" lg="4" md="6" sm="12">
        <prankCard :CardData='card'/>
      </v-col>
    </v-row>
  </div>

</template>

<script>
// @ is an alias to /src
import prankCard from "@/components/prankCard.vue";
import {mapState}  from 'vuex';
export default {
  name: "Home",
  components: {
    prankCard,
  },
    mounted(){
    this.$store.dispatch('loadPranks');
    this.$store.dispatch('loadIdeas');

  },
  computed:{
    ...mapState([
      'pranksCategories',
      'ideasData'
    ])
  }
};
</script>

<style>
.home {
  max-width: 80%;
  margin: auto;
}
.pranks {
  max-width: 80%;
  margin: auto;
}
.logo {
  max-width: 80%;
  margin: auto;
}
.Tag-btn {
  min-height: 10vh !important;
  min-width: 7vw !important ;
  border-radius: 10px !important;
  color: white !important;
  background-color: #2fdbd9 !important;
}
.Tag-btn-active {
  border-radius: 10px !important;

  color: white !important;
  background-color: #ffa500 !important;
}
</style>
