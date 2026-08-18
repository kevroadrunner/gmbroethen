<script setup lang="ts">
import news from '~/data/news.json'
import { formatDate, sortDates } from '~/utils'

const sortedNews = sortDates(news, 'DESC')
</script>

<template>
  <main>
    <PageHero
      eyebrow="Neuigkeiten"
      title="Aktuelles"
      description="Neuigkeiten und Informationen aus Bröthen."
    />
    <section class="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
      <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        <UCard
          v-for="item in sortedNews"
          :key="item.id"
          class="flex flex-1 flex-col transition-transform hover:scale-102"
          :ui="{
            body: 'flex h-full flex-col justify-between space-y-2'
          }"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="aspect-3/2 w-full rounded-xl object-cover"
          >
          <div class="mt-5">
            <time class="text-sm font-medium text-primary">
              {{ formatDate(item.date) }}
            </time>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight">
              {{ item.title }}
            </h2>
            <p class="mt-2 leading-6 text-muted">
              {{ item.excerpt }}
            </p>
            <!--
            <div class="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
              Mehr erfahren
            </div>
            -->
          </div>
        </UCard>
      </div>
    </section>
  </main>
</template>
