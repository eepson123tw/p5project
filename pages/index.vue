<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <client-only>
          <myp5component />
        </client-only>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    myp5component: () => {
      if (process.client) {
        return import('@/components/VueP5Component.vue')
      }
    },
  },
})
export default class Index extends Vue {}
</script>
