<template>
  <v-parallax style="height:100%" :src="splash">
    <v-container fill-height>
      <v-layout
        style="height:80%"
        align-center
        justify-space-between
      >
        <v-flex xs5>
          <v-img
            max-height="500px"
            :src="headshot"
            contain/>
        </v-flex>
        <v-flex xs6 ml-3>
          <v-card outlined width="100%" class="display-1 primary--color pa-3" style="border:2px solid #FF7D75;">
            {{caption}}
          </v-card>
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
