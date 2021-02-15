<template>
  <g-link :class="className ? className : ''" :target="blank ? '_blank' : '_self'" :to="link" class="link">
    <span><slot></slot></span>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16pt" height="16pt" viewBox="0 0 16 16" version="1.1">
      <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;;fill-opacity:1;" d="M 8 0 C 3.582031 0 0 3.582031 0 8 C 0 12.417969 3.582031 16 8 16 C 12.417969 16 16 12.417969 16 8 C 16 3.582031 12.417969 0 8 0 Z M 7.015625 12.503906 L 6.265625 11.757812 L 10.015625 8 L 6.265625 4.242188 L 7.015625 3.496094 L 11.503906 8 Z M 7.015625 12.503906 "/>
      </g>
    </svg>
  </g-link>
</template>
<script>
export default {
  props: ['link', 'blank', 'className'],
}
</script>

<style lang="scss">
@import "../../assets/scss/variables";
.link {
  display: flex;
  align-items: center;
  color: $accent;
  transition: all .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
  &:hover {
    svg {
      transform: translateX(6px);
      fill: white;
    }
  }
  svg {
    fill: $accent;
    margin-top: 2px;
    width: 14px;
    transition: all .6s;
  }
}
.link:hover {
  color: white;
}
.link.link--reverse {
  display: flex;
  align-items: center;
}
.link.link--reverse span {
  order: 1;
  margin-right: 0;
  margin-left: 8px;
}
.link.link--reverse i {
  transition: all .3s;
}
.link span {
  display: inline-block;
  margin-right: 10px;
  line-height: 1;
}
</style>
