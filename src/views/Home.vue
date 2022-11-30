<template>
  <div class="d-flex justify-center align-center mt-15">
    <v-sheet
      outlined
      class="lilac pa-15 rounded-xl align-center d-flex flex-column"
    >
      <v-img
        src="../assets/apple_announcement.png"
        class="ma-10 d-flex justify-center"
        max-width="50%"
      >
      </v-img>
      <h3 class="pt-5">Make an announcement worth hearing</h3>
      <h5 class="mb-5">
        Use AI to help announce your latest feature or event.
      </h5>
      <router-link
        :to="{
          name: 'Create',
        }"
      >
        <v-btn class="primary d-flex align-center mt-5">
          <v-icon>mdi-plus</v-icon>
          Generate Content
        </v-btn>
      </router-link>
    </v-sheet>
  </div>
</template>
 
<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
<style scoped>
.lilac {
  background-color: #faf9ff;
}
</style>