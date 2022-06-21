<template>
  <div id="homepage" class="flex flex-col grow h-96 px-4">
    <section id="search__section" class="my-8 flex justify-center ">
      <div id="search__container" class="flex justify-between items-stretch flex-row-reverse h-11 w-full rounded bg-white">
        <box-icon name="search" color="gray" class="self-center mx-4" />
        <input class=" bg-transparent w-11/12 px-8 outline-none appearance-none" placeholder="Find Developers">
      </div>
    </section>

    <section id="user__section" class="flex flex-col">
      <div id="user__description" class="flex items-center">
        <div id="user__image" class=" h-24 w-24 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/583231?v=4" class=" object-cover rounded-full">
        </div>
        <div id="user__name" class="mx-8 text-left">
          <h4 class="text-xl font-regular font-sans">Octocat</h4>
          <p class="text-xs">The Octocat</p>
        </div>
      </div>
      <div id="user__bio" class="self-start my-8 ml-2">
        <p>Hello, I'm from Github.</p>
      </div>
      <div id="user__info" class="flex">
        <a class="flex mx-4 bg-green-500"><p>5</p> Follows</a>
        <a class="flex mx-4 bg-green-500"><p>8</p> Following</a>
        <a class="flex mx-4 bg-green-500"><p>11</p> Repos</a>
      </div>

      <div id="user__links">
        
      </div>
    </section>
  </div>
</template>

<script>
  import 'boxicons'
  export default {
    name: 'Home',
    
  }
</script>

<style scoped>
  #search__container{
    border: 1px solid #00d99c;
  }
</style>