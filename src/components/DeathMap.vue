<template>
  <div class="death-map">
      <l-map
        :zoom="map_data.zoom"
        :center="map_data.center"
        style="height: 90vh"
      >
        <l-tile-layer
          :url="map_data.url"
          :attribution="map_data.attribution"
        ></l-tile-layer>
        <l-marker
          v-for="(death, index) in deaths"
          :key="index"
          :lat-lng="latLng(death.lat, death.long)"
        >
        </l-marker>
      </l-map>
    </div>
</template>

<script>
import axios from "axios";
import L from "leaflet";

export default {
  name: "DeathMap",
  components: {},
  data() {
    return {
      countries: [],
      deaths: [],
      total_deaths: "",
      map_data: {
        zoom: 3,
        center: L.latLng(0.0, 0.0),
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
        marker: L.latLng(-34.0, 20.0)
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
      this.total_deaths = response.data.deaths.value;
    });
  }
};
</script>
