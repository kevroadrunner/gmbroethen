<template>
  <footer class="border-t border-muted bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
      <div class="grid gap-10 md:grid-cols-3">
        <div>
          <p class="text-sm font-semibold">
            Bröthen
          </p>
          <p class="mt-3 max-w-xs text-sm leading-6 text-muted">
            Neuigkeiten, Veranstaltungen und Informationen aus unserer Gemeinde.
          </p>
        </div>
        <div>
          <p class="text-sm font-semibold">
            Informationen
          </p>
          <nav class="text-sm mt-3 flex flex-col items-start gap-2">
            <ULink to="/aktuelles">Aktuelles</ULink>
            <ULink to="/veranstaltungen">Veranstaltungen</ULink>
            <ULink href="https://www.feuerwehr-broethen.de/">Freiwillige Feuerwehr</ULink>
            <ULink to="/galerie">Galerie</ULink>
          </nav>
        </div>
        <div>
          <p class="text-sm font-semibold">
            Kontakt
          </p>
          <div class="mt-3 flex flex-col gap-2 text-sm">
            <ULink to="/kontakt">Bürgermeister</ULink>
            <ULink to="/kontakt">Anliegen melden</ULink>
          </div>
        </div>
      </div>
      <div class=" mt-10 flex flex-col gap-3 border-t border-muted pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p class="flex items-center gap-1 text-muted">
          <Icon name="lucide:copyright" />
          <span>{{ new Date().getFullYear() }}</span>
          <span>Bröthen</span>
        </p>
        <div class="flex gap-4">
          <ULink to="/impressum">Impressum</ULink>
          <ULink to="/datenschutz">Datenschutz</ULink>
        </div>
      </div>
    </div>
  </footer>
</template>
