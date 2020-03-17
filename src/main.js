import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleCharts from 'vue-google-charts'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import moment from 'moment'


Vue.prototype.moment = moment
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-danger-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-danger-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.use(VueGoogleCharts)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')