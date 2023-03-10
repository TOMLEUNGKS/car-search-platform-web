import { createApp as createClientApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import { createRouter } from '/@src/router'
import VulkApp from '/@src/VulkApp.vue'
import '/@src/styles'

import {
  IonButton,
  IonCard,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonListHeader,
  IonLoading,
} from '@ionic/vue'

const plugins = import.meta.glob<{ default: VulkPlugin }>('./plugins/*.ts')

export type VulkAppContext = Awaited<ReturnType<typeof createApp>>
export type VulkPlugin = (context: VulkAppContext) => void | Promise<void>

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: VulkPlugin) {
  return plugin
}

export async function createApp() {
  const app = createClientApp(VulkApp)
  const router = createRouter()

  const head = createHead()
  app.use(head)

  const pinia = createPinia()
  app.use(pinia)

  const context = {
    app,
    router,
    head,
    pinia,
  }

  app.provide('vulk', { plugins })

  app.component('IonImg', IonImg)
  app.component('IonCard', IonCard)
  app.component('IonList', IonList)
  app.component('IonItem', IonItem)
  app.component('IonTitle', IonTitle)
  app.component('IonLabel', IonLabel)
  app.component('IonButton', IonButton)
  app.component('IonListHeader', IonListHeader)
  app.component('IonLoading', IonLoading)

  for (const path in plugins) {
    try {
      const { default: plugin } = await plugins[path]()
      await plugin(context)
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`)
      console.error(error)
    }
  }

  // use router after plugin registration, so we can register navigation guards
  app.use(router)

  return context
}
