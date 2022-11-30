<template>
  <div>
    <div>
      <h2 class="d-flex justify-center my-10">
        Get started by selecting a template
      </h2>
    </div>
    <v-row class="d-flex justify-space-around pt-10">
      <v-card
        style="min-height: 250px; max-width: 450px"
        class="pa-5 ma-5 rounded-xl align-center d-flex flex-column lilac"
        @click="$router.push({ name: 'AnnouncementCreator' })"
      >
        <v-img></v-img>
        <v-card-title>Compelling Headlines</v-card-title>
        <v-card-subtitle class="py-5 text-center">
          Create compelling taglines that convert users today. Use them for your
          hero section or an advertisement.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn class="primary rounded-lg px-5 py-4" :to="{ name: 'Create' }"
            >Create Announcement</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        style="min-height: 250px; max-width: 450px"
        class="pa-5 ma-5 rounded-xl align-center d-flex flex-column lilac"
        @click="$router.push({ name: 'AnnouncementCreator' })"
      >
        <v-img></v-img>
        <v-card-title>Informative Onboarding</v-card-title>
        <v-card-subtitle class="py-5 text-center">
          Create onboarding experiences that help retain new users by getting
          them to understand your product.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            class="primary rounded-lg px-5 py-4"
            text
            :to="{ name: 'Create' }"
            >Create onboarding</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        style="min-height: 250px; max-width: 450px"
        class="pa-5 ma-5 rounded-xl align-center d-flex flex-column lilac"
        @click="$router.push({ name: 'AnnouncementCreator' })"
      >
        <v-img></v-img>
        <v-card-title>Catchy Announcement</v-card-title>
        <v-card-subtitle class="py-5 text-center">
          Quickly create catchy announcements that grab the attention of your
          users.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn class="primary rounded-lg px-5 py-4" :to="{ name: 'Create' }"
            >Create Announcement</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Create",
};
</script>
<style scoped>
.lilac {
  background-color: #faf9ff;
}
</style>