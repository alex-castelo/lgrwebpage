<template>
  <div class="stack">
    <h1>{{ $t('pages.landing.title') }}</h1>
    <p>
      {{ $t('pages.landing.description') }}
    </p>
    <div class="logo">
      <img width="480" height="480" src="@@/ui/assets/img/logo_lgr.jpg" alt="Logo de Las Golfas Records"></img>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style scoped>
.logo{
margin-top: 3rem;
text-align: center;
}
</style>
