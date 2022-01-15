<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <client-only>
          <myp5component @setup="setup" @draw="draw" />
        </client-only>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import * as p5 from 'p5'
@Component({
  components: {
    myp5component: () => {
      if (process.client) {
        return import('@/components/VueP5Component.vue')
      }
    },
  },
})
export default class Index extends Vue {
  setup(sketch: p5) {
    sketch.resizeCanvas(800, 600)
    sketch.background(100)
    sketch.noLoop()
  }

  draw(sketch: p5) {
    // ellipse(mouseX, mouseY, 20, 20);
    sketch.translate(sketch.width / 2, sketch.height / 2)
    sketch.rotate(sketch.frameCount)
    sketch.translate(sketch.frameCount, 0)

    if (sketch.frameCount % 5 < 3) {
      sketch.fill(255 - sketch.random(100), 45, 45)
    } else {
      sketch.fill(255 - sketch.random(200), 247, 33)
    }

    sketch.noStroke()
    sketch.ellipse(0, 0, 50, 50)
  }
}
</script>
