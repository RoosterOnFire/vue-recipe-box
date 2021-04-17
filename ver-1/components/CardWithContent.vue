<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWithContent",
};
</script>
