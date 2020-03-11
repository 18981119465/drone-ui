<template>
  <footer>
    <nav>
        <a target="_blank" href="https://readme.drone.io">{{ $t("footer.documentation") }}</a>
        <a target="_blank" href="http://plugins.drone.io">{{ $t("footer.plugins") }}</a>
        <a target="_blank" href="https://discourse.drone.io">{{ $t("footer.support") }}</a>
    </nav>
    <nav class="nav-right">
        <a target="_blank" href="https://github.com/drone">{{ $t("footer.github") }}</a>
        <a target="_blank" href="https://twitter.com/droneio">{{ $t("footer.twitter") }}</a>
        <a target="_blank" href="https://discourse.drone.io">{{ $t("footer.discourse") }}</a>
        <a target="_blank" href="https://gitter.im/drone/drone">{{ $t("footer.gitter") }}</a>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
@import "../assets/styles/mixins";

footer {
  display: flex;
  justify-content: space-between;
  padding: 0 $header-padding-side;
  align-items: center;
  z-index: 1;

  box-sizing: border-box;
  min-height: 60px;

  @include tablet {
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
  }
}

nav.nav-right {
  @include tablet {
    margin-top: 15px;
  }
}

nav a {
  color: $color-text-secondary;

  & + a {
    margin-left: 30px;
  }
}

nav a:hover,
nav a:focus {
  color: $color-text;
  outline: none;
}
</style>
