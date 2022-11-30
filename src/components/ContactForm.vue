<template >
  <v-sheet class="blue_background outlined pa-5">
    <!-- Contact Form -->
    <v-container>
      <v-row class="py-12" justify="center">
        <v-col cols="12" lg="6" md="9" sm="6" xs="6" class="text-center">
          <h1 class="mb-10">Contact Support</h1>
          <div class="mb-4" style="h5">Any issues?</div>
          <div class="mb-10" style="h5">
            Reach out and we'll get back to you as soon as possible.
          </div>

          <!-- Form -->
          <v-form ref="form" class="pb-15">
            <v-text-field
              class="mt-2"
              light
              outlined
              flat
              label="Name"
              name="user_name"
            >
            </v-text-field>

            <v-text-field
              class="mt-2"
              light
              outlined
              flat
              label="Company"
              name="user_company"
              id="user_company"
            >
            </v-text-field>

            <v-text-field
              class="mt-2"
              light
              outlined
              flat
              label="Email"
              name="user_email"
              id="user_email"
            >
            </v-text-field>

            <v-textarea
              no-resize
              class="mt-2"
              light
              outlined
              flat
              label="Message"
              name="user_message"
              id="user_message"
            >
            </v-textarea>

            <v-btn class="px-5 py-4 primary rounded-lg" @click="sendEmail"
              >Submit</v-btn
            >
          </v-form>
          <!-- <form ref="form1"></form> -->
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script
src="https://smtpjs.com/v3/smtp.js">
</script>
<script>
import emailjs from "@emailjs/browser";
export default {
  name: "ContactForm",
  methods: {
    sendEmail() {
      console.log(this.$refs.form, this.$refs.form1);
      emailjs
        .sendForm(
          "contact_riley",
          "contact_riley",
          this.$refs.form.$el,
          "KpTV--bRhodQ6FuNp"
        )
        .then(
          (result) => {
            alert("Thank you! I will be in touch shortly.", result.text);
          },
          (error) => {
            alert("Oops! Something went wrong, please try again.", error.text);
          }
        );
    },
  },
};
</script>

<style>
.full-width {
  width: 100% !important;
}
.site-background {
  background-color: #f7fff7;
}
.navbar {
  background-color: #f88888;
}
.centerText {
  text-align: center;
}

.h1 {
  font-size: 4.5em;
  font-family: "Raleway", "sans-serif";
  font-weight: 800;
}
.h2 {
  font-size: 13em;
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
  letter-spacing: 2px;
}
.h3 {
  font-size: 2em;
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
}
.h3-app {
  font-size: 2em;
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
}
.h4 {
  font-size: 1em;
  font-family: "Raleway", "sans-serif";
  font-weight: 500;
}
.h5 {
  font-size: 1em;
  font-family: "Raleway", "sans-serif";
  font-weight: 400;
}
.h5-light {
  font-size: 1em;
  font-family: "Raleway", "sans-serif";
  font-weight: 400;
}

.blue {
  color: #0ea5e9;
}
.blue_background {
  background-color: #0ea4e966;
}

.purple {
  color: #6366f1;
}
.purple2 {
  color: #4f46e5;
}

.navy {
  color: #0b1120;
}
</style>