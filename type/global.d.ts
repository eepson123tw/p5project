import Vue from 'vue'

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    // component
    $myGlobal: string
    $hello: any
  }
  interface Vue {
    // vue interface
    $hello: any
  }
}
