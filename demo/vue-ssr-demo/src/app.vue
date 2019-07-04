<template>
	<div>
		<span>hello wolrd</span>
		<div v-show="show">我是否显示</div>
		<button @click="show=!show">按钮</button>
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