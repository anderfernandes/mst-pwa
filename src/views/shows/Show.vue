<template>
  <v-row align="center" justify="center" class="mb-8" v-if="show">
    <v-app-bar dark color="#003E7E" class="elevation-0" fixed>
      <v-btn icon>
        <v-icon @click="$router.push({ name: 'our-shows' })">
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <v-toolbar-title class="pl-0">
        {{ show.name }}
      </v-toolbar-title>
    </v-app-bar>
    <v-col>
      <v-row>
        <v-col cols="12" class="my-12" xs="12" md="8" offset-md="2">
          <v-row justify="center">
            <v-img max-width="200" :src="show.cover"></v-img>
          </v-row>
          <div class="text-center headline">
            <v-chip label small dark color="#003E7E" class="ml-2">
              <v-icon small left>mdi-filmstrip</v-icon>
              {{ show.type }}
            </v-chip>
            <v-chip label small dark color="#003E7E" class="ml-2">
              <v-icon small left>mdi-clock-outline</v-icon>
              {{ show.duration }} minutes
            </v-chip>
          </div>
          <div class="text-center headline">{{ show.name }}</div>
          <v-divider class="mb-2"></v-divider>
          <div class="body-2" v-if="show.description" v-html="marked(show.description)"></div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

  import axios from 'axios'
  import marked from 'marked'

  export default {
    data: () => ({
      show: [],
      isLoading: true
    }),

    async created() {
      this.isLoading = true;
      await this.fetchShow();
      this.isLoading = false;
    },

    methods: {
      async fetchShow() {
        try {
          const response = await axios.get(
            `${this.$API_URL}/api/shows/${this.$route.params.id}`
          );
          Object.assign(this, { show: response.data });
        } catch (error) {
          this.$store.commit("SET_ERRORS", {
            title: "Error in fetchShow",
            message: error.message,
            type: "error"
          });
        }
      },
      marked,
    }
  }
</script>
