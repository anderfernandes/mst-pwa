<template>
  <v-row align="center" justify="center" class="mb-8" v-if="show">
    <v-card flat tile width="100%" height="100%">
        <v-img :aspect-ratio="9/16" :src="show.cover" height="400px" dark gradient="to top right, rgba(0,0,0,.75), rgba(0,0,0,.25)">
          
          <v-row class="fill-height">

            <v-col cols="12">
              <v-card-title>
                <v-btn dark icon @click="$router.back()">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </v-card-title>
            </v-col>
            
            <v-col cols="12">
              
              <v-list-item class="mb-0">
                <v-list-item-avatar
                  size="128"
                  tile
                  style="height: inherit !important"
                >
                  <v-img :src="show.cover"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item two-line class="pt-0">
                <v-list-item-content class="align-self-start pt-0">
                  <v-list-item-content class="align-self-start">
                  <v-list-item-title class="headline white--text" v-text="show.name" />
                </v-list-item-content>
                  <v-list-item-subtitle>
                    <v-chip label small dark color="indigo darken-2">
                      <v-icon small left>mdi-bookmark</v-icon>
                      {{ show.type }}
                    </v-chip>
                    <v-chip label small dark color="indigo darken-2" class="ml-2">
                      <v-icon small left>mdi-clock-outline</v-icon>
                      {{ show.duration }} minutes
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>
            </v-col>

          </v-row>
        </v-img>
      </v-card>
    <v-col>
      <v-row>
        <v-col cols="12" xs="12" md="8" offset-md="2">
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

<style>
  iframe { width:100% !important }
</style>
