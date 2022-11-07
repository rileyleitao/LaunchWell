
<template>
  <v-app>
    <v-navigation-drawer color="#0b1120" dark v-model="drawer" app>
      <!-- <v-list-item>
        <v-list-item-content> -->
      <!-- <v-list-item-title class="text-h6"> Riley Parada </v-list-item-title> -->
      <!-- <v-list-item-subtitle> Personal Site </v-list-item-subtitle> -->
      <!-- </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>
      <v-img src="./assets/revue-logo.png" class="ma-10"> </v-img>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat app color="#0b1120">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        dark
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer>
        <!-- <v-toolbar-title dark class="centerText h3-app"
          >Riley Parada</v-toolbar-title
        > -->
      </v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- 
    <div v-if="$vuetify.breakpoint.mdAndUp" class="cursor">
      <div id="mouse-circle"></div>
      <div id="mouse-circle-inner"></div>
    </div> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Create", icon: "mdi-plus", to: "/create" },
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/about" },
      { title: "Template", icon: "mdi-math-norm-box", to: "/Parallel" },
      {
        title: "Contact",
        icon: "mdi-email",
        to: "/Contact",
      },

      // { title: "Sign in", icon: "mdi-image", to: "/signup" },
    ],
  }),
};
</script>

<style>
.site-background {
  background-color: #f7fff7;
}
.navbar {
  background-color: #f88888;
}
.centerText {
  text-align: center;
}

.h1 {
  font-size: 4.5em;
  font-family: "Raleway", "sans-serif";
  font-weight: 800;
}
.h2 {
  font-size: 3em;
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
}
.h3 {
  font-size: 2em;
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
}
.h3-app {
  font-size: 2em;
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
}
.h4 {
  font-size: 1em;
  font-family: "Raleway", "sans-serif";
  font-weight: 500;
}
.h5 {
  font-size: 1em;
  font-family: "Raleway", "sans-serif";
  font-weight: 400;
}
.h5-light {
  font-size: 1em;
  font-family: "Raleway", "sans-serif";
  font-weight: 400;
}

.blue {
  color: #0ea5e9;
}

.purple {
  color: #6366f1;
}
.purple2 {
  color: #4f46e5;
}

.navy {
  color: #0b1120;
}
</style>