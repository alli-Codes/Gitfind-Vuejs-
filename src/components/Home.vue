<template>
  <div id="homepage" class="h-96 px-4">
    <section id="search__section" class="h-32 flex justify-center items-center">
      <div id="search__container" class="flex justify-between items-stretch flex-row-reverse h-11 w-full rounded bg-white">
        <box-icon name="search" color="gray" class="self-center mx-4" />
        <input class=" bg-transparent w-11/12 px-8 outline-none font-sans" placeholder="Find Developers">
      </div>
    </section>

     <section id="user__section" class="">
      <div id="user__description" class="flex items-center h-32">
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
      <div id="user__info" class="flex justify-between h-10">
        <a class="flex self-center p-2 rounded text-sm bg-a-blue text-white font-semibold"><p class="text-a-green pr-1">{{this.userData.follows}}</p> Follows</a>
        <a class="flex self-center p-2 rounded text-sm bg-a-blue text-white font-semibold"><p class="text-a-green pr-1">8 </p>Following</a>
        <a class="flex self-center p-2 rounded text-sm bg-a-blue text-white font-semibold"><p class="text-a-green pr-1">11</p> Repos</a>
      </div>

      <div id="user__links" class="flex flex-col mt-4">
        <div id="link" class="flex items-center py-2">
          <box-icon type="solid" name="map" color="#00316B" /> <p>Location</p>
        </div>

        <div id="link" class="flex items-center py-2 text-xs">
          <box-icon name="link" color="#00316B" /> <p class="font-semibold text-sm">Location</p>
        </div>

        <div id="link" class="flex items-center py-2">
          <box-icon type="logo" name="twitter" color="#00316B" /> <p>Location</p>
        </div>

        <div id="link" class="flex items-center py-2">
          <box-icon type="solid" name="buildings" color="#00316B" /> <p>Location</p>
        </div>
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