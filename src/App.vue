<template>
	<div id="container" class="h-screen w-screen">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
 

export default {
  name: 'App',
	components: {
    Header,
    Home,
	},
  
	data: () => {
		return {
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
