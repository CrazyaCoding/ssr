<template>
	<div>
		<p>我是list</p>
		<div v-for='order in orders' :key='order.id'>
			<p>{{order.content}}</p>
      	</div>
	</div>
</template>

<script>
export default {
	asyncData({store, route}) {
		return store.dispatch('getOrders')
	},
	computed: {
		orders() {
			return this.$store.state.orders
		}
	}
}
</script>