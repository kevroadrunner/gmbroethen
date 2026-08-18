<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1 bg-muted">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
