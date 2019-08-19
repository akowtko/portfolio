<template>
  <v-flex md4 sm6 xs6>
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
          :src="image">
          <v-expand-transition>
            <div
              v-if="hover"
              class="transition-fast-in-fast-out secondary v-card--reveal row headline accent--text d-flex px-3"
              style="height: 100%;"
            >
              <v-flex pb-0>
                {{title}}<br>
                <span class="subtitle-1 pt-0 white--text">{{technologies}}</span>
              </v-flex>
              <v-flex pa-0>
                <v-btn
                  @click="triggerProjectDialog"
                  color="accent"
                  depressed
                >Learn More</v-btn>
              </v-flex>
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>
  </v-flex>

</template>

<script>
  export default {
    name: 'project-tile',
    props: {
      title: {
        type: String,
        default: '',
      },
      technologies: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        default: '',
      },
      id: {
        type: Number,
        default: 0,
      },
    },
    methods: {
      triggerProjectDialog() {
        this.$emit('trigger-project-dialog', this.id)
      },
    }
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