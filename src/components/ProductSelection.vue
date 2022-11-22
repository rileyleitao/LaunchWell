<template>
  <div>
    <div>
      <h2 class="d-flex justify-center my-10">Build what you need!</h2>
      <h3 class="d-flex justify-center my-10">
        Select the item you're looking to build
      </h3>
    </div>
    <v-row class="d-flex justify-space-around pt-10">
      <v-card
        class="pa-5 ma-10"
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
        class="pa-5 ma-10"
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
        class="pa-5 ma-10"
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