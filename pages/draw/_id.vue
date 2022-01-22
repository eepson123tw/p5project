<template>
  <v-container>
    <v-row justify="center" class="pt-2">
      <component :is="comMap[componentIndex]"></component>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ImageText from '~/components/sketchs/ImageTest.vue'
import WowsTest from '~/components/sketchs/WowsTest.vue'

const componentMaps: { [key: string]: any } = {
  '1': ImageText,
  '2': WowsTest,
}

@Component({
  components: {
    ImageText,
    WowsTest,
  },
})
export default class DrawID extends Vue {
  comMap = componentMaps
  get componentIndex(): string {
    return this.$route.params.id || '0'
  }
}
</script>
