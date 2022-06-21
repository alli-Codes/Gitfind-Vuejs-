<template>
	<div id="container" class="flex flex-col h-screen w-screen">
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
@import url('https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@100;200;300;400;500;600;700;800&family=Lato:ital,wght@0,100;0,300;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
#app {
	font-family: 'Lato', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}


</style>
