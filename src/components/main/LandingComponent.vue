<script setup lang="ts">
export interface DemoLayoutProps {
  inverted?: boolean
}

const props = withDefaults(defineProps<DemoLayoutProps>(), {
  inverted: false,
})
</script>

<template>

    <Section class="section" :class="props.inverted && 'is-dark'">
      <Container>


        <Card shape="squared" shadow class="bg-gray card">
                <Title class="text-white" tag="h2" weight="semi" :size="3" center>Search the next car for you</Title>
                <Title class="text-white" tag="h2" weight="semi" :size="2" center>See you soon!</Title>

          </Card>
      </Container>
    </Section>

</template>

<style scoped lang="scss">
.section {
  background-color: transparent;
}

.card {
  border: 0;
}

</style>
