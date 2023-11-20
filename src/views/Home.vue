<template>
  <div class="d-flex justify-center align-center my-9">
    <v-sheet
      outlined
      class="lilac pa-12 rounded-xl align-center d-flex flex-column"
    >
      <v-img
        src="../assets/apple_announcement.png"
        class="mb-10 d-flex justify-center"
        max-width="20%"
      >
      </v-img>
      <h2 class="py-5">Launch With Ease!</h2>
        <v-list class="{'dense bold lilac mb-3'}">
    
          <v-list-item-group
          
          v-model="selectedItem"
          class="lilac font-weight-bold">
        
          <v-list-item dense
        v-for="(item, i) in items"
        :key="i"
        >
        <v-list-item-icon>
            <v-icon color='green' large v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

      <router-link
        :to="{
          name: 'Create',
        }"
      >
        <v-btn class="primary d-flex align-center rounded-lg px-5 py-2">
          <v-icon class="mr-3">mdi-plus</v-icon>
          Launch Product
        </v-btn>
      </router-link>
    </v-sheet>
  </div>
</template>
 
<script>
// @ is an alias to /src

export default {
  name: "Home",
  data:()=>({
    selectedItem: null,
    items: [
      { icon: "mdi-check", text: "Create engaging release announcements." },
      { icon: "mdi-check", text: "Empower usage of features at scale." },
      { icon: "mdi-check", text: "Gather a community of testers." },
      { icon: "mdi-check", text: "Gather feedback." },
      { icon: "mdi-check", text: "Upsell your product." },
    ],
  }),
  };
</script>
<style scoped>
.lilac {
  background-color: #faf9ff;
}
</style>