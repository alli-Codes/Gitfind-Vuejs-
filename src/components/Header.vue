<template>
  <div id="header" class="bg-gray-100 h-16 px-4 flex justify-between items-center">
    <Logo />
    <div id="themeMode" class="flex items-center">
      <box-icon name='toggle-left' class="mx-2" />
      <p class="text-xs font-semibold">Light</p>
    </div>
  </div>
</template>

<script>
  import Logo from './Logo'
  import 'boxicons'
  export default {
    name: "Header",
    components: {
      Logo
    }
  }
</script>