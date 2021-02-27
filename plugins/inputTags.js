import InputTag from 'vue-input-tag';
import Vue from 'vue';

if (process.client) {
  Vue.component('InputTag', InputTag);
}
