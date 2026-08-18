<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    size?: 'default' | 'huge'
  }>(),
  {
    size: 'default'
  }
)
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8 lg:pb-16 lg:pt-24">
    <div class="max-w-3xl">
      <p class="text-sm font-medium tracking-wide text-primary">
        {{ eyebrow }}
      </p>
      <h1
        :class="[
          'mt-3 font-semibold tracking-tight',
          size === 'huge'
            ? 'text-5xl sm:text-6xl lg:text-7xl'
            : 'text-4xl sm:text-5xl'
        ]"
      >
        {{ title }}
      </h1>
      <p
        :v-if="description"
        class="mt-5 text-lg leading-8 text-muted"
      >
        {{ description }}
      </p>
    </div>
    <slot />
  </section>
</template>
