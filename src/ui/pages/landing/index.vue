<template>
  <div class="stack">
    <h1>{{ $t('pages.landing.title') }}</h1>
    <p>
      {{ $t('pages.landing.description') }}
    </p>
    <div class="logo">
      <img
        class="logo-img__responsive"
        src="@@/ui/assets/img/logo_lgr.jpg"
        alt="Logo de Las Golfas Records"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style scoped>
.logo {
  margin-top: 3rem;
  text-align: center;
}
</style>
