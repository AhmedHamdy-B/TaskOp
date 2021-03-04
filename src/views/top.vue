<!--This Page Is About Routing And Using Modules in Vuex to show data The module is top.js which i used to fetch Top viewed OP
 and show them in the new Page i created using Vue Router  -->
<template>
  <v-container>
    <v-row class="mt-12 pranks" width="10rem">
      <v-col
        v-for="card in TopViewedOP"
        :key="card.index"
        lg="4"
        md="6"
        sm="12"
      >
        <prankCard :CardData="card" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import prankCard from "@/components/prankCard.vue";

import { mapGetters } from "vuex";
export default {
  name: "most",
    // This is the Meta, SEO Data Using Vue-Meta
  metaInfo() {
    return {
      title: "Top OP Viewed Title Meta",
      meta: [
        {
          name: "title",
          content: "Title Meta Tag For OP Viewed Pranks",
        },
        {
          name: "description",
          content: "Description Meta Tag For OP Viewed Pranks",
        },
        {
          name: "keywords",
          content: "Keywords Meta Tag For OP Viewed Pranks",
        },
      ],
    };
  },
  data() {
    return {};
  },
  components: {
    prankCard,
  },
  mounted() {
    this.$store.dispatch("loadTop");
  },
  computed: {
    ...mapGetters(["TopViewedOP"]),
  },
};
</script>

