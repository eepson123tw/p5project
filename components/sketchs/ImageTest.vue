<template>
  <div>
    <myp5component @setup="setup" @draw="draw" @preload="preload" />
    <p>寧靜海</p>
  </div>
</template>

<script lang="ts">
import * as p5 from 'p5'
import { Vue, Component } from 'nuxt-property-decorator'
const img = require('@/assets/img/the_silent_sea.jpg')
let imgs: any
@Component({
  components: {
    myp5component: () => {
      if (process.client) {
        return import('@/components/VueP5Component.vue')
      }
    },
  },
})
export default class ImageTest extends Vue {
  preload(sketch: p5) {
    imgs = sketch.loadImage(img)
  }

  setup(sketch: p5) {
    sketch.resizeCanvas(700, 500)

    sketch.image(imgs, 0, 0)
  }

  draw(sketch: p5) {
    sketch.noStroke()

    for (let i = 0; i < imgs.width; i += 10) {
      for (let o = 0; o < imgs.height; o += 10) {
        const c = imgs.get(i, o)
        sketch.fill(c)
        sketch.push()
        sketch.translate(i, o)
        // sketch.scale(sketch.random(2))
        sketch.rect(0, 0, sketch.random(-2, 2), sketch.random(-5, 5))
        sketch.pop()
      }
    }
  }
}
</script>
