<template>
	<div id="container" class="h-screen w-screen">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home'

export default {
	components: {
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
