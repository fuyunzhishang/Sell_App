import Vue from 'vue';
import Vuex from 'vuex';
import food from 'food';

Vue.use(Vuex);

const sotre = new Vuex.Store({
    modules: {
        food
    }
});

export default store