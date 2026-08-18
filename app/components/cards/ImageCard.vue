<script setup lang="ts">
defineProps<{
  to: string
  icon?: string
  eyebrow?: string
  image: string
  title: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group flex"
  >
    <UCard
      class="min-h-64 relative flex flex-1 flex-col transition-transform group-hover:scale-102"
    >
      <img
        :src="image"
        :alt="title"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <div class="absolute inset-x-0 bottom-0 p-7 text-white">
        <div
          v-if="eyebrow && icon"
          class="flex items-center gap-2 text-sm text-white"
        >
          <Icon
            :name="icon"
            class="size-4"
          />
          {{ eyebrow }}
        </div>
        <h2 class="mt-1 text-2xl font-semibold">
          {{ title }}
        </h2>
      </div>
    </UCard>
  </NuxtLink>
</template>
