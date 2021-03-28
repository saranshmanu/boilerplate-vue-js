/* eslint-disable no-unused-vars */
import { getTopHeadlines } from '../api/articles';

const state = () => ({
	articles: []
});

const getters = {
	articles: (state, getters, rootState) => {
		const articles = state.articles;
		return articles;
	}
};

const actions = {
	async getArticles({ commit, state }) {
		const headlines = await getTopHeadlines();
		commit('receivedHeadlines', headlines);
	}
};

const mutations = {
	receivedHeadlines(state, headlines) {
		state.articles = headlines;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
