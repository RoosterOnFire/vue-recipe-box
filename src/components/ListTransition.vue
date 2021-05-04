<template>
  <transition-group tag="ul" name="list">
    <slot />
  </transition-group>
</template>

<style>
.list-enter-active,
.list-leave-active {
  @apply transition ease-linear;
}

.list-enter-from,
.list-leave-to {
  @apply opacity-0;
}

.list-item-enter-to,
.list-item-leave-form {
  @apply opacity-100;
}

.list-item-move {
  @apply transition-opacity;
}
</style>
