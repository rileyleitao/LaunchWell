<template>
  <v-container>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="6" offset="3">
          <v-form>
            <h1 class="d-flex justify-center pb-10">              
              ✨ Launch Beta ✨
            </h1>
            
            <v-select
              v-model="form.productSelection"
              :items="productSelection"
              label="Product Selection"
              required
            ></v-select>

            <v-text-field
              required
              v-model="form.title"
              label="Beta Title"
              
              clearable
              class="rounded-lg"
            >
            </v-text-field>
            <v-text-field
              required
              v-model="form.content"
              label="Beta Description"
              
              clearable
              height="100px"
              class="rounded-lg"
            >
          </v-text-field>
            <v-file-input
            v.model="form.video"
            dense
            clearable
            class="rounded-lg"
            label="Demo Video"
            filled
            prepend-icon="mdi-video"
            ></v-file-input>
            <v-card-actions>
              <v-btn text @click="resetForm">Cancel </v-btn>
              <v-btn class="primary rounded-lg px-5 py-4" text @click="submit"
                >Publish</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pt-12">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="6" offset="3">
          <v-card
            outlined
            rounded-lg
            class="pa-8 rounded-lg"
            min-height="300px"
            min-width="40vw"
          >
            <div class="d-flex justify-space-between">
              <h4>{{ form.productSelection }} Preview:</h4>
              <h3>{{ form.title }}</h3>

              <h4>Date: {{ date }}</h4>
            </div>
            <v-divider class="pb-5 mt-2"></v-divider>
            <h1 class="py-5">{{ form.title }}</h1>
            <h4 class="py-5">Video Overview: <div>{{ form.video }}</div></h4>
            <h4 class="py-5">Description: {{ form.content }}</h4>
            <!-- <h4 class="pt-5">AI Summary: {{ AIContent }}</h4> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "CreateAnnouncement",
  data() {
    const form = Object.freeze({
      productSelection: "",
      title: "",
      content: "",
      video: "",
      snackbar: false,

    });
    return {
      AIContent: "",
      form: Object.assign({}, form),
      rules: {
        required: (value) => !!value || "Required.",
      },
      productSelection: ["Headline", "Onboarding", "Announcement", "Other"],
    };
  },
  computed: {
    formIsValid() {
      return this.form.title && this.form.content && this.form.productSelection;
    },
    date() {
      return new Date().toLocaleDateString();
    },
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      // this.$refs.form.reset();
    },
    submit() {
      console.log(
        this.form.productSelection,
        this.form.title,
        this.form.content
      );
      this.snackbar = true;
      // this.resetForm();
      this.displayAI();
    },
    displayAI() {
      this.AIContent =
        "Easily go places with our electronic bus pass mobile app – the smarter way to travel!";
      console.log("display AI");
    },
  },
};
</script>
<style scoped>
.blue_background {
  background-color: #0ea4e96d;
}
</style>