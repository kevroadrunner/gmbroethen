<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'centered'
  }>(),
  {
    variant: 'default'
  }
)
</script>

<template>
  <section
    :class="[
      'mx-auto px-6 lg:px-8 pb-20 lg:pb-28',
      variant === 'centered'
        ? 'max-w-5xl'
        : 'max-w-7xl'
    ]"
  >
    <slot />
  </section>
</template>
