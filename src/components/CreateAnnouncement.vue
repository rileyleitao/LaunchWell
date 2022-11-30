<template>
  <v-container>
    <v-container>
      <v-form>
        <p>Tell us what you're announcing!</p>
        <v-select
          v-model="form.productSelection"
          :items="productSelection"
          label="Product Selection"
          required
        ></v-select>

        <v-text-field
          required
          v-model="form.title"
          label="Title"
          outlined
          clearable
          class="rounded-lg"
        >
        </v-text-field>
        <v-text-field
          required
          v-model="form.content"
          label="Content"
          outlined
          clearable
          height="100px"
          class="rounded-lg"
        >
        </v-text-field>
        <v-card-actions>
          <v-btn text @click="resetForm">Cancel </v-btn>
          <v-btn class="primary rounded-lg px-5 py-4" text @click="submit"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-container>
    <v-container>
      <v-card outlined rounded-lg class="pa-5 rounded-lg" min-height="500px">
        <div class="d-flex justify-space-between">
          <h4>{{ form.productSelection }} Preview:</h4>
          <h3>{{ form.title }}</h3>

          <h4>Date: {{ date }}</h4>
        </div>
        <v-divider class="pb-5 mt-2"></v-divider>
        <h4>Content: {{ form.content }}</h4>
        <h4></h4>
      </v-card>
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
      snackbar: false,
    });
    return {
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
      this.resetForm();
    },
  },
};
</script>
<style scoped>
.blue_background {
  background-color: #0ea4e96d;
}
</style>