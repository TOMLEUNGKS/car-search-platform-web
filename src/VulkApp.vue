<script setup lang="ts">
import { Head } from '@vueuse/head'

import { useLayout } from '/@src/composable/useLayout'
import { useDarkmode } from '/@src/stores/darkmode'

const darkmode = useDarkmode()
const { LayoutComponent } = useLayout()

const htmlClasses = computed(() => [darkmode.htmlClass])
</script>

<template>
  <Head>
    <html lang="en-US" :class="htmlClasses" />

    <title>Car Search App</title>
    <base href="/" />
  </Head>

  <component :is="LayoutComponent" />

  <ClientOnly>
    <ReloadPrompt app-name="Car Search App">
      <template #logo>
        <img src="/assets/logo/logo.svg" alt="logo" />
      </template>
    </ReloadPrompt>
  </ClientOnly>
</template>
