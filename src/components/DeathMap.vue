<template>
  <div class="row mt-3">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">Total Death Worldwide <span class="text-danger">{{ total_deaths }} </span></h4>
          <l-map :zoom="map_data.zoom" :center="map_data.center" style="height: 95vh">
            <l-tile-layer :url="map_data.url" :attribution="map_data.attribution"></l-tile-layer>
            <l-marker
              v-for="(death, index) in deaths"
              :key="index"
              :lat-lng="latLng(death.lat, death.long)"
            >

            <l-icon
              :icon-size="iconSize"
              :icon-url="icon"
            >
            
            </l-icon>
            </l-marker>
          </l-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import L from 'leaflet';
import { LIcon } from 'vue2-leaflet'
import covid from '../assets/marker.png'

export default {
  name: "DeathMap",
  components: {
    LIcon
  },
  data() {
    return {
      deaths: [],
      total_deaths: '',
      map_data: {
        zoom: 3,
        center: L.latLng(0.000000, 0.000000),
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        url:
          "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
        marker: L.latLng(-34.0, 20.0),
        icon: covid,
        iconSize: [5,5]
      }
    };
  },
  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    }
  },
  mounted() {
    axios.get("https://covid19.mathdro.id/api/deaths").then(response => {
      this.deaths = response.data;
      
    });

    axios.get("https://covid19.mathdro.id/api").then(response => {
      this.total_deaths = response.data.deaths.value
    });
  }
};
</script>
