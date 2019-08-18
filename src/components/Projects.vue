<template>
  <v-parallax
    style="height:100%"
    :src="splash">
    <div class="display-3 primary--text py-4" style="text-align:center">
      Projects
    </div>
    <v-container fluid grid-list-xl>
      <v-layout wrap>
        <v-flex
          md4 sm6 xs6
          v-for="project in projects"
          :key="project.id"
        >
          <v-hover
            v-slot:default="{ hover }">
            <v-card
              flat
              color="background"
              :elevation="hover ? 12 : 0"
            >
              <v-img
                contain
                height="200"
                :src="project.image">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out secondary v-card--reveal row headline accent--text d-flex px-3"
                    style="height: 100%;"
                  >
                    <v-flex pb-0>
                      {{project.title}}<br>
                      <span class="subtitle-1 pt-0 white--text">{{project.technologies}}</span>
                    </v-flex>
                    <v-flex pa-0>
                      <v-btn @click="derp" color="accent" depressed>Learn More</v-btn>
                    </v-flex>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
  const {
    projects,
  } = require('../assets/projects');
  const splash = require('../assets/unsplash-bkd.jpg');

  export default {
    name: 'projects',
    data: () => ({
      projects,
      splash,
    }),
    methods: {
      derp() {
        console.log('hi');
      }
    },
  }
</script>

<style scoped>
  .v-card--reveal {
    align-items: center;
    justify-content: center;
    opacity: .97;
    position: absolute;
    text-align: center;
  }
</style>