<template>
  <div class="absolute">
    <ul class="flex flex-col justify-center items-start p-4">
      <li>Menú</li>
      <li>Contáctanos</li>
      <li>quienes somos</li>
      <li>iniciar sesión</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavigationMobile",
};
</script>
<style scoped>
ul li {
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: white;
      padding: 2px 10px;
      margin: 5px;
}
ul li:hover {
  color: var(--orange) !important;
  font-weight: 700;
}
</style>
