<template>
  <v-parallax
    style="height:100%"
    :src="splash">
    <div class="display-3 primary--text py-4" style="text-align:center">
      Projects
    </div>
    <v-container fluid grid-list-xl>
      <v-layout wrap>
        <project-tile
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :technologies="project.technologies"
          :image="project.image"
          :id="project.id"
          @trigger-project-dialog="projectDialog=true"
        />
      </v-layout>
    </v-container>
    <v-dialog
      scrollable
      v-model="projectDialog"
    >
      <v-card>
        <v-layout style="max-height: inherit">
          <v-flex xs6>
        <v-carousel hide-delimiters>
          <v-carousel-item
            contain
            v-for="(image,i) in images"
            :key="i"
            :src="image"
          ></v-carousel-item>
        </v-carousel>
          </v-flex>
          <v-flex xs6 class="">
              <div style="text-align: center" class="display-1 primary--text pb-2 pt-4">
                Slack Bot using Serverless Tech
              </div>
              <div
                class=" px-8"
                style="overflow-y:scroll; max-height:90%;white-space: pre-line;font-size:18px;">
                {{testText}}
              </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-parallax>
</template>

<script>
  const {
    projects,
  } = require('../assets/projects');
  const splash = require('../assets/unsplash-bkd.jpg');
  import ProjectTile from '@/components/ProjectTile';
  const testImages = [
    require('../assets/DirectMessage.png'),
    require('../assets/Botsy.png'),
    require('../assets/LearnDialog.png'),
    require('../assets/LearningRequest.png')
  ];
  const testText = `Within our company, there was no system in place for voicing learning needs. Though our peers’ skill sets are diverse and individuals are open to helping each other learn a skill, it’s hard for an individual to keep track of who knows what in the organization, creating a barrier to entry. Our primary learning channel was Wednesday presentations on any topic, but the topics were chosen by whoever volunteered to lead the learning instead of those who wanted or needed to learn a particular skill.

Peer-to-peer learning can improve our day-to-day job performance, keeps the team engaged, and more pressingly, helps us reach our goals. The goal was to create a system that matched skill-havers with skill-seekers, facilitating peer-to-peer learning experiences.

Due to our team’s constant activity in Slack, Slack seemed an ideal platform for integrating a solution. So we created a Slackbot named “Botsy”. Botsy appears when you call her and asks if you’d like to teach or learn a topic. She will then message the #learnings channel to ask for volunteers to teach a subject, or to announce that someone can teach a subject. Once someone has volunteered to teach, Botsy will set up a Slack channel for that learning group. Everyone who emoji responds to the teacher announcement will be automatically added to the channel.

To engineer Botsy we decided on a serverless architecture, AWS Lambda. This is because the bot doesn’t need access to our software’s codebase, and only needs to be active when it receives an event from the Slack API. AWS Lambda allowed us to create a separate endpoint for Botsy without its own provisioned server. Cost only accrues with each request to the bot, and decreases development time since we don’t need to develop and manage a separate server.
`

  export default {
    name: 'projects',
    components: {
      ProjectTile,
    },
    data: () => ({
      projects,
      splash,
      testText,
      projectDialog: false,
      images: testImages,
    }),
    methods: {
      derp() {
        return 'hi';
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
