<script setup lang="ts">
defineProps<{
  to: string
  icon: string
  eyebrow: string
  title: string
  description: string
  action: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group flex"
  >
    <UCard
      class="relative flex flex-1 bg-primary flex-col text-white transition-transform group-hover:scale-102"
      :ui="{
        body: 'flex h-full flex-col justify-between space-y-2'
      }"
    >
      <div class="flex gap-2">
        <Icon
          :name="icon"
          class="size-9"
        />
      </div>
      <div>
        <h2 class="font-semibold text-white/70">{{ eyebrow }}</h2>
        <h3 class="mt-1 text-2xl font-semibold tracking-tight">{{ title }}</h3>
        <p class="mt-2 max-w-sm text-sm text-white/70">{{ description }}</p>
        <div class="mt-6 text-sm font-medium">{{ action }}</div>
      </div>
    </UCard>
  </NuxtLink>
</template>
