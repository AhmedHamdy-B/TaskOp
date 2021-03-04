<template>
  <div class="hello">
    <v-card class="mx-auto" max-width="344" min-height="580">
      <v-img :src="CardData.img_url" height="16rem"></v-img>

      <v-card-title>
        {{ CardData.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ CardData.description.substring(0,30) }}...
      </v-card-subtitle>

<div>
  <v-row class="mx-auto text-center">
    <v-col>
  <img height="12rem"  alt="OPphone" src="../assets/phone.png" /> <span>{{ CardData.our_sent }} <span class="grey--text">sent</span> </span>

 </v-col>
  <v-col>
  <img height="10rem"  alt="OPphone" src="../assets/like.svg" /> <span class="like-text">{{ CardData.likes }}</span>

 </v-col>
 </v-row>
    <v-row class="mx-auto text-center">
    <v-col>
  <img height="10rem"  alt="OPphone" src="../assets/star.svg" /> <span class="secondary--text">{{ CardData.our_favorites }}</span>

 </v-col>
  <v-col>
  <img height="10rem"  alt="OPphone" src="../assets/comments.svg" /> <span class="like-text">{{ CardData.comments }}</span>

 </v-col>
 </v-row>

</div>

      <v-card-actions class="d-flex pt-12 justify-center align-center">
        <v-btn color="secondary" > Send This Prank </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "prankCard",
  props: {
    CardData: Object,
  },
};
</script>
<style scoped lang="scss">

.secondary{
  background-color: #ffa500!important;
}
.like-text{
  color: #395886;
}
</style>
