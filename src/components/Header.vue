<template>
  <div id="header" class="bg-gray-100 h-16 px-4 flex justify-between items-center">
    <Logo />
    <div id="themeMode" class="flex items-center">
      <box-icon :name="name" :type="type" class="mx-2" @click="switchToggler" />
      <p class="text-xs font-semibold">{{modeName}}</p>
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
    },

    data(){
      return{
        name: 'toggle-left',
        type: 'regular',
        isToggled: false,
        modeName: 'Light'
      }
    },
    
    methods: {
      switchToggler(){
        if(!this.isToggled) {
          this.name = 'toggle-right'
          this.type = 'solid'
          this.isToggled = true
          this.modeName = 'Dark'
        }else {
          this.name = 'toggle-left'
          this.type = 'regular'
          this.isToggled = false
          this.modeName = 'Light'
        }
      }
    }
  }
</script>