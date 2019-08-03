<template>
  <v-app>
    <v-app-bar app>
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
    }),
  };
</script>
