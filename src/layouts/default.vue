<script setup lang="ts">
import { IonTitle } from '@ionic/core/components'
import { IonHeader } from '@ionic/vue'
import { useLayout } from '/@src/composable/useLayout'

const { transition } = useLayout()
</script>

<template>
  <div class="background">
    <Navbar />
    <RouterView v-slot="{ Component }">
      <Transition :name="transition" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <!-- <BackToTop /> -->
  </div>
  <IonHeader>Test</IonHeader>
  <div>
    <h1>Browse</h1>
  </div>
  <!-- <div class="has-background-white">
    <IonTitle class="font-bold text-3xl py-4">Browse</IonTitle>
    <IonTitle>Test</IonTitle>
  </div> -->
  <Footer />

  <!-- <HomeSlide :title="HomeSlideEnum.CarBrands" /> -->
</template>

<style scoped lang="scss">
.background {
  min-height: 100vh;
  background-image: url('/assets/img/background.png');
  background-size: cover;
}
</style>
