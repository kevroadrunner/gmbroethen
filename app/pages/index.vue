<script setup lang="ts">
import news from '~/data/news.json'
import gallery from '~/data/gallery.json'

const latestNews = news
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)

const latestImage = gallery.slice(0, 1).at(0)
</script>

<template>
  <main>
    <PageHero
      eyebrow="Willkommen in"
      title="Bröthen"
      description="Neuigkeiten, Veranstaltungen und Informationen aus unserer Gemeinde."
      size="huge"
    />
    <PageContent>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <CardsFeatureCard
          to="/veranstaltungen"
          icon="lucide:calendar-days"
          title="Veranstaltungen"
          description="Was passiert demnächst in unserem Dorf?"
        />
        <CardsInfoCard
          to="/aktuelles"
          icon="lucide:newspaper"
          title="Aktuelles"
          :items="latestNews"
        />
        <CardsFeatureCard
          to="https://www.feuerwehr-broethen.de"
          icon="lucide:flame"
          title="Freiwillige Feuerwehr"
          description="Aktuelles, Einsätze, Übungen und Termine."
        />
        <CardsImageCard
          v-if="latestImage"
          to="/galerie"
          :title="latestImage.title"
          :image="latestImage.image"
          icon="lucide:images"
          eyebrow="Galerie"
        />
        <CardsFeatureCard
          to="/gemeinde"
          icon="lucide:landmark"
          title="Gemeinde"
          description="Informationen, Ansprechpartner und wichtige Dokumente."
        />
        <CardsActionCard
          to="/kontakt"
          icon="lucide:message-circle"
          eyebrow="Direkter Kontakt"
          title="Ein Anliegen?"
          description="Frage, Hinweis oder Beschwerde? Schreib direkt an den Bürgermeister."
          action="Kontakt aufnehmen"
        />
      </div>
    </PageContent>
  </main>
</template>
