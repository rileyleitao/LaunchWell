<template>
  <div>
    <template>
      <CreateAnnouncement></CreateAnnouncement>
      <p>test</p>
    </template>
  </div>
</template>
<script>
import CreateAnnouncement from "@/components/CreateAnnouncement.vue";

export default {
  name: "AnnouncementCreator",
  components: {
    CreateAnnouncement,
  },
};
</script>