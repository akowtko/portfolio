<template>
  <v-parallax
        style="height:100%"
        :src="splash">
    <v-container fill-height>
      <v-layout
        column
        align-center
        justify-space-between
      >
        <v-flex xs11 pt-3>
          <v-layout
            align-center
            justify-space-between
          >
            <v-flex xs5>
              <v-img
                height="450px"
                :src="headshot"
                contain/>
            </v-flex>
            <v-flex xs6 ml-3>
              <v-card outlined width="100%" class="display-2 primary--text pa-3" style="border:2px solid #FF7D75;">
                {{caption}}
                <div class="headline pt-2">I'm passionate about web development, edge cases, and cross-team collaboration.</div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs1>
          <v-btn
            small
            outlined
            to="about"
            color="secondary darken-2"
          >
            About Me
            <v-icon size="30">mdi-chevron-down</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
  const headshot = require('../assets/headshot.jpg');
  const splash = require('../assets/unsplash-bkd.jpg');

  export default {
    name: 'main',
    props: {
      pageTitle: {
        type: String,
        default: '',
      },
    },
    data: () => ({
      headshot,
      splash,
      caption: "Hello, I'm Nicole, a Full Stack Engineer in San Francisco.",
    }),
  };
</script>

<style>

</style>