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
            color="primary"
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
              <v-icon color="primary">{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="primary--text">
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <router-link to="/" style="text-decoration: none;">
        <v-toolbar-title
          class="headline text-uppercase font-weight-light primary--text"
        >
          Nicole Kowtko
        </v-toolbar-title>
      </router-link>
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
        <v-icon>
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

