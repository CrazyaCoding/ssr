<template>
	<div id="app">
		<span>hello wolrd</span>
		<div v-show="show">我是否显示</div>
		<button @click="show=!show">按钮</button>
		<div>
			<router-link to="/home">home</router-link>
			<router-link to="/list">list</router-link>
			<router-link to="/detail">detail</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: true
		}
	}
}
</script>