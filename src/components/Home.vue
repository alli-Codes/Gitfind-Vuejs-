<template>
  <div id="homepage" class="flex flex-col grow h-96 px-4">
    <section id="search__section" class="my-8 mb-10 flex justify-center ">
      <div id="search__container" class="flex justify-between items-stretch flex-row-reverse h-11 w-full rounded bg-white">
        <box-icon name="search" color="gray" class="self-center mx-4" />
        <input class=" bg-transparent w-11/12 px-8 outline-none font-sans" placeholder="Find Developers">
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
      <div id="user__info" class="flex justify-evenly">
        <a class="flex py-1 px-2 rounded text-sm bg-a-blue text-white font-semibold"><p class="text-a-green pr-1">{{this.userData.follows}}</p> Follows</a>
        <a class="flex py-1 px-2 rounded text-sm bg-a-blue text-white font-semibold"><p class="text-a-green pr-1">8 </p>Following</a>
        <a class="flex py-1 px-2 rounded text-sm bg-a-blue text-white font-semibold"><p class="text-a-green pr-1">11</p> Repos</a>
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

    data(){
      return{
        userData:{
          follows: "2 ",
        }
      }
    }
    
  }
</script>

<style scoped>
  #search__container{
    border: 2px solid #00F0FF;
  }
  input::placeholder{
    font-size: 13px;
  }
</style>