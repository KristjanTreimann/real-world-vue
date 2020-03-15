import Vue from 'vue'
import App from './App.vue' // Root component
import router from './router' // imports router.js
import store from './store'
// Importing lodash methods for global component registration
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// Register global components automatically
const requireComponent = require.context(
  // directory to search within
  './components',
  false,
  // Search subdirectories and match filenames (.vue or .js)
  /Base[A-Z]\w+\.(vue|js)$/
)
// Loops through components in array and requres them
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // Converts filenames to pascalCase e.g base-button to BaseButton
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  // Registers each component globally
  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false
new Vue({
  // Creates new Vue instance
  router, // sending in and use router
  store, // sending in store
  render: h => h(App) // render our app
}).$mount('#app') // and mount it to DOM where this id of "#app" lives. (/public/index.html)
