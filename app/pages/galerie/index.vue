<script setup lang="ts">
import gallery from '~/data/gallery.json'
</script>

<template>
  <main>
    <PageHero
      eyebrow="Eindrücke"
      title="Galerie"
      description="Bilder aus dem Dorfleben."
    />
    <section class="mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28">
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-5">
        <figure
          v-for="image in gallery"
          :key="image.id"
          class="group mb-5 break-inside-avoid overflow-hidden rounded-xl"
        >
          <img
            :src="image.image"
            :alt="image.title"
            class="block w-full transition-transform duration-200 group-hover:scale-102"
          >
          <figcaption class="px-5 py-4 text-sm font-medium bg-primary/10">
            {{ image.title }}
          </figcaption>
        </figure>
      </div>
    </section>
  </main>
</template>
