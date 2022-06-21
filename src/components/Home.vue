<template>
  <div id="homepage" class="bg-red-400 flex flex-col grow h-96">
    <section id="search__section" class="my-4 flex justify-center bg-green-300">
      <div id="search__container" class="flex justify-between items-center flex-row-reverse w-full bg-blue-100">
        <box-icon name="search" />
        <input class="h-8 w-11/12">
      </div>
    </section>

    <section id="user__section">
      <div id="user__description">
        <div id="user__image"></div>
        <div id="user__name">
          <h4>Octocat</h4>
          <p>The Octocat</p>
        </div>
      </div>
      <div id="user__bio">
        <p>Hello, I'm from Github.</p>
      </div>
      <div id="user__info">
        
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