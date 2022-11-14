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
        >
        </v-text-field>
        <v-text-field
          required
          v-model="form.content"
          label="Content"
          outlined
          clearable
          height="100px"
        >
        </v-text-field>
        <v-card-actions>
          <v-btn text @click="resetForm">Cancel </v-btn>
          <v-btn class="primary" text @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
    <v-container>
      <h2>output:</h2>
      <h3>{{ form.content }}</h3>
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
      productSelection: ["Announcement", "Onboarding", "Tutorial"],
    };
  },
  computed: {
    formIsValid() {
      return this.form.title && this.form.content && this.form.productSelection;
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
