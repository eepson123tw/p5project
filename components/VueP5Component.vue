<template>
  <div>
    <p5 v-on="{ setup }"></p5>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import * as p5 from 'p5'

@Component({
  components: {
    // @ts-ignore
    P5: () => import('vue-p5'),
  },
})
export default class Index extends Vue {
  text = 'Test'
  color = '#ffcc00'

  setup(sketch: p5) {
    sketch.resizeCanvas(800, 600)
    sketch.background('green')
    sketch.text('Hello p5!', 20, 20)
  }
}
</script>
