<template>
  <header class="border-b border-muted bg-white">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <NuxtLink
        to="/"
        class="flex items-center gap-3"
      >
        <img
          src="/images/broethen.webp"
          alt="Bröthen"
          class="size-12 object-contain"
        >
        <div>
          <p class="text-sm font-semibold tracking-tight">Bröthen</p>
          <p class="text-xs text-muted">Unsere Gemeinde</p>
        </div>
      </NuxtLink>
      <nav class="hidden items-center gap-x-2 md:flex">
        <UButton
          to="/aktuelles"
          variant="link"
        >
          Aktuelles
        </UButton>
        <UButton
          to="/veranstaltungen"
          variant="link"
        >
          Veranstaltungen
        </UButton>
        <UButton
          to="/gemeinde"
          variant="link"
        >
          Gemeinde
        </UButton>
        <UButton
          to="/galerie"
          variant="link"
        >
          Galerie
        </UButton>
        <UButton to="/kontakt">
          Kontakt
        </UButton>
      </nav>
      <UButton
        variant="outline"
        class="md:hidden"
      >
        <Icon
          name="lucide:menu"
          class="size-5"
        />
      </UButton>
    </div>
  </header>
</template>
