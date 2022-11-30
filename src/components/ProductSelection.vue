<template>
  <div>
    <div>
      <h2 class="d-flex justify-center my-10">
        Get started by selecting a template
      </h2>
    </div>
    <v-row class="d-flex justify-space-around pt-10">
      <v-card
        class="pa-5 ma-5"
        @click="$router.push({ name: 'AnnouncementCreator' })"
      >
        <v-img></v-img>
        <v-card-title>Create Announcement</v-card-title>
        <v-card-subtitle>
          Use AI to help announce your latest feature or event.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn text class="primary" :to="{ name: 'AnnouncementCreator' }"
            >Create Announcement</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        class="pa-5 ma-5"
        @click="$router.push({ name: 'AnnouncementCreator' })"
      >
        <v-img></v-img>
        <v-card-title>Create Onboarding</v-card-title>
        <v-card-subtitle>
          Use AI to help onboard new users to your project.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn class="primary" text :to="{ name: 'AnnouncementCreator' }"
            >Onboard Users</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        class="pa-5 ma-5"
        @click="$router.push({ name: 'AnnouncementCreator' })"
      >
        <v-img></v-img>
        <v-card-title>Create Announcement</v-card-title>
        <v-card-subtitle>
          Use AI to help announce your latest feature or event.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn class="primary" :to="{ name: 'AnnouncementCreator' }"
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