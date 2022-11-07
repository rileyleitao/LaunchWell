<template>
  <div>
    <template>
      <ProductSelection></ProductSelection>
    </template>
    <template>
      <CreateAnnouncement></CreateAnnouncement>
    </template>
  </div>
</template>
<script>
import CreateAnnouncement from "@/components/CreateAnnouncement.vue";
import ProductSelection from "@/components/ProductSelection.vue";
export default {
  name: "Create",
  components: {
    CreateAnnouncement,
    ProductSelection,
  },
};
</script>
