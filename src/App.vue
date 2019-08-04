<template>
  <v-app>
    <v-app-bar app>
      <v-menu
        bottom
        nudge-bottom="55px"
      >
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon
            v-on="on"
            class="primary--color"
            slot="activator"
          />
        </template>
        <v-list>
          <v-list-item
            v-for="item in menu"
            :key="item.text"
            :to="item.to"
            >
            <v-list-item-icon class="mr-3">
              <v-icon class="primary--color">{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="primary--color">
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title class="headline text-uppercase font-weight-lighty primary--color">
        Nicole Kowtko
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        :href="github"
        target="_blank"
      >
        <v-icon>
          fab fa-github
        </v-icon>
      </v-btn>
      <v-btn
        icon
        small
        :href="linkedIn"
        target="_blank"
      >
        <v-icon color="blue">
          fab fa-linkedin
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>

        <router-view/>

    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    components: {
    },
    data: () => ({
      linkedIn: 'https://www.linkedin.com/in/antonia-nicole-kowtko-724a7749/',
      github: 'https://github.com/akowtko',
      menu: [
        {
          'text': 'Home',
          'icon': 'mdi-home',
          'to': '/'
        },
        {
          'text': 'About',
          'icon': 'mdi-information-outline',
          'to': 'about'
        }
      ]
    }),
  };
</script>

<style>
  .v-list-item--active, .v-list-item--active .v-icon, .v-list-item--active .v-list-item__content {
    color: #A2E0D2 !important;
  }

</style>