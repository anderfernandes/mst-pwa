<template>
  <v-row align="center" justify="center" class="fill-height" id="thank-you">
    <v-col cols="12" sm="12" md="6" lg="4" class="text-center">
      <v-icon color="blue darken-4" style="font-size:96px!important">
        mdi-thumb-up-outline
      </v-icon>
      <h1 class="blue--text text--darken-4 display-1">Awesome, {{ name }}!</h1>
      <h2 class="text-center grey--text subtitle-1">
        Keep an eye on your email for our newsletters!
      </h2>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style scoped>
  #thank-you {
    background: no-repeat
        linear-gradient(
          rgba(255, 255, 255, 0.75),
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0.75)
        ),
      url('../../assets/cover.jpg') !important;
    background-size: cover !important;
  }
</style>
