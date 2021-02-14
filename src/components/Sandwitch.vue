<template>
  <div class="sandwitch-wrap">
    <div class="sandwitch">
      <div class="sandwitch__line sandwitch__line--top"></div>
      <div class="sandwitch__line sandwitch__line--middle"></div>
      <div class="sandwitch__line sandwitch__line--bottom"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/scss/variables";
.sandwitch-wrap {
  position: absolute;
  top: 23px;
  right: 30px;
  display: none;
  padding: 18px 10px;
  border-radius: 3px;
  z-index: 1001;
}
@media screen and (max-width: 1200px) {
  .sandwitch-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 500px) {
  .sandwitch-wrap {
    right: 0;
  }
}
.sandwitch {
  position: relative;
  display: block;
  width: 23px;
  height: 14px;
  cursor: pointer;
}
.sandwitch--active .sandwitch__line--top {
  top: 6px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sandwitch--active .sandwitch__line--middle {
  opacity: 0;
}
.sandwitch--active .sandwitch__line--bottom {
  top: 6px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.sandwitch__line {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  transition: all linear 0.1s;
  background-color: $social_color;
}
.sandwitch__line--top {
  top: 0;
}
.sandwitch__line--middle {
  top: 6px;
}
.sandwitch__line--bottom {
  top: 12px;
}
</style>
