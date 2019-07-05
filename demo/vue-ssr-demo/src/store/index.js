import Vue from 'vue';
import Vuex from 'vuex'
import { Order } from './../api/index';
Vue.use(Vuex);

export function createStore() {
	return new Vuex.Store({
		state: {
			orders: []
		  },
		mutations: {
			setOrders(state, orders) {
				state.orders = orders
			}
		},
		actions: {
			async getOrders({ commit }) {
				let orders = await Order.all()  // http 的api
				commit('setOrders', orders)
			}
		}
	})
}