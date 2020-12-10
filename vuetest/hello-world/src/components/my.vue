<template>
  <div id="my">
	<h2>{{title}}</h2>
	<div v-on:click="x=x+1;message=my[x%2];">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'My',
  data() {
        return{
                x:0,
            	my:['有朋自远方来','好人一生平安'],
            	title: '名言',
              message: '有朋自远方来'
        }

  }
}
</script>

<style>

</style>
