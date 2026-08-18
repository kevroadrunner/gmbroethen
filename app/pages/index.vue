<script setup lang="ts">
import news from '~/data/news.json'
import gallery from '~/data/gallery.json'

const latestNews = news
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)

const latestImage = gallery.slice(0, 1).at(0)
</script>

<template>
  <main class="min-h-screen bg-muted">
    <section class="mx-auto max-w-7xl px-6 lg:px-8 pb-16 lg:pb-20 pt-16 lg:pt-24">
      <div class="max-w-3xl">
        <p class="text-sm font-medium tracking-wide text-primary">
          Willkommen in
        </p>
        <h1 class="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Bröthen
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Neuigkeiten, Veranstaltungen und Informationen aus unserer Gemeinde.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <UButton to="/veranstaltungen">
            Veranstaltungen
          </UButton>
          <UButton
            to="/kontakt"
            variant="outline"
          >
            Kontakt
          </UButton>
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28">
      <div class="grid sm:auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <CardsFeatureCard
          class="lg:col-span-2"
          icon="lucide:calendar-days"
          title="Veranstaltungen"
          description="Was passiert demnächst in unserem Dorf?"
          to="/veranstaltungen"
        />
        <CardsInfoCard
          class="lg:col-span-2"
          icon="lucide:newspaper"
          title="Aktuelles"
          :items="latestNews"
          to="/aktuelles"
        />
        <CardsFeatureCard
          class="lg:col-span-2"
          icon="lucide:flame"
          title="Freiwillige Feuerwehr"
          description="Aktuelles, Einsätze, Übungen und Termine."
          to="https://www.feuerwehr-broethen.de"
        />
        <CardsImageCard
          v-if="latestImage"
          class="lg:col-span-2"
          to="/galerie"
          :image="latestImage.src"
          icon="lucide:images"
          eyebrow="Galerie"
          :title="latestImage.title"
        />
        <CardsFeatureCard
          class="lg:col-span-2"
          icon="lucide:landmark"
          title="Gemeinde"
          description="Informationen, Ansprechpartner und wichtige Dokumente."
          to="/gemeinde"
        />
        <CardsActionCard
          class="lg:col-span-2"
          to="/kontakt"
          icon="lucide:message-circle"
          eyebrow="Direkter Kontakt"
          title="Ein Anliegen?"
          description="Frage, Hinweis oder Beschwerde? Schreib direkt an den Bürgermeister."
          action="Kontakt aufnehmen"
        />
      </div>
    </section>
  </main>
</template>
