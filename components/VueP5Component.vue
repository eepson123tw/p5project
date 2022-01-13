<template>
  <div>
    <p5 v-bind="$attrs" v-on="$listeners"></p5>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    // @ts-ignore
    P5: () => import('vue-p5'),
  },
})
export default class Index extends Vue {
  text = 'Test'
  color = '#ffcc00'
}
</script>
