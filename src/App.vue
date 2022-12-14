<!-- @format -->

<script lang="ts" setup>
import mdTrack from './components/md-track.vue';
import YAYO from './assets/images/tracks/YAYO - Pharoahe Monch.jfif';
import RapLife from './assets/images/tracks/Rap Life - Single - Pharoahe Monch.jfif';
</script>

<template>
  <section class="f ai-c jc-c fd-col rg-3" style="min-height: 100vh">
    <h1 class="bg-danger c-default px-3">@music-doc</h1>
    <h1 class="bg-warning c-default px-3">никита для лизы</h1>
    <p class="bg-default c-base px-3">никита молодец, сдержал слово</p>
    <p class="c-default px-3">
      Мне все треки понравились, но про все времени не хватит рассказать,
      поэтому только 3. вообще сайтик делаю только потому что обещал.
    </p>
  </section>
  <md-track
    :img="YAYO"
    artist="Pharoahe Monch"
    name="YAYO"
    href="https://music.yandex.ru/album/6530885/track/47961400"
    r1="30deg"
    r2="-10deg"
  >
    <p>
      Первый трек в плейлисте сносит лицо, сразу почувствовал себя черным,
      захотел заняться спортом, много работать и выбраться из гетто.
    </p>
    <p>
      Трек сделал день, черным я вряд ли стану, но если можно назвать шарагу и
      малооплачиваемую работу гетто, то оттуда я обязательно выберусь.
    </p>
  </md-track>

  <md-track
    :img="RapLife"
    artist="Pharoahe Monch"
    name="Rap Life"
    href="https://music.yandex.ru/album/3842086/track/31657684"
    r1="10deg"
    r2="45deg"
  >
    <p>
      Захотелось сесть в кабриолет и проехаться в Маями каком-то. Там еще эти
      пальмы будут крутые, и тачка у мееня будет с подвескойб которая качается.
    </p>
    <p>Короче РЭП ЛАЙВ. Обложка угар и стиль в одном флаконе.</p>
  </md-track>

  <md-track
    img="https://avatars.yandex.net/get-music-content/49876/468f1035.a.70008-1/200x200"
    artist="Wu-Tang Clan"
    href="https://music.yandex.ru/album/70008/track/648437"
    name="C.R.E.A.M."
    r1="100deg"
    r2="-25deg"
  >
    <p>Приятный сэмпл, куча типов на треке.</p>
    <p>
      В общем очень нравится, готов работать на хлопковой плантации под этот
      трек.
    </p>
  </md-track>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Montserrat';
  font-size: var(--nc-fs-p);
  line-height: var(--nc-lh-regular);
  color: rgba(var(--nc-c-base), var(--nc-c-alpha));
  background-color: rgba(var(--nc-c-base), 1);
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app {
  max-width: 1024px;
  width: 100%;
  padding: var(--nc-indent-4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  height: fit-content;
  max-width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
  &:hover {
    filter: brightness(150%);
    text-decoration: underline;
  }
}
</style>
