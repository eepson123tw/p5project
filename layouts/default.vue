<template>
  <v-app light>
    <v-navigation-drawer permanent absolute :temporary="show" expand-on-hover>
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="0" app style="z-index: 0">
      <v-spacer />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-switch
        v-model="theme"
        inset
        hide-details="auto"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      ></v-switch>
      <v-icon v-if="theme" color="orange darken-2">mdi-weather-sunny</v-icon>
      <v-icon v-else color="blue darken-2">mdi-weather-night</v-icon>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class DefaultLayout extends Vue {
  clipped = false
  show = false
  fixed = false
  items = [
    {
      icon: 'mdi-apps',
      title: '首頁',
      to: '/',
    },
    {
      icon: 'mdi-chart-bubble',
      title: '待續...',
      to: '/inspire',
    },
  ]

  theme = true

  miniVariant = true

  title = 'p5視覺化'
}
</script>
