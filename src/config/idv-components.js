import components from './assets/js/components'
import Vue from 'vue'

const components = {
  Letter
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
