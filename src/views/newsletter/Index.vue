<template>
  <v-row align="center" justify="center" class="fill-height" id="newsletter">
    <v-col cols="12" sm="12" md="6" lg="4" class="text--center">
      <v-row align="start" justify="center" class="mb-6">
        <v-col cols="12" xs="12" class="mt-n12" style="z-index: 9">
          <v-row justify="center">
            <v-img src="../../assets/logo.png" max-width="64" />
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="pa-2">
        <v-alert
          type="info"
          color="blue darken-4"
        >Tell us your name and email to get access to our newsletter!</v-alert>
      </v-row>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          color="blue darken-4"
          v-model="firstname"
          :rules="validateName"
          label="First Name"
          outlined
          :loading="loading"
          :disabled="loading"
        ></v-text-field>
        <v-text-field
          color="blue darken-4"
          v-model="lastname"
          :rules="validateName"
          label="Last Name"
          outlined
          :loading="loading"
          :disabled="loading"
        ></v-text-field>

        <v-text-field
          color="blue darken-4"
          v-model="email"
          label="Email"
          :rules="validateEmail"
          outlined
          :loading="loading"
          :disabled="loading"
        ></v-text-field>
        <v-btn
          block
          x-large
          color="blue darken-4"
          dark
          class="text-capitalize"
          @click.prevent="submit"
          :loading="loading"
        >
          <v-icon>mdi-draw</v-icon>Sign me up!
        </v-btn>
      </v-form>
      <v-dialog v-model="loading" hide-overlay persistent width="300">
        <v-card color="blue darken-4" dark>
          <v-card-text>
            Signing you up, please wait...
            <v-progress-linear indeterminate color="white" class="mb-0" />
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    loading: false,
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    validateName: [
      v => !!v || "This field is required",
      v =>
        (v && v.length <= 16) ||
        "This field cannot contain more than 16 characters",
      v =>
        (v && v.length >= 2) ||
        "This field cannot contain less than 2 characters"
    ],
    validateEmail: [
      v => !!v || "Email is required",
      v => /.+@.+\..+/.test(v) || "Please enter a valid email",
      v =>
        (v && v.length < 32) || "Email cannot contain more than 32 characters"
    ],
    valid: false
  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          const data = {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email
          };
          const response = await axios.post(
            `${this.API_URL}/api/public/newsletter`,
            data
          );
          this.loading = false;
          this.$router.push({
            name: "newsletter.thank-you",
            params: { name: this.firstname }
          });
          this.$store.commit("SET_ERRORS", [
            {
              type: "success",
              message: response.data.message
            }
          ]);
          this.$refs.form.reset();
        } catch (error) {
          this.loading = false;
          this.$store.commit("SET_ERRORS", [
            {
              type: "error",
              message: error.response.data.message || error.message
            }
          ]);
        }
      }
    }
  }
};
</script>

<style scoped>
#newsletter {
  background: no-repeat
      linear-gradient(
        rgba(255, 255, 255, 0.75),
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.75)
      ),
    url("../../assets/cover.jpg") !important;
  background-size: cover !important;
}
</style>
