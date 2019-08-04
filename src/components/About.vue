<template>
  <v-container fill-height class="about__container">
    <v-layout
      column
      justify-center
      align-center
    >
      <v-flex xs1 class="display-3 pt-2">
        <span class="secondary--color">About</span>&nbsp;
        <span class="primary--color">Me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </v-flex>
      <v-flex xs11 d-flex>
        <v-layout
          justify-space-around
          align-center
        >
          <v-flex xs5 v-html="aboutMe" class="body-1 background--color">
          </v-flex>
          <v-flex xs5 offset-xs1 class="secondary--background--opqaue">
            <v-list
              dense
              color="#A2E0D2"
              class="background--color"
            >
              <v-list-item
                v-for="highlight in highlights"
                :key="highlight"
              >
                <v-list-item-icon class="background--color">
                  <v-icon class="background--color">mdi-circle-small</v-icon>
                  {{highlight}}
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const {
    aboutMe,
    highlights,
  } = require('../assets/about');
  export default {
    name: 'about',
    data: () => ({
      aboutMe,
      highlights,
    })
  };
</script>

<style scoped>
  .container {
    background: rgb(233,177,171);
    background: linear-gradient(90deg, rgba(233,177,171,1) 50%, rgba(194,227,219,1) 50%);
  }
  .v-list-item {
    color: #FAFDFF !important;
  }
</style>