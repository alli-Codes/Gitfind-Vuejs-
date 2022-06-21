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
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  
#app {
	font-family: 'Lato', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
