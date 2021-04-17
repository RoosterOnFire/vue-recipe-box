<template>
  <ul>
    <li
      style="cursor: pointer"
      v-for="(name, index) in names"
      :key="index"
      :id="index"
    >
      {{ name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "NameList",
  props: {
    names: Array,
  },
};
</script>
