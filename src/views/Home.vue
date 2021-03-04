<template>
  <div class="home">
    <div class="mt-8 d-flex justify-center align-center">
      <img class="logo" alt="OP logo" src="../assets/logo.png" />
    </div>
    <v-container class="d-flex justify-center align-center mt-8">
      <v-chip-group outline active-class="Tag-btn-active ma-auto  ">
        <v-chip
          @click="LoadCategoryPranks(category)"
          v-for="category in pranksCategories"
          :key="category.id"
          label
          class="justify-center ma-1 Tag-btn font-bold"
        >
          <v-img height="40" width="40" :src="category.img_url"></v-img>
          <span class="px-2 headline text-capitalize">{{ category.name }}</span>
        </v-chip>
      </v-chip-group>
    </v-container>
    <v-row class="mt-12 pranks" width="10rem">
      <v-col v-for="card in ideasData" :key="card.index" lg="4" md="6" sm="12">
        <prankCard :CardData="card" />
      </v-col>
    </v-row>
    <div class="text-xs-center mt-12 mb-12">
      <v-pagination
        color="secondary"
        circle
        v-if="pagination.total_pages > 1 && pagination.total_pages > 1"
        v-model="pagination.current_page"
        :length="pagination.total_pages"
        :total-visible="10"
        @input="handlePagination"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import prankCard from "@/components/prankCard.vue";
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      pageNum: 1,
      pagination: [],
      currentCat: "",
    };
  },
  // This is the Meta, SEO Data Using Vue-Meta
  metaInfo() {
    return {
      title: "Home Title Meta",
      meta: [
        {
          name: "title",
          content: "Title Meta Tag For Home",
        },
        {
          name: "description",
          content: "Description Meta Tag For Home",
        },
        {
          name: "keywords",
          content: "Keywords Meta Tag For Home",
        },
      ],
    };
  },
  components: {
    prankCard,
  },
  mounted() {
    this.$store.dispatch("loadPranks");
    this.$store.dispatch("loadIdeas");
  },
  methods: {
    LoadCategoryPranks(prankCat) {
      axios
        .get(
          `https://t0u4i52ro7.execute-api.us-east-1.amazonaws.com/api/v1/prank-idea/${prankCat.slug}?page=${this.pageNum}&limit=10`
        )
        .then((response) => {
          this.currentCat = prankCat.slug;
          let PranksCat = response.data.data;
          this.pagination = response.data.pagination;
          this.$store.commit("SET_IDEAS", PranksCat);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handlePagination(pageNumber) {
      axios
        .get(
          `https://t0u4i52ro7.execute-api.us-east-1.amazonaws.com/api/v1/prank-idea/${this.currentCat}?page=${pageNumber}&limit=10`
        )
        .then((response) => {
          let PranksCat = response.data.data;
          this.pagination = response.data.pagination;
          this.$store.commit("SET_IDEAS", PranksCat);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ...mapState(["pranksCategories", "ideasData"]),
  },
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
