<template>
  <v-container>
    <v-row dense>
      <client-only>
        <v-col v-for="(card, index) in cards" :key="card.title" :cols="4">
          <v-card @click="onLike(index + 1)">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon color="red">mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </client-only>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({ components: {} })
export default class Index extends Vue {
  cards = [
    {
      title: '寧靜海',
      src: require('@/assets/img/lunajpeg.jpeg'),
    },
    {
      title: 'Favorite road trips',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    },
    {
      title: 'Best airlines',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    },
  ]

  onLike(id: number) {
    this.$router.push(`/draw/${id}`)
  }
}
</script>
