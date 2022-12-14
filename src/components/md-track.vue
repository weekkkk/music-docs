<!-- @format -->

<script lang="ts" setup>
const props = defineProps({
  img: String,
  artist: String,
  name: String,
  href: String,

  r1: String,
  r2: String,
  r3: String,
});
</script>

<template>
  <section class="md-track-wrap f ai-c jc-c py-3">
    <section class="md-track f fd-col br-3">
      <section class="f ai-fe cg-3 fw-wrap">
        <img :src="img" />
        <section class="title f fd-col ai-fs rg-2">
          <h4 class="bg-default fw-medium c-danger px-2">
            {{ artist }}
          </h4>
          <a class="fs-h1 fw-bold bg-danger c-default px-2" :href="href">
            {{ name }}
          </a>
        </section>
      </section>
      <section class="info bg-default a-80 c-base f fd-col rg-2 px-3 py-2">
        <slot />
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.md-track-wrap {
  min-height: 100vh;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    // left: 18%;
    // right: 12%;
    // top: 4%;
    // bottom: 8%;
    background: linear-gradient(
      45deg,
      rgb(var(--nc-c-warning)),
      rgb(var(--nc-c-danger))
    );
    // transform: skew(100px);
    opacity: 0.8;
    width: 50%;
    height: 80%;
    max-width: 800px;
    max-height: 800px;
  }
}
.md-track {
  position: relative;
  &::before {
    content: '';
    border: 8px solid rgba(var(--nc-c-warning), var(--nc-c-alpha));
    position: absolute;
    top: 6%;
    left: 0;
    right: 8%;
    bottom: 4%;
    border-radius: 50%;
    rotate: v-bind(r1);
  }
  &::after {
    content: '';
    border: 4px solid rgba(var(--nc-c-secondary), var(--nc-c-alpha));
    position: absolute;
    top: 10%;
    left: 4%;
    right: 0;
    bottom: 12%;
    rotate: v-bind(r2);
  }
  img {
    z-index: 1;
    border-radius: 50%;
    position: relative;
    left: 2%;
  }
  section.title {
    z-index: 2;
    margin-top: -2%;
  }
  section.info {
    width: 85%;
    position: relative;
    left: 15%;
    margin-top: -10px;
    z-index: 1;
  }
}
</style>
